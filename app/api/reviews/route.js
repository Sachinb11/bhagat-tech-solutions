import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

/**
 * POST /api/reviews
 *
 * Saves a client review to Supabase with approved = false.
 * If Supabase credentials are not yet configured, returns a
 * clear setup message instead of crashing.
 *
 * ── Supabase table (run once in SQL Editor) ────────────────
 * create table reviews (
 *   id           bigint generated always as identity primary key,
 *   name         text        not null,
 *   company      text        not null,
 *   rating       smallint    not null check (rating between 1 and 5),
 *   message      text        not null,
 *   approved     boolean     not null default false,
 *   submitted_at timestamptz not null default now()
 * );
 * ──────────────────────────────────────────────────────────
 */
export async function POST(request) {
  try {
    /* ── Parse body ── */
    const body = await request.json();
    const { name, company, rating, message } = body;

    /* ── Validate ── */
    if (!name?.trim())    return NextResponse.json({ error: 'Name is required.'    }, { status: 400 });
    if (!company?.trim()) return NextResponse.json({ error: 'Company is required.' }, { status: 400 });
    if (!message?.trim()) return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5.' }, { status: 400 });
    }

    /* ── Check Supabase is configured ── */
    const supabase = getSupabaseClient();

    if (!supabase) {
      // Credentials not set yet — return a clear actionable message
      return NextResponse.json(
        {
          error:
            'Supabase is not configured yet. Open .env.local, add your ' +
            'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then restart the server.',
        },
        { status: 503 }
      );
    }

    /* ── Insert into Supabase ── */
    const { data, error } = await supabase
  .from('reviews')
  .insert([{
    name: name.trim(),
    company: company.trim(),
    rating: Number(rating),
    review: message.trim(), // change here
    approved: false,
  }])
  .select('id, submitted_at')
  .single();

    if (error) {
      console.error('Supabase insert error:', error.message);

      /* Common mistake: table doesn't exist yet */
      if (error.message.includes('relation "reviews" does not exist')) {
        return NextResponse.json(
          {
            error:
              'The "reviews" table does not exist in Supabase yet. ' +
              'Go to Supabase → SQL Editor and run the CREATE TABLE query from the README.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to save your review. Please try again.' },
        { status: 500 }
      );
    }

    console.log(`✅ Review saved — id: ${data.id}, from: ${name} (${company})`);

    return NextResponse.json(
      {
        success: true,
        message: 'Review received. It will appear on the site once approved.',
        id:      data.id,
      },
      { status: 201 }
    );

  } catch (err) {
    console.error('API /api/reviews error:', err);
    return NextResponse.json(
      { error: 'Unexpected error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
