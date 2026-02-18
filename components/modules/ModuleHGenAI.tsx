"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, AlertTriangle, ShieldCheck } from "lucide-react";

export function ModuleHGenAI() {
    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-500/30">Module H: Future Proofing</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Will AI Eat Your Job?
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    The rules of the game in 2030. What survives in Chennai, Coimbatore, and Bangalore.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* DANGER ZONE */}
                <Card className="bg-destructive/5 border-destructive/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Bot className="w-32 h-32" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-destructive flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            The "Red Zone" (High Risk)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">The "Syntactic" Coder</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Junior devs who only know syntax but not system design. AI Agents (Devin, Cursor) write boilerplate faster.
                                <strong>Pivot:</strong> Learn System Architecture & AI Integration.
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">Basic Content & Support</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                L1 Customer Support, Basic Copywriting, Data Entry. Chatbots have already taken 40% of these jobs in Bangalore.
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">Routine Accounting</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Tally entry and basic audits. AI automates compliant tax filing instantly.
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SAFE ZONE */}
                <Card className="bg-emerald-500/5 border-emerald-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Brain className="w-32 h-32" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            The "Green Zone" (Human Moat)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">"Physical" Engineering</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Civil site supervision, Mechanical R&D, Robotics hardware. AI can't build a bridge or fix a machine physically.
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">Healthcare & Empathy</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Nursing, Physiotherapy, Doctor-Patient trust. People need human touch in crisis.
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">Creative Strategy</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Brand building, Film direction, High-level Architecture. AI makes assets, Humans tell stories.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                <h3 className="text-lg font-bold text-primary mb-2">The 2030 Rule</h3>
                <p className="text-sm text-muted-foreground">
                    "Don't just be a 'user' of tools. Be the one who understands the <strong>Domain</strong>. An engineer who knows <em>Agricultural Soil Science</em> is safer than a generic C++ coder.
                    <strong>Goal:</strong> AI Literacy, not just Prompt Engineering."
                </p>
            </div>
        </div>
    );
}
