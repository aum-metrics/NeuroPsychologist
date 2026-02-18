"use client";

import React from "react";
import { ROICalculator } from "@/components/modules/ROICalculator";
import { Badge } from "@/components/ui/badge";

export default function ROIPage() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto py-8 px-4">
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">Financial Reality Check</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Can You Afford It?
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Parents often spend ₹50 Lakhs for a degree that pays ₹3 Lakhs/year.
                    Use this tool to verify the "Return on Investment" before taking a loan.
                </p>
            </section>

            <ROICalculator />
        </div>
    );
}
