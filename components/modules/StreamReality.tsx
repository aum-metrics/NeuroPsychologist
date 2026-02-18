"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Skull, Target, ShieldAlert, CheckCircle2, MapPin, GraduationCap, XCircle } from "lucide-react";
import { REALITY_DATA } from "@/lib/data/reality";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function StreamReality() {
    const [selectedStreamId, setSelectedStreamId] = useState("engineering");
    const selectedStream = REALITY_DATA.streams.find(s => s.id === selectedStreamId) || REALITY_DATA.streams[0];

    return (
        <div className="space-y-8 max-w-6xl mx-auto py-8">

            {/* Header */}
            <section className="text-center space-y-4">
                <div className="flex justify-center">
                    <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 border border-red-200 dark:border-red-800">
                        <MapPin className="w-4 h-4" /> Tamil Nadu Edition • Verified Data
                    </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-black text-foreground">
                    {REALITY_DATA.meta.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {REALITY_DATA.meta.subtitle}
                </p>
            </section>

            {/* Parent Briefing */}
            <Card className="border-l-4 border-l-amber-500 bg-amber-50/50 dark:bg-amber-900/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                        <AlertTriangle className="w-5 h-5" /> Executive Briefing (Read First)
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-sm mb-2 text-red-600">🚨 HARD TRUTHS</h4>
                        <ul className="space-y-1">
                            {REALITY_DATA.intro.alerts.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-2 text-green-600">✅ IMMEDIATE ACTIONS</h4>
                        <ul className="space-y-1">
                            {REALITY_DATA.intro.actions.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Stream Selector */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
                <span className="font-bold text-lg">Inspect Stream:</span>
                <div className="flex flex-wrap justify-center gap-2">
                    {REALITY_DATA.streams.map(s => (
                        <Button
                            key={s.id}
                            variant={selectedStreamId === s.id ? "default" : "outline"}
                            onClick={() => setSelectedStreamId(s.id)}
                            className="rounded-full"
                        >
                            {s.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Stream Detail Card */}
            <Card className="border-2 border-primary/10 shadow-lg">
                <CardHeader className="bg-muted/30">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-black text-primary">{selectedStream.name}</CardTitle>
                            <CardDescription className="text-base font-medium mt-1">
                                {selectedStream.desc}
                            </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs border-red-200 bg-red-50 text-red-700">
                            {selectedStream.timeline}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    {/* Myth vs Reality */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                            <h4 className="font-bold text-red-700 text-sm mb-1">THE MYTH</h4>
                            <p className="text-sm italic">"{selectedStream.myth}"</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                            <h4 className="font-bold text-green-700 text-sm mb-1">THE TAMIL NADU REALITY</h4>
                            <p className="text-sm font-medium">{selectedStream.reality}</p>
                        </div>
                    </div>

                    {/* Funnel & Gate */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold flex items-center gap-2 border-b pb-2">
                                <ShieldAlert className="w-5 h-5 text-amber-500" /> Entrance Gates (TN)
                            </h3>
                            <div className="space-y-3">
                                {selectedStream.gate.stats.map((stat, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">{stat.label}</span>
                                        <span className="font-bold">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-muted rounded text-xs font-mono mt-2">
                                Funnel: {selectedStream.funnel}
                            </div>
                        </div>

                        {/* College Matrix */}
                        <div className="space-y-4">
                            <h3 className="font-bold flex items-center gap-2 border-b pb-2">
                                <GraduationCap className="w-5 h-5 text-blue-500" /> College Matrix
                            </h3>
                            <div className="border rounded-lg overflow-hidden">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-muted font-bold">
                                        <tr>
                                            <th className="p-2">Tier</th>
                                            <th className="p-2">College</th>
                                            <th className="p-2">Merit/Fees</th>
                                            <th className="p-2">Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {selectedStream.colleges.map((col, i) => (
                                            <tr key={i}>
                                                <td className="p-2 font-bold">{col.tier.split(" ")[0]}</td>
                                                <td className="p-2 text-primary font-medium">{col.name}</td>
                                                <td className="p-2 text-muted-foreground">{col.merit}<br />{col.fees}</td>
                                                <td className="p-2 font-bold">{col.outcome}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Backpack & Scripts */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Backpack Widget */}
                <Card className="md:col-span-2 border-primary/20 bg-primary/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            {REALITY_DATA.backpack.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-3 pt-2">
                        {REALITY_DATA.backpack.items.map((item, i) => (
                            <div key={i} className="bg-background p-3 rounded border shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-black text-xs text-primary">{item.label}</span>
                                    <Badge variant="outline" className="text-[10px]">{item.target}</Badge>
                                </div>
                                <p className="text-[10px] text-muted-foreground">{item.note}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Parent Scripts */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold">Scripts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="space-y-2">
                            <h5 className="font-bold text-xs uppercase text-muted-foreground">For Dad/Mom</h5>
                            <p className="italic text-muted-foreground border-l-2 pl-2">
                                "{REALITY_DATA.scripts.parent[0]}"
                            </p>
                            <p className="italic text-muted-foreground border-l-2 pl-2">
                                "{REALITY_DATA.scripts.parent[2]}"
                            </p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                            Copy Full Script
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="text-center text-xs text-muted-foreground pt-4">
                Verified Data Sources: TNEA 2025 Cutoffs, NIRF 2026, TN Health Dept Bulletins.
            </div>
        </div>
    );
}
