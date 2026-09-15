import React from "react"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import IdeaWizard from "@/components/layout/IdeaWizard"

export const metadata = {
  title: "Startup Plan Wizard - LaunchAI",
  description: "Configure your startup idea to generate a structured, investor-ready business plan."
}

export default function WizardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden">
        <div className="absolute -top-[100px] left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute -top-[50px] right-1/3 w-[250px] h-[250px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded bg-zinc-900 border border-zinc-800">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <span className="font-bold text-sm text-zinc-300">LaunchAI Wizard</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16 relative">
        <div className="w-full max-w-3xl text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
            Startup Idea Configurator
          </h1>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Answer a few quick questions about your project concept to structure your startup plan metrics.
          </p>
        </div>

        <IdeaWizard />
      </main>

      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-[10px] text-zinc-600">
        &copy; {new Date().getFullYear()} LaunchAI. Sandbox Mode (Milestone 2).
      </footer>
    </div>
  )
}
