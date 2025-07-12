import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for API routes
export const createServerSupabaseClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

// Types for our submissions table
export interface SupabaseSubmission {
  id: string
  submitted_at: string
  email_address: string
  timeframe?: string
  demo_type?: string
  other_demo_type?: string
  street_address?: string
  city?: string
  state?: string
  zip_code?: string
  square_footage?: string
  project_location?: string
  project_description?: string
  first_name?: string
  last_name?: string
  company_name?: string
  phone_number?: string
  uploaded_files?: string[]
  ai_estimate?: string
  created_at: string
  updated_at: string
}

// Transform Supabase submission to match Tally format for CRM compatibility
export function transformSupabaseToTally(submission: SupabaseSubmission) {
  return {
    id: submission.id,
    "Submitted at": submission.submitted_at,
    "Email Address": submission.email_address || "",
    "When Do You Need This Done?": submission.timeframe || "",
    "What Type of Demo?": submission.demo_type || "",
    "Other Demo Type": submission.other_demo_type || "",
    "Street Address": submission.street_address || "",
    City: submission.city || "",
    State: submission.state || "",
    "Zip Code": submission.zip_code || "",
    "Square Footage": submission.square_footage || "",
    "Project Location": submission.project_location || "",
    "Project Description": submission.project_description || "",
    "First Name": submission.first_name || "",
    "Last Name": submission.last_name || "",
    "Upload Photos or Plans": submission.uploaded_files && submission.uploaded_files.length > 0 ? submission.uploaded_files.join(", ") : "",
    "Company Name (optional)": submission.company_name || "",
    "Phone Number": submission.phone_number || "",
    "AI Estimate": submission.ai_estimate || "",
  }
}
