export async function POST(request: Request) {
  try {
    const body = await request.json()
    const idea = body.idea

    if (!idea || typeof idea !== "string") {
      return Response.json(
        {
          success: false,
          error: "Startup idea is required",
        },
        { status: 400 }
      )
    }

    const text = idea.toLowerCase()

    let marketScore = 70
    let productScore = 70
    let revenueScore = 65
    let competitionScore = 60
    let scalabilityScore = 65

    if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("education")
    ) {
      marketScore += 8
      productScore += 5
    }

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("delivery")
    ) {
      marketScore += 7
      revenueScore += 8
      competitionScore -= 5
    }

    if (
      text.includes("ai") ||
      text.includes("software") ||
      text.includes("platform") ||
      text.includes("app")
    ) {
      productScore += 8
      scalabilityScore += 10
    }

    if (
      text.includes("subscription") ||
      text.includes("commission") ||
      text.includes("marketplace")
    ) {
      revenueScore += 10
    }

    const clamp = (score: number) =>
      Math.max(0, Math.min(100, score))

    marketScore = clamp(marketScore)
    productScore = clamp(productScore)
    revenueScore = clamp(revenueScore)
    competitionScore = clamp(competitionScore)
    scalabilityScore = clamp(scalabilityScore)

    const overallScore = Math.round(
      (marketScore +
        productScore +
        revenueScore +
        competitionScore +
        scalabilityScore) /
        5
    )

    let verdict = "Promising Startup"
    let recommendation =
      "Validate the idea with real customers and build a focused MVP."

    if (overallScore >= 80) {
      verdict = "Highly Promising"
      recommendation =
        "The concept shows strong potential. Focus on customer validation and rapid MVP development."
    } else if (overallScore < 60) {
      verdict = "Needs Validation"
      recommendation =
        "The idea needs stronger validation. Interview potential customers and refine the value proposition."
    }

    return Response.json({
      success: true,
      score: {
        startupIdea: idea,
        overallScore,
        verdict,
        breakdown: {
          market: marketScore,
          product: productScore,
          revenue: revenueScore,
          competition: competitionScore,
          scalability: scalabilityScore,
        },
        recommendation,
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to calculate startup score",
      },
      { status: 500 }
    )
  }
}