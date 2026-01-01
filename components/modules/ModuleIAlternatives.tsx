"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, User, Wallet, Brain, Clock, ChevronRight, Check, Target, Briefcase, DollarSign, AlertCircle, ArrowRight } from "lucide-react";
import { CAREER_BRANCHES } from "@/lib/data/branches";
import { useRouter } from "next/navigation";

export function ModuleIAlternatives() {
    const router = useRouter();
    const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

    const selectedBranch = CAREER_BRANCHES.find(b => b.id === selectedBranchId);

    return (
        <div className="space-y-8 max-w-7xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <div className="flex justify-center">
                    <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30">Module I: The Pivot Map</Badge>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Changing Direction is Not Failure.
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    It is information. If the clinical path feels too long, too risky, or too expensive,
                    you have 7 other valid paths.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">

                {/* Left Column: Branch List */}
                <div className="lg:col-span-5 space-y-3">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Select A Path To Explore</h3>
                    {CAREER_BRANCHES.map((branch) => (
                        <div
                            key={branch.id}
                            onClick={() => setSelectedBranchId(branch.id)}
                            className={`cursor-pointer group p-4 rounded-xl border transition-all duration-200 relative overflow-hidden ${selectedBranchId === branch.id ? 'bg-primary/10 border-primary' : 'bg-card border-border hover:border-primary/50'}`}
                        >
                            <div className="flex items-center justify-between relative z-10">
                                <div>
                                    <h4 className={`font-bold ${selectedBranchId === branch.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{branch.title}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Badge variant="secondary" className="text-[10px] h-5 bg-muted text-muted-foreground">{branch.yearsToMaster} Years</Badge>
                                        <Badge variant="secondary" className="text-[10px] h-5 bg-muted text-muted-foreground">{branch.salaryPotential}</Badge>
                                    </div>
                                </div>
                                <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${selectedBranchId === branch.id ? 'translate-x-1 text-primary' : ''}`} />
                            </div>
                            {selectedBranchId === branch.id && (
                                <motion.div layoutId="highlight" className="absolute inset-0 bg-primary/5 z-0" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column: Detailed View */}
                <div className="lg:col-span-7">
                    <AnimatePresence mode="wait">
                        {selectedBranch ? (
                            <motion.div
                                key={selectedBranch.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-card border-border flex flex-col shadow-sm">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <GitBranch className="w-6 h-6" />
                                            </div>
                                            <Badge>{selectedBranch.id === "clinical_psych" ? "Original Plan" : "Strategic Pivot"}</Badge>
                                        </div>
                                        <CardTitle className="text-2xl text-foreground">{selectedBranch.title}</CardTitle>
                                        {/* Using div instead of CardDescription inside CardTitle related context if needed, but here it is separate */}
                                        <p className="text-base text-muted-foreground mt-2">{selectedBranch.description}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-6 flex-1">

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 bg-muted/50 rounded-lg border border-border">
                                                <div className="flex items-center gap-2 text-muted-foreground mb-1 text-xs uppercase font-bold">
                                                    <Clock className="w-3 h-3" /> Age at Finish
                                                </div>
                                                <div className="text-lg font-bold text-foreground">~{22 + parseInt(selectedBranch.yearsToMaster)}</div>
                                            </div>
                                            <div className="p-3 bg-muted/50 rounded-lg border border-border">
                                                <div className="flex items-center gap-2 text-muted-foreground mb-1 text-xs uppercase font-bold">
                                                    <Wallet className="w-3 h-3" /> Cost Est.
                                                </div>
                                                <div className="text-lg font-bold text-foreground">{selectedBranch.costEstimate}</div>
                                            </div>
                                        </div>

                                        {/* Triggers */}
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">Why Choose This?</h4>
                                            <ul className="space-y-2">
                                                {selectedBranch.triggers.map((t, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Pathway Steps */}
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">The Path</h4>
                                            <div className="flex items-center gap-2 text-sm text-foreground flex-wrap">
                                                {selectedBranch.pathway.map((step, i) => (
                                                    <React.Fragment key={i}>
                                                        <span className="bg-muted px-3 py-1 rounded-full text-foreground border border-border">{step}</span>
                                                        {i < selectedBranch.pathway.length - 1 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>

                                        {/* AI Risk */}
                                        <div className={`p-4 rounded-xl border ${selectedBranch.aiRisk === "High" ? 'bg-amber-500/10 border-amber-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`text-xs font-bold uppercase ${selectedBranch.aiRisk === "High" ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}`}>AI Disruption Risk</span>
                                                <span className={`text-sm font-bold ${selectedBranch.aiRisk === "High" ? 'text-amber-700 dark:text-amber-300' : 'text-emerald-700 dark:text-emerald-300'}`}>{selectedBranch.aiRisk}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {selectedBranch.aiRisk === "High" ? "Automation may affect entry-level roles. Requires constant upskilling." : "Human judgment is the primary value. AI is strictly assistive."}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" onClick={() => router.push('/')}>
                                            Save This Path to My Plan
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-muted-foreground border border-dashed border-border rounded-xl bg-muted/20">
                                <GitBranch className="w-12 h-12 mb-4 opacity-50" />
                                <p>Select a career path on the left to see details.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
