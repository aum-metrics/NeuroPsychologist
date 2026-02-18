"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 p-2 bg-muted/20 rounded-lg">
            <Languages className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-1">
                <Button
                    variant={language === 'en' ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className="text-xs h-7 px-2"
                >
                    English
                </Button>
                <Button
                    variant={language === 'ta' ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage('ta')}
                    className="text-xs h-7 px-2 font-noto-sans-tamil"
                >
                    தமிழ்
                </Button>
            </div>
        </div>
    );
}
