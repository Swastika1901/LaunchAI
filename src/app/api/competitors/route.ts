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

    let competitors = [
      {
        name: "Established Digital Platforms",
        type: "Direct/Indirect",
        strength: "Large user base and strong brand recognition",
        weakness: "May provide less personalized experiences"
      },
      {
        name: "Traditional Businesses",
        type: "Indirect",
        strength: "Existing customer relationships",
        weakness: "Often slower to adopt new technology"
      },
      {
        name: "New Startup Entrants",
        type: "Potential Direct",
        strength: "Agile and innovative",
        weakness: "Limited resources and brand awareness"
      }
    ]

    let competitiveAdvantage =
      "LaunchAI recommends competing through a focused customer segment, better user experience and a clear value proposition."

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("delivery") ||
      text.includes("restaurant")
    ) {
      competitors = [
        {
          name: "Food Delivery Platforms",
          type: "Direct",
          strength: "Large customer base and established delivery networks",
          weakness: "Can have higher fees and less focus on specialized meal needs"
        },
        {
          name: "Local Restaurants",
          type: "Indirect",
          strength: "Existing local customers and physical presence",
          weakness: "Limited digital ordering and personalization in some cases"
        },
        {
          name: "Home-Based Food Businesses",
          type: "Potential Direct",
          strength: "Authentic homemade food and local relationships",
          weakness: "Limited technology, discovery and delivery infrastructure"
        }
      ]

      competitiveAdvantage =
        "Focus on affordability, homemade food, predictable ordering and a student-focused customer experience."
    } else if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("education") ||
      text.includes("learning")
    ) {
      competitors = [
        {
          name: "Large Education Platforms",
          type: "Direct",
          strength: "Large content libraries and established brands",
          weakness: "May offer generalized rather than highly personalized experiences"
        },
        {
          name: "University Resources",
          type: "Indirect",
          strength: "Trusted by students and institutions",
          weakness: "Can have limited digital personalization"
        },
        {
          name: "Independent Learning Apps",
          type: "Direct",
          strength: "Focused experiences and flexible learning",
          weakness: "Smaller communities and limited resources"
        }
      ]

      competitiveAdvantage =
        "Focus on a specific student problem and create a simpler, more personalized experience."
    } else if (
      text.includes("health") ||
      text.includes("fitness") ||
      text.includes("medical")
    ) {
      competitors = [
        {
          name: "Healthcare Platforms",
          type: "Direct",
          strength: "Established healthcare networks",
          weakness: "Can be complex or expensive for certain users"
        },
        {
          name: "Fitness and Wellness Apps",
          type: "Indirect",
          strength: "Large digital communities",
          weakness: "Often focused on general wellness"
        },
        {
          name: "Local Healthcare Providers",
          type: "Indirect",
          strength: "Professional expertise and trust",
          weakness: "Limited scalability and digital accessibility"
        }
      ]

      competitiveAdvantage =
        "Build trust through a focused use case, accessible design and a convenient digital experience."
    }

    const analysis = {
      startupIdea: idea,

      competitors,

      competitiveAdvantage,

      marketPosition:
        "The startup should initially position itself around one clearly defined customer problem instead of trying to serve everyone.",

      differentiation: [
        "Focused target audience",
        "Simple user experience",
        "Clear value proposition",
        "Affordable entry point",
        "Fast feedback-driven product development"
      ],

      competitiveRisks: [
        "Larger competitors may copy successful features",
        "Established companies may have larger marketing budgets",
        "Customer switching costs may make acquisition difficult"
      ],

      strategy: [
        "Start with a narrow customer segment",
        "Build a simple MVP",
        "Collect customer feedback",
        "Create a strong reason for customers to switch",
        "Expand only after product-market fit improves"
      ]
    }

    return Response.json({
      success: true,
      competitors: analysis
    })
  } catch (error) {
    console.error("COMPETITOR ERROR:", error)

    return Response.json(
      { error: "Unable to generate competitor analysis" },
      { status: 500 }
    )
  }
}