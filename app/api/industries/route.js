import { connectDB } from "@/lib/dbConnect";
import Industries from "@/models/Industries";

export async function GET(){
    await connectDB;
    const orgs = await Industries.find().sort({ createdAt: -1 });
    return Response.json(orgs);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newOrg = await Industries.create(body);
  return Response.json(newOrg);
}