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

    let industry = "Technology"
    let targetMarket = "early adopters and potential customers"

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      industry = "FoodTech"
      targetMarket = "college students and working professionals"
    } else if (
      text.includes("student") ||
      text.includes("education") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      industry = "EdTech"
      targetMarket = "students and educational users"
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      industry = "HealthTech"
      targetMarket = "health-conscious users and patients"
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      industry = "FinTech"
      targetMarket = "financially active users and businesses"
    }

    const roadmap = {
      days30: {
        title: "Days 1–30: Validate",
        goal: "Prove that the problem is real and customers want the solution.",
        tasks: [
          "Interview potential customers",
          "Define the target customer segment",
          "Study existing competitors",
          "Create a clear value proposition",
          "Build a basic MVP or prototype",
          "Collect initial customer feedback",
        ],
      },

      days60: {
        title: "Days 31–60: Launch",
        goal: "Launch the MVP to a small group of real users.",
        tasks: [
          "Launch the MVP",
          `Target ${targetMarket}`,
          "Track user engagement",
          "Measure customer satisfaction",
          "Test pricing and revenue model",
          "Improve the product using user feedback",
        ],
      },

      days90: {
        title: "Days 61–90: Grow",
        goal: "Prove repeat usage and prepare the startup for growth.",
        tasks: [
          "Increase customer acquisition",
          "Improve retention and repeat usage",
          "Optimize pricing",
          "Build marketing channels",
          "Track revenue and operating costs",
          "Prepare an investor-ready business plan",
        ],
      },
    }

    return Response.json({
      success: true,
      roadmap: {
        startupIdea: idea,
        industry,
        targetMarket,
        roadmap,
        finalGoal:
          "Reach product-market validation and establish a foundation for sustainable growth.",
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate startup roadmap",
      },
      { status: 500 }
    )
  }
}