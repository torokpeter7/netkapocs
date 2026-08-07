// ---------------------------------------------------------
// Supabase kapcsolat beállítása
// Töltsd ki a saját projekted adataival:
// Supabase Dashboard → Project Settings → API
// ---------------------------------------------------------
const SUPABASE_URL = "https://vdoqjgpproivhyxrbcoa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb3FqZ3Bwcm9pdmh5eHJiY29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMTgxNDYsImV4cCI6MjEwMTY5NDE0Nn0.WajHxqgRrcgbBBqCmRQ2Bl5opi4wNK17rlblySXUjTY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
