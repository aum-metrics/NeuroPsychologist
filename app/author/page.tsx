import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Globe, Sparkles, Map, Heart } from "lucide-react";
import Link from "next/link";

export default function AuthorPage() {
    return (
        <div className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center bg-muted/10">
            <div className="max-w-2xl w-full space-y-8">

                {/* Profile Header */}
                <div className="text-center space-y-4">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-xl mx-auto mb-4 border-4 border-background">
                            <span className="text-3xl md:text-5xl font-bold font-heading">SK</span>
                        </div>
                        <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border shadow-sm text-foreground hover:bg-background">
                            Architect
                        </Badge>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        Sambath Kumar Natarajan
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                        Building digital bridges for the next generation of Tamil Nadu.
                    </p>
                </div>

                {/* Credentials Card */}
                <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="bg-muted/30 pb-4 border-b">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Map className="w-5 h-5 text-primary" />
                                <span className="font-heading font-bold text-lg">FutureMap TN</span>
                            </div>
                            <Badge variant="outline" className="font-mono text-xs">v1.0.0</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 space-y-6">

                        <div className="prose dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                Why I built this?
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                As a technologist, I realized that while data is everywhere, <strong>clarity is rare</strong>.
                                Students in Tamil Nadu face a unique set of challenges—balancing local educational realities with global career demands.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                This platform isn't just a website; it's a <strong>decision-support system</strong> designed to replace anxiety with evidence. Every data point here interacts with the real economic landscape of our state.
                            </p>
                        </div>

                        <Separator />

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://www.linkedin.com/in/sambathknatarajan/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button className="w-full gap-2 bg-[#0077b5] hover:bg-[#006396] text-white">
                                    <Linkedin className="w-4 h-4" />
                                    Connect on LinkedIn
                                </Button>
                            </Link>
                            {/* Optional: Add GitHub or Personal Site if available later */}
                            <Button variant="outline" className="w-full sm:w-auto gap-2 cursor-not-allowed opacity-70" disabled>
                                <Globe className="w-4 h-4" />
                                Portfolio (Coming Soon)
                            </Button>
                        </div>

                    </CardContent>
                    <div className="bg-muted/30 p-4 border-t text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> for TN Students
                    </div>
                </Card>

            </div>
        </div>
    );
}
