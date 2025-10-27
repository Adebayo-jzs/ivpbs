import { NextResponse } from "next/server";
import { Resend } from "resend";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  date: String,
  createdAt: { type: Date, default: Date.now },
});

const Submission =
  mongoose.models.Submission || mongoose.model("Submission", submissionSchema);

export async function POST(req) {
  try {
    await connectDB();
    const { id, action } = await req.json(); // action = "accepted" or "declined"

    const submission = await Submission.findById(id);
    if (!submission) throw new Error("Submission not found");

    submission.status = action;
    await submission.save();

    // Send email
    await resend.emails.send({
      from: "Industrial Visit <no-reply@yourdomain.com>",
      to: submission.email,
      subject:
        action === "accepted"
          ? "Your Industrial Visit Has Been Accepted 🎉"
          : "Your Industrial Visit Request Was Declined ❌",
      html: `
        <p>Hello ${submission.name},</p>
        <p>Your request for an industrial visit to <strong>${submission.organization}</strong> has been <strong>${action}</strong>.</p>
        <p>Date of visit: ${submission.date}</p>
        <p>Thank you for your interest!</p>
      `,
    });

    return NextResponse.json({ message: "Status updated and email sent" });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}