export interface CareerBranch {
    id: string;
    title: string;
    triggers: string[]; // Reasons why a student might pivot here
    pathway: string[]; // Steps: UG -> PG -> Job
    yearsToMaster: string; // e.g. "2", "5" (Time from UG graduation)
    costEstimate: string; // ₹ Lakhs
    salaryPotential: string; // ₹ Lakhs PA (Entry level)
    jobBreadth: "Very Narrow" | "Narrow" | "Medium" | "High";
    aiRisk: "Low" | "Medium" | "High";
    description: string;
}

export const CAREER_BRANCHES: CareerBranch[] = [
    {
        id: "clinical_psych",
        title: "Clinical Psychology (RCI)",
        triggers: ["Deep passion for diagnosis", "Willing to study till 28", "Prestigious title driven"],
        pathway: ["UG Psychology", "MSc Clinical Psychology", "MPhil (RCI Recognized)"],
        yearsToMaster: "4", // 2 MSc + 2 MPhil
        costEstimate: "₹8 - 15 Lakhs",
        salaryPotential: "₹3.5 - 5 LPA",
        jobBreadth: "Narrow",
        aiRisk: "Low",
        description: "The gold standard RCI Licensed path. Essential for working in hospitals and diagnosing disorders officially.",
    },
    {
        id: "corporate_hr",
        title: "Corporate HR / OD",
        triggers: ["Wants financial stability", "Likes systems & people", "Dislikes hospitals"],
        pathway: ["UG Psychology", "MBA in HR / Masters in OD"],
        yearsToMaster: "2",
        costEstimate: "₹10 - 25 Lakhs",
        salaryPotential: "₹8 - 12 LPA",
        jobBreadth: "High",
        aiRisk: "Medium",
        description: "The most reliable wealth-builder. Using psychology to manage talent, culture, and hiring in MNCs.",
    },
    {
        id: "ux_research",
        title: "UX Research (Tech)",
        triggers: ["Loves tech/apps", "Analytical thinker", "Creative problem solver"],
        pathway: ["UG Psychology", "Certifications / Masters in HCI"],
        yearsToMaster: "1",
        costEstimate: "₹2 - 5 Lakhs",
        salaryPotential: "₹10 - 18 LPA",
        jobBreadth: "Medium",
        aiRisk: "Medium",
        description: "Designing how humans interact with apps. High pay, remote work options, very logical.",
    },
    {
        id: "data_behavioral",
        title: "Behavioral Data Analyst",
        triggers: ["Good with numbers/math", "Patterns > People", "Tech-oriented"],
        pathway: ["UG Psychology", "MSc Data Science / Analytics"],
        yearsToMaster: "2",
        costEstimate: "₹5 - 12 Lakhs",
        salaryPotential: "₹9 - 14 LPA",
        jobBreadth: "High",
        aiRisk: "High",
        description: "Using psychological insights to analyze large datasets. Marketing, Policy, and Product teams need this.",
    },
    {
        id: "special_ed",
        title: "Special Education / School",
        triggers: ["Loves children", "Patient & nurturing", "Wants clear hours"],
        pathway: ["UG Psychology", "B.Ed Special Education"],
        yearsToMaster: "2",
        costEstimate: "₹2 - 5 Lakhs",
        salaryPotential: "₹3 - 6 LPA",
        jobBreadth: "Medium",
        aiRisk: "Low",
        description: "Working with neurodivergent children (Autism, ADHD). Emotionally rewarding, moderate pay.",
    },
    {
        id: "rehab_psych",
        title: "Rehabilitation Psychology",
        triggers: ["Focus on recovery", "Hospital setting interest", "Less competitive than Clinical"],
        pathway: ["UG Psychology", "PG Diploma / MSc Rehab Psych"],
        yearsToMaster: "2",
        costEstimate: "₹3 - 7 Lakhs",
        salaryPotential: "₹4 - 7 LPA",
        jobBreadth: "Medium",
        aiRisk: "Low",
        description: "Helping patients recover function after trauma or addiction. RCI recognized but easier entry than Clinical.",
    },
    {
        id: "sports_psych",
        title: "Sports & Performance",
        triggers: ["Loves sports", "Focus on optimization", "High energy"],
        pathway: ["UG Psychology", "MSc Sports Psychology"],
        yearsToMaster: "2",
        costEstimate: "₹5 - 15 Lakhs",
        salaryPotential: "₹5 - 15 LPA",
        jobBreadth: "Very Narrow",
        aiRisk: "Low",
        description: "Niche field working with athletes to improve focus and resilience. High variance in pay.",
    },
    {
        id: "academia_research",
        title: "Pure Research / PhD",
        triggers: ["Loves theory", "Introverted / Intellectual", "Wants to teach"],
        pathway: ["UG", "MSc", "PhD (5 Years)"],
        yearsToMaster: "7",
        costEstimate: "₹0 - 20 Lakhs",
        salaryPotential: "₹6 - 10 LPA",
        jobBreadth: "Narrow",
        aiRisk: "Medium",
        description: "The professor track. Publishing papers, teaching universities. Long timeline, prestige focused.",
    }
];
