"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AlertTriangle, Brain, ScrollText, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { REALITY_STATS } from "@/lib/data/chennai";

export function ModuleAReality() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        // Add small delay for effect
        setTimeout(() => router.push('/modules/school-stage'), 500);
    };

    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Disclaimer Header using Semantic Tokens */}
            <section className="text-center space-y-4">
                <Badge variant="destructive" className="animate-pulse">Reality Check Initiated</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    So, you want to fix brains?
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    In Chennai, everyone wants to be a "Neuropsychologist".
                    <span className="text-foreground font-medium"> 90% end up in HR or School Counselling.</span>
                    Let's see if you can survive the truth.
                </p>
            </section>

            {/* The 3 Hard Truths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <ScrollText className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">The "Neuro" Myth</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>You cannot just "study Neuro". In India, you must first be a <strong>Licensed Clinical Psychologist</strong> (RCI) to legally touch a patient. That takes 7-8 years.</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">Chennai Job Reality</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>Major hubs: <strong>Apollo, MIOT, SRMC, SCARF</strong>.</p>
                        <p className="mt-2">Junior Starting Salary: <strong>₹25k - ₹35k/month</strong>.</p>
                        <p className="text-xs mt-1 text-muted-foreground/70">Yes, that is less than an IT fresher.</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">The RCI Gate</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p><strong>{REALITY_STATS.find(s => s.label.includes("M.Phil Seats"))?.value || "< 30"}</strong> RCI seats in India vs 50,000+ Psychology graduates.</p>
                        <p className="mt-2 text-destructive font-bold">Success Rate: &lt; 2%</p>
                        <p className="text-xs mt-1">NIMHANS is harder to get into than Harvard.</p>
                    </CardContent>
                </Card>

            </div>

            <div className="flex justify-center pt-8">
                <Button size="lg" className="w-full md:w-auto" onClick={handleAccept}>
                    I Accept The Risk. What Next? <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground mt-8">
                <p>
                    <AlertTriangle className="inline-block w-3 h-3 mr-1" />
                    Disclaimer: Salaries and job availability are estimates based on current Chennai/India market data.
                </p>
            </div>

        </div>
    );
}
