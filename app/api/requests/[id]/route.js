import { createClient } from "@/lib/supabaseServer";

export async function DELETE(req, { params }) {
  const supabase = createClient();
  const { id } = params;

  const { error } = await supabase.from("requests").delete().eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ message: "Request deleted successfully" });
}

export async function PUT(req, { params }) {
  const supabase = createClient();
  const { id } = params;
  const body = await req.json();

  const { status } = body; // e.g. accepted, rejected, etc.
  const { error } = await supabase
    .from("requests")
    .update({ status })
    .eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ message: "Status updated" });
}
