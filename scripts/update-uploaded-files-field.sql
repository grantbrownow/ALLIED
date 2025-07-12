-- Update the uploaded_files field to use TEXT[] instead of JSONB
-- This allows storing file URLs as an array of strings

-- First, drop the existing column if it exists
ALTER TABLE IF EXISTS submissions DROP COLUMN IF EXISTS uploaded_files;

-- Add the new column with the correct type
ALTER TABLE submissions ADD COLUMN uploaded_files TEXT[] DEFAULT '{}';

-- Create an index on the uploaded_files array for better performance
CREATE INDEX IF NOT EXISTS idx_submissions_uploaded_files ON submissions USING GIN (uploaded_files); 