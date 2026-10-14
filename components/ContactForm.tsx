'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import {
  submitContactForm,
  validateContactForm,
  type ContactFieldErrors,
  type ContactFormData,
} from '@/lib/contact';
import { cn } from '@/lib/utils';

const initial: ContactFormData = { name: '', email: '', phone: '', message: '' };

const fields: { id: keyof ContactFormData; label: string; type: string; placeholder: string; autoComplete: string }[] = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+20 100 000 0000', autoComplete: 'tel' },
];

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initial);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const set = (id: keyof ContactFormData, value: string) => {
    setData((d) => ({ ...d, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      const first = (Object.keys(validation)[0] ?? 'name') as keyof ContactFormData;
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus('sending');
    setStatusMessage('');
    const result = await submitContactForm(data);
    if (result.ok) {
      setStatus('success');
      setStatusMessage(
        result.delivered
          ? "MESSAGE SENT. We'll get back to you soon."
          : 'MESSAGE RECEIVED. Our team will get back to you soon. (Email delivery is enabled by configuring CONTACT_ENDPOINT.)'
      );
      setData(initial);
    } else {
      setStatus('error');
      setStatusMessage(result.error);
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="border border-volt/40 bg-ink p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-volt" aria-hidden="true" />
        <p className="mt-5 font-display text-4xl tracking-wide text-paper sm:text-5xl">MESSAGE RECEIVED.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">{statusMessage}</p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setStatusMessage('');
          }}
          className="mt-6 inline-flex min-h-[48px] items-center border border-paper/30 px-6 py-3 text-[12px] font-extrabold tracking-[0.18em] text-paper hover:border-volt hover:text-volt"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  const inputCls = (id: keyof ContactFormData) =>
    cn(
      'min-h-[52px] w-full border bg-ink px-4 py-3.5 text-[16px] text-paper placeholder:text-muted/70 transition-colors focus:border-volt focus:outline-none',
      errors[id] ? 'border-red-500' : 'border-line'
    );

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form" className="border border-line bg-ink p-5 sm:p-8">
      <div className="grid gap-5">
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={`contact-${f.id}`} className="mb-2 block text-[11px] font-extrabold tracking-[0.24em] text-paper">
              {f.label.toUpperCase()} <span aria-hidden="true" className="text-volt">*</span>
            </label>
            <input
              id={`contact-${f.id}`}
              type={f.type}
              value={data[f.id]}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              aria-required="true"
              aria-invalid={Boolean(errors[f.id])}
              aria-describedby={errors[f.id] ? `contact-${f.id}-error` : undefined}
              onChange={(e) => set(f.id, e.target.value)}
              className={inputCls(f.id)}
            />
            {errors[f.id] && (
              <p id={`contact-${f.id}-error`} role="alert" className="mt-2 text-[13px] font-semibold text-red-400">
                {errors[f.id]}
              </p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-[11px] font-extrabold tracking-[0.24em] text-paper">
            MESSAGE <span aria-hidden="true" className="text-volt">*</span>
          </label>
          <textarea
            id="contact-message"
            value={data.message}
            rows={5}
            placeholder="Tell us about your goals, experience, and preferred training time…"
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            onChange={(e) => set('message', e.target.value)}
            className={cn(inputCls('message'), 'min-h-[132px] resize-y text-[16px] leading-relaxed')}
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className="mt-2 text-[13px] font-semibold text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        {status === 'error' && (
          <p role="alert" className="border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
            {statusMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-volt px-7 py-4 text-[13px] font-extrabold tracking-[0.18em] text-ink transition-all hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> SENDING…
            </>
          ) : (
            <>
              SEND MESSAGE <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
