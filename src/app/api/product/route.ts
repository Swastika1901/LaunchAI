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

    let productType = "Digital platform"
    let mvpFeatures = [
      "User registration and onboarding",
      "Search and discovery",
      "Personalized user dashboard",
      "Notifications",
      "Feedback system"
    ]

    let userExperience =
      "The product should prioritize a simple, fast and intuitive experience."

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      productType = "Food ordering and delivery platform"

      mvpFeatures = [
        "User registration and OTP login",
        "Browse available meal providers",
        "Daily meal ordering",
        "Scheduled delivery",
        "Cart and checkout",
        "Order tracking",
        "Ratings and feedback"
      ]

      userExperience =
        "Users should be able to discover meals, select a delivery time and complete an order with minimal steps."
    } else if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("education") ||
      text.includes("learning")
    ) {
      productType = "Student-focused digital platform"

      mvpFeatures = [
        "Student registration",
        "Personalized dashboard",
        "Content or service discovery",
        "Progress tracking",
        "Notifications",
        "Feedback system"
      ]

      userExperience =
        "The product should reduce complexity for students and make important actions accessible within a few taps."
    } else if (
      text.includes("health") ||
      text.includes("fitness") ||
      text.includes("medical")
    ) {
      productType = "Digital health and wellness platform"

      mvpFeatures = [
        "User profile",
        "Personalized recommendations",
        "Progress tracking",
        "Reminders",
        "Activity history",
        "Feedback system"
      ]

      userExperience =
        "The product should provide a clear, trustworthy and easy-to-navigate experience."
    }

    const product = {
      startupIdea: idea,

      productType,

      coreProblem:
        "The product should focus on solving one specific customer problem rather than attempting to solve multiple problems at once.",

      mvpFeatures,

      userExperience,

      futureFeatures: [
        "Personalized recommendations",
        "Advanced analytics",
        "Loyalty or rewards system",
        "Premium features",
        "Business partnerships",
        "Mobile application"
      ],

      productPriorities: [
        "Solve the core customer problem",
        "Keep the first version simple",
        "Make the main user action extremely easy",
        "Collect user feedback",
        "Improve based on real usage"
      ],

      developmentPhases: [
        {
          phase: "Phase 1",
          name: "MVP",
          goal: "Build only the essential features needed to test the idea."
        },
        {
          phase: "Phase 2",
          name: "Validation",
          goal: "Launch to a small group of users and measure engagement."
        },
        {
          phase: "Phase 3",
          name: "Growth",
          goal: "Add features and partnerships based on validated demand."
        }
      ],

      recommendation:
        "Launch the smallest useful version of the product first. Avoid building advanced features until the core customer problem has been validated."
    }

    return Response.json({
      success: true,
      product
    })
  } catch (error) {
    console.error("PRODUCT ERROR:", error)

    return Response.json(
      { error: "Unable to generate product strategy" },
      { status: 500 }
    )
  }
}