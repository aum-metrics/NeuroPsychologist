"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { sidebarItems } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function MobileSidebar() {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useLanguage();

    // Helper function to map href to translation key (same as in Sidebar.tsx)
    const getTranslationKey = (href: string): string => {
        switch (href) {
            case "/guide": return "nav.guide";
            case "/reality-check": return "nav.realityCheck";
            case "/modules/grade8": return "nav.grade8";
            case "/modules/streams": return "nav.streams";
            case "/modules/exams": return "nav.exams";
            case "/modules/scholarships": return "nav.scholarships";
            case "/modules/gen-ai": return "nav.genAI";
            case "/modules/alternatives": return "nav.alternatives";
            case "/author": return "nav.author";
            default: return "nav.guide";
        }
    };

    return (
        <div className="md:hidden p-4 border-b flex items-center justify-between sticky top-0 bg-background z-50">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 bg-background border-r border-border">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">Main navigation for mobile devices</SheetDescription>

                    <div className="p-6 border-b">
                        <h2 className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                            {t("nav.appName")}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">{t("nav.appDesc")}</p>
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="space-y-1 px-2">
                                {sidebarItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Button
                                            key={item.href}
                                            variant={isActive ? "secondary" : "ghost"}
                                            className={cn("w-full justify-start gap-3", isActive ? "bg-secondary text-primary" : "text-muted-foreground")}
                                            onClick={() => {
                                                setOpen(false);
                                                router.push(item.href);
                                            }}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span className="truncate">{t(getTranslationKey(item.href))}</span>
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="p-4 border-t mt-auto mb-8">
                            <LanguageToggle />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <span className="font-heading font-bold">{t("nav.appName")}</span>
        </div>
    );
}
