"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AlertTriangle, Brain, ScrollText, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { REALITY_STATS } from "@/lib/data/chennai";
import { useLanguage } from "@/lib/context/LanguageContext";

export function ModuleAReality() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);
    const { t } = useLanguage();

    const handleAccept = () => {
        setAccepted(true);
        // Add small delay for effect
        setTimeout(() => router.push('/modules/school-stage'), 500);
    };

    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Disclaimer Header using Semantic Tokens */}
            <section className="text-center space-y-4">
                <Badge variant="destructive" className="animate-pulse">{t("moduleA.badge")}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("moduleA.title")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("moduleA.subtitle")}
                </p>
            </section>

            {/* The 3 Hard Truths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <ScrollText className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{t("moduleA.myth.title")}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>{t("moduleA.myth.desc")}</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{t("moduleA.job.title")}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>{t("moduleA.job.desc")}</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <div className="mb-2">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{t("moduleA.rci.title")}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p><strong>{REALITY_STATS.find(s => s.label.includes("M.Phil Seats"))?.value || "< 30"}</strong> {t("moduleA.rci.desc")}</p>
                    </CardContent>
                </Card>

            </div>

            <div className="flex justify-center pt-8">
                <Button size="lg" className="w-full md:w-auto" onClick={handleAccept}>
                    {t("moduleA.accept")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground mt-8">
                <p>
                    <AlertTriangle className="inline-block w-3 h-3 mr-1" />
                    {t("moduleA.disclaimer")}
                </p>
            </div>

        </div>
    );
}
