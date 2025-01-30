import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://dlntvxmhtbmwnkvzliyz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsbnR2eG1odGJtd25rdnpsaXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTM4MzksImV4cCI6MjA1MzgyOTgzOX0.ze0NuZVhtdMwdW-2L0Qq2fLBe_Ty-QMXxMtFabDzH5I'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;