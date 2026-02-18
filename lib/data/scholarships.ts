export interface Scholarship {
    id: string;
    name: string;
    provider: string;
    eligibility: string;
    reward: string;
    deadline: string;
    stream: string;
    archetype?: "tech" | "medical" | "management" | "creative" | "commerce" | "all";
}

export const SCHOLARSHIPS: Scholarship[] = [
    {
        id: "first_grad",
        name: "First Graduate Tuition Waiver",
        provider: "TN Govt",
        eligibility: "First person in family to attend college. TNEA/Medical Counseling admits only.",
        reward: "₹20,000 - ₹27,500 Fee Waiver/Year. No cash.",
        deadline: "During Admission",
        stream: "Engg / Med / Arts",
        archetype: "all"
    },
    {
        id: "quota_75",
        name: "7.5% Govt School Quota (Free Seat)",
        provider: "TN Govt",
        eligibility: "Studied 6th-12th in Govt Schools of TN. For Professional Courses (Engg/Med).",
        reward: "100% Fee Waiver (Tuition + Hostel + Transport). Life Changer.",
        deadline: "TNEA / NEET Counseling",
        stream: "Professional Courses",
        archetype: "all"
    },
    {
        id: "pudhumai_penn",
        name: "Pudhumai Penn Scheme",
        provider: "TN Govt (Social Welfare)",
        eligibility: "Girl students who studied 6th-12th in Govt Schools.",
        reward: "₹1,000/month directly to Bank A/c (₹36,000 total).",
        deadline: "Apply via College",
        stream: "All Degree Courses",
        archetype: "all"
    },
    {
        id: "tamil_pudhalvan",
        name: "Tamil Pudhalvan",
        provider: "TN Govt",
        eligibility: "Boy students who studied 6th-12th in Govt Schools.",
        reward: "₹1,000/month directly to Bank A/c.",
        deadline: "Apply via College",
        stream: "All Degree Courses",
        archetype: "all"
    },
    {
        id: "tvs_cheema",
        name: "TVS Cheema Scholarship",
        provider: "TVS Group",
        eligibility: "Class 12 Marks > 60%. Family Income < ₹8 Lakhs. TN/Karnataka Domicile.",
        reward: "Financial aid for BE/B.Tech/Nursing.",
        deadline: "January 2026",
        stream: "Engg / Medical",
        archetype: "tech"
    },
    {
        id: "vidyadhan",
        name: "Vidyadhan Scholarship",
        provider: "Sarojini Damodaran Foundation",
        eligibility: "Class 10 Score > 90% (80% for Disabled). Family Income < ₹2 Lakhs.",
        reward: "₹10,000 - ₹60,000/year for +1, +2 and Degree.",
        deadline: "Varies (Check Website)",
        stream: "All Streams",
        archetype: "all"
    },
    {
        id: "aicte_pragati",
        name: "AICTE Pragati Scheme",
        provider: "Central Govt (AICTE)",
        eligibility: "Girl Students in Technical Degree/Diploma. Family Income < ₹8 Lakhs.",
        reward: "₹50,000/year.",
        deadline: "Oct - Dec (NSP Portal)",
        stream: "Engineering / Poly",
        archetype: "tech"
    },
    {
        id: "aicte_saksham",
        name: "AICTE Saksham Scheme",
        provider: "Central Govt (AICTE)",
        eligibility: "Differently Abled Students (>40%). Family Income < ₹8 Lakhs.",
        reward: "₹50,000/year.",
        deadline: "Oct - Dec (NSP Portal)",
        stream: "Engineering / Poly",
        archetype: "tech"
    },
    {
        id: "pmss_sc_st",
        name: "Post Matric Scholarship (PMSS)",
        provider: "Central/State",
        eligibility: "SC/ST/SCC students. Income limits apply (< ₹2.5L).",
        reward: "Full Tuition Fee Reimbursed + Maintenance Allowance.",
        deadline: "Nov - Jan",
        stream: "All Streams",
        archetype: "all"
    },
    {
        id: "bc_mbc",
        name: "BC/MBC Scholarship",
        provider: "TN Govt (BC/MBC Welfare)",
        eligibility: "BC/MBC/DNC students. Annual Income < ₹2.5L.",
        reward: "Free Education (Degree) / Hostel subsidy.",
        deadline: "August - Oct",
        stream: "Arts & Science / Poly",
        archetype: "all"
    },
    {
        id: "maharam",
        name: "Mahindra All India Talent",
        provider: "K.C. Mahindra Trust",
        eligibility: "Polytechnic Students. Good marks in 10th/12th.",
        reward: "₹10,000/year for 3 years.",
        deadline: "September",
        stream: "Polytechnic",
        archetype: "tech"
    },
    {
        id: "agaram",
        name: "Agaram Foundation",
        provider: "Surya's Agaram",
        eligibility: "Deserving students from extreme poverty/rural areas.",
        reward: "Full Support (Mentorship + Education + Skills).",
        deadline: "Immediately after +2 Results",
        stream: "All Streams",
        archetype: "all"
    },
    {
        id: "inspire_she",
        name: "INSPIRE SHE",
        provider: "DST (Central Govt)",
        eligibility: "Top 1% in Class 12 Boards. Pursuing Basic Sciences (B.Sc/Integrated M.Sc).",
        reward: "₹80,000/year.",
        deadline: "Oct - Dec",
        stream: "Science (B.Sc)",
        archetype: "tech"
    },
    {
        id: "santoor_women",
        name: "Santoor Women's Scholarship",
        provider: "Wipro Cares",
        eligibility: "Girl students from AP/Telangana/Karnataka (Check TN availability).",
        reward: "₹24,000/year.",
        deadline: "August",
        stream: "Degree",
        archetype: "all"
    },
    {
        id: "keeper_scholar",
        name: "HDFC Badhte Kadam",
        provider: "HDFC Bank",
        eligibility: "Students facing crisis (death of earning member). Sales < ₹6L.",
        reward: "₹30,000 - ₹1 Lakh.",
        deadline: "Rolling",
        stream: "All Streams",
        archetype: "all"
    }
];
