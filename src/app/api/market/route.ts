export async function POST(request: Request) {
  try {
    const body = await request.json()
    const idea = body.idea

    if (!idea || typeof idea !== "string") {
      return Response.json(
        { error: "Startup idea is required" },
        { status: 400 }
      )
    }

    const text = idea.toLowerCase()

    let industry = "Technology"
    let marketType = "Digital consumer market"
    let demand = "Moderate to high potential"
    let trends = [
      "Increasing digital adoption",
      "Mobile-first customer experiences",
      "Growing demand for convenient services"
    ]

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("kitchen") ||
      text.includes("delivery")
    ) {
      industry = "FoodTech"
      marketType = "Food delivery and meal services"
      demand = "High potential in convenience-focused customer segments"
      trends = [
        "Growing demand for convenient food options",
        "Digital ordering and delivery adoption",
        "Interest in affordable and personalized meal choices"
      ]
    } else if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("education") ||
      text.includes("learning")
    ) {
      industry = "EdTech"
      marketType = "Education and student services"
      demand = "Strong potential among digitally active students"
      trends = [
        "Growth of digital learning",
        "Personalized learning experiences",
        "Mobile access to educational services"
      ]
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      industry = "HealthTech"
      marketType = "Digital health and wellness"
      demand = "Growing potential for accessible digital health solutions"
      trends = [
        "Digital health adoption",
        "Personalized wellness experiences",
        "Remote and mobile-first services"
      ]
    } else if (
      text.includes("finance") ||
      text.includes("payment") ||
      text.includes("bank") ||
      text.includes("money")
    ) {
      industry = "FinTech"
      marketType = "Digital financial services"
      demand = "Strong potential where digital transactions are increasing"
      trends = [
        "Digital payment adoption",
        "Mobile financial services",
        "Demand for simpler financial experiences"
      ]
    }

    const analysis = {
      startupIdea: idea,

      industry,

      marketType,

      demand,

      targetMarket:
        "The initial market should focus on customers who experience the problem frequently and are comfortable using digital products.",

      customerNeed:
        "Customers are likely to value solutions that reduce cost, save time, improve convenience or provide a better experience.",

      marketTrends: trends,

      growthOpportunities: [
        "Expand into additional customer segments",
        "Introduce premium features",
        "Develop partnerships",
        "Expand into new geographic markets"
      ],

      marketRisks: [
        "Strong existing competition",
        "Difficulty acquiring early customers",
        "Changing customer preferences",
        "Price sensitivity"
      ],

      tam:
        "Large potential market consisting of customers who could benefit from the broader category.",

      sam:
        "The serviceable market should focus on the specific customer segment and geography that the startup can realistically reach.",

      som:
        "The initial obtainable market should be a small, focused segment used to validate demand before expansion.",

      recommendation:
        `LaunchAI recommends validating the ${industry} concept with a small target audience before attempting large-scale expansion.`
    }

    return Response.json({
      success: true,
      market: analysis
    })
  } catch (error) {
    console.error("MARKET ERROR:", error)

    return Response.json(
      { error: "Unable to generate market analysis" },
      { status: 500 }
    )
  }
}