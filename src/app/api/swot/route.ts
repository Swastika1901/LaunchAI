export async function POST(request: Request) {
  try {
    const body = await request.json()
    const idea = body.idea

    if (!idea || typeof idea !== "string") {
      return Response.json(
        { success: false, error: "Startup idea is required" },
        { status: 400 }
      )
    }

    const text = idea.toLowerCase()

    const strengths: string[] = [
      "Clear problem-solving value",
      "Can be launched as a focused MVP",
      "Potential to scale through technology",
    ]

    const weaknesses: string[] = [
      "Early-stage brand awareness may be low",
      "Customer acquisition can be challenging",
      "Requires continuous product improvement",
    ]

    const opportunities: string[] = [
      "Growing demand for digital-first services",
      "Expansion into additional customer segments",
      "Partnership opportunities with businesses and institutions",
    ]

    const threats: string[] = [
      "Competition from established companies",
      "Changing customer preferences",
      "Increasing customer acquisition costs",
    ]

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      strengths.unshift(
        "Addresses the recurring need for convenient and affordable meals"
      )

      weaknesses.unshift(
        "Delivery operations and food quality must remain consistent"
      )

      opportunities.unshift(
        "Partnerships with cloud kitchens, home chefs and college communities"
      )

      threats.unshift(
        "Competition from established food delivery platforms"
      )
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      strengths.unshift(
        "Targets a large and recurring education market"
      )

      weaknesses.unshift(
        "Users may have many free learning alternatives"
      )

      opportunities.unshift(
        "Partnerships with colleges, educators and student communities"
      )

      threats.unshift(
        "Competition from established education platforms"
      )
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      strengths.unshift(
        "Solves an important and recurring health-related problem"
      )

      weaknesses.unshift(
        "Trust, privacy and reliability are especially important"
      )

      opportunities.unshift(
        "Partnerships with healthcare professionals and organizations"
      )

      threats.unshift(
        "Regulatory requirements and strong healthcare competition"
      )
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      strengths.unshift(
        "Can provide measurable financial value to users"
      )

      weaknesses.unshift(
        "Users may require a high level of trust before adoption"
      )

      opportunities.unshift(
        "Expansion into additional financial products and services"
      )

      threats.unshift(
        "Regulatory changes and competition from established fintech companies"
      )
    }

    const overallAssessment =
      strengths.length >= 4 && opportunities.length >= 4
        ? "The startup shows promising potential if customer demand is validated early and execution remains focused."
        : "The concept has potential, but further validation is recommended before significant investment."

    return Response.json({
      success: true,
      swot: {
        startupIdea: idea,
        strengths,
        weaknesses,
        opportunities,
        threats,
        overallAssessment,
        recommendedAction:
          "Validate the idea with real users, launch a small MVP and measure customer adoption before scaling.",
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate SWOT analysis",
      },
      { status: 500 }
    )
  }
}