"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 space-y-8">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4 ring-1 ring-indigo-500/50"
      >
        <Brain className="w-10 h-10 text-indigo-400" />
      </motion.div>

      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground">
          NeuroPath <span className="text-primary">India</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Not Career Advice. A Life Navigation System for the Chennai Student.
        </p>
      </div>

      <div className="bg-muted/50 border border-border p-6 rounded-2xl max-w-xl text-sm text-muted-foreground leading-relaxed text-left">
        <p className="mb-4">
          <AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" />
          <strong className="text-foreground">Warning:</strong> This system is brutally honest. It will tell you about:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The <span className="text-foreground">10-15 year timeline</span> you are signing up for.</li>
          <li>Why <span className="text-foreground">95% of Psychology graduates</span> don't become Clinical Neuropsychologists.</li>
          <li>The <span className="text-foreground">RCI Licensing bottleneck</span> that coaching centers hide.</li>
          <li>The <span className="text-foreground">Cost vs Reality</span> in Chennai.</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <Button
          size="lg"
          className="rounded-full px-8 text-lg h-14"
          onClick={() => router.push('/reality-check')}
        >
          Start The Simulation <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-12">
        Optimized for Class 8 - 12 Students | Chennai Edition
      </p>

    </div>
  );
}
