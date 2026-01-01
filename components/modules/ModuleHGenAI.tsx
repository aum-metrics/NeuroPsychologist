"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, HeartHandshake, BrainCircuit, ShieldCheck, Brain, Check } from "lucide-react";

export function ModuleHGenAI() {
    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-500/30">Module H: Future Proofing</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Will AI Replace You?
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    By the time you finish your M.Phil (2032?), ChatGPT 10 will exist.
                    If your only skill is "Administering IQ Tests", you are obsolete.
                </p>
            </section>

            {/* AI Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* What AI Takes */}
                <Card className="bg-destructive/5 border-destructive/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-destructive">
                            <Bot className="w-5 h-5" />
                            What AI Will Take (The Grunt Work)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Badge variant="destructive" className="mt-0.5 shrink-0">Gone</Badge>
                            <div>
                                <p className="font-bold text-foreground">Basic Report Writing</p>
                                <p className="text-sm text-muted-foreground">Summarizing patient history and test scores. AI does this in seconds.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge variant="destructive" className="mt-0.5 shrink-0">Gone</Badge>
                            <div>
                                <p className="font-bold text-foreground">Standardized Test Administration</p>
                                <p className="text-sm text-muted-foreground">Digital testing platforms will replace manual scoring.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge variant="destructive" className="mt-0.5 shrink-0">Gone</Badge>
                            <div>
                                <p className="font-bold text-foreground">Literature Review</p>
                                <p className="text-sm text-muted-foreground">AI summarizes 100 research papers in seconds.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* What Humans Keep */}
                <Card className="bg-emerald-500/5 border-emerald-500/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                            <Brain className="w-5 h-5" />
                            What Humans Keep (The Value)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 mt-0.5 shrink-0">Safe</Badge>
                            <div>
                                <p className="font-bold text-foreground">Complex Differential Diagnosis</p>
                                <p className="text-sm text-muted-foreground">Distinguishing between Depression vs Early Dementia vs Stroke needs intuition.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 mt-0.5 shrink-0">Safe</Badge>
                            <div>
                                <p className="font-bold text-foreground">Therapeutic Alliance</p>
                                <p className="text-sm text-muted-foreground">People want to cry to a Human, not a Chatbot.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 mt-0.5 shrink-0">Safe</Badge>
                            <div>
                                <p className="font-bold text-foreground">Complex Rehab</p>
                                <p className="text-sm text-muted-foreground">Designing therapy that adapts to a patient's mood in real-time.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
