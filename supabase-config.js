// ---------------------------------------------------------
// Supabase kapcsolat beállítása
// Töltsd ki a saját projekted adataival:
// Supabase Dashboard → Project Settings → API
// ---------------------------------------------------------
const SUPABASE_URL = "https://supabase.netkapocs.torokhomelab.cloud";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzg2MTQ2MzE5LCJleHAiOjE5NDM4MjYzMTl9.ZFWTXIv__Ptu-ajCx-Vql0RVfeJWQ-9sdwDBhgMuwEY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
