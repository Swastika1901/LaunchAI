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

    const investorQA = {
      startupIdea: idea,

      questions: [
        {
          question: "What problem does your startup solve?",
          category: "Problem",
          suggestedAnswer:
            "Clearly explain the customer pain point and why existing solutions are not solving it effectively."
        },
        {
          question: "Who is your target customer?",
          category: "Market",
          suggestedAnswer:
            "Define your ideal customer using demographics, needs, location and purchasing behavior."
        },
        {
          question: "Why would customers choose you over competitors?",
          category: "Competition",
          suggestedAnswer:
            "Explain your unique value proposition and the specific advantage your startup provides."
        },
        {
          question: "How does your startup make money?",
          category: "Business Model",
          suggestedAnswer:
            "Explain your revenue streams, pricing model and how revenue can grow as the customer base increases."
        },
        {
          question: "How large is your potential market?",
          category: "Market",
          suggestedAnswer:
            "Present your TAM, SAM and SOM estimates and explain the assumptions behind them."
        },
        {
          question: "What is your biggest business risk?",
          category: "Risk",
          suggestedAnswer:
            "Identify the most important risk and explain the specific steps you will take to reduce it."
        },
        {
          question: "How will you acquire your first customers?",
          category: "Growth",
          suggestedAnswer:
            "Describe your initial marketing channels, partnerships and customer acquisition strategy."
        },
        {
          question: "What is your plan for the next 12 months?",
          category: "Strategy",
          suggestedAnswer:
            "Explain your product milestones, customer targets, revenue goals and expansion plans."
        }
      ],

      investorTips: [
        "Keep answers concise and supported by data.",
        "Know your market and competitors.",
        "Be honest about risks and weaknesses.",
        "Explain exactly how the funding will be used.",
        "Focus on traction, customer demand and growth potential."
      ],

      readinessScore: 76
    }

    return Response.json({
      success: true,
      investorQA
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: "Unable to generate investor questions" },
      { status: 500 }
    )
  }
}