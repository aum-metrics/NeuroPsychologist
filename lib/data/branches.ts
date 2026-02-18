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
        id: "tnpsc_govt",
        title: "TN Govt Service (TNPSC)",
        triggers: ["Seeking job security", "Wants power/respect", "Good at memorization"],
        pathway: ["Any Degree", "TNPSC Group 1 / 2 Exam", "Training at Bhavanisagar"],
        yearsToMaster: "1-2",
        costEstimate: "₹10k - 50k (Coaching)",
        salaryPotential: "₹4 - 10 LPA",
        jobBreadth: "High",
        aiRisk: "Low",
        description: "The ultimate 'Safe' path in Tamil Nadu. Deputy Collector, DSP, or Municipal Commissioner roles.",
    },
    {
        id: "banking_psu",
        title: "Banking & PSU Exams",
        triggers: ["Fast calculation skills", "Wants central govt perks", "Risk averse"],
        pathway: ["Any Degree", "IBPS / SBI PO Exam", "Interview"],
        yearsToMaster: "1",
        costEstimate: "₹15k - 40k (Coaching)",
        salaryPotential: "₹6 - 12 LPA",
        jobBreadth: "High",
        aiRisk: "Medium",
        description: "Faster than UPSC/TNPSC. Probationary Officers in SBI/Indian Bank earn remarkably well with low stress.",
    },
    {
        id: "corporate_hr",
        title: "Corporate HR (Chennai)",
        triggers: ["People person", "Dislikes coding", "Good communicator"],
        pathway: ["UG Psychology/BBA", "MBA in HR (Madras Univ / XIME)"],
        yearsToMaster: "2",
        costEstimate: "₹4 - 10 Lakhs",
        salaryPotential: "₹5 - 9 LPA",
        jobBreadth: "High",
        aiRisk: "Medium",
        description: "Managing talent for SaaS companies (Zoho, Freshworks) or Manufacturing giants (Hyundai, TVS).",
    },
    {
        id: "data_analytics",
        title: "Data Analytics",
        triggers: ["Maths background", "Logical thinker", "Wants IT salary without coding app"],
        pathway: ["B.Sc Stats / B.E", "Google Data Cert / Python Course"],
        yearsToMaster: "0.5",
        costEstimate: "₹20k - 1 Lakh",
        salaryPotential: "₹6 - 12 LPA",
        jobBreadth: "High",
        aiRisk: "High",
        description: "Chennai is a data hub. Banks and Healthcare firms need analysts to make sense of numbers.",
    },
    {
        id: "digital_marketing",
        title: "Digital Marketing",
        triggers: ["Creative", "Social media savvy", "Entrepreneurial"],
        pathway: ["Any UG", "Agency Internship", "Portfolio"],
        yearsToMaster: "0.5",
        costEstimate: "₹0 - 50k",
        salaryPotential: "₹3 - 7 LPA",
        jobBreadth: "Medium",
        aiRisk: "High",
        description: "Managing brands for TN businesses. High demand in retail, cinema, and startups.",
    },
    {
        id: "clinical_psych",
        title: "Clinical Psychology",
        triggers: ["Deep empathy", "Willing to study long", "Hospital interest"],
        pathway: ["B.Sc Psych", "M.Sc Psych", "M.Phil (IMH Kilpauk)"],
        yearsToMaster: "4",
        costEstimate: "₹5 - 10 Lakhs",
        salaryPotential: "₹4 - 8 LPA",
        jobBreadth: "Narrow",
        aiRisk: "Low",
        description: "The classic path. Diagnosing disorders. Very varied quality of colleges in TN. Only M.Phil (RCI) counts.",
    },
    {
        id: "teaching_prof",
        title: "School / College Teaching",
        triggers: ["Loves explaining", "Wants work-life balance", "Subject expert"],
        pathway: ["UG+B.Ed (School)", "PG+NET/SET (College)"],
        yearsToMaster: "2",
        costEstimate: "₹1 - 3 Lakhs",
        salaryPotential: "₹3 - 7 LPA",
        jobBreadth: "High",
        aiRisk: "Low",
        description: "TN has the highest Gross Enrolment Ratio. Teachers are always needed, though private pay is low initially.",
    },
    {
        id: "entrepreneurship",
        title: "Family Business / Startup",
        triggers: ["Risk taker", "Has capital/idea", "Hates 9-5"],
        pathway: ["Any Degree", "Incubation (IITM Research Park)", "Launch"],
        yearsToMaster: "Indefinite",
        costEstimate: "Variable",
        salaryPotential: "Variable",
        jobBreadth: "Very Narrow",
        aiRisk: "Medium",
        description: "TN is the 'SaaS Capital'. Great ecosystem for building products, or modernizing family MSMEs.",
    }
];
