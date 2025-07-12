# File Upload Setup Instructions

This document explains how to set up file uploads for the CRM system.

## Problem Fixed

The "uploaded files" field in the CRM was not working because:
1. Files were only being stored as file names, not actual file content
2. No file storage system was implemented
3. The database field was not properly configured for storing file URLs

## Solution Implemented

1. **Created a file upload API endpoint** (`/api/upload/route.ts`)
2. **Modified the forms** to upload files to Supabase Storage before saving submissions
3. **Updated the database schema** to store file URLs as an array of strings
4. **Created Supabase Storage bucket** for file storage

## Setup Steps

### 1. Run Database Migration

Execute the following SQL in your Supabase SQL editor:

```sql
-- Update the uploaded_files field to use TEXT[] instead of JSONB
ALTER TABLE IF EXISTS submissions DROP COLUMN IF EXISTS uploaded_files;
ALTER TABLE submissions ADD COLUMN uploaded_files TEXT[] DEFAULT '{}';
CREATE INDEX IF NOT EXISTS idx_submissions_uploaded_files ON submissions USING GIN (uploaded_files);
```

### 2. Create Storage Bucket

Execute the following SQL in your Supabase SQL editor:

```sql
-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'submission-files',
  'submission-files',
  true,
  52428800, -- 50MB file size limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'image/svg+xml']
) ON CONFLICT (id) DO NOTHING;

-- Create policies for anonymous access
CREATE POLICY "Allow anonymous uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'submission-files');

CREATE POLICY "Allow public access to submission files" ON storage.objects
  FOR SELECT USING (bucket_id = 'submission-files');

CREATE POLICY "Allow anonymous updates" ON storage.objects
  FOR UPDATE USING (bucket_id = 'submission-files');

CREATE POLICY "Allow anonymous deletes" ON storage.objects
  FOR DELETE USING (bucket_id = 'submission-files');
```

### 3. Environment Variables

Make sure you have the following environment variables set in your `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## How It Works

1. **File Selection**: Users select files using the file input in the forms
2. **File Upload**: When the form is submitted, files are first uploaded to Supabase Storage via `/api/upload`
3. **URL Storage**: The returned file URLs are stored in the `uploaded_files` field in the database
4. **CRM Display**: The CRM displays the files as clickable links that open in a new tab

## File Types Supported

- Images: JPEG, PNG, GIF, WebP, SVG
- Documents: PDF
- Maximum file size: 50MB per file

## Security Considerations

- Files are stored in a public bucket for easy access
- File names are randomized to prevent conflicts
- File size limits are enforced
- Only specific file types are allowed

## Testing

1. Fill out a quote form and upload some files
2. Submit the form
3. Check the CRM dashboard to see if the files appear as clickable links
4. Click the links to verify they open the uploaded files

## Troubleshooting

If files are not appearing in the CRM:

1. Check the browser console for upload errors
2. Verify the storage bucket exists in Supabase
3. Check that the storage policies are correctly set
4. Ensure the database migration was run successfully
5. Verify environment variables are set correctly 