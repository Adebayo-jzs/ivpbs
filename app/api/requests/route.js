import { createClient } from "@/lib/supabaseServer";

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

export async function POST(req) {
  const supabase = createClient();
  const body = await req.json();

  const { name, email, date, department } = body;

  const { data, error } = await supabase
    .from("requests")
    .insert([{ name, email, date, department }])
    .select();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ message: "Request added successfully", data });
}
