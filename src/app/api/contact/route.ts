import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	const body = await req.json();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const response = await transporter.sendMail({
		from: "Nandini Textile",
		replyTo: body.email,
		to: process.env.SMTP_USER,
		subject: "Portfolio Message",
		html: `
			<p><strong>Name:</strong> ${body.name}</p>
			<p><strong>Email:</strong> ${body.email}</p>
			<p><strong>Message:</strong><br/>${body.message}</p>
		`,
	});

	return NextResponse.json({ success: true });
}