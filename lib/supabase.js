import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// null when env vars are missing, so the site still renders with fallback data
export const supabase = url && key ? createClient(url, key) : null;

export async function fetchTable(table, orderBy = 'created_at') {
  if (!supabase) return [];
  const { data, error } = await supabase.from(table).select('*').order(orderBy, { ascending: false });
  if (error) { console.error(`[supabase] ${table}:`, error.message); return []; }
  return data ?? [];
}
