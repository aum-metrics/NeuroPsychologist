"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Heart, Target, Palette, Briefcase, ArrowRight, BookOpen, Lock, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { STREAMS, Stream } from "@/lib/data/streams";
import { EXAMS } from "@/lib/data/exams";
import { SCHOLARSHIPS } from "@/lib/data/scholarships";
import { StreamDetail } from "./StreamDetail";
import { useLanguage } from "@/lib/context/LanguageContext";

// Archetype Data
const ARCHETYPES = [
    {
        id: "tech",
        title: "The Tech Innovator",
        desc: "Engineers, Architects, Scientists. Builders of the Future.",
        icon: Zap,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-800",
        stats: { logic: 10, empathy: 4, creativity: 8 },
        statLabels: ["Logic", "Build", "Future"]
    },
    {
        id: "medical",
        title: "The Medical Specialist",
        desc: "Doctors, Biologists, Psychologists. Guardians of Health.",
        icon: Heart,
        color: "text-red-500",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-800",
        stats: { logic: 7, empathy: 10, creativity: 5 },
        statLabels: ["Empathy", "Care", "Biology"]
    },
    {
        id: "management",
        title: "The Leader",
        desc: "Managers, Lawyers, Officers. Decision Makers.",
        icon: Target,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-800",
        stats: { logic: 8, empathy: 8, creativity: 4 },
        statLabels: ["Strategy", "Speech", "Power"]
    },
    {
        id: "creative",
        title: "The Creator",
        desc: "Designers, Writers, Artists. Visionaries.",
        icon: Palette,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-950/30",
        border: "border-purple-200 dark:border-purple-800",
        stats: { logic: 4, empathy: 9, creativity: 10 },
        statLabels: ["Vision", "Art", "Style"]
    },
    {
        id: "commerce",
        title: "The Financier",
        desc: "CA, B.Com, Investment Bankers. Masters of Capital.",
        icon: Briefcase,
        color: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-800",
        stats: { logic: 9, empathy: 3, creativity: 6 },
        statLabels: ["Math", "Money", "Profit"]
    }
];

export function ArchetypeSelector() {
    const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);
    const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
    const { language, t } = useLanguage();

    const filteredStreams = selectedArchetype
        ? STREAMS.filter(s => s.archetype === selectedArchetype)
        : [];

    // Filter exams that are relevant to the selected archetype's streams
    const filteredExams = selectedArchetype
        ? EXAMS.filter(e => e.streams.some(streamId => filteredStreams.some(s => s.id === streamId)))
        : [];

    // Show top scholarships for everyone for now, as they are generally applicable
    const filteredScholarships = SCHOLARSHIPS;

    return (
        <div className="w-full space-y-12">
            {!selectedArchetype ? (
                /* SCREEN 1: SELECT CHARACTER */
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-lg py-1 px-4 border-primary/50 text-foreground animate-pulse">
                            {t("archetype.step1")}
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground">
                            {t("archetype.title")}
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {t("archetype.subtitle")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {ARCHETYPES.map((arch) => (
                            <motion.div
                                key={arch.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedArchetype(arch.id)}
                                className={`cursor-pointer rounded-2xl border-2 ${arch.border} ${arch.bg} p-6 flex flex-col items-center text-center transition-all hover:shadow-xl relative overflow-hidden group`}
                            >
                                <div className={`p-4 rounded-full bg-background mb-4 group-hover:bg-foreground/5 transition-colors`}>
                                    <arch.icon className={`w-10 h-10 ${arch.color}`} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">{arch.title}</h3>
                                <p className="text-xs text-muted-foreground mb-4">{arch.desc}</p>

                                {/* Mini Stats Visualization */}
                                <div className="w-full space-y-2 mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-1 text-[10px]">
                                        <Terminal className="w-3 h-3" /> {(arch as any).statLabels[0]}
                                        <div className="h-1 flex-1 bg-background rounded-full overflow-hidden">
                                            <div className="h-full bg-foreground" style={{ width: `${arch.stats.logic * 10}%` }} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px]">
                                        <Heart className="w-3 h-3" /> {(arch as any).statLabels[1]}
                                        <div className="h-1 flex-1 bg-background rounded-full overflow-hidden">
                                            <div className="h-full bg-foreground" style={{ width: `${arch.stats.empathy * 10}%` }} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px]">
                                        <Palette className="w-3 h-3" /> {(arch as any).statLabels[2]}
                                        <div className="h-1 flex-1 bg-background rounded-full overflow-hidden">
                                            <div className="h-full bg-foreground" style={{ width: `${arch.stats.creativity * 10}%` }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                /* SCREEN 2: QUEST MAP (Cohesive Dashboard) */
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="flex items-center justify-between border-b pb-6">
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" onClick={() => setSelectedArchetype(null)} className="h-10 w-10 p-0 rounded-full border">
                                ←
                            </Button>
                            <div>
                                <h2 className="text-3xl font-black font-heading">
                                    {ARCHETYPES.find(a => a.id === selectedArchetype)?.title}
                                </h2>
                                <p className="text-muted-foreground text-sm">{t("archetype.roadmap")}</p>
                            </div>
                        </div>
                        <Badge className={`text-lg py-1 px-4 ${ARCHETYPES.find(a => a.id === selectedArchetype)?.bg} ${ARCHETYPES.find(a => a.id === selectedArchetype)?.color} border-current`}>
                            {t("archetype.active")}
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT COL: THE PATHS (Streams) - 6 Cols */}
                        <div className="lg:col-span-6 space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-primary" />
                                {t("archetype.paths")}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {filteredStreams.map((stream, idx) => {
                                    const title = language === 'ta' ? stream.title_ta || stream.title : stream.title;
                                    const overview = language === 'ta' ? stream.overview_ta || stream.overview : stream.overview;
                                    return (
                                        <motion.div
                                            key={stream.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            onClick={() => setSelectedStream(stream)}
                                            className="group relative bg-card hover:bg-accent/5 rounded-xl border border-border p-5 cursor-pointer hover:shadow-md transition-all flex justify-between items-center"
                                        >
                                            <div>
                                                <h4 className="font-bold text-lg">{title}</h4>
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{overview}</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>

                        {/* RIGHT COL: BOSS BATTLES & LOOT - 6 Cols */}
                        <div className="lg:col-span-6 space-y-8">

                            {/* BOSS BATTLES (Exams) */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-red-600 dark:text-red-400">
                                    <Lock className="w-5 h-5" />
                                    {t("archetype.boss")}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {filteredExams.map((exam) => {
                                        const title = language === 'ta' ? exam.title_ta || exam.title : exam.title;
                                        const date = language === 'ta' ? exam.examDate_ta || exam.examDate : exam.examDate;
                                        return (
                                            <div key={exam.id} className="p-3 border rounded-lg bg-red-50/50 dark:bg-red-950/10 border-red-100 dark:border-red-900/30">
                                                <div className="font-bold text-sm">{title}</div>
                                                <div className="text-[10px] text-muted-foreground mt-1">
                                                    {date}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {filteredExams.length === 0 && (
                                        <div className="text-sm text-muted-foreground italic col-span-2">{t("archetype.noExams")}</div>
                                    )}
                                </div>
                            </div>

                            {/* POWER UPS (Scholarships) */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                    <Zap className="w-5 h-5" />
                                    {t("archetype.powerups")}
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {filteredScholarships.slice(0, 3).map((sch) => {
                                        const title = language === 'ta' ? sch.title_ta || sch.title : sch.title;
                                        const amount = language === 'ta' ? sch.amount_ta || sch.amount : sch.amount;
                                        return (
                                            <div key={sch.id} className="p-3 border rounded-lg bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-900/30 flex justify-between items-center">
                                                <div>
                                                    <div className="font-bold text-sm text-emerald-900 dark:text-emerald-100">{title}</div>
                                                    <div className="text-[10px] text-muted-foreground">{amount}</div>
                                                </div>
                                                <Badge variant="outline" className="bg-background text-[10px] h-5">{t("archetype.claim")}</Badge>
                                            </div>
                                        );
                                    })}
                                    <div className="text-xs text-center text-muted-foreground pt-2">
                                        + {Math.max(0, filteredScholarships.length - 3)} {t("archetype.more")}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}

            {/* Stream Detail Modal */}
            <StreamDetail
                stream={selectedStream}
                open={!!selectedStream}
                onClose={() => setSelectedStream(null)}
            />
        </div>
    );
}
