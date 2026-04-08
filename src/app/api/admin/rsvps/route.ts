import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const ADMIN_PASSWORD = 'linyangyangdahaoren';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get('p') !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const url = process.env.POSTGRES_URL;
  if (!url) {
    return NextResponse.json({ error: 'db not configured' }, { status: 500 });
  }

  const sql = neon(url);

  // 确保表存在（首次访问时建表）
  await sql`
    CREATE TABLE IF NOT EXISTS rsvps (
      id           SERIAL PRIMARY KEY,
      name         TEXT NOT NULL,
      count        INTEGER NOT NULL DEFAULT 0,
      message      TEXT,
      venue        TEXT NOT NULL,
      variant      TEXT NOT NULL,
      submitted_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  const rows = await sql`
    SELECT id, name, count, message, venue, variant, submitted_at
    FROM rsvps
    ORDER BY submitted_at DESC
  `;

  const stats = await sql`
    SELECT
      venue,
      COUNT(*)::int                                        AS submissions,
      COALESCE(SUM(CASE WHEN count > 0 THEN count END), 0)::int AS attendees,
      COUNT(CASE WHEN count = 0 THEN 1 END)::int          AS blessings_only
    FROM rsvps
    GROUP BY venue
  `;

  return NextResponse.json({ rows, stats });
}
