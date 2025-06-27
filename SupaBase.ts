import { createClient } from "@supabase/supabase-js"

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaGNieG9uYWZua3dmbWNxcnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NjYyMDQsImV4cCI6MjA2NjU0MjIwNH0.AQcxMmqUtHgHqkNiRrj5VuAJ0die7QT4UYS81sH7eGU'
const SUPABASE_URL = "https://gshcbxonafnkwfmcqrvm.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
      schema: 'public',
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    }
  })

export default supabase