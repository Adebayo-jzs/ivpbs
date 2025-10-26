// let submissions = []; // Temporary storage (resets on server restart)

// export async function POST(req) {
//   const data = await req.json();

//   // add timestamps
//   const timestamp = new Date().toISOString();

//   const submission = {...data, createdAt:timestamp };
//   submissions.push(submission);

//   return Response.json({ message: "Form submitted successfully" });
// }

// export async function GET() {
//   return Response.json(submissions);
// }


// import { connectDB } from "@/lib/mongodb";
// import Submission from "@/models/Submission";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const data = await req.json();
//     const submission = await Submission.create(data);
//     return Response.json(submission);
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Failed to save data" }, { status: 500 });
//   }
// }

// export async function GET() {
//   try {
//     await connectDB();
//     const submissions = await Submission.find().sort({ createdAt: -1 }); // newest first
//     return Response.json(submissions);
//   } catch (error) {
//     return Response.json({ error: "Failed to fetch data" }, { status: 500 });
//   }
// }




// app/api/submit/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// Schema
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
    await mongoose.connect(MONGO_URI);

    const body = await req.json();
    const submission = new Submission(body);
    await submission.save();

    return NextResponse.json({ message: "Submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await mongoose.connect(MONGO_URI);
    const submissions = await Submission.find().sort({ createdAt: -1 });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
