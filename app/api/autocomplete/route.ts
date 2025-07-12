import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get("text")
  const apiKey = process.env.GEOAPIFY_API_KEY

  if (!apiKey) {
    console.error("GEOAPIFY_API_KEY is not set in the environment variables.")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  if (!text || text.length < 3) {
    return NextResponse.json([], { status: 200 }) // Return empty array if not enough text
  }

  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
    text,
  )}&apiKey=${apiKey}&filter=countrycode:us&format=json`

  console.log(`Fetching from Geoapify: ${url.replace(apiKey, "REDACTED")}`)

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      console.error("Geoapify API Error:", data)
      return NextResponse.json({ error: "Failed to fetch address data." }, { status: response.status })
    }

    // The suggestions are in the 'results' array
    const suggestions = data.results || []
    console.log(`Found ${suggestions.length} suggestions from Geoapify.`)

    return NextResponse.json(suggestions)
  } catch (error) {
    console.error("Error in /api/autocomplete:", error)
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 })
  }
}
