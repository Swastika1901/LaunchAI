export async function POST(request: Request) {
  try {
    const body = await request.json()
    const idea = body.idea
    const question = body.question

    if (!idea || typeof idea !== "string") {
      return Response.json(
        { success: false, error: "Startup idea is required" },
        { status: 400 }
      )
    }

    if (!question || typeof question !== "string") {
      return Response.json(
        { success: false, error: "Question is required" },
        { status: 400 }
      )
    }

    const text = idea.toLowerCase()
    const q = question.toLowerCase()

    let advice =
      "Focus on validating your customer problem, building a small MVP and collecting feedback before investing heavily."

    let actionItems = [
      "Talk to potential customers",
      "Define your MVP",
      "Test your core value proposition",
      "Track early user feedback",
    ]

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      if (
        q.includes("customer") ||
        q.includes("user") ||
        q.includes("market")
      ) {
        advice =
          "Start by targeting a clearly defined group such as college students or working professionals. Partner with a small number of reliable food providers and measure repeat orders before expanding."
      } else if (
        q.includes("money") ||
        q.includes("revenue") ||
        q.includes("price")
      ) {
        advice =
          "A commission-based model combined with delivery fees can work well. Keep pricing transparent and monitor the margin on every order."
      } else if (
        q.includes("competition") ||
        q.includes("competitor")
      ) {
        advice =
          "Differentiate through a specific niche, reliable quality, affordable pricing and a better experience for your chosen customer segment rather than competing only on scale."
      } else {
        advice =
          "For a food delivery startup, focus first on supply reliability, food quality, delivery efficiency and repeat customers."
      }

      actionItems = [
        "Recruit a small group of food providers",
        "Test the service with a limited customer group",
        "Measure repeat orders",
        "Track delivery costs and margins",
      ]
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      advice =
        "Start with one clearly defined learning problem and one target student segment. Build a simple MVP and measure whether students actually return to use it."

      actionItems = [
        "Interview students",
        "Identify the biggest learning pain point",
        "Build a focused MVP",
        "Measure engagement and retention",
      ]
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      advice =
        "Trust, privacy and reliability should be core priorities. Start with a clearly defined health-related use case and avoid expanding into complex services before validating the initial product."

      actionItems = [
        "Define the exact health problem",
        "Validate the concept with appropriate users",
        "Prioritize privacy and security",
        "Launch a focused MVP",
      ]
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      advice =
        "Build trust before trying to scale. Clearly communicate how the product creates financial value and make security and compliance important parts of the product strategy."

      actionItems = [
        "Validate the financial problem",
        "Define the core financial workflow",
        "Prioritize security",
        "Test with a small user group",
      ]
    }

    return Response.json({
      success: true,
      advisor: {
        startupIdea: idea,
        question,
        advice,
        actionItems,
        nextQuestion:
          "Would you like to focus next on customers, revenue, competition, product or growth?",
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate startup advice",
      },
      { status: 500 }
    )
  }
}