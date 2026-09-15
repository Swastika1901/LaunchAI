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

    let demand = 65
    let problemSeverity = 65
    let uniqueness = 60
    let feasibility = 70
    let validationStatus = "Needs Testing"

    const validationTests = [
      "Interview at least 10 potential customers",
      "Create a simple landing page",
      "Test interest with a small target audience",
      "Collect feedback before building the full product",
    ]

    if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("education")
    ) {
      demand += 10
      problemSeverity += 8
    }

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("delivery")
    ) {
      demand += 8
      problemSeverity += 7
      uniqueness -= 5

      validationTests.push(
        "Run a small pilot with real customers",
        "Measure repeat purchases"
      )
    }

    if (
      text.includes("ai") ||
      text.includes("software") ||
      text.includes("platform") ||
      text.includes("app")
    ) {
      feasibility += 8
      uniqueness += 5
    }

    if (
      text.includes("subscription") ||
      text.includes("marketplace") ||
      text.includes("commission")
    ) {
      demand += 5
    }

    const clamp = (score: number) =>
      Math.max(0, Math.min(100, score))

    demand = clamp(demand)
    problemSeverity = clamp(problemSeverity)
    uniqueness = clamp(uniqueness)
    feasibility = clamp(feasibility)

    const validationScore = Math.round(
      (demand +
        problemSeverity +
        uniqueness +
        feasibility) /
        4
    )

    if (validationScore >= 80) {
      validationStatus = "Strong Potential"
    } else if (validationScore >= 65) {
      validationStatus = "Promising"
    } else {
      validationStatus = "Needs More Validation"
    }

    return Response.json({
      success: true,
      validation: {
        startupIdea: idea,
        validationScore,
        status: validationStatus,
        breakdown: {
          customerDemand: demand,
          problemSeverity,
          uniqueness,
          feasibility,
        },
        validationTests,
        keyQuestion:
          "Will enough customers pay for this solution?",
        recommendation:
          validationScore >= 75
            ? "The concept shows promising signals. Validate it with real customers before scaling."
            : "Gather more customer feedback and test the core problem before investing heavily.",
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to validate startup idea",
      },
      { status: 500 }
    )
  }
}