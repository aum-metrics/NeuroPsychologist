"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StreamReality } from "@/components/modules/StreamReality";
import { AlertTriangle, TrendingDown, Users, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function RealityCheckPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen p-4 md:p-8 space-y-12 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <Badge variant="destructive" className="px-4 py-1 text-base animate-pulse">
                    {t("reality.title")}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold max-w-4xl mx-auto leading-tight">
                    {t("reality.subtitle")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {t("reality.impactDesc")}
                </p>
            </section>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                            <Users className="w-5 h-5" />
                            {t("reality.stat1")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">1.5 Lakh+</div>
                        <p className="text-sm text-muted-foreground mt-1">
                            {t("reality.stat1Desc")}
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                            <AlertTriangle className="w-5 h-5" />
                            {t("reality.stat2")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">~20%</div>
                        <p className="text-sm text-muted-foreground mt-1">
                            {t("reality.stat2Desc")}
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                            <Wallet className="w-5 h-5" />
                            {t("reality.stat3")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">₹3.5 LPA</div>
                        <p className="text-sm text-muted-foreground mt-1">
                            {t("reality.stat3Desc")}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Interactive Data Module */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <TrendingDown className="w-6 h-6 text-red-500" />
                        {t("reality.impact")}
                    </h2>
                </div>
                <StreamReality />
            </section>

            {/* CTA */}
            <div className="flex justify-center pt-8">
                <Link href="/modules/streams">
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                        {t("reality.cta")} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
