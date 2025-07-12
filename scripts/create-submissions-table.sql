-- Create the submissions table to replace Tally integration
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_address TEXT NOT NULL,
  timeframe TEXT,
  demo_type TEXT,
  other_demo_type TEXT,
  street_address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  square_footage TEXT,
  project_location TEXT, -- Full address for compatibility
  project_description TEXT,
  first_name TEXT,
  last_name TEXT,
  company_name TEXT,
  phone_number TEXT,
  uploaded_files TEXT[] DEFAULT '{}',
  ai_estimate TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on submitted_at for faster queries
CREATE INDEX IF NOT EXISTS idx_submissions_submitted_at ON submissions(submitted_at DESC);

-- Create an index on email for faster searches
CREATE INDEX IF NOT EXISTS idx_submissions_email ON submissions(email_address);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (adjust as needed for your security requirements)
CREATE POLICY "Allow all operations on submissions" ON submissions
  FOR ALL USING (true);
