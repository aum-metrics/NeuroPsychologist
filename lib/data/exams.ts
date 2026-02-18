export interface EntranceExam {
    id: string;
    name: string;
    category: string;
    summary: string;
    eligibility: string;
    testPattern: string;
    keyDates: string;
    testCentres: string;
    clashingExams: string;
    studyCostsLink: string;
    archetype: "tech" | "medical" | "management" | "creative" | "commerce";
}

export const ENTRANCE_EXAMS: EntranceExam[] = [
    {
        id: "tnea",
        name: "TNEA Admission (Not an Exam)",
        category: "State Admission",
        summary: "Counselling based on Class 12 Marks (Cutoff 200). For Anna Univ & Affiliated Colleges.",
        eligibility: "Class 12 Maths/Phy/Chem. TN Domicile preferred.",
        testPattern: "No Exam. Ranking based on (Maths/2) + (Phy/4) + (Chem/4).",
        keyDates: "Reg: May; Rank List: June; Counseling: July-Aug.",
        testCentres: "Online / TFC Centers",
        clashingExams: "None",
        studyCostsLink: "https://www.tneaonline.org/",
        archetype: "tech"
    },
    {
        id: "viteee",
        name: "VITEEE (Private)",
        category: "University Exam",
        summary: "Mandatory for VIT Vellore/Chennai. High competition.",
        eligibility: "Class 12 PCM/PCB with 60%.",
        testPattern: "CBT. 2.5 Hrs. Aptitude included.",
        keyDates: "April.",
        testCentres: "All Major Cities",
        clashingExams: "JEE Main (April)",
        studyCostsLink: "https://vit.ac.in/",
        archetype: "tech"
    },
    {
        id: "srmjeee",
        name: "SRMJEEE (Private)",
        category: "University Exam",
        summary: "For SRM KTR and Vadapalani campuses.",
        eligibility: "Class 12 PCM/PCB.",
        testPattern: "Remote Proctored / Center Based.",
        keyDates: "April - June Phases.",
        testCentres: "Online/Center",
        clashingExams: "None",
        studyCostsLink: "https://www.srmist.edu.in/",
        archetype: "tech"
    },
    {
        id: "neet_ug",
        name: "NEET UG (All India)",
        category: "Medical",
        summary: "Mandatory for MBBS/BDS in TN (Govt & Mgmt Quota).",
        eligibility: "Class 12 PCB. Min 50%. Age > 17.",
        testPattern: "180 Qs. 720 Marks. Pen & Paper.",
        keyDates: "Reg: Feb-Mar; Exam: May.",
        testCentres: "All District Headquarters",
        clashingExams: "JEE Main (Sometimes dates close)",
        studyCostsLink: "https://tnmedicalselection.net/",
        archetype: "medical"
    },
    {
        id: "jee_main",
        name: "JEE Main (All India)",
        category: "Engineering",
        summary: "For NIT Trichy, IIIT Kancheepuram & IIT Madras (Adv).",
        eligibility: "Class 12 PCM. 75% Marks (for NITs).",
        testPattern: "CBT. 300 Marks. Maths, Phy, Chem.",
        keyDates: "Jan & April Sessions.",
        testCentres: "Chennai, Coimbatore, Madurai, Trichy, Salem+.",
        clashingExams: "Board Practicals",
        studyCostsLink: "https://jeemain.nta.ac.in/",
        archetype: "tech"
    },
    {
        id: "tancet",
        name: "TANCET (State)",
        category: "Postgrad (MBA/MCA)",
        summary: "Entry to Anna Univ & Govt Colleges for MBA/MCA/ME.",
        eligibility: "Any Degree (50%).",
        testPattern: "2 Hr Offline Test. 100 Marks.",
        keyDates: "Reg: Jan; Exam: March.",
        testCentres: "Major TN Cities",
        clashingExams: "CAT/MAT",
        studyCostsLink: "https://tancet.annauniv.edu/",
        archetype: "management"
    },
    {
        id: "tnpsc_grp4",
        name: "TNPSC Group 4 (State)",
        category: "Govt Job",
        summary: "VAO, Junior Assistant, Typist roles.",
        eligibility: "SSLC (10th Std) Pass.",
        testPattern: "3 Hr, 300 Marks. Tamil + GK + Aptitude.",
        keyDates: "Notification usually Annual.",
        testCentres: "Every Taluk in TN",
        clashingExams: "Group 2",
        studyCostsLink: "https://www.tnpsc.gov.in/",
        archetype: "management"
    },
    {
        id: "clat",
        name: "CLAT (All India)",
        category: "Law",
        summary: "For NLU Trichy (TNNLU) and other NLUs.",
        eligibility: "Class 12 Pass (45%).",
        testPattern: "2 Hr Reading Comprehension based.",
        keyDates: "Exam: December.",
        testCentres: "Chennai, Trichy, Coimbatore, Madurai",
        clashingExams: "AILET",
        studyCostsLink: "https://consortiumofnlus.ac.in/",
        archetype: "management"
    },
    {
        id: "nift",
        name: "NIFT Entrance (All India)",
        category: "Design",
        summary: "Admission to NIFT Chennai (Taramani).",
        eligibility: "Class 12 Any Stream.",
        testPattern: "Creative Ability + General Ability.",
        keyDates: "Reg: Dec; Exam: Feb.",
        testCentres: "Chennai, Coimbatore",
        clashingExams: "NID DAT",
        studyCostsLink: "https://nift.ac.in/",
        archetype: "creative"
    },
    {
        id: "cuet_ug",
        name: "CUET UG (All India)",
        category: "Central Univ",
        summary: "For Central Univ of Tamil Nadu (Thiruvarur) & Pondicherry Univ.",
        eligibility: "Class 12 Pass.",
        testPattern: "CBT. Domain subjects.",
        keyDates: "May.",
        testCentres: "Pan TN",
        clashingExams: "NEET",
        studyCostsLink: "https://cuet.samarth.ac.in/",
        archetype: "management"
    },
    {
        id: "imucet",
        name: "IMU CET (All India)",
        category: "Maritime",
        summary: "Indian Maritime University (Chennai HQ).",
        eligibility: "Class 12 PCM.",
        testPattern: "CBT. Physics, Math focus.",
        keyDates: "May/June.",
        testCentres: "Chennai, Cochin",
        clashingExams: "None",
        studyCostsLink: "https://www.imu.edu.in/",
        archetype: "tech"
    },
    {
        id: "ca_foundation",
        name: "CA Foundation",
        category: "Commerce",
        summary: "Entry to Chartered Accountancy (ICAI).",
        eligibility: "Class 12 Pass (Any Stream).",
        testPattern: "4 Papers: Accounting, Law, Quant, Economics.",
        keyDates: "June & Dec Sessions.",
        testCentres: "All Major TN Districts",
        clashingExams: "B.Com Semesters",
        studyCostsLink: "https://www.icai.org/",
        archetype: "commerce"
    },
    {
        id: "ipmat",
        name: "IPMAT (IIM Indore)",
        category: "Management",
        summary: "Direct 5-Year Integrated MBA at IIMs (Indore, Rohtak).",
        eligibility: "Class 12 Pass (60%). Age < 20.",
        testPattern: "Quantitative Ability + Verbal Ability.",
        keyDates: "Reg: Feb; Exam: May.",
        testCentres: "Chennai, Coimbatore, Madurai, Trichy",
        clashingExams: "CUET / JEE Main (May)",
        studyCostsLink: "https://www.iimidr.ac.in/",
        archetype: "management"
    },
    {
        id: "nata",
        name: "NATA (B.Arch)",
        category: "Architecture",
        summary: "Mandatory for B.Arch in Anna Univ & Private Colleges.",
        eligibility: "Class 12 with Maths/Phy/Chem.",
        testPattern: "Drawing + Observation + Aesthetics.",
        keyDates: "Three Attempts: April - July.",
        testCentres: "Major TN Cities",
        clashingExams: "None",
        studyCostsLink: "https://www.nata.in/",
        archetype: "tech"
    },
    {
        id: "tn_boards_merit",
        name: "Class 12 Boards (TN Merit)",
        category: "Management / Arts",
        summary: "The 'Real' Exam. Used for Loyola, MCC, PSG, TNDALU (Law), and TNEA.",
        eligibility: "H.Sc Marks (State Board / CBSE).",
        testPattern: "No Separate Test. Pure Merit Cutoff.",
        keyDates: "Results: May.",
        testCentres: "Your School",
        clashingExams: "All Entrance Tests",
        studyCostsLink: "https://dge.tn.gov.in/",
        archetype: "management"
    }
];
