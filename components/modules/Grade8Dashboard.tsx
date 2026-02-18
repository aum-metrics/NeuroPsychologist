"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, ArrowRight, Target, Brain, Heart, Zap, Award, LucideIcon } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";




interface QuestionOption {
    text: string;
    score: Record<string, number>;
}

interface Question {
    text: string;
    options: QuestionOption[];
}

interface Stage {
    id: string;
    title: string;
    desc: string;
    questions: Question[];
}

interface DiagnosticResult {
    title: string;
    coreArchetype: string;
    desc: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    strategy: {
        math: string;
        read: string;
        code: string;
        habit: string;
    };
}

export function Grade8Dashboard() {
    const { t } = useLanguage();

    const STAGES: Stage[] = [
        // ... (this part is fine, skipping lines for brevity if using ReplaceFileContent on smaller chunks, but MultiReplace requires precision)
    ];
    // I need to be careful not to delete the STAGES content I just added.
    // The previous tool call inserted STAGES.
    // I will target the useState line instead.

    const [started, setStarted] = useState(false);
    const [currentStage, setCurrentStage] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({ eng: 0, med: 0, art: 0, des: 0, law: 0, mgmt: 0, sci: 0, gov: 0, com: 0 });
    const [result, setResult] = useState<DiagnosticResult | null>(null);

    const handleAnswer = (scoreUpdate: Record<string, number | undefined>) => {
        const newScores = { ...scores };
        Object.keys(scoreUpdate).forEach(key => {
            const val = scoreUpdate[key];
            if (val !== undefined && key in newScores) {
                newScores[key as keyof typeof scores] += val;
            }
        });
        setScores(newScores);

        const stage = STAGES[currentStage];
        if (currentQ < stage.questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            if (currentStage < STAGES.length - 1) {
                setCurrentStage(currentStage + 1);
                setCurrentQ(0);
            } else {
                calculateResult(newScores);
            }
        }
    };

    const calculateResult = (finalScores: Record<string, number>) => {
        // Find top 2
        const sorted = Object.entries(finalScores).sort((a, b) => b[1] - a[1]);
        const top1 = sorted[0][0];

        const pathMap: Record<string, DiagnosticResult> = {
            eng: {
                title: t("diagnostics.results.eng.title"),
                coreArchetype: "tech",
                desc: t("diagnostics.results.eng.desc"),
                icon: Zap, color: "text-blue-600", bg: "bg-blue-50",
                strategy: {
                    math: t("diagnostics.results.eng.strategy.math"),
                    read: t("diagnostics.results.eng.strategy.read"),
                    code: t("diagnostics.results.eng.strategy.code"),
                    habit: t("diagnostics.results.eng.strategy.habit")
                }
            },
            med: {
                title: t("diagnostics.results.med.title"),
                coreArchetype: "medical",
                desc: t("diagnostics.results.med.desc"),
                icon: Heart, color: "text-red-600", bg: "bg-red-50",
                strategy: {
                    math: t("diagnostics.results.med.strategy.math"),
                    read: t("diagnostics.results.med.strategy.read"),
                    code: t("diagnostics.results.med.strategy.code"),
                    habit: t("diagnostics.results.med.strategy.habit")
                }
            },
            des: {
                title: t("diagnostics.results.des.title"),
                coreArchetype: "creative",
                desc: t("diagnostics.results.des.desc"),
                icon: Palette, color: "text-purple-600", bg: "bg-purple-50",
                strategy: {
                    math: t("diagnostics.results.des.strategy.math"),
                    read: t("diagnostics.results.des.strategy.read"),
                    code: t("diagnostics.results.des.strategy.code"),
                    habit: t("diagnostics.results.des.strategy.habit")
                }
            },
            mgmt: {
                title: t("diagnostics.results.mgmt.title"),
                coreArchetype: "management",
                desc: t("diagnostics.results.mgmt.desc"),
                icon: Target, color: "text-orange-600", bg: "bg-orange-50",
                strategy: {
                    math: t("diagnostics.results.mgmt.strategy.math"),
                    read: t("diagnostics.results.mgmt.strategy.read"),
                    code: t("diagnostics.results.mgmt.strategy.code"),
                    habit: t("diagnostics.results.mgmt.strategy.habit")
                }
            },
            law: {
                title: t("diagnostics.results.law.title"),
                coreArchetype: "management",
                desc: t("diagnostics.results.law.desc"),
                icon: Gavel, color: "text-yellow-600", bg: "bg-yellow-50",
                strategy: {
                    math: t("diagnostics.results.law.strategy.math"),
                    read: t("diagnostics.results.law.strategy.read"),
                    code: t("diagnostics.results.law.strategy.code"),
                    habit: t("diagnostics.results.law.strategy.habit")
                }
            },
            gov: {
                title: t("diagnostics.results.gov.title"),
                coreArchetype: "management",
                desc: t("diagnostics.results.gov.desc"),
                icon: Landmark, color: "text-green-600", bg: "bg-green-50",
                strategy: {
                    math: t("diagnostics.results.gov.strategy.math"),
                    read: t("diagnostics.results.gov.strategy.read"),
                    code: t("diagnostics.results.gov.strategy.code"),
                    habit: t("diagnostics.results.gov.strategy.habit")
                }
            },
            com: {
                title: t("diagnostics.results.com.title"),
                coreArchetype: "commerce",
                desc: t("diagnostics.results.com.desc"),
                icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50",
                strategy: {
                    math: t("diagnostics.results.com.strategy.math"),
                    read: t("diagnostics.results.com.strategy.read"),
                    code: t("diagnostics.results.com.strategy.code"),
                    habit: t("diagnostics.results.com.strategy.habit")
                }
            },
            sci: {
                title: t("diagnostics.results.sci.title"),
                coreArchetype: "tech",
                desc: t("diagnostics.results.sci.desc"),
                icon: Brain, color: "text-cyan-600", bg: "bg-cyan-50",
                strategy: {
                    math: t("diagnostics.results.sci.strategy.math"),
                    read: t("diagnostics.results.sci.strategy.read"),
                    code: t("diagnostics.results.sci.strategy.code"),
                    habit: t("diagnostics.results.sci.strategy.habit")
                }
            },
            art: {
                title: t("diagnostics.results.art.title"),
                coreArchetype: "creative",
                desc: t("diagnostics.results.art.desc"),
                icon: Feather, color: "text-pink-600", bg: "bg-pink-50",
                strategy: {
                    math: t("diagnostics.results.art.strategy.math"),
                    read: t("diagnostics.results.art.strategy.read"),
                    code: t("diagnostics.results.art.strategy.code"),
                    habit: t("diagnostics.results.art.strategy.habit")
                }
            }
        };

        setResult(pathMap[top1] || pathMap['eng']);
    };

    // Import icons locally to avoid error
    const Palette = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>;
    const Gavel = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" /><path d="m16 16 6-6" /><path d="m8 8 6-6" /><path d="m9 7 8 8" /><path d="m21 11-8-8" /></svg>;
    const Feather = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" x2="2" y1="8" y2="22" /><line x1="17.5" x2="9" y1="15" y2="15" /></svg>;
    const Landmark = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" x2="21" y1="22" y2="22" /><line x1="6" x2="6" y1="18" y2="11" /><line x1="10" x2="10" y1="18" y2="11" /><line x1="14" x2="14" y1="18" y2="11" /><line x1="18" x2="18" y1="18" y2="11" /><polygon points="12 2 20 7 4 7" /></svg>;
    const Briefcase = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;

    if (!started) {
        return (
            <Card className="max-w-2xl mx-auto mt-8 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="text-center pb-2">
                    <Badge variant="secondary" className="mb-4 w-fit mx-auto px-4 py-1">{t("diagnostics.badge")}</Badge>
                    <CardTitle className="text-4xl font-heading font-black text-primary">{t("diagnostics.title")}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                        {t("diagnostics.subtitle")}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center pt-6">
                    <Button size="lg" className="px-8 text-lg rounded-full h-14" onClick={() => setStarted(true)}>
                        {t("diagnostics.start")} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </CardFooter>
            </Card>
        );
    }

    if (result) {
        const Icon = result.icon;
        const S = result.strategy;

        return (
            <div className="max-w-3xl mx-auto space-y-6 relative z-[50]">
                <Card className={`border-2 ${result.bg} border-opacity-50 bg-white dark:bg-zinc-900 shadow-xl`}>
                    <CardHeader className="text-center">
                        <Badge className="w-fit mx-auto mb-2 bg-primary text-white">{t("diagnostics.complete")}</Badge>
                        <CardTitle className="text-2xl text-muted-foreground">{t("diagnostics.profile")}</CardTitle>
                        <h2 className={`text-5xl font-heading font-black mt-2 ${result.color} flex items-center justify-center gap-3`}>
                            <Icon className="w-12 h-12" />
                            {result.title}
                        </h2>
                        <Badge variant="outline" className="mt-2 text-xs uppercase tracking-widest opacity-70">
                            {t("diagnostics.archetype")}: {result.coreArchetype.replace("tech", "Tech Innovator").replace("medical", "Medical Specialist").replace("management", "Leader").replace("creative", "Creator").replace("commerce", "Financier")}
                        </Badge>
                        <p className="text-xl font-medium mt-2 text-foreground/80">{result.desc}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Strategic Engine - CUSTOMIZED */}
                        <div className="bg-background/80 backdrop-blur p-6 rounded-xl border border-border shadow-sm">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <Target className="w-6 h-6 text-red-600" />
                                {t("diagnostics.foundation")}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-3 rounded-lg border bg-background">
                                    <div className="text-sm font-bold text-muted-foreground uppercase mb-1 flex items-center gap-2">
                                        <Zap className="w-3 h-3" /> {t("diagnostics.math")}
                                    </div>
                                    <p className="text-sm font-medium">{S.math}</p>
                                </div>
                                <div className="p-3 rounded-lg border bg-background">
                                    <div className="text-sm font-bold text-muted-foreground uppercase mb-1 flex items-center gap-2">
                                        <Brain className="w-3 h-3" /> {t("diagnostics.read")}
                                    </div>
                                    <p className="text-sm font-medium">{S.read}</p>
                                </div>
                                <div className="p-3 rounded-lg border bg-background">
                                    <div className="text-sm font-bold text-muted-foreground uppercase mb-1 flex items-center gap-2">
                                        <Award className="w-3 h-3" /> {t("diagnostics.tech")}
                                    </div>
                                    <p className="text-sm font-medium">{S.code}</p>
                                </div>
                                <div className="p-3 rounded-lg border bg-background">
                                    <div className="text-sm font-bold text-muted-foreground uppercase mb-1 flex items-center gap-2">
                                        <Heart className="w-3 h-3" /> {t("diagnostics.habit")}
                                    </div>
                                    <p className="text-sm font-medium">{S.habit}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button variant="outline" onClick={() => { setStarted(false); setCurrentStage(0); setCurrentQ(0); setScores({ eng: 0, med: 0, art: 0, des: 0, law: 0, mgmt: 0, sci: 0, gov: 0, com: 0 }); setResult(null); }}>
                                <RefreshCcw className="w-4 h-4 mr-2" /> {t("diagnostics.recalibrate")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const stage = STAGES[currentStage];
    const q = stage.questions[currentQ];

    return (
        <Card className="max-w-2xl mx-auto mt-8 shadow-lg">
            <CardHeader className="text-center pb-2">
                <Badge variant="outline" className="mb-2 w-fit mx-auto border-primary/30 text-primary">{stage.title}</Badge>
                <div className="w-full bg-muted h-2 rounded-full mb-4 overflow-hidden">
                    <div
                        className="bg-primary h-full transition-all duration-500"
                        style={{ width: `${((currentStage * 2 + currentQ) / 4) * 100}%` }}
                    />
                </div>
                <CardTitle className="text-xl">{q.text}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-3">
                    <AnimatePresence mode="wait">
                        {q.options.map((opt, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full justify-start h-auto py-4 text-left hover:bg-primary/5 hover:border-primary/50 text-wrap"
                                    onClick={() => handleAnswer(opt.score)}
                                >
                                    <div className="font-medium">{opt.text}</div>
                                </Button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    );
}
