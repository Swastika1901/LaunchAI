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

    let industry = "Technology"
    let targetMarket = "Digital consumers and businesses"
    let businessModel = "Subscription-based model"
    let valueProposition =
      "A technology-driven solution designed to solve an existing customer problem efficiently."

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      industry = "FoodTech"
      targetMarket = "College students, working professionals and customers looking for affordable meals"
      businessModel = "Commission from sellers + delivery fees"
      valueProposition =
        "Convenient access to affordable meals while helping small food businesses reach more customers."
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      industry = "EdTech"
      targetMarket = "Students, learners and educational institutions"
      businessModel = "Freemium + subscription + premium educational content"
      valueProposition =
        "Accessible and personalized learning designed around the needs of modern students."
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      industry = "HealthTech"
      targetMarket = "Health-conscious consumers and healthcare users"
      businessModel = "Subscription + service fees"
      valueProposition =
        "A convenient digital solution that helps users manage and improve their health-related needs."
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      industry = "FinTech"
      targetMarket = "Consumers, investors and digitally active financial users"
      businessModel = "Transaction fees + subscription"
      valueProposition =
        "A simplified digital financial experience that makes financial activities easier and more accessible."
    } else if (
      text.includes("travel") ||
      text.includes("tour") ||
      text.includes("hotel") ||
      text.includes("trip")
    ) {
      industry = "TravelTech"
      targetMarket = "Travelers and tourists"
      businessModel = "Commission + booking fees"
      valueProposition =
        "A digital travel solution that simplifies planning, discovery and booking."
    }

    const businessPlan = {
      startupIdea: idea,

      executiveSummary: `LaunchAI identifies this concept as a ${industry} startup focused on solving a clear customer problem through a technology-enabled solution. The startup can begin with a focused MVP, validate demand with early users and gradually expand its product and market presence.`,

      industry,

      problemStatement:
        "Customers currently face inconvenience, inefficiency, limited accessibility or high costs when trying to solve this problem.",

      proposedSolution:
        `The startup will provide a simple and scalable digital solution specifically designed around the needs of its target customers. The initial product should focus on the most important customer pain points before expanding into advanced features.`,

      targetMarket,

      valueProposition,

      businessModel,

      keyFeatures: [
        "Simple user onboarding",
        "Core problem-solving functionality",
        "Personalized user experience",
        "Dashboard for tracking activity",
        "Data-driven recommendations",
      ],

      marketingStrategy: [
        "Social media marketing",
        "Campus or community partnerships",
        "Referral programs",
        "Content marketing",
        "Early-user promotional campaigns",
      ],

      competitiveAdvantage: [
        "Focused solution for a specific customer problem",
        "Simple and accessible user experience",
        "Ability to improve rapidly using customer feedback",
        "Potential for scalable digital distribution",
      ],

      operationsPlan: [
        "Build and launch an MVP",
        "Recruit early users",
        "Collect customer feedback",
        "Monitor product performance",
        "Improve the product based on usage data",
        "Expand to additional customer segments",
      ],

      growthStrategy: [
        "Increase customer acquisition",
        "Expand geographically",
        "Introduce premium features",
        "Develop strategic partnerships",
        "Build a recognizable startup brand",
      ],

      risks: [
        "Strong competition",
        "Customer acquisition costs",
        "Limited initial brand recognition",
        "Changing customer preferences",
        "Operational challenges during scaling",
      ],

      milestones: {
        first30Days:
          "Launch MVP and collect feedback from early users.",
        first90Days:
          "Improve product-market fit and establish repeat usage.",
        first6Months:
          "Expand customer acquisition and introduce additional features.",
        firstYear:
          "Establish a scalable business model and explore larger growth opportunities.",
      },

      investorSummary:
        "The startup presents a potentially scalable opportunity if it demonstrates strong customer demand, repeat usage and sustainable unit economics. The immediate priority should be validation, MVP development and measurable traction.",
    }

    return Response.json({
      success: true,
      businessPlan,
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate business plan",
      },
      { status: 500 }
    )
  }
}