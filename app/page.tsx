"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Map, Target, Calculator } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArchetypeSelector } from "@/components/modules/ArchetypeSelector";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function Home() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 space-y-8">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-primary/50 relative overflow-hidden"
      >
        <div className="relative w-20 h-20">
          <Image
            src="/logo.png"
            alt="FutureMap Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-foreground">
          {t("landing.title")} <span className="text-primary">{t("landing.titleSuffix")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          {t("landing.subtitle")}
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
            {t("landing.cta_archetype")}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t("landing.cta_archetype_desc")}
          </p>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => router.push('/modules/grade8')}>
            {t("landing.cta_archetype_btn")}
          </Button>
        </div>

        {/* ROI Calculator */}
        <div className="bg-card/50 backdrop-blur border border-border p-6 rounded-xl text-left hover:border-primary/50 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calculator className="w-24 h-24" />
          </div>
          <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-green-600" />
            {t("landing.cta_roi")}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t("landing.cta_roi_desc")}
          </p>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => router.push('/tools/roi')}>
            {t("landing.cta_roi_btn")}
          </Button>
        </div>
      </div>



    </div>
  );
}
