'use client';

import { FormEvent, useState } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="grid-shell overflow-hidden p-7 md:p-10">
          <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-kicker">Let&apos;s Build</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
                Ready to redesign your product edge?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                If you need a frontend that is fast, conversion-focused, and
                visually distinct, I can help with design execution and
                implementation from concept to launch.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                Send project details with the form
                <ArrowUpRightIcon className="size-4" />
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-[color:var(--accent-cyan)]"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Mail
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-[color:var(--accent-cyan)]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Description / Query
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-[color:var(--accent-cyan)]"
                  placeholder="Tell me about your project or query"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex h-11 items-center rounded-full bg-[color:var(--accent-cyan)] px-6 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Submit Query'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-emerald-300">
                  Thanks, your message was submitted.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-rose-300">
                  Submission failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
