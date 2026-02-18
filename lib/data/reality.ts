export const REALITY_DATA = {
    meta: {
        title: "FutureMap Tamil Nadu: The Surgical Truth",
        subtitle: "Not Career Advice. A Life Navigation System for TN Students.",
        lastUpdated: "2026-05-20"
    },
    intro: {
        title: "Parent Executive Briefing",
        alerts: [
            "JEE Main: 23L Aspirants → 0.35% Success for Tier-1 CSE",
            "NEET TN: 688+/720 needed for MMC/Stanley (Open Category)",
            "Engg Reality: 92% of TN grads end up in IT Services (TCS/Wipro)",
            "Law: First 3 years pay ₹10-15K/month in Madras High Court"
        ],
        actions: [
            "STOP Coaching Foundation (Class 8-9) - Waste of ₹2.5L",
            "START 100% Backpack (4 Skills) - Non-negotiable",
            "VISIT 1 Professional/Quarter - Real exposure",
            "IGNORE Relative's Advice - Trust the Data"
        ]
    },
    backpack: {
        title: "The Grade 8-10 Backpack (TN Edition)",
        items: [
            { id: "maths", label: "MATHS", target: "NCERT Class 10 Boards >92%", note: "Non-negotiable for Anna Univ CEG/MIT" },
            { id: "coding", label: "CODING", target: "Python CodeChef 3★", note: "Don't just learn syntax. Solve problems." },
            { id: "project", label: "PROJECT", target: "Arduino/IoT GitHub Repo", note: "Anna Univ TechFest / Curios Level" },
            { id: "reading", label: "ENGLISH", target: "2hr Daily Non-Fiction", note: "Critical for CAT/GMAT later" }
        ]
    },
    streams: [
        {
            id: "engineering",
            name: "Engineering",
            desc: "The 25 Lakh Battlefield",
            myth: "Join Engineering = Get Google Job",
            reality: "92% join TCS/Wipro/Infosys at ₹4-7LPA.",
            funnel: "25L Grads → 5.2L Campus Placed → 52K Product Roles → 4.8K Core Eng",
            gate: {
                name: "JEE & TNEA (Anna Univ)",
                stats: [
                    { label: "JEE Main Aspirants", value: "23.45 Lakhs" },
                    { label: "IIT Madras CSE", value: "Rank <247 (99.98%)" },
                    { label: "NIT Trichy CSE", value: "Rank <1,823 (98.5%)" },
                    { label: "Anna Univ CEG", value: "TNEA >196.5/200" }
                ]
            },
            colleges: [
                { tier: "T1A (Dream)", name: "IITM / NIT Trichy", fees: "₹1.2L", merit: "JEE Rank", outcome: "Avg ₹25LPA" },
                { tier: "T1B (State Top)", name: "CEG / MIT / PSG Tech", fees: "₹50K-2L", merit: "TNEA Top 500", outcome: "Avg ₹12LPA" },
                { tier: "T2A (Good)", name: "SSN / CIT / TCE Madurai", fees: "₹2.5L", merit: "TNEA Top 2K", outcome: "Avg ₹9LPA" },
                { tier: "T2B (Pvt)", name: "SRM / VIT / SASTRA", fees: "₹3-5L", merit: "Entrance", outcome: "Avg ₹7.5LPA" },
                { tier: "T3 (Risk)", name: "District Pvt Colleges", fees: "₹1.5L+", merit: "Direct", outcome: "<30% Placed" }
            ],
            timeline: "4yr BTech → 2yr Upskill → 8yr to Senior Role",
            aiRisk: "High (Service Coding)"
        },
        {
            id: "medical",
            name: "Medical",
            desc: "The 11 Year Marathon",
            myth: "Become Doctor = Instant Reach",
            reality: "11 Years Minimum. 90% GPs earning ₹10-15LPA.",
            funnel: "21.2L Aspirants → 1.08L Seats → 5.1% Success",
            gate: {
                name: "NEET UG (TN)",
                stats: [
                    { label: "TN Aspirants", value: "1.4 Lakhs" },
                    { label: "MMC Cutoff", value: "688+/720" },
                    { label: "Madurai Med Cutoff", value: "665+/720" },
                    { label: "Govt Shooters", value: "0.6% Success" }
                ]
            },
            colleges: [
                { tier: "T1A (Govt Apex)", name: "MMC / Stanley", fees: "₹13.6K/yr", merit: "685+", outcome: "Top PG Seats" },
                { tier: "T1B (Govt Dist)", name: "Madurai / Coimbatore MC", fees: "₹13.6K/yr", merit: "660+", outcome: "Strong Clinical" },
                { tier: "T2 (Pvt Deemed)", name: "SRMC / CMC Vellore", fees: "₹50K-25L", merit: "High/Specific", outcome: "World Class" },
                { tier: "T3 (Pvt)", name: "Self-Financing Med", fees: "₹18L/yr", merit: "520+", outcome: "High Debt" }
            ],
            timeline: "5.5yr MBBS + 1yr Int + 3yr PG + 2yr Bond = 11.5 Years",
            aiRisk: "Low"
        },
        {
            id: "neuro",
            name: "Neuropsychology",
            desc: "The Gold Standard",
            myth: "Fix Brains = High Salary Immediately",
            reality: "RCI License is harder than IIT. <2% Success.",
            funnel: "50K Psych Grads → 800 RCI Seats → 30 NIMHANS Seats",
            gate: {
                name: "RCI MPhil Entrance",
                stats: [
                    { label: "NIMHANS Seats", value: "<30 All India" },
                    { label: "Success Rate", value: "<0.5%" },
                    { label: "Study Duration", value: "7-8 Years" }
                ]
            },
            colleges: [
                { tier: "T1 (Apex)", name: "NIMHANS B'lore", fees: "Nominal", merit: "Entrance", outcome: "Top Clinical Role" },
                { tier: "T2 (TN)", name: "IMH Chennai", fees: "Low", merit: "Entrance", outcome: "Govt Psychologist" },
                { tier: "Ug (Start)", name: "Stella / MCC / PSG", fees: "₹40K", merit: "95%+", outcome: "Foundation Only" }
            ],
            timeline: "3yr BSc + 2yr MSc + 2yr MPhil = 7 Years",
            aiRisk: "Low"
        },
        {
            id: "commerce",
            name: "Commerce (CA)",
            desc: "The 15% Pass Lottery",
            myth: "CA is easy money",
            reality: "Avg Age 26. 4.2 Attempts. 1.75% Final Pass.",
            funnel: "7.2L Starts → 12.6K Finish",
            gate: {
                name: "CA Final",
                stats: [
                    { label: "Pass Percentage", value: "1.75% (Overall)" },
                    { label: "Avg Attempts", value: "4.2" },
                    { label: "Coaching Cost", value: "₹3L+" }
                ]
            },
            colleges: [
                { tier: "Route A", name: "BCom (Loyola/PSG) + CAT", fees: "₹5L", merit: "CAT 98%", outcome: "High ROI (IIM)" },
                { tier: "Route B", name: "CA Direct", fees: "₹3L", merit: "Grit", outcome: "High Risk/Reward" },
                { tier: "College", name: "Loyola / MCC / PSG Cas", fees: "₹40K", merit: "96%+", outcome: "Big4 Audit" }
            ],
            timeline: "CA: 5-7 Years | MBA: 5 Years",
            aiRisk: "Medium"
        },
        {
            id: "law",
            name: "Law",
            desc: "3 Years of ₹10K/mo",
            myth: "Suits Life / Supreme Court",
            reality: "Junior Advocates in Madras High Court get ₹10k stipend.",
            funnel: "65K CLAT → 3.2K NLU Seats",
            gate: {
                name: "CLAT 2026",
                stats: [
                    { label: "NALSAR Cutoff", value: "Rank <450" },
                    { label: "NLU Trichy", value: "Rank <1500" },
                    { label: "School of Excellence", value: "95%+" }
                ]
            },
            colleges: [
                { tier: "T1", name: "NALSAR / NLS", fees: "₹3.5L/yr", merit: "<450 Rank", outcome: "₹15LPA Corp" },
                { tier: "State", name: "TNDALU (SOEL)", fees: "₹1L/yr", merit: "Merit", outcome: "Litigation/Corp" },
                { tier: "Pvt", name: "SASTRA Law / VIT", fees: "₹2L+/yr", merit: "Direct", outcome: "Mixed" }
            ],
            timeline: "5yr Course + 3yr Struggle = 8 Years",
            aiRisk: "Low"
        }
    ],
    scripts: {
        parent: [
            "I found FutureMap (TN Edition). It uses real NIRF/TNEA data.",
            "JEE Tier-1 success is 0.35%. NEET Govt seat is 0.6%.",
            "Coaching Foundation (₹2.5L) is statistically a waste before Class 10.",
            "Can we focus on the 4 Backpack skills instead for now?",
            "Let's visit one real workplace this quarter."
        ],
        kid: [
            "I will stop worrying about the stream for 2 years.",
            "I will focus ONLY on my Maths, Coding, Project, and Reading.",
            "I will show you my 100% Backpack progress every Sunday.",
            "Trust me to build the foundation first."
        ]
    }
};
