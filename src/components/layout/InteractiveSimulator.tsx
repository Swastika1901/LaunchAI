"use client"

import { useState, type ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  FileText,
  Lightbulb,
  Loader2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react"

type SectionId =
  | "summary"
  | "market"
  | "product"
  | "financials"
  | "swot"
  | "score"
  | "validation"
  | "roadmap"
  | "investor"

type DataObject = Record<string, unknown>

type Section = {
  id: SectionId
  label: string
  description: string
  icon: LucideIcon
}

type StartupContext = {
  industry: string
  customers: string
  problem: string
  solution: string
}

const sections: Section[] = [
  {
    id: "summary",
    label: "Business Plan",
    description: "Your overall startup blueprint",
    icon: FileText,
  },
  {
    id: "market",
    label: "Market Analysis",
    description: "Customers, opportunity & competition",
    icon: TrendingUp,
  },
  {
    id: "product",
    label: "Product Strategy",
    description: "MVP, features & positioning",
    icon: Lightbulb,
  },
  {
    id: "financials",
    label: "Financials",
    description: "Revenue, costs & assumptions",
    icon: Wallet,
  },
  {
    id: "swot",
    label: "SWOT Analysis",
    description: "Strengths, weaknesses & risks",
    icon: BarChart3,
  },
  {
    id: "score",
    label: "Startup Score",
    description: "Overall opportunity assessment",
    icon: Target,
  },
  {
    id: "validation",
    label: "Validation",
    description: "What you should test first",
    icon: ShieldCheck,
  },
  {
    id: "roadmap",
    label: "30 / 60 / 90",
    description: "Your next three months",
    icon: Zap,
  },
  {
    id: "investor",
    label: "Investor Q&A",
    description: "Questions you should be ready for",
    icon: Users,
  },
]

const examples = [
  "An affordable meal delivery platform for college students.",
  "An AI tool that helps small businesses create marketing content.",
  "A platform connecting students with verified tutors.",
  "A solar-powered irrigation system for small farms.",
]

function getContext(idea: string): StartupContext {
  const text = idea.toLowerCase()

  if (
    text.includes("food") ||
    text.includes("meal") ||
    text.includes("restaurant") ||
    text.includes("kitchen") ||
    text.includes("tiffin") ||
    text.includes("grocery") ||
    text.includes("catering") ||
    text.includes("delivery")
  ) {
    return {
      industry: "Food & Consumer Services",
      customers: "consumers who want convenient and affordable food",
      problem:
        "finding convenient, reliable and reasonably priced food that fits their daily needs",
      solution:
        "a food-focused service that makes discovering, ordering or receiving food easier",
    }
  }

  if (
    text.includes("student") ||
    text.includes("college") ||
    text.includes("school") ||
    text.includes("education") ||
    text.includes("tutor") ||
    text.includes("teacher") ||
    text.includes("learning") ||
    text.includes("course")
  ) {
    return {
      industry: "Education Technology",
      customers: "students, educators and educational institutions",
      problem:
        "accessing effective, affordable and convenient learning support",
      solution:
        "an education-focused product that improves learning access, convenience or outcomes",
    }
  }

  if (
    text.includes("health") ||
    text.includes("medical") ||
    text.includes("doctor") ||
    text.includes("hospital") ||
    text.includes("clinic") ||
    text.includes("medicine") ||
    text.includes("patient") ||
    text.includes("fitness") ||
    text.includes("wellness")
  ) {
    return {
      industry: "Health & Wellness",
      customers: "healthcare consumers, patients and relevant professionals",
      problem:
        "accessing understandable, convenient, affordable or efficient health support",
      solution:
        "a health-focused product that improves access, coordination or user support",
    }
  }

  if (
    text.includes("farm") ||
    text.includes("farmer") ||
    text.includes("agriculture") ||
    text.includes("agri") ||
    text.includes("crop") ||
    text.includes("irrigation") ||
    text.includes("soil")
  ) {
    return {
      industry: "Agriculture",
      customers: "farmers, agricultural businesses and rural communities",
      problem:
        "reducing agricultural costs, improving efficiency and managing limited resources",
      solution:
        "a practical agricultural solution designed to improve productivity or reduce operating costs",
    }
  }

  if (
    text.includes("finance") ||
    text.includes("fintech") ||
    text.includes("payment") ||
    text.includes("bank") ||
    text.includes("loan") ||
    text.includes("investment") ||
    text.includes("money") ||
    text.includes("insurance")
  ) {
    return {
      industry: "Financial Technology",
      customers: "consumers and businesses that use financial services",
      problem:
        "dealing with expensive, complicated or inefficient financial workflows",
      solution:
        "a financial product that makes an important money-related workflow simpler or more accessible",
    }
  }

  if (
    text.includes("travel") ||
    text.includes("tourism") ||
    text.includes("hotel") ||
    text.includes("trip") ||
    text.includes("vacation") ||
    text.includes("booking") ||
    text.includes("flight")
  ) {
    return {
      industry: "Travel & Hospitality",
      customers: "travelers and businesses serving the travel market",
      problem:
        "planning, discovering, booking or managing travel experiences efficiently",
      solution:
        "a travel-focused product that simplifies planning, discovery or booking",
    }
  }

  if (
    text.includes("fashion") ||
    text.includes("clothing") ||
    text.includes("beauty") ||
    text.includes("makeup") ||
    text.includes("cosmetic") ||
    text.includes("apparel") ||
    text.includes("jewelry")
  ) {
    return {
      industry: "Fashion & Beauty",
      customers: "fashion and beauty consumers",
      problem:
        "discovering, choosing or purchasing products that fit individual preferences",
      solution:
        "a consumer-focused product that improves discovery, personalization or purchasing",
    }
  }

  if (
    text.includes("solar") ||
    text.includes("energy") ||
    text.includes("electric") ||
    text.includes("battery") ||
    text.includes("climate") ||
    text.includes("carbon") ||
    text.includes("recycle") ||
    text.includes("sustainable") ||
    text.includes("environment")
  ) {
    return {
      industry: "Climate & Clean Technology",
      customers: "consumers, businesses and organizations seeking efficient solutions",
      problem:
        "high resource costs, inefficient systems or environmental impact",
      solution:
        "a technology-enabled solution focused on efficiency, sustainability or resource savings",
    }
  }

  if (
    text.includes("ai") ||
    text.includes("artificial intelligence") ||
    text.includes("software") ||
    text.includes("saas") ||
    text.includes("app") ||
    text.includes("platform") ||
    text.includes("automation") ||
    text.includes("api") ||
    text.includes("developer")
  ) {
    return {
      industry: "Software & Technology",
      customers: "businesses, professionals and technology users",
      problem:
        "time-consuming, expensive or inefficient workflows",
      solution:
        "a software product that simplifies, automates or improves an important workflow",
    }
  }

  return {
    industry: "Emerging / General Market",
    customers: "the specific customer group experiencing the problem",
    problem:
      "an existing customer problem that current alternatives do not solve perfectly",
    solution:
      "a focused product or service designed to solve that problem more effectively",
  }
}

function createFallback(idea: string): Record<SectionId, DataObject> {
  const context = getContext(idea)

  return {
    summary: {
      "Startup Idea": idea,
      Industry: context.industry,
      "Target Customers": context.customers,
      Problem: `The startup addresses ${context.problem}.`,
      Solution: `The proposed solution is ${context.solution}.`,
      "Business Opportunity":
        `The opportunity is to build a focused business around "${idea}" by solving a clear customer problem and creating a better alternative to existing solutions.`,
      "Business Model":
        "The appropriate model can be subscription, transaction fees, commissions, direct sales, licensing or a combination depending on how customers receive value.",
      "Go To Market":
        `Start with a narrow customer segment within ${context.industry}, validate demand directly and then scale the channels that consistently acquire customers.`,
      "First Goal":
        "Prove real customer demand before spending heavily on growth.",
    },

    market: {
      Industry: context.industry,
      Customers: context.customers,
      "Customer Problem": context.problem,
      Opportunity:
        `The market opportunity comes from customers who currently experience ${context.problem}. Research should measure how often the problem occurs, what alternatives customers use and what they currently spend.`,
      "Primary Segment":
        "Start with one specific customer segment rather than trying to serve everyone.",
      "Secondary Segments":
        "After proving product-market fit, expand into nearby customer groups with similar needs.",
      Competition:
        "Study direct competitors, indirect alternatives and the current manual way customers solve the problem.",
      Differentiation:
        "Compete through a measurable advantage such as convenience, price, speed, reliability, personalization, specialization or user experience.",
      "Main Market Risk":
        "The biggest early risk is assuming demand without enough conversations with real potential customers.",
    },

    product: {
      Concept: idea,
      MVP:
        `Build the smallest useful version of "${idea}" that solves the main customer problem.`,
      "Core Features": [
        "Simple onboarding",
        "The main problem-solving workflow",
        "Customer profile or account",
        "Clear value proposition",
        "Feedback mechanism",
        "Basic usage analytics",
      ],
      Experience:
        "Keep the first version simple and make the primary customer outcome obvious.",
      Positioning:
        `Position the product around the customer problem it solves rather than only describing its technology.`,
      Technology:
        "Use a lightweight architecture initially and avoid building advanced infrastructure before demand is validated.",
      Expansion:
        "Add advanced features based on actual customer behavior and feedback.",
    },

    financials: {
      "Revenue Strategy":
        "Choose the revenue model that naturally matches the value delivered by the startup.",
      "Possible Revenue Streams": [
        "Subscriptions",
        "Transaction fees",
        "Marketplace commissions",
        "Direct sales",
        "Premium features",
        "Business or enterprise plans",
      ],
      "Initial Costs": [
        "Product development",
        "Hosting and software",
        "Marketing",
        "Operations",
        "Customer support",
        "Legal and administration",
      ],
      "Cost Strategy":
        "Keep fixed costs low while validating the idea and increase spending only when demand becomes predictable.",
      "Important Metrics": [
        "Revenue per customer",
        "Customer acquisition cost",
        "Gross margin",
        "Retention",
        "Repeat purchases or usage",
      ],
      "Financial Risk":
        "The key risk is spending more to acquire and serve a customer than the customer generates in lifetime value.",
    },

    swot: {
      Strengths: [
        `Addresses ${context.problem}`,
        "Can begin with a focused MVP",
        "Can improve through customer feedback",
        "Potential for differentiated positioning",
      ],
      Weaknesses: [
        "Customer awareness will initially be low",
        "Product-market fit is unproven",
        "Initial resources may be limited",
        "Customer acquisition will require experimentation",
      ],
      Opportunities: [
        `Growth opportunities within ${context.industry}`,
        "Strategic partnerships",
        "Expansion into adjacent customer segments",
        "Digital distribution",
      ],
      Threats: [
        "Established competitors",
        "Changing customer preferences",
        "Increasing acquisition costs",
        "Operational or regulatory changes",
      ],
    },

    score: {
      "Overall Score": 76,
      Verdict: "Promising concept — validate before scaling",
      Market: 78,
      Product: 77,
      Revenue: 73,
      Competition: 70,
      Scalability: 82,
      Recommendation:
        `The idea has potential in ${context.industry}. The next priority is proving that ${context.customers} will repeatedly use the solution and see enough value to pay for it.`,
    },

    validation: {
      "Validation Score": 74,
      Status: "Validate before scaling",
      "Customer Demand":
        `Interview 15–20 people who match ${context.customers}. Ask how they currently solve the problem and what they spend on alternatives.`,
      "Problem Severity":
        `Test whether ${context.problem} happens frequently enough for customers to actively seek a better solution.`,
      Uniqueness:
        "Compare the idea with at least five direct and indirect alternatives and identify one measurable advantage.",
      Feasibility:
        "Build a small MVP or prototype and test the core workflow with real users.",
      "Validation Tests": [
        "Customer interviews",
        "Landing page test",
        "Prototype test",
        "Small real-world pilot",
        "Pricing / willingness-to-pay test",
      ],
      "Key Question":
        "Will a clearly defined customer group repeatedly use this solution and pay enough to make the business sustainable?",
      Recommendation:
        "Validate the most important assumptions before investing heavily in development or marketing.",
    },

    roadmap: {
      "30 Days": [
        "Interview potential customers",
        "Identify the most painful customer problem",
        "Research competitors and alternatives",
        "Choose the first target segment",
        "Define and build the MVP",
      ],
      "60 Days": [
        "Launch the MVP to early users",
        "Collect structured feedback",
        "Measure usage and engagement",
        "Test pricing",
        "Improve the most important product issues",
      ],
      "90 Days": [
        "Measure repeat usage and retention",
        "Refine the revenue model",
        "Identify the strongest acquisition channel",
        "Develop useful partnerships",
        "Prepare for a larger launch or funding discussion",
      ],
      "90 Day Goal":
        "Have a working MVP, real customer feedback, validated assumptions and evidence of demand.",
    },

    investor: {
      "Question 1": {
        Question: "What problem are you solving?",
        Answer: `We are solving ${context.problem} for ${context.customers}.`,
      },
      "Question 2": {
        Question: "Who is your target customer?",
        Answer: `Our initial focus is ${context.customers}.`,
      },
      "Question 3": {
        Question: "Why will customers choose you?",
        Answer:
          "We aim to provide a clearer, more convenient and differentiated solution than existing alternatives.",
      },
      "Question 4": {
        Question: "How will you make money?",
        Answer:
          "Revenue will come from a model aligned with the value delivered, such as subscriptions, transactions, commissions or direct sales.",
      },
      "Question 5": {
        Question: "Who are your competitors?",
        Answer:
          "Competitors include companies offering similar solutions as well as indirect alternatives customers currently use.",
      },
      "Question 6": {
        Question: "What is your competitive advantage?",
        Answer:
          "The advantage will come from a focused customer experience and a measurable improvement over existing alternatives.",
      },
      "Question 7": {
        Question: "How will you acquire customers?",
        Answer:
          "We will begin with focused outreach, partnerships and digital experiments before scaling the channels that work.",
      },
      "Question 8": {
        Question: "What is the biggest risk?",
        Answer:
          "The biggest early risk is insufficient product-market fit, which we will address through structured customer validation.",
      },
      "Question 9": {
        Question: "What will funding be used for?",
        Answer:
          "Funding would accelerate product development, customer acquisition and the operations required to scale proven demand.",
      },
      "Question 10": {
        Question: "What is your next milestone?",
        Answer:
          "Our next milestone is demonstrating repeatable customer demand with a working MVP and measurable willingness to pay.",
      },
      "Investor Tip":
        "Investors will want evidence that customers need the product, the market is attractive and the business can scale.",
    },
  }
}

function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function renderData(value: unknown): ReactNode {
  if (value === null || value === undefined || value === "") {
    return (
      <p className="text-sm leading-6 text-slate-400">
        Information is not available yet.
      </p>
    )
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return (
      <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
        {String(value)}
      </p>
    )
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-2">
        {value.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3"
          >
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300">
              <Check className="h-3 w-3" />
            </div>

            <div className="min-w-0 flex-1">{renderData(item)}</div>
          </div>
        ))}
      </div>
    )
  }

  if (typeof value === "object") {
    const object = value as DataObject

    return (
      <div className="space-y-3">
        {Object.entries(object).map(([key, item]) => (
          <div
            key={key}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <p className="mb-2 text-xs font-semibold tracking-wide text-indigo-300 uppercase">
              {formatKey(key)}
            </p>

            {renderData(item)}
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default function InteractiveSimulator() {
  const [idea, setIdea] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Record<
    SectionId,
    DataObject
  > | null>(null)
  const [activeSection, setActiveSection] =
    useState<SectionId>("summary")
  const [error, setError] = useState("")

  const generatePlan = async () => {
    const trimmedIdea = idea.trim()

    if (!trimmedIdea) {
      setError("Please enter a startup idea first.")
      return
    }

    setLoading(true)
    setError("")
    setResults(null)
    setActiveSection("summary")

    const fallback = createFallback(trimmedIdea)

    try {
      const response = await fetch("/api/business-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea: trimmedIdea,
        }),
      })

      if (response.ok) {
        const data: unknown = await response.json()

        if (data && typeof data === "object") {
          const apiData = data as DataObject

          const finalResults: Record<SectionId, DataObject> = {
            summary: fallback.summary,
            market: fallback.market,
            product: fallback.product,
            financials: fallback.financials,
            swot: fallback.swot,
            score: fallback.score,
            validation: fallback.validation,
            roadmap: fallback.roadmap,
            investor: fallback.investor,
          }

          const possibleKeys: Array<{
            section: SectionId
            keys: string[]
          }> = [
            {
              section: "summary",
              keys: ["businessPlan", "summary"],
            },
            {
              section: "market",
              keys: ["market", "marketAnalysis"],
            },
            {
              section: "product",
              keys: ["product", "productStrategy"],
            },
            {
              section: "financials",
              keys: ["financials", "finance"],
            },
            {
              section: "swot",
              keys: ["swot", "swotAnalysis"],
            },
            {
              section: "score",
              keys: ["score", "startupScore"],
            },
            {
              section: "validation",
              keys: ["validation"],
            },
            {
              section: "roadmap",
              keys: ["roadmap"],
            },
            {
              section: "investor",
              keys: ["investorQA", "investorQandA"],
            },
          ]

          for (const item of possibleKeys) {
            for (const key of item.keys) {
              const candidate = apiData[key]

              if (
                candidate &&
                typeof candidate === "object" &&
                !Array.isArray(candidate)
              ) {
                finalResults[item.section] = {
                  ...finalResults[item.section],
                  ...(candidate as DataObject),
                }

                break
              }
            }
          }

          setResults(finalResults)
        } else {
          setResults(fallback)
        }
      } else {
        setResults(fallback)
      }
    } catch {
      setResults(fallback)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setIdea("")
    setResults(null)
    setError("")
    setActiveSection("summary")
  }

  const activeInfo =
    sections.find((section) => section.id === activeSection) || sections[0]

  const ActiveIcon = activeInfo.icon

  return (
    <div className="mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/70 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">LaunchAI</p>
            <p className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">
              Startup Intelligence
            </p>
          </div>
        </div>

        {results && (
          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            New Idea
          </button>
        )}
      </div>

      {/* INPUT SCREEN */}
      {!loading && !results && (
        <div className="p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              Startup Intelligence
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
              What are you building?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Describe your startup in your own words. LaunchAI will build the
              analysis around your actual idea.
            </p>

            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition focus-within:border-indigo-500/50">
              <textarea
                value={idea}
                onChange={(event) => {
                  setIdea(event.target.value)
                  setError("")
                }}
                placeholder="Tell us what you're building, who it's for, and what problem it solves..."
                className="min-h-[150px] w-full resize-none bg-transparent p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600"
              />

              <div className="flex flex-col gap-3 border-t border-slate-800 p-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="px-2 text-xs text-slate-600">
                  Any startup idea works. Examples are only starting points.
                </p>

                <button
                  type="button"
                  onClick={generatePlan}
                  disabled={!idea.trim()}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-indigo-400 hover:to-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Analyze My Startup
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            )}

            <div className="mt-7 text-left">
              <p className="mb-3 text-[10px] font-semibold tracking-widest text-slate-600 uppercase">
                Examples only
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setIdea(example)}
                    className="group rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-left text-xs leading-5 text-slate-400 transition hover:border-indigo-500/30 hover:bg-slate-900 hover:text-slate-200"
                  >
                    <span className="flex gap-2">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" />
                      {example}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="flex min-h-[560px] items-center justify-center p-6">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
              <Loader2 className="h-7 w-7 animate-spin text-indigo-400" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Building your startup analysis
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              LaunchAI is analyzing your idea across the full startup journey.
            </p>

            <div className="mt-7 space-y-2 text-left">
              {[
                "Understanding your idea",
                "Identifying your market",
                "Planning the product",
                "Mapping financials",
                "Checking risks",
                "Preparing validation",
                "Building your roadmap",
                "Preparing investor questions",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-[10px] font-semibold text-indigo-300">
                    {index + 1}
                  </div>

                  <span className="text-xs text-slate-400">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {results && !loading && (
        <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[270px_1fr]">
          {/* SIDEBAR */}
          <aside className="border-b border-slate-800 bg-slate-950 p-3 md:border-r md:border-b-0">
            <div className="mb-3 px-3 pt-2">
              <p className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">
                Your Startup
              </p>

              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                {idea}
              </p>
            </div>

            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon
                const active = section.id === activeSection

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                      active
                        ? "bg-[#151d30] text-white"
                        : "text-slate-500 hover:bg-slate-900 hover:text-slate-300"
                    }`}
                  >
                    {active && (
                      <span className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-indigo-400" />
                    )}

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        active
                          ? "bg-indigo-500/10 text-indigo-300"
                          : "bg-slate-900 text-slate-600 group-hover:text-indigo-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {section.label}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-600">
                        {section.description}
                      </p>
                    </div>

                    {active && (
                      <ChevronRight className="h-3.5 w-3.5 text-indigo-300" />
                    )}
                  </button>
                )
              })}
            </div>
          </aside>

          {/* CONTENT */}
          <main className="min-w-0 bg-slate-900/30 p-5 sm:p-7">
            <div className="mb-6 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-indigo-400 uppercase">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Customized Analysis
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10">
                  <ActiveIcon className="h-4 w-4 text-indigo-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeInfo.label}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {activeInfo.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                <Bot className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <p className="text-xs leading-5 text-slate-500">
                  This analysis is based on your startup idea:{" "}
                  <span className="font-medium text-slate-300">
                    {idea}
                  </span>
                </p>
              </div>
            </div>

            {renderData(results[activeSection])}
          </main>
        </div>
      )}
    </div>
  )
}