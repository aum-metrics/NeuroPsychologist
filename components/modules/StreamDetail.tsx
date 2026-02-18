"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Stream } from "@/lib/data/streams";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, AlertTriangle, BookOpen, GraduationCap, TrendingUp, DollarSign, Brain, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StreamDetailProps {
    stream: Stream | null;
    open: boolean;
    onClose: () => void;
}

export function StreamDetail({ stream, open, onClose }: StreamDetailProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "reality" | "fees" | "future">("overview");

    if (!stream) return null;

    // Helper to parse costs/salary for rudimentary calc
    const parseLakhs = (str: string) => {
        if (!str) return 0;
        const match = str.match(/(\d+)/);
        return match ? parseInt(match[0]) : 0;
    };

    // Rudimentary ROI Logic
    const avgFee = (parseLakhs(stream.studyCosts.govt) + parseLakhs(stream.studyCosts.private)) / 2; // Very rough
    const avgSal = parseLakhs(stream.avgSalary);

    return (
        <Dialog open={open} onOpenChange={onClose}>
            {/* Added bg-white dark:bg-zinc-950 and z-[200] explicitly to fix transparency issue */}
            <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-0 border bg-white dark:bg-zinc-950 p-0 shadow-2xl duration-200 sm:rounded-xl md:w-full max-h-[90vh] overflow-hidden border-border flex flex-col isolate">

                {/* Header */}
                <div className="p-6 pb-4 border-b bg-muted/20 backdrop-blur-md">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <DialogTitle className="text-3xl font-bold font-heading text-primary">{stream.title}</DialogTitle>
                            <Badge variant="outline" className="bg-background/50 backdrop-blur">TN Edition</Badge>
                        </div>
                        <p className="text-muted-foreground line-clamp-1">{stream.overview}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
                                Verified: Feb 2026
                            </Badge>
                        </div>
                    </div>

                    {/* Custom Tabs */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {[
                            { id: "overview", label: "Overview", icon: BookOpen },
                            { id: "reality", label: "Reality Check", icon: Lock },
                            { id: "fees", label: "Fees & ROI", icon: DollarSign },
                            { id: "future", label: "2036 Future", icon: TrendingUp },
                        ].map((tab) => (
                            <Button
                                key={tab.id}
                                variant={activeTab === tab.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`gap-2 rounded-full transition-all ${activeTab === tab.id ? "shadow-md" : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <ScrollArea className="flex-1 p-6 bg-muted/10 h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            {/* OVERVIEW TAB */}
                            {activeTab === "overview" && (
                                <div className="space-y-6">
                                    <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-800">
                                        <h4 className="font-bold flex items-center gap-2 text-blue-800 dark:text-blue-300 mb-2">
                                            <GraduationCap className="w-5 h-5" /> Industry Demand
                                        </h4>
                                        <p className="text-sm font-medium leading-relaxed text-blue-900 dark:text-blue-100">{stream.scope}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            Required DNA (Skills)
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {stream.keySkills.map((skill, idx) => (
                                                <Badge key={idx} variant="secondary" className="px-3 py-1.5 text-sm">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-purple-600" />
                                            Academic Path
                                        </h4>
                                        <p className="text-sm bg-background border p-3 rounded-lg text-muted-foreground">{stream.academicRequirements}</p>
                                    </div>
                                </div>
                            )}

                            {/* REALITY TAB */}
                            {activeTab === "reality" && (
                                <div className="space-y-6">
                                    <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-2xl border border-red-100 dark:border-red-800">
                                        <h4 className="font-bold flex items-center gap-2 text-red-800 dark:text-red-300 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> The Brutal Truth (Downsides)
                                        </h4>
                                        <p className="text-sm font-medium leading-relaxed text-red-900 dark:text-red-100">{stream.downsides}</p>
                                    </div>

                                    <div className="bg-background border p-5 rounded-2xl space-y-3">
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">TN Market Facts (Validated)</h4>
                                        <p className="text-sm leading-relaxed border-l-4 border-primary pl-4 py-1 italic">
                                            "{stream.tnValidation}"
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* FEES TAB */}
                            {activeTab === "fees" && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border bg-background text-center">
                                            <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Govt Seat Cost</div>
                                            <div className="text-xl font-black text-green-600">{stream.studyCosts.govt}</div>
                                            <div className="text-xs text-muted-foreground mt-1">Per Year</div>
                                        </div>
                                        <div className="p-4 rounded-xl border bg-background text-center">
                                            <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Private Mgmt Cost</div>
                                            <div className="text-xl font-black text-red-600">{stream.studyCosts.private}</div>
                                            <div className="text-xs text-muted-foreground mt-1">Per Year</div>
                                        </div>
                                    </div>

                                    <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-2xl border border-orange-100">
                                        <h4 className="font-bold flex items-center gap-2 text-orange-800 dark:text-orange-300 mb-2">
                                            <DollarSign className="w-5 h-5" /> Salary Reality (Freshers)
                                        </h4>
                                        <div className="text-2xl font-black font-heading text-foreground mb-1">{stream.avgSalary}</div>
                                        <p className="text-xs text-muted-foreground">Based on 2024 hiring trends in Chennai/Bangalore.</p>
                                    </div>

                                    <p className="text-xs text-center text-muted-foreground">
                                        * Costs are approximate. Use the <a href="/tools/roi" className="underline text-primary">ROI Calculator</a> for exact planning.
                                    </p>
                                </div>
                            )}

                            {/* FUTURE TAB */}
                            {activeTab === "future" && (
                                <div className="space-y-6">
                                    <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                                        <Badge className="bg-purple-600 mb-3 hover:bg-purple-700">2036 Vantage Point</Badge>
                                        <h4 className="font-bold text-xl text-purple-900 dark:text-purple-100 mb-3">
                                            What will this job look like in 10 years?
                                        </h4>
                                        <p className="text-base leading-relaxed text-foreground/90 font-medium">
                                            "{stream.futureOutlook}"
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-bold text-muted-foreground">AI Resilience Score</span>
                                            <span className="text-sm font-bold text-purple-600">{stream.resilienceScore}/10</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${stream.resilienceScore * 10}%` }}
                                                className={`h-full ${stream.resilienceScore > 7 ? "bg-green-500" : stream.resilienceScore > 4 ? "bg-yellow-500" : "bg-red-500"}`}
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground text-right w-full">
                                            {stream.resilienceScore > 8 ? "Safe from AI Disruption" : stream.resilienceScore > 4 ? "Will be AI-Assisted" : "High Risk of Automation"}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
