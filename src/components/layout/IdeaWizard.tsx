"use client"

import React, { useState } from "react"
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  TrendingUp,
  Layers,
  FileText,
  Compass,
  Download,
  Building2,
  DollarSign,
  Globe2,
  Users2,
  Briefcase,
  Rocket,
  MessageSquare,
  AlertCircle,
  RotateCcw,
} from "lucide-react"

// Types for wizard form state
interface WizardData {
  name: string
  idea: string
  industry: string
  budget: string
  country: string
  targetAudience: string
  businessModel: string
  stage: string
  fundingGoal: string
  tone: string
}

const industries = [
  "SaaS & Software",
  "Artificial Intelligence",
  "FinTech",
  "HealthTech",
  "E-Commerce & Retail",
  "EdTech",
  "CleanTech & Energy",
  "Web3 & Blockchain",
  "Real Estate & PropTech",
]

const budgets = [
  "Bootstrapped (<$10k)",
  "Pre-seed ($10k - $100k)",
  "Seed ($100k - $500k)",
  "Venture Scale (>$500k)",
]

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "India",
  "Singapore",
  "Australia",
  "Brazil",
  "Other / Remote Global",
]

const businessModels = [
  "B2B SaaS (Subscriptions)",
  "B2C Subscription",
  "Marketplace (Transactional fees)",
  "Transactional / Direct-to-Consumer",
  "Ad-Supported / Freemium",
  "Enterprise Licensing",
  "Open Source / Professional Services",
]

const startupStages = [
  "Just an Idea / Pre-concept",
  "MVP Built / Early prototype",
  "Beta Testing / Pilot program",
  "Generating Early Revenue / Traction",
]

const brandTones = [
  {
    name: "Professional & Corporate",
    desc: "Trustworthy, structured, and formal language.",
  },
  {
    name: "Bold & Disruptive",
    desc: "Edgy, high-impact, and confident styling.",
  },
  {
    name: "Friendly & Conversational",
    desc: "Warm, accessible, and community-driven tone.",
  },
  {
    name: "Technical & Analytical",
    desc: "Data-driven, precise, and system-oriented.",
  },
]

const initialFormData: WizardData = {
  name: "",
  idea: "",
  industry: "",
  budget: "",
  country: "",
  targetAudience: "",
  businessModel: "",
  stage: "",
  fundingGoal: "",
  tone: "",
}

export default function IdeaWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<WizardData>(initialFormData)

  const [errors, setErrors] = useState<
    Partial<Record<keyof WizardData, string>>
  >({})

  const [isGenerating, setIsGenerating] = useState(false)

  const [activeTab, setActiveTab] = useState<
    "summary" | "market" | "product" | "financials"
  >("summary")

  // Input change handler
  const handleInputChange = (key: keyof WizardData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))

    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  // Validation rules per step
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof WizardData, string>> = {}

    if (currentStep === 1) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        newErrors.name = "Startup name must be at least 2 characters."
      }

      if (!formData.idea.trim() || formData.idea.trim().length < 15) {
        newErrors.idea =
          "Please describe your idea in at least 15 characters."
      }
    }

    if (currentStep === 2) {
      if (!formData.industry) {
        newErrors.industry = "Please select an industry."
      }

      if (!formData.budget) {
        newErrors.budget = "Please select a budget range."
      }

      if (!formData.country) {
        newErrors.country = "Please select a target country."
      }

      if (
        !formData.targetAudience.trim() ||
        formData.targetAudience.trim().length < 5
      ) {
        newErrors.targetAudience =
          "Target audience must be at least 5 characters."
      }
    }

    if (currentStep === 3) {
      if (!formData.businessModel) {
        newErrors.businessModel = "Please select a business model."
      }

      if (!formData.stage) {
        newErrors.stage = "Please select your current stage."
      }

      if (!formData.fundingGoal.trim()) {
        newErrors.fundingGoal =
          "Please state your funding goal (e.g. $150,000 or None)."
      }
    }

    if (currentStep === 4) {
      if (!formData.tone) {
        newErrors.tone = "Please choose a brand tone."
      }
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(4, prev + 1))
    }
  }

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1))
    setErrors({})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(4)) {
      return
    }

    setIsGenerating(true)

    setTimeout(() => {
      setIsGenerating(false)
      setStep(5)
      setActiveTab("summary")
    }, 3000)
  }

  const handleReset = () => {
    setStep(1)
    setFormData(initialFormData)
    setErrors({})
    setIsGenerating(false)
    setActiveTab("summary")
  }

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_60px_rgba(99,102,241,0.12)] backdrop-blur-xl transition-all">
      {/* Progress Header */}
      {step <= 4 && (
        <div className="border-b border-zinc-800 bg-zinc-900/40 px-6 py-6 md:px-8">
          <div className="mb-4 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <span>Progress Blueprint</span>

            <span className="text-indigo-400">
              Step {step} of 4
            </span>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => {
              const isActive = step === i
              const isCompleted = step > i

              return (
                <React.Fragment key={i}>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all ${
                      isActive
                        ? "border-indigo-500 bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        : isCompleted
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-zinc-800 bg-zinc-950 text-zinc-600"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      i
                    )}
                  </div>

                  {i < 4 && (
                    <div
                      className={`h-0.5 flex-1 rounded transition-all ${
                        isCompleted
                          ? "bg-emerald-500/40"
                          : "bg-zinc-800"
                      }`}
                    />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      )}

      {/* Main Wizard Form */}
      {step <= 4 && !isGenerating && (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 md:p-8"
        >
          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-fade-in space-y-6">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <Sparkles className="h-5 w-5 text-indigo-400" />
                  Define Your Startup Identity
                </h3>

                <p className="text-xs text-zinc-400">
                  Start with the basics. Tell LaunchAI what you are
                  building and why it matters.
                </p>
              </div>

              {/* Startup Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Startup Name
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    handleInputChange("name", e.target.value)
                  }
                  placeholder="e.g. AcmeCorp or SaaSify"
                  className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-transparent focus:ring-2 ${
                    errors.name
                      ? "border-red-500/50 focus:ring-red-500/20"
                      : "border-zinc-800 focus:ring-indigo-500/20"
                  }`}
                />

                {errors.name && (
                  <p className="flex items-center gap-1 text-[11px] text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Startup Idea */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Startup Idea & Core Concept
                </label>

                <textarea
                  value={formData.idea}
                  onChange={(e) =>
                    handleInputChange("idea", e.target.value)
                  }
                  placeholder="Explain the problem you solve, who you are solving it for, and how your product or service helps them..."
                  className={`h-36 w-full resize-none rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-transparent focus:ring-2 ${
                    errors.idea
                      ? "border-red-500/50 focus:ring-red-500/20"
                      : "border-zinc-800 focus:ring-indigo-500/20"
                  }`}
                />

                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>
                    Minimum 15 characters recommended.
                  </span>

                  <span className="font-mono">
                    {formData.idea.length} chars
                  </span>
                </div>

                {errors.idea && (
                  <p className="flex items-center gap-1 text-[11px] text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.idea}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-fade-in space-y-6">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <Compass className="h-5 w-5 text-indigo-400" />
                  Market Alignment
                </h3>

                <p className="text-xs text-zinc-400">
                  Give LaunchAI enough context to understand your
                  target market and constraints.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Industry */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <Building2 className="h-3.5 w-3.5 text-zinc-500" />
                    Industry Vertical
                  </label>

                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange(
                        "industry",
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.industry
                        ? "border-red-500/50"
                        : "border-zinc-800"
                    }`}
                  >
                    <option value="">Choose Industry...</option>

                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>

                  {errors.industry && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <DollarSign className="h-3.5 w-3.5 text-zinc-500" />
                    Project Budget / Investment
                  </label>

                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange(
                        "budget",
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.budget
                        ? "border-red-500/50"
                        : "border-zinc-800"
                    }`}
                  >
                    <option value="">Choose Budget...</option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  {errors.budget && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <Globe2 className="h-3.5 w-3.5 text-zinc-500" />
                    Primary Country Target
                  </label>

                  <select
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange(
                        "country",
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.country
                        ? "border-red-500/50"
                        : "border-zinc-800"
                    }`}
                  >
                    <option value="">Choose Country...</option>

                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  {errors.country && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Audience */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <Users2 className="h-3.5 w-3.5 text-zinc-500" />
                    Target Audience / Segment
                  </label>

                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) =>
                      handleInputChange(
                        "targetAudience",
                        e.target.value
                      )
                    }
                    placeholder="e.g. Small business owners, college students"
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-transparent focus:ring-2 ${
                      errors.targetAudience
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "border-zinc-800 focus:ring-indigo-500/20"
                    }`}
                  />

                  {errors.targetAudience && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.targetAudience}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-fade-in space-y-6">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <Layers className="h-5 w-5 text-indigo-400" />
                  Business Blueprint
                </h3>

                <p className="text-xs text-zinc-400">
                  Define how the startup will make money, where it
                  is today, and what capital it may need.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Business Model */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <Briefcase className="h-3.5 w-3.5 text-zinc-500" />
                    Revenue Model
                  </label>

                  <select
                    value={formData.businessModel}
                    onChange={(e) =>
                      handleInputChange(
                        "businessModel",
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.businessModel
                        ? "border-red-500/50"
                        : "border-zinc-800"
                    }`}
                  >
                    <option value="">
                      Choose Revenue Model...
                    </option>

                    {businessModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>

                  {errors.businessModel && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.businessModel}
                    </p>
                  )}
                </div>

                {/* Stage */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <Rocket className="h-3.5 w-3.5 text-zinc-500" />
                    Current Startup Stage
                  </label>

                  <select
                    value={formData.stage}
                    onChange={(e) =>
                      handleInputChange(
                        "stage",
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500/20 ${
                      errors.stage
                        ? "border-red-500/50"
                        : "border-zinc-800"
                    }`}
                  >
                    <option value="">Choose Stage...</option>

                    {startupStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>

                  {errors.stage && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.stage}
                    </p>
                  )}
                </div>

                {/* Funding */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-300">
                    <DollarSign className="h-3.5 w-3.5 text-zinc-500" />
                    Funding Target / Capital Needed
                  </label>

                  <input
                    type="text"
                    value={formData.fundingGoal}
                    onChange={(e) =>
                      handleInputChange(
                        "fundingGoal",
                        e.target.value
                      )
                    }
                    placeholder="e.g. $150,000 for development or None for bootstrapped"
                    className={`w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-transparent focus:ring-2 ${
                      errors.fundingGoal
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "border-zinc-800 focus:ring-indigo-500/20"
                    }`}
                  />

                  {errors.fundingGoal && (
                    <p className="flex items-center gap-1 text-[11px] text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.fundingGoal}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="animate-fade-in space-y-6">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <MessageSquare className="h-5 w-5 text-indigo-400" />
                  Aesthetic & Positioning Style
                </h3>

                <p className="text-xs text-zinc-400">
                  Choose how your startup should be presented across
                  its generated business and investor materials.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {brandTones.map((tone) => {
                  const isSelected = formData.tone === tone.name

                  return (
                    <button
                      key={tone.name}
                      type="button"
                      onClick={() =>
                        handleInputChange("tone", tone.name)
                      }
                      className={`rounded-xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-indigo-500 bg-indigo-600/10 shadow-[0_0_15px_rgba(99,102,241,0.08)]"
                          : "border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="mb-1 flex items-center justify-between font-semibold text-sm text-white">
                        <span>{tone.name}</span>

                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                            isSelected
                              ? "border-indigo-500 bg-indigo-600 text-white"
                              : "border-zinc-800"
                          }`}
                        >
                          {isSelected && (
                            <Check className="h-3 w-3" />
                          )}
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-zinc-500">
                        {tone.desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              {errors.tone && (
                <p className="flex items-center gap-1 text-[11px] text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.tone}
                </p>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous Step
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/10 transition-all hover:from-indigo-500 hover:to-violet-500"
              >
                Next Step
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/10 transition-all hover:from-emerald-500 hover:to-indigo-500"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Generate Plan
              </button>
            )}
          </div>
        </form>
      )}

      {/* Generating State */}
      {isGenerating && (
        <div className="flex min-h-[450px] flex-col items-center justify-center space-y-6 p-8 text-center md:p-12">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-950 text-indigo-400 shadow-lg shadow-indigo-600/10">
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-indigo-400" />
            <Sparkles className="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">
              Assembling Startup Blueprint
            </h4>

            <p className="mx-auto max-w-md text-xs leading-relaxed text-zinc-400">
              Evaluating &quot;{formData.name}&quot; and compiling
              your market positioning, product strategy, financial
              assumptions, risks, and investor preparation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-zinc-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LaunchAI analysis pipeline running
          </div>
        </div>
      )}

      {/* Result Dashboard */}
      {step === 5 && !isGenerating && (
        <div className="animate-fade-in space-y-6 p-6 md:p-8">
          {/* Dashboard Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 pb-5 md:flex-row md:items-center">
            <div>
              <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Plan Generated Successfully
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                {formData.name} — Startup Plan
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Your initial LaunchAI business blueprint.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-700/50 bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white md:w-auto"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Build Another Plan
            </button>
          </div>

          {/* Dashboard */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Sidebar */}
            <div className="flex flex-col gap-1 border-zinc-800 md:col-span-1 md:border-r md:pr-4">
              <div className="mb-2 px-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Plan Sections
              </div>

              <button
                type="button"
                onClick={() => setActiveTab("summary")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "summary"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FileText className="h-4 w-4" />
                Exec Summary
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("market")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "market"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <Compass className="h-4 w-4" />
                Market Analysis
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("product")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "product"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <Layers className="h-4 w-4" />
                Product Blueprint
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("financials")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "financials"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                Financial Forecast
              </button>

              <div className="mt-4 border-t border-zinc-800/80 pt-4 md:mt-auto">
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "PDF export will be connected to the LaunchAI export pipeline."
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800 px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4 md:col-span-3">
              {/* Context Tags */}
              <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/60 pb-3">
                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[10px] font-semibold text-zinc-400">
                  Industry: {formData.industry}
                </span>

                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[10px] font-semibold text-zinc-400">
                  Country: {formData.country}
                </span>

                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[10px] font-semibold text-zinc-400">
                  Stage: {formData.stage}
                </span>
              </div>

              {/* Summary */}
              {activeTab === "summary" && (
                <div className="animate-fade-in space-y-5">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Elevator Pitch
                    </h4>

                    <p className="text-sm leading-relaxed text-zinc-300">
                      {formData.name} is a startup concept designed for{" "}
                      {formData.targetAudience} within the{" "}
                      {formData.industry} space. The core idea is:
                      &quot;{formData.idea}&quot;
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Problem & Opportunity
                    </h4>

                    <p className="text-sm leading-relaxed text-zinc-300">
                      The opportunity is to solve a meaningful problem
                      for {formData.targetAudience} through a focused
                      product or service. LaunchAI recommends validating
                      the strongest customer pain point before investing
                      heavily in development.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Business Direction
                    </h4>

                    <p className="text-sm leading-relaxed text-zinc-300">
                      The proposed business model is{" "}
                      {formData.businessModel}. The startup is currently
                      at the {formData.stage} stage, with an initial
                      budget of {formData.budget} and a funding target of{" "}
                      {formData.fundingGoal}.
                    </p>
                  </div>

                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                    <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-indigo-300">
                      <Sparkles className="h-4 w-4" />
                      LaunchAI Focus
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-400">
                      Start with customer validation, build the smallest
                      useful version of the product, measure real demand,
                      and use those results to refine your business model.
                    </p>
                  </div>
                </div>
              )}

              {/* Market */}
              {activeTab === "market" && (
                <div className="animate-fade-in space-y-5">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="font-mono text-[10px] font-semibold uppercase text-zinc-500">
                        Target Market
                      </div>

                      <div className="mt-2 text-sm font-bold text-white">
                        {formData.targetAudience}
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="font-mono text-[10px] font-semibold uppercase text-zinc-500">
                        Geography
                      </div>

                      <div className="mt-2 text-sm font-bold text-white">
                        {formData.country}
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <div className="font-mono text-[10px] font-semibold uppercase text-zinc-500">
                        Industry
                      </div>

                      <div className="mt-2 text-sm font-bold text-white">
                        {formData.industry}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Market Assessment
                    </h4>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4">
                        <div className="mb-1 font-semibold text-emerald-400">
                          Strength
                        </div>

                        <p className="text-xs leading-relaxed text-zinc-400">
                          A clearly defined target audience gives{" "}
                          {formData.name} a focused starting point for
                          customer discovery and early marketing.
                        </p>
                      </div>

                      <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4">
                        <div className="mb-1 font-semibold text-red-400">
                          Risk
                        </div>

                        <p className="text-xs leading-relaxed text-zinc-400">
                          The startup still needs evidence that the
                          target audience experiences the problem often
                          enough to pay for a solution.
                        </p>
                      </div>

                      <div className="rounded-xl border border-blue-500/20 bg-blue-950/10 p-4">
                        <div className="mb-1 font-semibold text-blue-400">
                          Opportunity
                        </div>

                        <p className="text-xs leading-relaxed text-zinc-400">
                          A focused launch in {formData.country} can help
                          the team learn quickly before expanding into
                          additional markets.
                        </p>
                      </div>

                      <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-4">
                        <div className="mb-1 font-semibold text-amber-400">
                          Competition
                        </div>

                        <p className="text-xs leading-relaxed text-zinc-400">
                          Existing alternatives should be mapped before
                          launch so the product has a clear reason for
                          customers to switch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product */}
              {activeTab === "product" && (
                <div className="animate-fade-in space-y-5">
                  <div>
                    <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      MVP Priorities
                    </h4>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
                        <div className="mt-0.5 rounded-full bg-indigo-500/10 p-1.5 text-indigo-400">
                          <Check className="h-3.5 w-3.5" />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            Solve the core problem
                          </div>

                          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                            Build the smallest feature set that directly
                            addresses the problem described in the startup
                            idea.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
                        <div className="mt-0.5 rounded-full bg-indigo-500/10 p-1.5 text-indigo-400">
                          <Check className="h-3.5 w-3.5" />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            Make the value proposition obvious
                          </div>

                          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                            The product should make it immediately clear
                            why {formData.targetAudience} would choose it
                            over existing alternatives.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
                        <div className="mt-0.5 rounded-full bg-indigo-500/10 p-1.5 text-indigo-400">
                          <Check className="h-3.5 w-3.5" />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            Measure user behaviour
                          </div>

                          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                            Track activation, repeat usage, conversion,
                            and customer feedback from the earliest
                            version.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Product Positioning
                    </h4>

                    <p className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-400">
                      Position {formData.name} as a focused solution for{" "}
                      {formData.targetAudience}, using a{" "}
                      {formData.tone.toLowerCase()} communication style
                      and a {formData.businessModel.toLowerCase()} revenue
                      model.
                    </p>
                  </div>
                </div>
              )}

              {/* Financials */}
              {activeTab === "financials" && (
                <div className="animate-fade-in space-y-5">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Funding Target
                    </div>

                    <div className="mt-2 text-xl font-bold text-white">
                      {formData.fundingGoal}
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                      Initial planning should keep spending aligned with
                      the startup stage and available capital.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Suggested Capital Allocation
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-zinc-400">
                            Product Development
                          </span>

                          <span className="font-semibold text-indigo-400">
                            40%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-zinc-400">
                            Marketing & Acquisition
                          </span>

                          <span className="font-semibold text-indigo-400">
                            25%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: "25%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-zinc-400">
                            Operations
                          </span>

                          <span className="font-semibold text-indigo-400">
                            20%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: "20%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-zinc-400">
                            Reserve & Experimentation
                          </span>

                          <span className="font-semibold text-indigo-400">
                            15%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: "15%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <div className="mb-1 text-xs font-semibold text-amber-400">
                      Financial Note
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-400">
                      These percentages are planning assumptions, not
                      financial forecasts. Actual spending should be
                      adjusted after validating customer demand and
                      development costs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}