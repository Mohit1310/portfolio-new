import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const MAX_TEXT = 2000;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and description/query are required.' },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 320 || message.length > MAX_TEXT) {
      return NextResponse.json(
        { error: 'Input exceeds allowed length.' },
        { status: 400 }
      );
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    // Placeholder server handling. Replace this with email/DB integration.
    console.log('Contact form submission', {
      name,
      email,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to process your request.' },
      { status: 500 }
    );
  }
}
