"use client";

import React, { useState } from "react";
import { Scholarship, SCHOLARSHIPS } from "@/lib/data/scholarships";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Globe, Building, Banknote, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function ScholarshipList() {
    const [searchTerm, setSearchTerm] = useState("");
    const { language, t } = useLanguage();

    const filtered = SCHOLARSHIPS.filter(s => {
        const title = language === 'ta' ? s.title_ta || s.title : s.title;
        return title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="space-y-8 max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">{language === 'ta' ? "தொகுதி E: நிதி" : "Module E: Funding"}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("scholarships.title")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("scholarships.subtitle")}
                </p>

                {/* Search */}
                <div className="max-w-md mx-auto mt-6 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder={t("exams.search")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 h-12 bg-muted/50"
                    />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(s => {
                    const title = language === 'ta' ? s.title_ta || s.title : s.title;
                    const provider = language === 'ta' ? s.provider_ta || s.provider : s.provider;
                    const amount = language === 'ta' ? s.amount_ta || s.amount : s.amount;
                    const eligibility = language === 'ta' ? s.eligibility_ta || s.eligibility : s.eligibility;
                    const deadline = language === 'ta' ? s.deadline_ta || s.deadline : s.deadline;
                    const category = language === 'ta' ? s.category_ta || s.category : s.category;

                    return (
                        <Card key={s.id} className="hover:border-primary/50 transition-all flex flex-col h-full">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <Badge variant="outline" className="mb-2">
                                        {category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-lg font-bold leading-tight">{title}</CardTitle>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                    <Building className="w-3 h-3" /> {provider}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-1">
                                <div className="p-3 bg-muted/30 rounded-lg flex items-center gap-3">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full text-green-700 dark:text-green-400">
                                        <Banknote className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">{t("scholarships.amount")}</p>
                                        <p className="font-bold text-lg text-primary">{amount}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {eligibility}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                                        <Calendar className="w-3 h-3" />
                                        <span>{t("scholarships.deadline")}: {deadline}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="secondary" asChild>
                                    <a href={s.applyLink} target="_blank" rel="noreferrer">
                                        {language === 'ta' ? "விண்ணப்பிக்கவும்" : "Apply Now"} <ExternalLink className="w-3 h-3 ml-2" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
