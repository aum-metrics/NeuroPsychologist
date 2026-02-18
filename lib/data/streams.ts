import { GraduationCap, Cpu, Stethoscope, Briefcase, Gavel, Palette, Leaf, HeartPulse, Brain, Coffee, Globe, Feather, Landmark } from "lucide-react";

export interface Stream {
    id: string;
    title: string;
    icon: any; // Lucide icon component
    overview: string;
    scope: string;
    futureOutlook: string; // The 2036 Vantage
    resilienceScore: number; // 0-10 (10 = AI Proof)
    tnValidation: string; // Hard stats for Tamil Nadu
    keySkills: string[];
    academicRequirements: string;
    downsides: string;
    studyCosts: {
        govt: string;
        private: string;
    };
    grade8Advice: string;
    avgSalary: string;
    archetype: "tech" | "medical" | "management" | "creative" | "commerce"; // Gamification Tag
}

export const STREAMS: Stream[] = [
    {
        id: "engineering",
        title: "Engineering (TNEA/JEE)",
        icon: Cpu,
        overview: "The default TN choice. 440+ colleges. IT/Services dominates.",
        scope: "High Demand: Global SaaS (Chennai) & Manufacturing (Coimbatore) need skilled engineers.",
        futureOutlook: "2036 Vantage: 'Code' will be AI-generated. The value shifts to 'System Architecture' and 'Hardware' (VLSI/Robotics). Pure coders will face crisis.",
        resilienceScore: 6,
        tnValidation: "TNEA 2024 Reality: CEG CSE Cutoff was 199.5 (OC). MIT Cutoff 198+. 1.5 Lakh seats in Tier-3 colleges remained VACANT. Only Top 50 colleges guarantee >₹4LPA.",
        keySkills: ["System Design", "Maths", "Logic", "Complex Problem Solving"],
        academicRequirements: "TNEA Cutoff > 195 (Tier 1); > 185 (Tier 2). JEE Main optional.",
        downsides: "Mass recruiters (TCS/CTS) pay same ₹3.5 - 5 LPA since 2010. Real inflation-adjusted wages have dropped.",
        studyCosts: {
            govt: "₹30k - 50k/Year (CEG/MIT)",
            private: "₹2 - 4 Lakhs/Year (Mgmt Quota)"
        },
        grade8Advice: "Don't just code. Build robots (Arduino). Strong Maths is non-negotiable.",
        avgSalary: "₹3.5 - 12 LPA", // Verified 2024 Range for Freshers
        archetype: "tech"
    },
    {
        id: "medical",
        title: "Medical (NEET TN)",
        icon: Stethoscope,
        overview: "The most contested path. MMC, Stanley, Kilpauk are legends.",
        scope: "Perennial Demand: Huge shortage in rural TN. Tier-2 cities (Madurai/Trichy) are new healthcare hubs.",
        futureOutlook: "2036 Vantage: AI will handle diagnosis. Doctors will be 'Care Managers' and 'Surgeons'. Empathy will be the premium skill.",
        resilienceScore: 9,
        tnValidation: "NEET 2024: Govt School Topper scored 669. 7.5% Quota has 622 Seats (Free). For General, OC Cutoff was 600+.",
        keySkills: ["Biology", "Emotional Resilience", "Patience", "Service Mindset"],
        academicRequirements: "NEET > 600 (Govt Seat); > 500 (Self-Financing).",
        downsides: "10-year study cycle (MBBS+MD). 36-hour shifts are common.",
        studyCosts: {
            govt: "₹13.6k/Year (Govt Seat)",
            private: "₹50L - 1Cr (Private Mgmt)"
        },
        grade8Advice: "Volunteer at a hospital. If you faint at blood, stop now.",
        avgSalary: "₹6 - 15 LPA (Post MD)",
        archetype: "medical"
    },
    {
        id: "management_bba",
        title: "Management (IPM/BBA)",
        icon: Briefcase,
        overview: "The CEO Track. IIM Indore (IPM), Loyola, Madras Christian College (MCC).",
        scope: "Corporate Demand: TN's strict corporate culture values professionally groomed managers.",
        futureOutlook: "2036 Vantage: AI runs operations. Managers will focus on 'Strategy', 'Negotiation', and 'Human Motivation'.",
        resilienceScore: 8,
        tnValidation: "IIM Trichy/Chennai grads start at ₹15LPA+. Loyola BBA grads often get ₹6LPA start. Tier-3 MBA has <₹3LPA placement.",
        keySkills: ["Leadership", "Public Speaking", "Data Sense", "Networking"],
        academicRequirements: "IPMAT (IIMs) or Class 12 Marks > 96% (Loyola/MCC).",
        downsides: "MBA from Tier-3 college is nearly worthless. Brand matters 100%.",
        studyCosts: {
            govt: "₹10k - 20k/Year (Madras Univ)",
            private: "₹4 - 6 Lakhs/Year (IPM is ₹30L total)"
        },
        grade8Advice: "Run for School Captain. Organize events. Read 'The Economic Times'.",
        avgSalary: "₹6 - 25 LPA",
        archetype: "management"
    },
    {
        id: "commerce_ca",
        title: "Chartered Accountant (ICAI)",
        icon: Landmark,
        overview: "The toughest commerce path. Statutory power in signatures.",
        scope: "Statutory Demand: Auditing, Finance, Tax. Every TN business legally needs one.",
        futureOutlook: "2036 Vantage: Routine audit/tax is automated. CAs will become 'Business Advisors' and 'Forensic Auditors'.",
        resilienceScore: 7,
        tnValidation: "Pass percentage < 10%. 5-year struggle is real. But a CA in Chennai never starves.",
        keySkills: ["Accountancy", "Focus", "Law", "Hard Work"],
        academicRequirements: "CPT/Foundation after Class 12. No college degree needed.",
        downsides: "Social isolation during study. High failure rate causes depression.",
        studyCosts: {
            govt: "N/A",
            private: "₹2 - 3 Lakhs (Coaching + ICAI)"
        },
        grade8Advice: "Focus on Accounts. Develop sitting tolerance of 6+ hours.",
        avgSalary: "₹8 - 15 LPA",
        archetype: "commerce"
    },
    {
        id: "law",
        title: "Law (TNDALU/NLU)",
        icon: Gavel,
        overview: "School of Excellence (SOEL) vs NLUs. Corp Law vs Litigation.",
        scope: "Growing Demand: Corporate firms in Chennai pay ₹10L+. Litigation is social service initially.",
        futureOutlook: "2036 Vantage: 'Contract Drafting' is done by AI. Lawyers will focus on 'Courtroom Advocacy' and 'Complex Ethics'.",
        resilienceScore: 7,
        tnValidation: "First-gen lawyers struggle in High Court litigation for 5-7 years before breakeven. SOEL Cutoff is >90% per subject.",
        keySkills: ["Reading", "Logic", "Argument", "Constitution"],
        academicRequirements: "CLAT (NLUs) or Class 12 Marks (SOEL).",
        downsides: "Long gestation period in litigation. High stress in corporate.",
        studyCosts: {
            govt: "₹1 - 2 Lakhs (SOEL)",
            private: "₹10 - 15 Lakhs (NLU/Private)"
        },
        grade8Advice: "Read English Newspaper daily. Debate every topic. Watch court archives.",
        avgSalary: "₹4 - 12 LPA",
        archetype: "management"
    },
    {
        id: "arts_science",
        title: "Arts & Science (B.Sc/B.A)",
        icon: Globe,
        overview: "Loyola, MCC, Presidency, PSG CAS. Quick entry to workforce.",
        scope: "Niche Demand: Data Science (B.Sc Stats), English Lit (Content), Psych (HR).",
        futureOutlook: "2036 Vantage: Generalists will struggle. Specialists (e.g., 'Spatial Statistics') will thrive.",
        resilienceScore: 5,
        tnValidation: "Loyola/MCC campus placements rival Engineering. B.Sc Stats connects to Data Science jobs (₹4-6LPA).",
        keySkills: ["Communication", "Specific Domain Knowledge", "Critical Thinking"],
        academicRequirements: "Class 12 Marks > 95% for top city colleges.",
        downsides: "Without a top college tag, these degrees have low market value.",
        studyCosts: {
            govt: "₹5k - 10k/Year",
            private: "₹40k - 1L/Year"
        },
        grade8Advice: "Explore subjects beyond textbook. Write blogs. Learn a foreign language.",
        avgSalary: "₹3 - 7 LPA",
        archetype: "creative"
    },
    {
        id: "design_media",
        title: "Design & Media",
        icon: Palette,
        overview: "NIFT Chennai, DJ Academy. UI/UX, Fashion, Film.",
        scope: "Creative Demand: Chennai is a cinema/media hub. Digital marketing is booming.",
        futureOutlook: "2036 Vantage: AI creates the 'Average' content. Humans provide the 'Taste' and 'Direction'.",
        resilienceScore: 8,
        tnValidation: "NIFT graduates start at ₹6LPA. Freelance editors in Chennai charge ₹50k/project. Portfolio is king.",
        keySkills: ["Creativity", "Software (Figma/Adobe)", "Empathy", "Visual Eye"],
        academicRequirements: "NIFT/NID Exam or Portfolio for Pvt colleges.",
        downsides: "Subjective success. Portfolio is more important than degree.",
        studyCosts: {
            govt: "₹1 - 2 Lakhs/Year (NIFT)",
            private: "₹3 - 6 Lakhs/Year"
        },
        grade8Advice: "Draw every day. Learn graphic tools (Canva/Figma).",
        avgSalary: "₹5 - 10 LPA",
        archetype: "creative"
    },
    {
        id: "agriculture",
        title: "Agriculture (TNAU)",
        icon: Leaf,
        overview: "B.Sc Agri at TNAU Coimbatore. Research & Govt Jobs.",
        scope: "Sector Demand: Agri-tech startups, Banking (AFO), Civil Services.",
        futureOutlook: "2036 Vantage: Precision Farming & Biotech. 'Farming' will be 'Managing Drones & Soil Data'.",
        resilienceScore: 8,
        tnValidation: "TNAU is Asia's top rated. Bank AFO exams have specific quota for B.Sc Agri. Cutoff > 190 (OC).",
        keySkills: ["Botany", "Tech awareness", "Field endurance", "Patience"],
        academicRequirements: "TNAU Counseling (Biology focus).",
        downsides: "Rural posting is mandatory for many jobs.",
        studyCosts: {
            govt: "₹40k - 60k/Year",
            private: "₹1 - 2 Lakhs/Year"
        },
        grade8Advice: "Visit farms. Understand where food comes from.",
        avgSalary: "₹4 - 7 LPA",
        archetype: "medical"
    },
    {
        id: "hotel_mgmt",
        title: "Hotel Management",
        icon: Coffee,
        overview: "IHM Chennai (Taramani). Hospitality & Culinary.",
        scope: "Service Demand: Tourism in TN (Mahabs, Ooty). Cruise lines.",
        futureOutlook: "2036 Vantage: Service can't be fully automated. Premium 'Human Touch' hospitality will explode.",
        resilienceScore: 7,
        tnValidation: "IHM Chennai has 100% placement. Cruise jobs pay in Dollars ($2000/mo).",
        keySkills: ["Service", "Language", "Grooming", "Discipline"],
        academicRequirements: "NCHMCT JEE.",
        downsides: "Physically demanding (standing 10+ hours). Working on all holidays.",
        studyCosts: {
            govt: "₹1 Lakh/Year (IHM)",
            private: "₹2 - 4 Lakhs/Year"
        },
        grade8Advice: "Cook at home. Learn languages. Be polite.",
        avgSalary: "₹3 - 6 LPA",
        archetype: "creative"
    },
    {
        id: "paramedical",
        title: "Paramedical / Allied",
        icon: HeartPulse,
        overview: "Nursing, Physio, Lab Tech. The backbone of hospitals.",
        scope: "Global Demand: High demand in Chennai hospitals (Apollo/MGM) & Abroad.",
        futureOutlook: "2036 Vantage: Aging population needs care. Robotics will assist, not replace nurses.",
        resilienceScore: 9,
        tnValidation: "Kerala & TN nurses are globally most sought after. UK/Canada migration route is strong.",
        keySkills: ["Care", "Technical Skill", "Empathy", "Stamina"],
        academicRequirements: "Class 12 Marks, specific Counseling.",
        downsides: "Heavy shifts. Underpaid in India compared to West.",
        studyCosts: {
            govt: "₹20k/Year",
            private: "₹1 - 2 Lakhs/Year"
        },
        grade8Advice: "Volunteer. Learn First Aid.",
        avgSalary: "₹2.5 - 5 LPA",
        archetype: "medical"
    },
    {
        id: "psychology",
        title: "Psychology (Clinical)",
        icon: Brain,
        overview: "B.Sc/B.A Psychology. The foundation for therapy & neuroscience.",
        scope: "Social Demand: Mental health crisis needs specialists. HR & UX Research.",
        futureOutlook: "2036 Vantage: AI diagnoses patterns. Psychologists provide the 'Human Connection' and 'Therapy'.",
        resilienceScore: 9,
        tnValidation: "Top colleges: WCC, Ethiraj, MSSW. Clinical licensure requires M.Phil (RCI).",
        keySkills: ["Empathy", "Research", "Listening", "Data Analysis"],
        academicRequirements: "Class 12 Marks. Biology helps but not mandatory.",
        downsides: "B.Sc alone is useless. Masters + M.Phil (7 years) needed for clinical practice.",
        studyCosts: {
            govt: "₹5k - 10k/Year",
            private: "₹50k - 1L/Year"
        },
        grade8Advice: "Observe people. Read 'Phantoms in the Brain'.",
        avgSalary: "₹4 - 10 LPA (Post Masters)",
        archetype: "medical"
    },
    {
        id: "teaching",
        title: "Teaching / EdTech",
        icon: GraduationCap,
        overview: "Schools, Colleges, EdTech content.",
        scope: "Perennial Demand: TN has highest Gross Enrolment Ratio. Teachers always needed.",
        futureOutlook: "2036 Vantage: AI teaches facts. Teachers teach 'Wisdom' and 'Social Skills'.",
        resilienceScore: 7,
        tnValidation: "Govt Teachers (TRB) earn ₹50k+ startup. Private schools pay low (₹15k) initially. B.Ed is mandatory.",
        keySkills: ["Communication", "Mentoring", "Subject Mastery"],
        academicRequirements: "B.Ed / NET / SET.",
        downsides: "Handling parents/admin. Low initial pay in private sector.",
        studyCosts: {
            govt: "₹10k/Year",
            private: "₹50k - 1L/Year"
        },
        grade8Advice: "Tutor your juniors. Explain concepts.",
        avgSalary: "₹3 - 7 LPA",
        archetype: "management"
    },
    {
        id: "govt_jobs",
        title: "Govt Services (TNPSC)",
        icon: Landmark,
        overview: "Group 1 (Dy Collector), Group 2, VAO.",
        scope: "Authority & Stability: Power, Stability, Pension.",
        futureOutlook: "2036 Vantage: Governance will be digital, but decision making remains human.",
        resilienceScore: 8,
        tnValidation: "TNPSC Group 4 2024: 20 Lakh applicants for 9000 posts. Tech coolies are switching to Govt jobs for stability.",
        keySkills: ["General Knowledge", "Tamil", "Aptitude"],
        academicRequirements: "Degree for Grp 1/2. 10th for Grp 4.",
        downsides: "Years of preparation with no guarantee.",
        studyCosts: {
            govt: "Minimal",
            private: "₹20k - 50k (Coaching)"
        },
        grade8Advice: "Read Tamil Newspapers. Know TN Geography/History.",
        avgSalary: "₹4 - 10 LPA",
        archetype: "management"
    }
];
