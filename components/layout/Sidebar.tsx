"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, BookOpen, GitBranch, AlertTriangle, GraduationCap, Map, ShieldAlert, Cpu, LogOut, User, Baby, Calculator } from "lucide-react";

const sidebarItems = [
    { href: "/reality-check", icon: AlertTriangle, label: "Reality Check" },
    { href: "/modules/grade8", icon: Baby, label: "Grade 8-9 Start" },
    { href: "/tools/cost-calculator", icon: Calculator, label: "Plan Your ROI" },
    { href: "/modules/streams", icon: GitBranch, label: "Streams" },
    { href: "/modules/exams", icon: BookOpen, label: "Entrance Exams" },
    { href: "/modules/scholarships", icon: GraduationCap, label: "Scholarships" },
    { href: "/modules/gen-ai", icon: Cpu, label: "Future Proofing" },
    { href: "/modules/alternatives", icon: Map, label: "Career Pivots" },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-card border-r border-border">
            <div className="p-6 border-b border-border cursor-pointer hover:bg-accent/5 transition-colors" onClick={() => router.push('/')}>
                <h2 className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent flex items-center gap-2">
                    <Map className="w-6 h-6 text-primary" />
                    FutureMap TN
                </h2>
                <p className="text-xs text-muted-foreground mt-1">Tamil Nadu Edition</p>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-2">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Button
                                key={item.href}
                                variant={isActive ? "secondary" : "ghost"}
                                className={cn("w-full justify-start gap-3", isActive ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted")}
                                onClick={() => router.push(item.href)}
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="truncate">{item.label}</span>
                            </Button>
                        )
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}
