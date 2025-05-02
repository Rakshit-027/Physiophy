// app/components/SupabaseClient/SupabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zlmsmdibvnnhxthvdhhf.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbXNtZGlidm5uaHh0aHZkaGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2NjE5MjAsImV4cCI6MjA1NDIzNzkyMH0.Hr3Hkp8nPmwlfHODkBtAt1eG7kCgLUFqCV59N7VxLlI";

export const supabase = createClient(supabaseUrl, supabaseKey);