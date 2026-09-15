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

    let revenueModel = "Subscription + transaction revenue"
    let estimatedPrice = 999
    let monthlyCustomers = 500
    let monthlyRevenue = 499500
    let monthlyCosts = 300000

    if (
      text.includes("food") ||
      text.includes("meal") ||
      text.includes("restaurant") ||
      text.includes("delivery")
    ) {
      revenueModel = "Commission + delivery fees"
      estimatedPrice = 150
      monthlyCustomers = 1000
      monthlyRevenue = 150000
      monthlyCosts = 90000
    } else if (
      text.includes("education") ||
      text.includes("student") ||
      text.includes("learning") ||
      text.includes("course")
    ) {
      revenueModel = "Subscription + premium courses"
      estimatedPrice = 499
      monthlyCustomers = 1000
      monthlyRevenue = 499000
      monthlyCosts = 250000
    } else if (
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("doctor") ||
      text.includes("fitness")
    ) {
      revenueModel = "Subscription + service fees"
      estimatedPrice = 799
      monthlyCustomers = 600
      monthlyRevenue = 479400
      monthlyCosts = 300000
    } else if (
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment") ||
      text.includes("investment")
    ) {
      revenueModel = "Subscription + transaction fees"
      estimatedPrice = 999
      monthlyCustomers = 500
      monthlyRevenue = 499500
      monthlyCosts = 320000
    }

    const monthlyProfit = monthlyRevenue - monthlyCosts
    const yearlyRevenue = monthlyRevenue * 12
    const yearlyProfit = monthlyProfit * 12

    const breakEvenCustomers = Math.ceil(
      monthlyCosts / estimatedPrice
    )

    const projection = {
      startupIdea: idea,
      revenueModel,
      assumptions: {
        averageCustomerValue: estimatedPrice,
        estimatedMonthlyCustomers: monthlyCustomers,
        estimatedMonthlyGrowth: "10%",
      },
      monthlyProjection: {
        revenue: monthlyRevenue,
        costs: monthlyCosts,
        profit: monthlyProfit,
      },
      yearlyProjection: {
        revenue: yearlyRevenue,
        costs: monthlyCosts * 12,
        profit: yearlyProfit,
      },
      breakEven: {
        customersRequired: breakEvenCustomers,
        estimatedMonthlyRevenueAtBreakEven:
          breakEvenCustomers * estimatedPrice,
      },
      fundingRecommendation:
        yearlyProfit > 1000000
          ? "Consider raising growth capital to scale marketing, technology and operations."
          : "Focus on validating customer demand and achieving consistent profitability before raising significant capital.",
      financialHealth:
        monthlyProfit > 200000
          ? "Strong"
          : monthlyProfit > 0
            ? "Positive"
            : "Needs improvement",
    }

    return Response.json({
      success: true,
      financials: projection,
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate financial projections",
      },
      { status: 500 }
    )
  }
}