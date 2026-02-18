"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, AlertTriangle, CheckCircle2, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ROICalculator() {
    const [income, setIncome] = useState<number | string>("");
    const [savings, setSavings] = useState<number | string>("");
    const [streamCost, setStreamCost] = useState<number | string>(2000000); // Default 20L
    const [result, setResult] = useState<any>(null);

    const calculateROI = () => {
        const annualIncome = Number(income);
        const totalSavings = Number(savings);
        const cost = Number(streamCost);
        const familyContribution = annualIncome * 4; // Assuming 4 years of income can be stretched

        const deficit = cost - (totalSavings + familyContribution);
        const loanNeeded = deficit > 0 ? deficit : 0;

        // Avg Salary for a Pvt College Grad (Generic)
        const avgStartingSalary = 350000; // 3.5 LPA
        const monthlyInHand = 22000;
        const emi = loanNeeded * 0.012; // Rough 1.2% per month interest

        const yearsToRepay = loanNeeded > 0 ? (loanNeeded / (monthlyInHand * 0.4)) / 12 : 0; // 40% salary to EMI

        setResult({
            loanNeeded,
            yearsToRepay: yearsToRepay.toFixed(1),
            riskLevel: yearsToRepay > 5 ? "High" : yearsToRepay > 2 ? "Medium" : "Low",
            monthlyInHand
        });
    };

    return (
        <Card className="border-2 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    College ROI Reality Calculator
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Don't guess. Calculate the financial risk of a "Management Quota" seat.
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Annual Family Income (₹)</Label>
                        <Input
                            type="number"
                            placeholder="e.g. 500000"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Current Savings for Education (₹)</Label>
                        <Input
                            type="number"
                            placeholder="e.g. 200000"
                            value={savings}
                            onChange={(e) => setSavings(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Estimated Course Cost (Total 4 Years)</Label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={streamCost}
                        onChange={(e) => setStreamCost(Number(e.target.value))}
                    >
                        <option value={200000}>Govt Engineering (₹2 Lakhs)</option>
                        <option value={2000000}>Pvt Engineering - Mgmt Quota (₹20 Lakhs)</option>
                        <option value={60000}>Govt Medical (₹60k)</option>
                        <option value={8000000}>Pvt Medical - Mgmt Quota (₹80 Lakhs)</option>
                        <option value={300000}>Arts & Science (₹3 Lakhs)</option>
                    </select>
                </div>

                <Button className="w-full" onClick={calculateROI}>Calculate Financial Risk</Button>

                {result && (
                    <div className="bg-muted p-4 rounded-xl space-y-4 animate-in fade-in-50">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Loan Needed:</span>
                            <span className="font-bold text-red-500">₹{result.loanNeeded.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Estimated EMI:</span>
                            <span className="font-bold">~₹{(result.loanNeeded * 0.012).toFixed(0)} / mo</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Entry Level Salary (In-Hand):</span>
                            <span className="font-bold text-green-600">~₹{result.monthlyInHand.toLocaleString()} / mo</span>
                        </div>

                        <div className={`p-3 rounded-lg border flex items-center gap-3 ${result.riskLevel === "High" ? "bg-red-50 border-red-200 text-red-800" :
                                result.riskLevel === "Medium" ? "bg-yellow-50 border-yellow-200 text-yellow-800" :
                                    "bg-green-50 border-green-200 text-green-800"
                            }`}>
                            {result.riskLevel === "High" ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                            <div>
                                <div className="font-bold">{result.riskLevel} Financial Risk</div>
                                <div className="text-xs">
                                    {result.riskLevel === "High"
                                        ? `It could take ${result.yearsToRepay} years to pay off this debt. Think twice.`
                                        : "This path is financially sustainable."}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
