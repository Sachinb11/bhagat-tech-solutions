import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export async function POST(request) {
  try {
    /* Parse request body safely */
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { name, company, rating, message } = body;

    /* Validation */
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!company?.trim()) {
      return NextResponse.json({ error: "Company is required." }, { status: 400 });
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    /* Supabase client */
    const supabase = getSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
        },
        { status: 500 }
      );
    }

    /* Insert review */
    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          name: name.trim(),
          company: company.trim(),
          rating: Number(rating),
          message: message.trim(),
          approved: false
        }
      ])
      .select("id, submitted_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Database error. Could not save review." },
        { status: 500 }
      );
    }

    console.log(`✅ Review saved — id: ${data.id}`);

    return NextResponse.json(
      {
        success: true,
        id: data.id,
        message: "Review submitted successfully."
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("API error:", err);

    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}


/* Disable GET requests */
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405 }
  );
}