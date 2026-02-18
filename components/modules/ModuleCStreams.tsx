"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { STREAMS, Stream } from "@/lib/data/streams";
import { StreamDetail } from "@/components/modules/StreamDetail";
import { Search, ArrowRight, MousePointerClick } from "lucide-react";
import { icons } from "lucide-react";

import { useLanguage } from "@/lib/context/LanguageContext";

export function ModuleCStreams() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
    const { language, t } = useLanguage();

    const filteredStreams = STREAMS.filter(stream => {
        const title = language === 'ta' ? stream.title_ta || stream.title : stream.title;
        const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stream.keySkills.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));

        if (filter === "all") return matchesSearch;
        if (filter === "ai_proof") return matchesSearch && stream.resilienceScore >= 8;
        if (filter === "high_salary") return matchesSearch && stream.avgSalary.includes("12") || stream.avgSalary.includes("15") || stream.avgSalary.includes("25"); // Check for high upper bounds

        return matchesSearch;
    });

    // Dynamic Icon component
    const LucideIcon = ({ name, className }: { name: string, className?: string }) => {
        const Icon = (icons as any)[name];
        return Icon ? <Icon className={className} /> : null;
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">{t("moduleC.title")}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("moduleC.heading")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("moduleC.subheading")}
                </p>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder={t("moduleC.searchPlaceholder")}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 h-12 bg-muted/50"
                        />
                    </div>
                    <select
                        className="p-3 rounded-lg border border-border bg-background h-12 w-full md:w-auto text-base"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">{t("moduleC.filterAll")}</option>
                        <option value="ai_proof">{t("moduleC.filterAI")}</option>
                        <option value="high_salary">{t("moduleC.filterSalary")}</option>
                    </select>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredStreams.map((stream, idx) => {
                    const title = language === 'ta' ? stream.title_ta || stream.title : stream.title;
                    const overview = language === 'ta' ? stream.overview_ta || stream.overview : stream.overview;
                    const skills = language === 'ta' ? stream.keySkills_ta || stream.keySkills : stream.keySkills;

                    return (
                        <motion.div
                            key={stream.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="h-full"
                        >
                            <Card
                                className="h-full hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group flex flex-col"
                                onClick={() => setSelectedStream(stream)}
                            >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                                        <LucideIcon name={stream.icon} className="w-5 h-5" />
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                        {overview}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {skills.slice(0, 2).map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 h-5">
                                                {skill}
                                            </Badge>
                                        ))}
                                        {skills.length > 2 && (
                                            <Badge variant="secondary" className="text-[10px] px-1.5 h-5">+{skills.length - 2}</Badge>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0 text-xs text-primary font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t("common.learnMore")} <ArrowRight className="w-3 h-3 ml-1" />
                                </CardFooter>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            {filteredStreams.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p>{t("moduleC.noResults")} "{searchTerm}".</p>
                </div>
            )}

            <StreamDetail
                stream={selectedStream}
                open={!!selectedStream}
                onClose={() => setSelectedStream(null)}
            />
        </div>
    );
}
