import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client — lazy initialisation.
 *
 * Returns null if credentials are not yet configured,
 * instead of throwing and crashing the API route.
 * The API route checks for null and returns a clear error.
 */
export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (
    !url || url === 'https://your-project-id.supabase.co' ||
    !key || key === 'your-service-role-secret-key'
  ) {
    return null;  // not configured yet — caller handles this gracefully
  }

  return createClient(url, key);
}
