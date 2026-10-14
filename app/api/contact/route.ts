import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

/**
 * Contact intake endpoint (API-ready).
 *
 * - Validates the payload server-side.
 * - If CONTACT_ENDPOINT is configured (Formspree / custom webhook URL),
 *   the message is forwarded there and `delivered: true` is returned.
 * - Otherwise the message is accepted + logged and `delivered: false`
 *   is returned so the UI never claims an email was sent.
 *
 * To send real email via Resend: install `resend`, set RESEND_API_KEY +
 * CONTACT_TO_EMAIL, and replace the log branch below.
 */
export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: 'All fields are required.' }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: 'Message is too short.' }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_ENDPOINT;
  if (endpoint) {
    try {
      const fwd = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!fwd.ok) throw new Error(`Upstream responded ${fwd.status}`);
      return NextResponse.json({ ok: true, delivered: true });
    } catch (e) {
      console.error('[contact] forward failed:', e);
      return NextResponse.json({ ok: false, error: 'Could not deliver your message. Please try again later.' }, { status: 502 });
    }
  }

  // No provider configured: accept + log (visible in balance / Vercel logs).
  console.log('[contact] message received (no CONTACT_ENDPOINT configured):', { name, email, phone, message });
  return NextResponse.json({ ok: true, delivered: false });
}
