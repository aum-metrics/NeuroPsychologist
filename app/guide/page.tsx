import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, GitBranch, BookOpen, GraduationCap, Cpu, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
    const steps = [
        {
            id: 1,
            title: "The Reality Check",
            icon: AlertTriangle,
            color: "text-red-500",
            bg: "bg-red-50 dark:bg-red-900/10",
            description: "Don't start with a dream; start with data. Understand the harsh realities of the current job market in Tamil Nadu before you choose a path.",
            action: "Check Reality",
            href: "/reality-check"
        },
        {
            id: 2,
            title: "Choose Your Character",
            icon: GitBranch,
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/10",
            description: "Are you a Creator, an Analyst, or a Healer? Pick a career stream based on your inherent traits, not just your marks.",
            action: "Explore Streams",
            href: "/modules/streams"
        },
        {
            id: 3,
            title: "Lock the Exam",
            icon: BookOpen,
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/10",
            description: "Great careers have gatekeepers. Identify the specific entrance exams (NEET, JEE, TNEA) you need to crack for your chosen stream.",
            action: "View Exams",
            href: "/modules/exams"
        },
        {
            id: 4,
            title: "Fund Your Future",
            icon: GraduationCap,
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-900/10",
            description: "Education is expensive. Find scholarships and financial aid options tailored for Tamil Nadu students.",
            action: "Find Scholarships",
            href: "/modules/scholarships"
        },
        {
            id: 5,
            title: "Future Proofing",
            icon: Cpu,
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/10",
            description: "Will AI replace this job in 2030? Check the AI Resilience Score for your chosen career path.",
            action: "Check AI Risk",
            href: "/modules/gen-ai"
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto space-y-12">

            {/* Header */}
            <section className="text-center space-y-4 py-8">
                <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1">Start Here</Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                    How to Navigate<br /> <span className="text-primary">Your Future</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    FutureMap TN isn't just a website; it's a strategic framework. Follow these 5 steps to build a career that survives the next decade.
                </p>
            </section>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Connector Line (Desktop Only) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-[-1]" />

                {steps.map((step, index) => (
                    <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right md:pr-12" : "md:items-start md:text-left md:pl-12"} relative`}>

                        {/* Number Badge */}
                        <div className={`absolute top-6 ${index % 2 === 0 ? "md:-right-4 right-auto left-4 md:left-auto" : "md:-left-4 left-4"} w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold z-10 hidden md:flex`}>
                            {step.id}
                        </div>

                        <Card className="w-full hover:shadow-lg transition-all border-l-4 border-l-primary/50 overflow-hidden group">
                            <CardHeader className={`${step.bg} pb-4`}>
                                <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}>
                                    <div className={`p-2 rounded-lg bg-background/50 backdrop-blur ${step.color}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                                <div className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                    <Link href={step.href}>
                                        <Button variant="ghost" className="group-hover:text-primary gap-2 pl-0 md:pl-4">
                                            {step.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center py-12">
                <Link href="/reality-check">
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Begin Step 1: Reality Check
                    </Button>
                </Link>
            </div>

        </div>
    );
}
