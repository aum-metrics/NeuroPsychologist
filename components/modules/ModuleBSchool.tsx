"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import {
    Backpack,
    Dna,
    Calculator,
    BookOpen,
    Brain,
    CheckCircle2,
    XCircle,
    ArrowRight
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export function ModuleBSchool() {
    const router = useRouter();
    const { language, t } = useLanguage();

    // State for readiness score
    const [readinessScore, setReadinessScore] = useState(0);

    // State for checklist items status
    const [checklistItems, setChecklistItems] = useState({
        biology: false,
        maths: false,
        reading: false,
        grit: false
    });

    const toggleItem = (key: keyof typeof checklistItems) => {
        setChecklistItems(prev => {
            const newState = { ...prev, [key]: !prev[key] };
            // Recalculate score
            const activeCount = Object.values(newState).filter(Boolean).length;
            setReadinessScore(activeCount * 25);
            return newState;
        });
    };

    const handlePassGate = () => {
        if (readinessScore >= 100) {
            router.push('/modules/streams');
        }
    };

    // Translated lists
    const distractionsList = language === 'ta' ? [
        "விலையுயர்ந்த 'உளவியல் கோடைக்கால முகாம்கள்' (ஏமாற்றுவேலை)",
        "யாரும் அங்கீகரிக்காத சீரற்ற 'ஒலிம்பியாட்கள்'",
        "'மருத்துவக் கோளாறுகள்' பற்றி இப்போது சிந்திப்பது (மிகவும் சீக்கிரம்)"
    ] : [
        "Expensive 'Psychology Summer Camps' (Scams)",
        "Random 'Olympiads' that nobody recognizes",
        "Obsessing over 'Clinical Disorders' (Too early)"
    ];

    const doTheseList = language === 'ta' ? [
        "பிர்லா கோளரங்கத்திற்குச் செல்லுங்கள் (அறிவியல் ஆர்வம்)",
        "'தி மேன் ஹூ மிஸ்டுக் ஹிஸ் வைஃப் ஃபார் எ ஹேட்' (ஆலிவர் சாக்ஸ்) புத்தகத்தைப் படியுங்கள்",
        "வயது அனுமதித்தால் 'தி பான்யன்' போன்ற என்ஜிஓ-வில் தன்னார்வலராகச் சேருங்கள்"
    ] : [
        "Visit the Birla Planetarium (Science interest)",
        "Read 'The Man Who Mistook His Wife for a Hat' (Oliver Sacks)",
        "Volunteer at an NGO like The Banyan (if age permits)"
    ];

    return (
        <div className="space-y-12 max-w-4xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">{t("moduleB.title")}</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {t("moduleB.heading")}
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    {t("moduleB.subheading")}
                    <span className="text-foreground font-medium"> {t("moduleB.subheadingHighlight")}</span>
                </p>
            </section>

            {/* Interactive Backpack Checklist */}
            <section className="bg-muted/30 p-8 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Backpack className="w-5 h-5 text-primary" />
                            {t("moduleB.backpack")}
                        </h3>
                        <p className="text-sm text-muted-foreground">{t("moduleB.backpackDesc")}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="text-right">
                            <span className="block text-2xl font-bold text-primary">{readinessScore}%</span>
                            <span className="text-xs text-muted-foreground">{t("moduleB.readiness")}</span>
                        </div>
                        <Progress value={readinessScore} className="w-24 h-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.keys(checklistItems).map((k) => {
                        const key = k as keyof typeof checklistItems;
                        const isActive = checklistItems[key];
                        let label = "";
                        let desc = "";

                        if (key === 'biology') {
                            label = language === 'ta' ? 'உயிரியல் அடிப்படைகள்' : 'Biology Fundamentals';
                            desc = language === 'ta' ? '9-10 ஆம் வகுப்பு NCERT' : 'Grade 9-10 NCERT';
                        } else if (key === 'maths') {
                            label = language === 'ta' ? 'புள்ளிவிவரங்கள்' : 'Statistics (Maths)';
                            desc = language === 'ta' ? 'ஆராய்ச்சிக்கு அவசியம்' : 'Crucial for Research';
                        } else if (key === 'reading') {
                            label = language === 'ta' ? 'வாசிப்புப் பழக்கம்' : 'Reading Habit';
                            desc = language === 'ta' ? 'தவறான செய்திகளை தவிர்க்கவும்' : 'Avoid Pop-Psychology';
                        } else if (key === 'grit') {
                            label = language === 'ta' ? 'மன உறுதி' : 'Grit / Patience';
                            desc = language === 'ta' ? 'நீண்ட படிப்பு காலம்' : 'Long study years';
                        }

                        return (
                            <motion.div whileTap={{ scale: 0.95 }} key={key} onClick={() => toggleItem(key)}>
                                <Card className={`cursor-pointer transition-all border ${isActive ? 'bg-primary/10 border-primary' : 'bg-card border-border hover:border-primary/30'}`}>
                                    <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                                        {key === 'biology' && <Dna className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'maths' && <Calculator className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'reading' && <BookOpen className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}
                                        {key === 'grit' && <Brain className={`w-8 h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />}

                                        <div>
                                            <h4 className={`font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {label}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                                        </div>
                                        {isActive && <CheckCircle2 className="w-4 h-4 text-primary mt-2" />}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Distractions vs Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-100 dark:border-red-900/50">
                    <h3 className="font-bold text-red-700 dark:text-red-400 flex items-center gap-2 mb-4">
                        <XCircle className="w-5 h-5" />
                        {t("moduleB.distractions")}
                    </h3>
                    <ul className="space-y-3">
                        {distractionsList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-red-900 dark:text-red-200">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-100 dark:border-green-900/50">
                    <h3 className="font-bold text-green-700 dark:text-green-400 flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5" />
                        {t("moduleB.doThese")}
                    </h3>
                    <ul className="space-y-3">
                        {doTheseList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-green-900 dark:text-green-200">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Gate */}
            <div className="flex justify-center pt-8">
                <Button
                    size="lg"
                    className={`gap-2 text-lg px-8 transition-all ${readinessScore >= 100 ? 'animate-pulse' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={readinessScore < 100}
                    onClick={handlePassGate}
                >
                    {readinessScore >= 100 ? (
                        <>{t("moduleB.enterGate")} <ArrowRight className="w-5 h-5" /></>
                    ) : (
                        <>{t("moduleB.completeAll")} ({readinessScore}%)</>
                    )}
                </Button>
            </div>
        </div>
    );
}
