"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Calculator, TrendingUp } from "lucide-react";

export function CostCalculator() {
    const [stream, setStream] = useState("Engineering");
    const [collegeType, setCollegeType] = useState("private");
    const [duration, setDuration] = useState(4);
    const [annualFees, setAnnualFees] = useState(200000); // Default 2L
    const [hostelFees, setHostelFees] = useState(100000); // Default 1L

    // Simple estimation logic
    const inflationRate = 0.08; // 8% education inflation
    let totalCost = 0;

    for (let i = 0; i < duration; i++) {
        const fees = (annualFees + hostelFees) * Math.pow(1 + inflationRate, i);
        totalCost += fees;
    }

    const estimatedStartingSalary =
        stream === "Medical" ? 800000 :
            stream === "Engineering" && collegeType === "elite" ? 1200000 :
                stream === "Engineering" ? 400000 :
                    stream === "Commerce" ? 500000 : 300000;

    const roiYears = totalCost / estimatedStartingSalary;

    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <CardTitle>Education ROI Calculator</CardTitle>
                        <CardDescription>Estimate the real cost of your degree</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* Inputs */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">Stream</label>
                            <Select value={stream} onValueChange={setStream}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Engineering">Engineering</SelectItem>
                                    <SelectItem value="Medical">Medical</SelectItem>
                                    <SelectItem value="Design">Design</SelectItem>
                                    <SelectItem value="Commerce">Commerce</SelectItem>
                                    <SelectItem value="Arts">Arts/Science</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">College Type</label>
                            <Select value={collegeType} onValueChange={setCollegeType}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="govt">Government</SelectItem>
                                    <SelectItem value="private">Private</SelectItem>
                                    <SelectItem value="elite">Elite Private/Top NIT</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span>Annual Tuition: <strong>₹{(annualFees / 100000).toFixed(1)}L</strong></span>
                        </div>
                        <Slider
                            value={[annualFees]}
                            max={2500000}
                            step={50000}
                            onValueChange={(val) => setAnnualFees(val[0])}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span>Annual Hostel/Living: <strong>₹{(hostelFees / 100000).toFixed(1)}L</strong></span>
                        </div>
                        <Slider
                            value={[hostelFees]}
                            max={500000}
                            step={10000}
                            onValueChange={(val) => setHostelFees(val[0])}
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-muted/50 p-4 rounded-xl border border-border space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Total Cost (with 8% Inflation):</span>
                        <span className="text-xl font-bold text-red-600 dark:text-red-400">
                            ₹{(totalCost / 100000).toFixed(2)} Lakhs
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Est. Base Salary:</span>
                        <span className="text-foreground font-bold">₹{(estimatedStartingSalary / 100000).toFixed(1)} LPA</span>
                    </div>

                    <div className="pt-2 border-t border-border flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <TrendingUp className="w-4 h-4" />
                            Break-even in:
                        </div>
                        <Badge variant={roiYears > 5 ? "destructive" : "default"}>
                            {roiYears.toFixed(1)} Years
                        </Badge>
                    </div>
                </div>

                <p className="text-[10px] text-muted-foreground text-center">
                    *Estimates only. Does not account for loan interest or scholarships.
                </p>

            </CardContent>
        </Card>
    );
}
