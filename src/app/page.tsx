"use client"

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileText,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react"
import InteractiveSimulator from "@/components/layout/InteractiveSimulator"

const features: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: FileText,
    title: "Business Blueprint",
    description:
      "Turn a raw startup concept into a structured business plan with a clear problem, solution, audience, positioning and execution strategy.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "Understand your target customers, market opportunity, competitive landscape and the factors that can influence demand.",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "Define the core product, MVP priorities, essential features and a practical path from concept to launch.",
  },
  {
    icon: Wallet,
    title: "Financial Thinking",
    description:
      "Explore revenue models, major cost areas, funding assumptions and financial milestones for your startup.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Validation",
    description:
      "Identify strengths, weaknesses and risks while discovering what you should validate before investing heavily.",
  },
  {
    icon: Users,
    title: "Investor Preparation",
    description:
      "Prepare for the questions investors are likely to ask and build a stronger story around your opportunity.",
  },
]

const workflow = [
  {
    number: "01",
    title: "Describe",
    description: "Start with the startup idea in your head.",
  },
  {
    number: "02",
    title: "Understand",
    description: "LaunchAI identifies your problem, users and business model.",
  },
  {
    number: "03",
    title: "Analyze",
    description: "Explore market, product, financial and competitive signals.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Find the assumptions that need testing before you scale.",
  },
  {
    number: "05",
    title: "Prepare",
    description: "Turn your insights into an actionable startup roadmap.",
  },
]

const advantages = [
  {
    icon: Zap,
    title: "Fast",
    description:
      "Go from a rough idea to a structured startup blueprint in minutes.",
  },
  {
    icon: Compass,
    title: "Structured",
    description:
      "Every analysis is organized so you know what to think about next.",
  },
  {
    icon: Target,
    title: "Actionable",
    description:
      "Get practical next steps instead of generic startup advice.",
  },
  {
    icon: BarChart3,
    title: "Built for founders",
    description:
      "Designed around the real journey from idea to investor readiness.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070a12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c9cff] to-[#b69cff] shadow-lg shadow-indigo-500/20">
              <Rocket className="h-4 w-4 text-white" />
            </div>

            <span className="text-lg font-bold tracking-tight text-white">
              Launch<span className="text-[#9bb3ff]">AI</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#94a0b8] md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#why-launchai"
              className="transition-colors hover:text-white"
            >
              Why LaunchAI
            </a>
          </nav>

          <a
            href="#simulator"
            className="group flex items-center gap-2 rounded-lg border border-[#7c9cff]/30 bg-[#7c9cff]/10 px-4 py-2 text-sm font-medium text-[#b7c7ff] transition-all hover:border-[#7c9cff]/60 hover:bg-[#7c9cff]/20 hover:text-white"
          >
            Start Building
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-[20%] top-[35%] h-[250px] w-[250px] rounded-full bg-violet-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7c9cff]/20 bg-[#7c9cff]/5 px-4 py-2 text-xs font-medium text-[#aebfff]">
            <Sparkles className="h-3.5 w-3.5" />
            Startup intelligence, simplified
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f7ff] sm:text-6xl lg:text-7xl">
            Your idea is only
            <br />
            <span className="bg-gradient-to-r from-[#9bb3ff] via-[#b69cff] to-[#55d6be] bg-clip-text text-transparent">
              the beginning.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#94a0b8] sm:text-lg">
            LaunchAI transforms your startup idea into a structured business
            blueprint with market insights, product strategy, financial
            thinking, validation and investor preparation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#simulator"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7c9cff] px-6 py-3.5 text-sm font-semibold text-[#070a12] shadow-xl shadow-indigo-500/20 transition-all hover:bg-[#9bb3ff] hover:shadow-indigo-500/30"
            >
              Analyze my startup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#20283a] bg-[#0d111c]/70 px-6 py-3.5 text-sm font-medium text-[#c4ccdc] transition-all hover:border-[#34405a] hover:bg-[#111827]"
            >
              See how it works
            </a>
          </div>

          {/* Hero stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl border border-[#20283a] bg-[#0d111c]/70 backdrop-blur sm:grid-cols-4">
            {[
              ["01", "Idea"],
              ["09", "Analysis areas"],
              ["30/60/90", "Roadmap"],
              ["∞", "Possibilities"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-5 py-5 ${
                  index !== 0 ? "border-t border-[#20283a] sm:border-l sm:border-t-0" : ""
                }`}
              >
                <div className="text-lg font-semibold text-white">
                  {value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-[#59657b]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section id="simulator" className="scroll-mt-24 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c9cff]">
              Interactive Startup Lab
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What are you building?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#94a0b8]">
              Give LaunchAI your idea and explore the business, market,
              product, financial and validation questions around it.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <InteractiveSimulator />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 border-y border-[#20283a]/70 bg-[#090d16]/70 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#55d6be]">
              Everything in one place
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              More than a business plan generator.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#94a0b8] sm:text-base">
              LaunchAI gives founders a complete framework for thinking
              through a startup before spending months building it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-[#20283a] bg-[#0d111c]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#34405a] hover:bg-[#111827]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7c9cff]/20 bg-[#7c9cff]/10">
                    <Icon className="h-5 w-5 text-[#9bb3ff]" />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#7f8ba3]">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[#7c9cff] opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b69cff]">
              The workflow
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From idea to investor-ready thinking.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#94a0b8]">
              A simple workflow that helps you understand what your startup
              needs next.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#34405a] to-transparent lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((item) => (
                <div key={item.number} className="relative text-center">
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#34405a] bg-[#0d111c] text-xs font-bold text-[#9bb3ff] shadow-xl">
                    {item.number}
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-[#6f7b91]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why LaunchAI */}
      <section
        id="why-launchai"
        className="scroll-mt-24 border-y border-[#20283a]/70 bg-[#090d16]/70 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c9cff]">
                Why LaunchAI
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Don&apos;t just generate.
                <br />
                <span className="text-[#9bb3ff]">Think like a founder.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#94a0b8]">
                A startup is more than a document. LaunchAI helps you move
                through the decisions that matter, from your first concept to
                the questions you will face when presenting it.
              </p>

              <a
                href="#simulator"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#9bb3ff]"
              >
                Try LaunchAI
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {advantages.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#20283a] bg-[#0d111c] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c9cff]/10">
                      <Icon className="h-4.5 w-4.5 text-[#9bb3ff]" />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#718098]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#20283a] bg-gradient-to-br from-[#0d111c] via-[#101625] to-[#0c111b] p-8 text-center shadow-2xl shadow-indigo-950/20 sm:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#55d6be]/20 bg-[#55d6be]/10">
            <CheckCircle2 className="h-5 w-5 text-[#55d6be]" />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            You don&apos;t just generate a business plan.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#94a0b8] sm:text-base">
            LaunchAI helps you{" "}
            <span className="font-medium text-[#cbd4e6]">
              test, build, understand, finance and pitch
            </span>{" "}
            your startup.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Idea",
              "Validation",
              "Business Plan",
              "Financials",
              "Roadmap",
              "Investor Q&A",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#20283a] bg-[#070a12]/70 px-3.5 py-2 text-xs text-[#8793a9]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto h-6 w-6 text-[#b69cff]" />

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#7f8ba3]">
            Stop wondering whether it could work. Start exploring what it
            would take to make it work.
          </p>

          <a
            href="#simulator"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#7c9cff] px-6 py-3.5 text-sm font-semibold text-[#070a12] shadow-xl shadow-indigo-500/20 transition-all hover:bg-[#9bb3ff]"
          >
            Launch your idea
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#20283a] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c9cff] to-[#b69cff]">
              <Rocket className="h-3.5 w-3.5 text-white" />
            </div>

            <span className="text-sm font-semibold text-white">
              Launch<span className="text-[#9bb3ff]">AI</span>
            </span>
          </div>

          <p className="text-xs text-[#59657b]">
            Startup intelligence for your next big idea.
          </p>
        </div>
      </footer>
    </main>
  )
}