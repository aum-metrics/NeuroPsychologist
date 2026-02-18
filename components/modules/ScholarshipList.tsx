"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SCHOLARSHIPS } from "@/lib/data/scholarships";
import { IndianRupee, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export function ScholarshipList() {
    return (
        <div className="space-y-8 max-w-5xl mx-auto py-8 px-4">
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">Module: Financial Aid</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Scholarships & Olympiads
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Merit-based and Need-based financial support for Indian students.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SCHOLARSHIPS.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                                        <CardDescription className="mt-1">{item.provider}</CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                        {item.deadline}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full">
                                        <IndianRupee className="w-4 h-4 text-green-700 dark:text-green-400" />
                                    </div>
                                    <span className="font-semibold">{item.reward}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm">
                                    <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full mt-1">
                                        <Award className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                                    </div>
                                    <span className="text-muted-foreground">{item.eligibility}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
