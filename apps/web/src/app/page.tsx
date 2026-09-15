"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Wand2, LayoutTemplate, Zap, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { useHistoryStore } from "@/stores/history-store";

const FEATURES = [
  {
    icon: Wand2,
    title: "4 Prompt Variations",
    description: "Generate Professional, Creative, Concise, and Technical prompts simultaneously.",
    color: "from-purple-500 to-indigo-400",
  },
  {
    icon: Zap,
    title: "SSE Streaming",
    description: "Real-time streaming results powered by Gemini 2.5 Flash.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: LayoutTemplate,
    title: "Smart Templates",
    description: "8 pre-built templates for Marketing, Code, Academic, and more.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Shield,
    title: "Refinement Chat",
    description: "Iteratively improve prompts with natural language instructions.",
    color: "from-orange-500 to-amber-400",
  },
];

const FeatureCard = React.memo(({ feature, index }: { feature: typeof FEATURES[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group glass rounded-xl p-6 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
  >
    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg shadow-purple-500/10`}>
      <feature.icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-base font-semibold text-white mb-2">
      {feature.title}
    </h3>
    <p className="text-sm text-white/50 leading-relaxed">
      {feature.description}
    </p>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

export default function HomePage() {
  const { items } = useHistoryStore();
  const recentItems = useMemo(() => items.slice(0, 3), [items]);

  return (
    <>
      <Navbar />
      <CommandPalette />

      <main className="relative min-h-screen overflow-hidden">
        {/* Background orbs - using will-change for GPU acceleration */}
        <div className="orb orb-purple w-[500px] h-[500px] -top-32 -left-32 animate-float will-change-transform" />
        <div className="orb orb-indigo w-[400px] h-[400px] top-1/3 -right-20 animate-float will-change-transform" style={{ animationDelay: "2s" }} />
        <div className="orb orb-pink w-[300px] h-[300px] bottom-20 left-1/4 animate-float will-change-transform" style={{ animationDelay: "4s" }} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
                <Sparkles className="h-4 w-4" />
                Powered by Gemini 2.5 Flash
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                <span className="gradient-text">Master the Art</span>
                <br />
                <span className="text-white">of Prompting</span>
              </h1>

              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
                Transform vague ideas into perfectly engineered AI prompts.
                Generate, refine, and compare 4 optimized variations in seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/generate">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-8 py-4 rounded-xl
                      bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold
                      shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 glow-button text-lg"
                  >
                    Start Generating
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/templates">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 rounded-xl
                      bg-white/5 border border-white/10 text-white/70 font-semibold
                      hover:bg-white/10 hover:text-white transition-all text-lg"
                  >
                    <LayoutTemplate className="h-5 w-5" />
                    Browse Templates
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {FEATURES.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent Generations */}
        {recentItems.length > 0 && (
          <section className="relative py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Generations</h2>
              <div className="space-y-3">
                {recentItems.map((item) => (
                  <Link key={item.id} href="/generate">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="glass rounded-xl p-4 flex items-center justify-between group hover:border-purple-500/20 transition-colors cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/80 truncate">{item.prompt}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300">
                              {tag}
                            </span>
                          ))}
                          <span className="text-xs text-white/30">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-purple-400 transition-colors" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="relative py-8 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center text-sm text-white/30">
            Built with Next.js 14, Express, and Gemini 2.5 Flash • PromptCraft
          </div>
        </footer>
      </main>
    </>
  );
}
