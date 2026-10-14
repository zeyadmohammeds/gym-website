export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

export function validateContactForm(data: ContactFormData): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!data.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!data.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!PHONE_RE.test(data.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!data.message.trim()) errors.message = 'Please tell us a little about your goals.';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export type SubmitResult =
  | { ok: true; delivered: boolean }
  | { ok: false; error: string };

/**
 * API-ready submission abstraction.
 * POSTs to the internal `/api/contact` route. To send real email,
 * configure the route with Resend / Formspree / EmailJS / custom provider —
 * no form-component changes required.
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = (await res.json().catch(() => null)) as { ok?: boolean; delivered?: boolean; error?: string } | null;
    if (res.ok && json?.ok) return { ok: true, delivered: json.delivered ?? false };
    return { ok: false, error: json?.error ?? 'Submission failed. Please try again.' };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
