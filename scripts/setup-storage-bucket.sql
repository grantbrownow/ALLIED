-- Create a storage bucket for submission files
-- This should be run in the Supabase SQL editor

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'submission-files',
  'submission-files',
  true,
  52428800, -- 50MB file size limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Create a policy to allow anonymous uploads (for public forms)
CREATE POLICY "Allow anonymous uploads" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'submission-files'
  );

-- Create a policy to allow public access to uploaded files
CREATE POLICY "Allow public access to submission files" ON storage.objects
  FOR SELECT USING (bucket_id = 'submission-files');

-- Create a policy to allow anonymous updates
CREATE POLICY "Allow anonymous updates" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'submission-files'
  );

-- Create a policy to allow anonymous deletes
CREATE POLICY "Allow anonymous deletes" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'submission-files'
  ); 