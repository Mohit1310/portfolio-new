import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
	let body: { name: string; email: string; message: string };

	try {
		body = await req.json();
	} catch (err) {
		const message =
			err instanceof Error ? err.message : "Invalid JSON in request body";
		return NextResponse.json(
			{ success: false, error: message },
			{ status: 400 },
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: "Mohit Dayma",
			replyTo: body.email,
			to: process.env.SMTP_USER,
			subject: "Portfolio Message",
			html: `
				<p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
				<p><strong>Message:</strong><br/>${escapeHtml(body.message)}</p>
			`,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		const message =
			err instanceof Error ? err.message : "Failed to send email";
		return NextResponse.json(
			{ success: false, error: message },
			{ status: 500 },
		);
	}
}