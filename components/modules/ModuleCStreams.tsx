"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, BookOpen, Calculator, AlertTriangle, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMentor } from "@/components/providers/MentorContext";

export function ModuleCStreams() {
    const router = useRouter();
    const { setPathway } = useMentor();

    const handleSelect = (stream: "Science_Bio" | "Humanities_Psych" | "Other") => {
        setPathway({ stream11th: stream });
        // In a full app, this would save to DB. For now, we move to next module.
        router.push("/modules/undergrad-explorer");
    };

    return (
        <div className="space-y-12 max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">Module C: The Grade 11/12 Fork</Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Choose Your Pain.
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Grade 11 Stream Selection is the first "Door Closer".
                    Choosing one closes others. Be very precise about what you are giving up.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Option 1: Science */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="h-full">
                    <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors flex flex-col">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Beaker className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl text-foreground">Option 1: Science (PCB)</CardTitle>
                            <Badge className="w-fit mt-2">Safest & Hardest</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1">
                            <div className="text-sm text-foreground">
                                <strong>Subjects:</strong> Physics, Chemistry, Biology + English + (Math/IP/Psych)
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li>Opens <strong>ALL</strong> doors (MBBS, BSc Psych, BSc Neuro, BSc Clinical).</li>
                                <li>Allows you to pivot to "Arts" later if you hate Science.</li>
                                <li><strong>Chennai Reality:</strong> You will be forced into NEET coaching culture. It is brutal.</li>
                            </ul>
                            <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                                <p className="text-xs text-foreground/80">
                                    <strong>Ideal for:</strong> Academically strong, emotionally resilient, supported by family.
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={() => handleSelect("Science_Bio")}>
                                Select Science Path
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>

                {/* Option 2: Humanities */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-full">
                    <Card className="h-full bg-card border-border hover:border-purple-500/50 transition-colors flex flex-col">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <CardTitle className="text-xl text-foreground">Option 2: Humanities (Psych)</CardTitle>
                            <Badge variant="secondary" className="w-fit mt-2">Most Common</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1">
                            <div className="text-sm text-foreground">
                                <strong>Subjects:</strong> Psychology, Sociology, English, Economics/PolSci
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li>Direct focus on Psychology from day 1.</li>
                                <li>Less stress than Science stream (usually).</li>
                                <li><strong>Closures:</strong> You CANNOT do MBBS or most BSc Neuroscience degrees later.</li>
                                <li><strong>Chennai Reality:</strong> Very few schools (mostly CBSE/IB) offer this. State board rarely does.</li>
                            </ul>
                            <div className="bg-purple-500/5 p-3 rounded-lg border border-purple-500/20">
                                <p className="text-xs text-foreground/80">
                                    <strong>Ideal for:</strong> Sure about non-medical route, wants to save mental energy for reading/research.
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => handleSelect("Humanities_Psych")}>
                                Select Humanities Path
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>

                {/* Option 3: Hybrid/Fallback */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="h-full">
                    <Card className="h-full bg-card border-border hover:border-orange-500/50 transition-colors flex flex-col">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                                <Calculator className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <CardTitle className="text-xl text-foreground">Option 3: Hybrid (Data/Stats)</CardTitle>
                            <Badge variant="outline" className="w-fit mt-2">Strategic Pivot</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1">
                            <div className="text-sm text-foreground">
                                <strong>Subjects:</strong> Commerce/Arts + Math/Statistics
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li>Keeps the "Data Mining" & "Cognitive Science" doors open.</li>
                                <li>Best if you like patterns but hate blood/hospitals.</li>
                                <li><strong>Chennai Reality:</strong> Good for entering Analytics roles later if Psych doesn't pay well.</li>
                            </ul>
                            <div className="bg-orange-500/5 p-3 rounded-lg border border-orange-500/20">
                                <p className="text-xs text-foreground/80">
                                    <strong>Ideal for:</strong> Pragmatic students who want a safety net in Tech/Data.
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" onClick={() => handleSelect("Other")}>
                                Select Strategic Hybrid
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>

            </div>

            <section className="bg-muted p-6 rounded-xl border border-border text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Mentor Note:</h3>
                <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
                    "If you can handle the pressure, <strong>Science (PCB)</strong> is the superior choice because it keeps the door open to <em>Medicine (Psychiatry)</em> and <em>Neuroscience</em>.
                    Taking Arts closes the 'Doctor' door forever. Make sure you are okay with that."
                </p>
            </section>

        </div>
    );
}
