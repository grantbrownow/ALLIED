import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No files provided" },
        { status: 400 }
      )
    }

    const supabase = createServerSupabaseClient()
    const uploadedUrls: string[] = []

    for (const file of files) {
      // Generate a unique filename to prevent conflicts
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 15)
      const fileExtension = file.name.split('.').pop()
      const fileName = `${timestamp}-${randomString}.${fileExtension}`

      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('submission-files')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        console.error("Error uploading file:", error)
        return NextResponse.json(
          { success: false, error: `Failed to upload ${file.name}: ${error.message}` },
          { status: 500 }
        )
      }

      // Get the public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('submission-files')
        .getPublicUrl(fileName)

      uploadedUrls.push(urlData.publicUrl)
    }

    return NextResponse.json({
      success: true,
      urls: uploadedUrls,
      message: "Files uploaded successfully"
    })

  } catch (error: any) {
    console.error("Error in file upload:", error)
    return NextResponse.json(
      { success: false, error: error.message || "Failed to upload files" },
      { status: 500 }
    )
  }
} 