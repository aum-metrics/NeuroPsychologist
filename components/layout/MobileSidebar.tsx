"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, Map } from "lucide-react";
import { sidebarItems } from "./Sidebar";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation sidebar for mobile</SheetDescription>
                <div className="flex flex-col h-full bg-card">
                    <div className="p-6 border-b border-border cursor-pointer hover:bg-accent/5 transition-colors" onClick={() => {
                        router.push('/');
                        setOpen(false);
                    }}>
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
                                        onClick={() => {
                                            router.push(item.href);
                                            setOpen(false);
                                        }}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        <span className="truncate">{item.label}</span>
                                    </Button>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </div>
            </SheetContent>
        </Sheet>
    );
}
