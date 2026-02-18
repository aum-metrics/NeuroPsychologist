"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Globe, MapPin, Award, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { EXAMS } from "@/lib/data/exams";

export function ExamExplorer() {
    const [searchTerm, setSearchTerm] = useState("");
    const { language, t } = useLanguage();

    const filteredExams = EXAMS.filter(exam => {
        const title = language === 'ta' ? exam.title_ta || exam.title : exam.title;
        return title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exam.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="space-y-8 max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">Module D: Gatekeepers</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("exams.title")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("exams.subtitle")}
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
                {filteredExams.map(exam => {
                    const title = language === 'ta' ? exam.title_ta || exam.title : exam.title;
                    const shortName = language === 'ta' ? exam.shortName_ta || exam.shortName : exam.shortName;
                    const type = language === 'ta' ? exam.type_ta || exam.type : exam.type;
                    const description = language === 'ta' ? exam.description_ta || exam.description : exam.description;
                    const difficulty = language === 'ta' ? exam.difficulty_ta || exam.difficulty : exam.difficulty;
                    const date = language === 'ta' ? exam.examDate_ta || exam.examDate : exam.examDate;
                    const acceptedBy = language === 'ta' ? exam.acceptedBy_ta || exam.acceptedBy : exam.acceptedBy;

                    return (
                        <Card key={exam.id} className="hover:border-primary/50 transition-all flex flex-col h-full">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <Badge variant={(exam.type === "National" || exam.type === "தேசிய") ? "destructive" : "secondary"}>
                                        {type}
                                    </Badge>
                                    <Badge variant="outline" className={
                                        exam.difficulty === "Very Hard" || difficulty === "மிகக் கடினம்" ? "text-red-500 border-red-200" :
                                            exam.difficulty === "Hard" || difficulty === "கடினம்" ? "text-orange-500 border-orange-200" :
                                                "text-blue-500 border-blue-200"
                                    }>
                                        {difficulty}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl font-bold mt-2">{title}</CardTitle>
                                <div className="text-sm font-semibold text-primary">{shortName}</div>
                            </CardHeader>
                            <CardContent className="space-y-4 flex-1">
                                <p className="text-sm text-muted-foreground">
                                    {description}
                                </p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                        <span><span className="font-semibold">{t("exams.frequency")}:</span> {date}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Award className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        <span className="text-foreground/80"><strong>Valid For:</strong> {acceptedBy}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="outline" asChild>
                                    <a href={exam.website} target="_blank" rel="noreferrer">
                                        Register Now <ExternalLink className="w-3 h-3 ml-2" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>

            {filteredExams.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p>No exams found matching your search.</p>
                </div>
            )}
        </div>
    );
}
