"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Map, AlertTriangle, BookOpen, Search, Target, Calculator } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArchetypeSelector } from "@/components/modules/ArchetypeSelector";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 space-y-8">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-primary/50"
      >
        <Map className="w-12 h-12 text-primary" />
      </motion.div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground">
          FutureMap <span className="text-primary">Tamil Nadu</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          The Definitive Career Navigation System for Tamil Nadu Students.
        </p>
      </div>

      {/* HERO: Archetype Selector (Gamified) */}
      <div className="w-full max-w-6xl px-4 z-10">
        <ArchetypeSelector />
      </div>

      {/* SIDE QUESTS: Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4 mt-12">
        {/* Diagnostics */}
        <div className="bg-card/50 backdrop-blur border border-border p-6 rounded-xl text-left hover:border-primary/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-24 h-24" />
          </div>
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-red-600" />
            Side Quest: Diagnostics
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which character to pick? Take the 2-minute DNA test.
          </p>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => router.push('/modules/grade8')}>
            Start Validated Test
          </Button>
        </div>

        {/* ROI Calculator */}
        <div className="bg-card/50 backdrop-blur border border-border p-6 rounded-xl text-left hover:border-primary/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calculator className="w-24 h-24" />
          </div>
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-green-600" />
            Side Quest: ROI Check
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Calculate family budget vs. college fees. Don't go in blind.
          </p>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => router.push('/tools/roi')}>
            Open Calculator
          </Button>
        </div>
      </div>



    </div>
  );
}
