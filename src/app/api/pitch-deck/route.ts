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
    let market = "Digital consumers and businesses"
    let businessModel = "Subscription-based revenue"

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      industry = "FoodTech"
      market = "College students, working professionals and everyday food customers"
      businessModel = "Commission + delivery fees"
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      industry = "EdTech"
      market = "Students, learners and educational institutions"
      businessModel = "Subscription + premium content"
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      industry = "HealthTech"
      market = "Health-conscious consumers and healthcare users"
      businessModel = "Subscription + service fees"
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      industry = "FinTech"
      market = "Consumers, investors and digitally active financial users"
      businessModel = "Transaction fees + subscription"
    }

    const slides = [
      {
        slide: 1,
        title: "The Startup",
        content: {
          startupName: "LaunchAI Startup Concept",
          tagline: `A smarter solution for a real ${industry} problem`,
          idea,
        },
      },
      {
        slide: 2,
        title: "The Problem",
        content: {
          headline: "Customers face an important unmet need",
          points: [
            "Existing solutions may be expensive or inconvenient",
            "Customers often experience inefficient processes",
            "Current alternatives may not fully address the target audience",
          ],
        },
      },
      {
        slide: 3,
        title: "Our Solution",
        content: {
          headline: "A focused digital solution",
          points: [
            "Simple and accessible user experience",
            "Designed around the customer's core problem",
            "Scalable technology-driven approach",
          ],
        },
      },
      {
        slide: 4,
        title: "Target Market",
        content: {
          market,
          opportunity:
            "The startup can initially focus on a specific customer segment before expanding into adjacent markets.",
        },
      },
      {
        slide: 5,
        title: "Product",
        content: {
          features: [
            "Simple onboarding",
            "Core problem-solving functionality",
            "Personalized experience",
            "User dashboard",
            "Data-driven recommendations",
          ],
        },
      },
      {
        slide: 6,
        title: "Business Model",
        content: {
          model: businessModel,
          revenueStreams: [
            "Primary customer revenue",
            "Premium features",
            "Strategic partnerships",
          ],
        },
      },
      {
        slide: 7,
        title: "Go-To-Market",
        content: {
          channels: [
            "Social media",
            "Community partnerships",
            "Referral programs",
            "Content marketing",
            "Early adopter campaigns",
          ],
        },
      },
      {
        slide: 8,
        title: "Competitive Advantage",
        content: {
          advantages: [
            "Focused customer experience",
            "Technology-enabled scalability",
            "Fast product iteration",
            "Strong potential for niche market penetration",
          ],
        },
      },
      {
        slide: 9,
        title: "Growth Strategy",
        content: {
          phases: [
            "Validate the MVP",
            "Build early traction",
            "Expand customer acquisition",
            "Introduce premium features",
            "Scale into new markets",
          ],
        },
      },
      {
        slide: 10,
        title: "The Ask",
        content: {
          objective:
            "Secure resources to validate the market, improve the product and accelerate customer acquisition.",
          nextSteps: [
            "Launch MVP",
            "Acquire early users",
            "Measure traction",
            "Improve product-market fit",
            "Scale operations",
          ],
        },
      },
    ]

    return Response.json({
      success: true,
      pitchDeck: {
        startupIdea: idea,
        industry,
        slides,
        totalSlides: slides.length,
      },
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate pitch deck",
      },
      { status: 500 }
    )
  }
}