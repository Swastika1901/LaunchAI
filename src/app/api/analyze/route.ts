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

    // Industry detection
    let industry = "Technology"

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("kitchen") ||
      text.includes("delivery")
    ) {
      industry = "FoodTech"
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      industry = "HealthTech"
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      industry = "EdTech"
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("money")
    ) {
      industry = "FinTech"
    } else if (
      text.includes("fashion") ||
      text.includes("clothing") ||
      text.includes("wear")
    ) {
      industry = "FashionTech"
    } else if (
      text.includes("travel") ||
      text.includes("hotel") ||
      text.includes("tourism")
    ) {
      industry = "TravelTech"
    }

    // Customer detection
    let targetCustomers =
      "Young adults and digitally active consumers"

    if (text.includes("student") || text.includes("college")) {
      targetCustomers = "College students and university communities"
    } else if (
      text.includes("professional") ||
      text.includes("employee") ||
      text.includes("workplace")
    ) {
      targetCustomers = "Working professionals and employees"
    } else if (text.includes("parent") || text.includes("child")) {
      targetCustomers = "Parents and families"
    } else if (text.includes("business") || text.includes("company")) {
      targetCustomers = "Small and medium-sized businesses"
    }

    // Business model detection
    let revenueModel =
      "Subscription, direct sales or transaction-based revenue"

    if (
      text.includes("marketplace") ||
      text.includes("connect") ||
      text.includes("platform")
    ) {
      revenueModel = "Transaction commissions and platform fees"
    } else if (
      text.includes("delivery") ||
      text.includes("food") ||
      text.includes("meal")
    ) {
      revenueModel = "Delivery fees, vendor commissions and subscription plans"
    } else if (
      text.includes("course") ||
      text.includes("learning")
    ) {
      revenueModel = "Course purchases, subscriptions and premium plans"
    } else if (
      text.includes("fitness") ||
      text.includes("health")
    ) {
      revenueModel = "Subscriptions, premium features and partnerships"
    }

    // Feature suggestions
    const keyFeatures = [
      "Simple user onboarding",
      "Personalized user experience",
      "Search and discovery",
      "Secure payment system",
      "User feedback and analytics"
    ]

    if (text.includes("delivery") || text.includes("food")) {
      keyFeatures.push("Real-time order and delivery tracking")
    }

    if (text.includes("student") || text.includes("college")) {
      keyFeatures.push("Student-friendly pricing and offers")
    }

    if (text.includes("health") || text.includes("fitness")) {
      keyFeatures.push("Progress tracking and personalized recommendations")
    }

    // Calculate startup score
    let score = 70

    if (text.length > 50) {
      score += 5
    }

    if (
      text.includes("student") ||
      text.includes("professional") ||
      text.includes("parent")
    ) {
      score += 5
    }

    if (
      text.includes("subscription") ||
      text.includes("commission") ||
      text.includes("platform")
    ) {
      score += 5
    }

    if (text.includes("app") || text.includes("platform")) {
      score += 5
    }

    score = Math.min(score, 95)

    const analysis = {
      startupIdea: idea,

      industry,

      problem:
        `The startup aims to solve a customer problem within the ${industry} sector by providing a more convenient, accessible or efficient solution.`,

      targetCustomers,

      solution:
        `LaunchAI identifies this concept as a ${industry} solution designed for ${targetCustomers.toLowerCase()}.`,

      valueProposition:
        `A focused digital solution that makes the customer experience simpler, faster and more convenient.`,

      revenueModel,

      keyFeatures,

      strengths: [
        "Clear digital product opportunity",
        "Can be launched initially as an MVP",
        "Potential to scale beyond the initial customer segment",
        "Can collect user data and feedback for continuous improvement"
      ],

      weaknesses: [
        "Customer demand needs to be validated",
        "Early customer acquisition may be difficult",
        "The product may require continuous improvement based on user feedback"
      ],

      opportunities: [
        "Expansion into additional customer segments",
        "Partnerships with businesses and organizations",
        "Mobile-first customer experiences",
        "Subscription and premium offerings"
      ],

      threats: [
        "Existing competitors",
        "Changing customer preferences",
        "Customer acquisition costs",
        "Operational and technology challenges"
      ],

      startupScore: score,

      recommendation:
        "Start with a focused MVP, test it with a small group of real users, measure demand and improve the product based on feedback before scaling."
    }

    return Response.json({
      success: true,
      analysis
    })
  } catch (error) {
    console.error("ANALYZE ERROR:", error)

    return Response.json(
      { error: "Unable to analyze startup idea" },
      { status: 500 }
    )
  }
}