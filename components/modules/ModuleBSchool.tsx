"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import {
    Backpack,
    Dna,
    Calculator,
    BookOpen,
    Brain,
    CheckCircle2,
    XCircle,
    ArrowRight
} from "lucide-react";

export function ModuleBSchool() {
    const router = useRouter();

    // State for readiness score
    const [readinessScore, setReadinessScore] = useState(0);

    // State for checklist items status
    const [checklistItems, setChecklistItems] = useState({
        biology: false,
        maths: false,
        reading: false,
        grit: false
    });

    const toggleItem = (key: keyof typeof checklistItems) => {
        setChecklistItems(prev => {
            const newState = { ...prev, [key]: !prev[key] };
            // Recalculate score
            const activeCount = Object.values(newState).filter(Boolean).length;
            setReadinessScore(activeCount * 25);
            return newState;
        });
    };

    const handlePassGate = () => {
        if (readinessScore >= 100) {
            router.push('/modules/streams');
        }
    };

    return (
        <div className="space-y-12 max-w-4xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">Module B: The School Years (Gr 8-10)</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Ignore the Noise.
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    At this age, coaching centers will sell you "Foundation Courses".
                    <span className="text-foreground font-medium"> Don't buy them.</span> Here is what actually matters.
                </p>
            </section>

            {/* Interactive Backpack Checklist */}
            <section className="bg-muted/30 p-8 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Backpack className="w-5 h-5 text-primary" />
                            The Mandatory Backpack
                        </h3>
                        <p className="text-sm text-muted-foreground">Select items you are actively building. Reach 100%.</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="text-right">
                            <span className="block text-2xl font-bold text-primary">{readinessScore}%</span>
                            <span className="text-xs text-muted-foreground">Readiness</span>
                        </div>
                        <Progress value={readinessScore} className="w-24 h-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.keys(checklistItems).map((k) => {
                        const key = k as keyof typeof checklistItems;
                        const isActive = checklistItems[key];

                        return (
                            <motion.div whileTap={{ scale: 0.95 }} key={key} onClick={() => toggleItem(key)}>
                                <Card className={`cursor-pointer transition-all border ${isActive ? 'bg-primary/10 border-primary' : 'bg-card border-border hover:border-primary/30'}`}>
                                    <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                                        {key === 'biology' && <Dna className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'maths' && <Calculator className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'reading' && <BookOpen className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'grit' && <Brain className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}

                                        <div>
                                            <h4 className={`font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {key === 'biology' ? 'Biology Fundamentals' :
                                                    key === 'maths' ? 'Basic Maths & Stats' :
                                                        key === 'reading' ? 'Reading Endurance' : 'Emotional Resilience'}
                                            </h4>
                                        </div>
                                        {isActive && <CheckCircle2 className="w-4 h-4 text-primary absolute top-2 right-2" />}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* The Distraction List */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-destructive/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-destructive">
                            <XCircle className="w-5 h-5" />
                            Ignore These (Distractions)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-destructive font-bold">×</span> Expensive "Psychology Summer Camps" (Scams)</li>
                            <li className="flex gap-2"><span className="text-destructive font-bold">×</span> Random "Olympiads" that nobody recognizes.</li>
                            <li className="flex gap-2"><span className="text-destructive font-bold">×</span> Obsessing over "Clinical Disorders" (Too early).</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-card border-emerald-500/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-5 h-5" />
                            Do These Instead (Chennai)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Visit the <strong>Birla Planetarium</strong> (Science interest).</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Read <em>"The Man Who Mistook His Wife for a Hat"</em> (Oliver Sacks).</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Volunteer at an NGO like <strong>The Banyan</strong> (if age permits).</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <div className="flex justify-center pt-8">
                <Button
                    size="lg"
                    disabled={readinessScore < 100}
                    onClick={handlePassGate}
                    className={readinessScore < 100 ? "opacity-50" : ""}
                >
                    {readinessScore < 100 ? `Complete All Items (${readinessScore}%)` : "Enter Decision Gate"}
                    {readinessScore === 100 && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
            </div>

        </div>
    );
}
