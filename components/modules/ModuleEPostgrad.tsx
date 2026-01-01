"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Lock, Unlock, GraduationCap, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function ModuleEPostgrad() {
    const router = useRouter();

    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-rose-500 border-rose-500/30">Module E: The RCI Bottleneck</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Where Most Dreams Die.
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    You have a B.Sc and M.Sc in Psychology. You are still <strong>NOT</strong> a Clinical Psychologist.
                    Welcome to the RCI Licensing Reality.
                </p>
            </section>

            {/* The Funnel Visualization */}
            <section className="bg-muted/30 p-8 rounded-xl border border-border flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                    <AlertTriangle className="text-rose-500" />
                    The "Funnel of Terror"
                </h2>

                <div className="w-full max-w-md space-y-1">
                    <div className="w-full bg-slate-800 dark:bg-slate-900 p-4 rounded-t-lg text-center border-b border-border">
                        <span className="block text-2xl font-bold text-white">50,000+</span>
                        <span className="text-xs text-slate-400 uppercase">Psychology Graduates (India/Yr)</span>
                    </div>
                    <div className="w-[80%] mx-auto bg-slate-700 dark:bg-slate-800 p-4 text-center border-b border-border">
                        <span className="block text-xl font-bold text-white">~15,000</span>
                        <span className="text-xs text-slate-400 uppercase">Masters Graduates</span>
                    </div>
                    <div className="w-[40%] mx-auto bg-rose-500/20 border border-rose-500/30 p-4 text-center">
                        <span className="block text-xl font-bold text-rose-600 dark:text-rose-400">~500 - 800</span>
                        <span className="text-xs text-rose-600 dark:text-rose-300 uppercase">RCI Licensed Clinical Seats</span>
                    </div>
                    <div className="w-[10%] mx-auto bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-b-lg text-center relative">
                        <span className="block text-lg font-bold text-emerald-600 dark:text-emerald-400">&lt; 30</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-300 uppercase whitespace-nowrap absolute left-1/2 -translate-x-1/2 -bottom-6">NIMHANS M.Phil Neuro</span>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground mt-8 text-center max-w-lg">
                    Getting into NIMHANS for Neuropsychology is statistically harder than getting into IIT Bombay or AIIMS Delhi.
                </p>
            </section>

            {/* RCI vs Non-RCI */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-emerald-500/5 border-emerald-500/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                            <Unlock className="w-5 h-5" />
                            The "Licensed" Path
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Steps:</strong> MA/MSc -&gt; <strong className="text-foreground">M.Phil (2 Years)</strong> -&gt; RCI License.</p>
                        <p><strong className="text-foreground">Result:</strong> You are a "Clinical Psychologist". You can diagnose, treat, and work in hospitals.</p>
                        <p><strong className="text-foreground">Cost:</strong> High mental stress. Exams are brutal.</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-muted-foreground">
                            <Lock className="w-5 h-5" />
                            The "Academic" Path
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Steps:</strong> MA/MSc -&gt; <strong className="text-foreground">PhD (3-5 Years)</strong>.</p>
                        <p><strong className="text-foreground">Result:</strong> You are a "Doctor" (PhD), but you <strong className="text-destructive">CANNOT</strong> clinically treat patients in many settings without RCI.</p>
                        <p><strong className="text-foreground">Role:</strong> Research, Teaching, Corporate behavior roles.</p>
                    </CardContent>
                </Card>
            </section>

            <div className="flex justify-center gap-4 pt-8 pb-12">
                <Button variant="outline" onClick={() => router.push('/modules/alternatives')}>
                    I'm Scared. Show Me Alternatives.
                </Button>
                <Button className="bg-rose-600 hover:bg-rose-700 text-white" onClick={() => router.push('/modules/alternatives')}>
                    I'll Fight For It. (But Show Backups)
                </Button>
            </div>

        </div>
    );
}
