import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Avoid throwing at module import time which can cause a 500 from the dev server.
  // Instead log a clear message so the app still loads and the developer can fix .env.
  // eslint-disable-next-line no-console
  console.error(
    'Missing Supabase env vars. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in a .env file at project root, then restart the dev server.'
  );
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');


