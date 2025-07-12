import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      email,
      timeframe,
      demoType,
      otherDemoType,
      streetAddress,
      city,
      state,
      zipCode,
      squareFootage,
      projectDescription,
      firstName,
      lastName,
      companyName,
      phone,
      files,
    } = body

    // Construct full address
    const fullAddress = `${streetAddress}, ${city}, ${state} ${zipCode}`

    // Construct the prompt for Gemini
    const prompt = `You are an AI assistant for ALLIED Wrecking, a professional demolition company in Tampa Bay, Florida. Based on the following project details, provide a realistic cost estimate range for the demolition work.

Project Details:
- Type of Demolition: ${demoType}${otherDemoType ? ` (${otherDemoType})` : ""}
- Location: ${fullAddress}
- Timeline: ${timeframe}
- Square Footage: ${squareFootage || "Not provided"}
- Project Description: ${projectDescription || "Not provided"}
- Uploaded Files: ${files?.length > 0 ? files.join(", ") : "None"}
- Contact: ${firstName} ${lastName}${companyName ? ` (${companyName})` : ""}

Context about ALLIED Wrecking:
- Licensed and insured demolition contractor in Florida
- Serves Tampa Bay and Central Florida
- Handles residential and commercial projects
- Specializes in safe, efficient demolition with environmental responsibility
- 15+ years of experience

Florida Market Context:
- Typical residential pool demolition: $3,000-$8,000
- Small structure removal (shed/deck): $1,500-$4,000
- Interior selective demolition: $2,000-$8,000 per room
- Concrete/asphalt removal: $2-$6 per sq ft
- Full house demolition: $8,000-$25,000
- Commercial building demolition: $15,000-$100,000+
- Tree removal: $500-$3,000 per tree
- Fire/flood damage cleanup: $5,000-$20,000

Consider these factors:
- Project urgency (ASAP costs 15-25% more)
- Location accessibility
- Permit requirements
- Disposal costs
- Site conditions
- Material type and quantity
- Square footage (if provided) for more accurate pricing

Provide ONLY a cost range estimate in this exact format: "$X,XXX - $XX,XXX"
Do not include any explanation, just the dollar range.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to get AI response")
    }

    const data = await response.json()
    const estimate = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!estimate) {
      throw new Error("No estimate received from AI")
    }

    return NextResponse.json({
      success: true,
      estimate: estimate,
    })
  } catch (error) {
    console.error("Error generating estimate:", error)
    return NextResponse.json({
      success: false,
      estimate: "Contact for estimate",
    })
  }
}
