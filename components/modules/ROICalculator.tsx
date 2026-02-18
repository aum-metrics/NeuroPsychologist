"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, AlertTriangle, CheckCircle2, IndianRupee, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const INFLATION_RATE = 0.08; // 8% education inflation

export function ROICalculator() {
    const [income, setIncome] = useState<number>(500000);
    const [savings, setSavings] = useState<number>(200000);
    const [streamCost, setStreamCost] = useState<string>("2000000"); // Default 20L
    const [result, setResult] = useState<any>(null);

    // Course Data with accurate fees and starting salary assumptions
    const COURSES = {
        "200000": { label: "Govt Engineering (₹2 Lakhs)", cost: 200000, salary: 450000 },
        "2000000": { label: "Pvt Engineering - Mgmt Quota (₹20 Lakhs)", cost: 2000000, salary: 350000 },
        "60000": { label: "Govt Medical (₹60k)", cost: 60000, salary: 600000 },
        "8000000": { label: "Pvt Medical - Mgmt Quota (₹80 Lakhs)", cost: 8000000, salary: 550000 }, // Slightly lower start in pvt hospitals
        "300000": { label: "Arts & Science (₹3 Lakhs)", cost: 300000, salary: 250000 },
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    const calculateROI = () => {
        const selectedCourse = COURSES[streamCost as keyof typeof COURSES];
        const cost = selectedCourse.cost;

        // Logic Update: Family contributes 40% of their annual income towards education per year
        // This assumes 60% is needed for living expenses/other obligations.
        const annualSurplus = income * 0.40;
        const totalFamilyContribution = annualSurplus * 4; // Over 4 years

        // Education Inflation Impact
        // If the cost is today's cost, the actual cost over 4 years is higher. 
        // We'll simplify and say the total cost is fixed for the batch, but let's add inflation to living expenses if we were calculating that.
        // For fees, we'll stick to the sticker price as "Total Course Fee".

        const deficit = cost - (savings + totalFamilyContribution);
        const loanNeeded = deficit > 0 ? deficit : 0;

        // Salary Logic
        const avgStartingSalary = selectedCourse.salary;
        const monthlyInHand = (avgStartingSalary / 12) * 0.85; // rough in-hand after PF/tax

        // Loan Repayment
        const interestRate = 0.105; // 10.5% Edu Loan Interest
        // EMI for 10 years by default to see feasibility
        // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const r = interestRate / 12;
        const n = 10 * 12; // 10 years

        let emi = 0;
        if (loanNeeded > 0) {
            emi = (loanNeeded * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        }

        const emiToSalaryRatio = (emi / monthlyInHand) * 100;

        // Years to repay if we aggressively pay 40% of salary
        const aggressiveMonthlyPayment = monthlyInHand * 0.40;
        let yearsToRepayAggressive = 0;
        if (loanNeeded > 0) {
            // Simple interest approximation for repayment duration to avoid complex iteration
            // N = -log(1 - (r * P) / EMI) / log(1 + r)
            if (aggressiveMonthlyPayment > (loanNeeded * r)) {
                yearsToRepayAggressive = -Math.log(1 - (r * loanNeeded) / aggressiveMonthlyPayment) / Math.log(1 + r) / 12;
            } else {
                yearsToRepayAggressive = 99; // Never repayable at this salary
            }
        }

        setResult({
            loanNeeded,
            emi,
            monthlyInHand,
            avgStartingSalary,
            yearsToRepay: yearsToRepayAggressive === 99 ? ">25" : yearsToRepayAggressive.toFixed(1),
            riskLevel: yearsToRepayAggressive > 8 ? "High" : yearsToRepayAggressive > 4 ? "Medium" : "Low",
            emiToSalaryRatio: emiToSalaryRatio.toFixed(1)
        });
    };

    // Auto-calculate on changes
    useEffect(() => {
        calculateROI();
    }, [income, savings, streamCost]);

    return (
        <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-muted/30 pb-6 border-b">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <Calculator className="w-6 h-6 text-primary" />
                    College ROI Reality Calculator
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                    Don't guess. Calculate the financial risk of a "Management Quota" seat based on real salary data.
                </p>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">

                {/* Inputs Section */}
                <div className="grid grid-cols-1 gap-8">

                    {/* Income Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold">Annual Family Income</Label>
                            <Badge variant="outline" className="text-lg px-3 py-1 bg-background">
                                {formatCurrency(income)}
                            </Badge>
                        </div>
                        <Slider
                            defaultValue={[500000]}
                            value={[income]}
                            max={3000000}
                            step={50000}
                            onValueChange={(vals) => setIncome(vals[0])}
                            className="py-4"
                        />
                        <p className="text-xs text-muted-foreground">
                            Assuming <span className="font-bold text-foreground">40%</span> of this income can be dedicated to education fees per year.
                        </p>
                    </div>

                    <Separator />

                    {/* Savings Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold">Existing Education Savings</Label>
                            <Badge variant="outline" className="text-lg px-3 py-1 bg-background">
                                {formatCurrency(savings)}
                            </Badge>
                        </div>
                        <Slider
                            defaultValue={[200000]}
                            value={[savings]}
                            max={5000000}
                            step={50000}
                            onValueChange={(vals) => setSavings(vals[0])}
                            className="py-4"
                        />
                    </div>

                    <Separator />

                    {/* Cost Selector */}
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">Target College Stream (Total 4-Year Cost)</Label>
                        <Select value={streamCost} onValueChange={setStreamCost}>
                            <SelectTrigger className="w-full h-12 text-base">
                                <SelectValue placeholder="Select a stream" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(COURSES).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                {/* Results Section */}
                {result && (
                    <div className="bg-muted/50 p-6 rounded-xl space-y-6 animate-in fade-in-50 border border-border">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <span className="text-sm font-medium text-muted-foreground">Projected Loan Needed</span>
                                <div className={`text-3xl font-bold ${result.loanNeeded > 0 ? "text-red-500" : "text-green-600"}`}>
                                    {formatCurrency(result.loanNeeded)}
                                </div>
                                <div className="text-xs text-muted-foreground">Deficit after family contribution</div>
                            </div>

                            <div className="space-y-1">
                                <span className="text-sm font-medium text-muted-foreground">Expected In-Hand Salary</span>
                                <div className="text-3xl font-bold text-emerald-600">
                                    {formatCurrency(result.monthlyInHand)}<span className="text-sm text-muted-foreground font-normal">/mo</span>
                                </div>
                                <div className="text-xs text-muted-foreground">Based on {formatCurrency(result.avgStartingSalary)} LPA</div>
                            </div>
                        </div>

                        <Separator className="bg-border/50" />

                        {result.loanNeeded > 0 ? (
                            <div className={`p-4 rounded-lg border flex flex-col md:flex-row items-start md:items-center gap-4 ${result.riskLevel === "High" ? "bg-red-50 dark:bg-red-900/20 border-red-200 text-red-900 dark:text-red-200" :
                                    result.riskLevel === "Medium" ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 text-yellow-900 dark:text-yellow-200" :
                                        "bg-green-50 dark:bg-green-900/20 border-green-200 text-green-900 dark:text-green-200"
                                }`}>
                                {result.riskLevel === "High" ? <AlertTriangle className="w-10 h-10 shrink-0" /> : <CheckCircle2 className="w-10 h-10 shrink-0" />}

                                <div className="flex-1 space-y-1">
                                    <div className="font-bold text-lg flex items-center gap-2">
                                        {result.riskLevel} Financial Risk
                                        <Badge variant="outline" className="bg-background/20 backdrop-blur border-current">
                                            {result.yearsToRepay} Years to Break Even
                                        </Badge>
                                    </div>
                                    <p className="text-sm opacity-90 leading-relaxed">
                                        {result.riskLevel === "High"
                                            ? `At this salary, you will be paying ~${formatCurrency(result.emi)} EMI per month. This is ${result.emiToSalaryRatio}% of your take-home pay.`
                                            : `This investment is manageable. Your EMI would be ~${Math.round(result.emiToSalaryRatio)}% of your monthly salary.`
                                        }
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-900/20 border-green-200 text-green-900 dark:text-green-200 flex items-center gap-4">
                                <CheckCircle2 className="w-8 h-8 shrink-0" />
                                <div>
                                    <div className="font-bold text-lg">Financially Safe</div>
                                    <p className="text-sm">Your family savings and income are sufficient to cover these costs without a loan.</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
