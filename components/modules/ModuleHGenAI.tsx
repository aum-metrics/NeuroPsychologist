"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, AlertTriangle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function ModuleHGenAI() {
    const { t } = useLanguage();

    return (
        <div className="space-y-12 max-w-5xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-500/30">{t("moduleH.title")}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("moduleH.heading")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("moduleH.subheading")}
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
                            {t("moduleH.redZone.title")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">{t("moduleH.redZone.coder.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.redZone.coder.desc")}
                                <br />
                                <strong>{t("moduleH.redZone.coder.pivot")}</strong>
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">{t("moduleH.redZone.support.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.redZone.support.desc")}
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                            <div className="font-bold text-foreground">{t("moduleH.redZone.accounting.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.redZone.accounting.desc")}
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
                            {t("moduleH.greenZone.title")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">{t("moduleH.greenZone.physical.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.greenZone.physical.desc")}
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">{t("moduleH.greenZone.healthcare.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.greenZone.healthcare.desc")}
                            </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg border border-emerald-500/10">
                            <div className="font-bold text-foreground">{t("moduleH.greenZone.creative.title")}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {t("moduleH.greenZone.creative.desc")}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{t("moduleH.rule2030.title")}</h3>
                <p className="text-sm text-muted-foreground">
                    {t("moduleH.rule2030.desc")}
                </p>
            </div>
        </div>
    );
}
