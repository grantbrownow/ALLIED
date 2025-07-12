import { NextResponse } from "next/server"
import { createServerSupabaseClient, transformSupabaseToTally } from "@/lib/supabase"

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()

    const { data: submissions, error } = await supabase
      .from("submissions")
      .select("*")
      .order("submitted_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      throw new Error(`Database error: ${error.message}`)
    }

    // Transform submissions but ensure new fields are preserved
    const transformedSubmissions =
      submissions?.map((submission) => {
        const tallyFormatted = transformSupabaseToTally(submission)
        // Add back new fields that might be stripped by the transform
        tallyFormatted.id = submission.id
        tallyFormatted.status = submission.status
        tallyFormatted.notes = submission.notes
        tallyFormatted.contacted_at = submission.contacted_at
        tallyFormatted.contacted_by = submission.contacted_by
        tallyFormatted["Wants Cash Offer"] = submission.wants_cash_offer
        return tallyFormatted
      }) || []

    return NextResponse.json({
      success: true,
      submissions: transformedSubmissions,
      count: transformedSubmissions.length,
    })
  } catch (error: any) {
    console.error("Error fetching submissions:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch submissions",
        submissions: [],
        count: 0,
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = createServerSupabaseClient()

    // Construct full address for compatibility
    const fullAddress = `${body.streetAddress}, ${body.city}, ${body.state} ${body.zipCode}`

    const submissionData = {
      email_address: body.email,
      timeframe: body.timeframe,
      demo_type: body.demoType,
      other_demo_type: body.otherDemoType,
      street_address: body.streetAddress,
      city: body.city,
      state: body.state,
      zip_code: body.zipCode,
      square_footage: body.squareFootage,
      project_location: fullAddress,
      project_description: body.projectDescription,
      first_name: body.firstName,
      last_name: body.lastName,
      company_name: body.companyName,
      phone_number: body.phone,
      uploaded_files: body.files || [],
      ai_estimate: body.aiEstimate,
      wants_cash_offer: body.wantsCashOffer ?? false,
      status: "new", // Default status for new submissions
    }

    const { data, error } = await supabase.from("submissions").insert([submissionData]).select().single()

    if (error) {
      console.error("Supabase insert error:", error)
      throw new Error(`Failed to save submission: ${error.message}`)
    }

    const transformed = transformSupabaseToTally(data)
    transformed["Wants Cash Offer"] = data.wants_cash_offer

    return NextResponse.json({
      success: true,
      submission: transformed,
      message: "Submission saved successfully",
    })
  } catch (error: any) {
    console.error("Error saving submission:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to save submission",
      },
      { status: 500 },
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json({ success: false, error: "Submission ID is required" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // If status is being updated to 'contacted', also set contacted_at and contacted_by
    if (updateData.status === "contacted" && !updateData.contacted_at) {
      updateData.contacted_at = new Date().toISOString()
      updateData.contacted_by = "CRM User" // This could be dynamic if you have user auth
    }

    const { data, error } = await supabase.from("submissions").update(updateData).eq("id", id).select().single()

    if (error) {
      console.error("Supabase update error:", error)
      throw new Error(`Failed to update submission: ${error.message}`)
    }

    // Transform the updated submission to match the Tally format
    const transformedSubmission = transformSupabaseToTally(data)
    // Add back the fields that might be stripped
    transformedSubmission.id = data.id
    transformedSubmission.status = data.status
    transformedSubmission.notes = data.notes
    transformedSubmission.contacted_at = data.contacted_at
    transformedSubmission.contacted_by = data.contacted_by
    transformedSubmission["Wants Cash Offer"] = data.wants_cash_offer

    return NextResponse.json({
      success: true,
      submission: transformedSubmission,
      message: "Submission updated successfully",
    })
  } catch (error: any) {
    console.error("Error updating submission:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to update submission",
      },
      { status: 500 },
    )
  }
}
