'use client';

import { FormEvent, useState } from 'react';

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
    <section id="contact" className="border-t border-(--line)">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Let&apos;s build something good together.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-(--text-muted)">
              If you need a frontend that is fast, conversion-focused, and
              visually distinct, I can help with design execution and
              implementation from concept to launch.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="label">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                placeholder="Your name"
                className="input mt-2"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="label">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="input mt-2"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or query"
                className="input mt-2 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-(--text-muted)">
                Thanks, your message was submitted.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-(--text-muted)">
                Submission failed. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
