"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, AlertCircle, Percent, School } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMentor } from "@/components/providers/MentorContext";
import { CHENNAI_COLLEGES } from "@/lib/data/chennai";
import { useLanguage } from "@/lib/context/LanguageContext";

export function ModuleDColleges() {
    const router = useRouter();
    const { profile, setPathway } = useMentor();
    const { language, t } = useLanguage();

    const getProbability = (collegeComp: string) => {
        if (profile.academicStanding === "High Achiever") return { val: 85, color: "text-emerald-600 dark:text-emerald-400", label: t("moduleD.probability.strong") };
        if (profile.academicStanding === "Average" && collegeComp.includes("Brutal")) return { val: 15, color: "text-destructive", label: t("moduleD.probability.low") };
        if (profile.academicStanding === "Average" && collegeComp.includes("High")) return { val: 40, color: "text-amber-600 dark:text-amber-400", label: t("moduleD.probability.difficult") };
        return { val: 60, color: "text-primary", label: t("moduleD.probability.possible") };
    };

    const handleSelect = (collegeName: string) => {
        // In a real app, strict typing would map this string to a specific enum
        setPathway({ undergradDegree: "BSc_Psych" }); // Simplified for demo
        router.push("/modules/postgrad-reality");
    };

    return (
        <div className="space-y-12 max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-500/30">{t("moduleD.title")}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("moduleD.heading")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("moduleD.subheading")}
                </p>
            </section>

            {/* College Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CHENNAI_COLLEGES.map((college, idx) => {
                    const prob = getProbability(college.competition);
                    const name = language === 'ta' && (college as any).name_ta ? (college as any).name_ta : college.name;
                    return (
                        <motion.div
                            key={college.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full bg-card border-border hover:border-purple-500/50 transition-all flex flex-col">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">{college.type}</Badge>
                                        <Badge variant="outline" className={`${prob.color} border-border`}>{prob.label}</Badge>
                                    </div>
                                    <CardTitle className="text-lg text-foreground leading-tight">{name}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                        <span>Chennai, TN</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{t("moduleD.keyCourses")}</p>
                                        <ul className="list-disc pl-4 text-muted-foreground/80">
                                            {college.courses.slice(0, 2).map(c => <li key={c}>{c}</li>)}
                                        </ul>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-border pt-3">
                                        <span className="text-muted-foreground">{t("moduleD.fees")}</span>
                                        <span className="text-foreground font-medium">{college.feesPerYear}</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-secondary hover:bg-purple-900/10 text-purple-700 dark:text-purple-200 border border-border" onClick={() => handleSelect(college.name)}>
                                        {t("moduleD.apply")}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            {/* Reality Note */}
            <section className="bg-amber-500/10 dark:bg-amber-950/20 p-6 rounded-xl border border-amber-500/20 flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                    <h3 className="font-bold text-amber-700 dark:text-amber-200 mb-1">{t("moduleD.warningTitle")}</h3>
                    <p className="text-sm text-amber-700/80 dark:text-amber-200/80">
                        {t("moduleD.warningDesc")}
                    </p>
                </div>
            </section>

        </div>
    );
}
