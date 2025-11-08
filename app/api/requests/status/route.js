import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { id, status, email, title } = await request.json();

    // ✅ 1. Update request status in Supabase
    const { error } = await supabase
      .from("requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }

    // ✅ 2. Send Email using Resend
    await resend.emails.send({
      from: "Industrial Visit <no-reply@adebayodv.com.ng>",
      to: email,
      subject: `Your Visit Request Has Been ${status}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Visit Request Update</h2>
          <p>Your request for <strong>${title}</strong> has been <strong>${status}</strong>.</p>
          <p>If you have any questions, feel free to reply to this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Server error: " + err.message,
    });
  }
}
