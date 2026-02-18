"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ENTRANCE_EXAMS, EntranceExam } from "@/lib/data/exams";
import { Search, Calendar, MapPin, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ExamExplorer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories
    const categories = Array.from(new Set(ENTRANCE_EXAMS.map(e => e.category)));

    const filteredExams = ENTRANCE_EXAMS.filter(exam => {
        const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exam.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? exam.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-8 max-w-6xl mx-auto py-8">
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">Module: Entrance Gateways</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Essential TN Entrance Exams
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    The verified database of critical entrance tests for Tamil Nadu students.
                </p>
            </section>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between sticky top-4 z-10 bg-background/95 backdrop-blur p-4 rounded-xl border border-border shadow-sm">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search exams (e.g. JEE, CLAT)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 bg-muted/50"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                    <Badge
                        variant={selectedCategory === null ? "default" : "outline"}
                        className="cursor-pointer whitespace-nowrap"
                        onClick={() => setSelectedCategory(null)}
                    >
                        All
                    </Badge>
                    {categories.map(cat => (
                        <Badge
                            key={cat}
                            variant={selectedCategory === cat ? "default" : "outline"}
                            className="cursor-pointer whitespace-nowrap"
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredExams.map((exam, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={exam.id}
                    >
                        <Card className="h-full hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl text-foreground font-bold">{exam.name}</CardTitle>
                                        <Badge variant="secondary" className="mt-2 text-xs">{exam.category}</Badge>
                                    </div>
                                    <div className="bg-primary/10 p-2 rounded-lg text-primary text-xs font-bold text-center min-w-[80px]">
                                        <Calendar className="w-4 h-4 mx-auto mb-1" />
                                        {exam.keyDates.split(" ")[0]}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {exam.summary}
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                        <span className="text-foreground/80"><strong>Eligibility:</strong> {exam.eligibility}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        <span className="text-foreground/80"><strong>Centers:</strong> {exam.testCentres}</span>
                                    </div>
                                </div>
                                {exam.studyCostsLink && (
                                    <Button variant="outline" size="sm" className="w-full text-xs mt-2" asChild>
                                        <a href={exam.studyCostsLink} target="_blank" rel="noreferrer">
                                            Visit Official Site
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {filteredExams.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p>No exams found matching your search.</p>
                </div>
            )}
        </div>
    );
}
