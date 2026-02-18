import { GraduationCap, Award, Banknote, Building, Users } from "lucide-react";

export interface Scholarship {
    id: string;
    title: string;
    title_ta?: string;
    provider: string;
    provider_ta?: string;
    amount: string;
    amount_ta?: string;
    deadline: string;
    deadline_ta?: string;
    eligibility: string;
    eligibility_ta?: string;
    category: "Merit" | "Means" | "Community" | "Govt";
    category_ta?: string;
    applyLink: string;
}

export const SCHOLARSHIPS: Scholarship[] = [
    {
        id: "pudhumai_penn",
        title: "Moovalur Ramamirtham Ammaiyar (Pudhumai Penn)",
        title_ta: "மூவலூர் இராமாமிர்தம் அம்மையார் (புதுமைப் பெண்)",
        provider: "TN Govt",
        provider_ta: "தமிழக அரசு",
        amount: "₹1,000/Month",
        amount_ta: "₹1,000/மாதம்",
        deadline: "Open All Year",
        deadline_ta: "ஆண்டு முழுவதும் திறந்திருக்கும்",
        eligibility: "Girl students from Govt Schools (6-12th) pursuing higher education.",
        eligibility_ta: "6-12 வரை அரசுப் பள்ளிகளில் படித்த மாணவிகள், உயர்கல்வி பயில.",
        category: "Govt",
        category_ta: "அரசு",
        applyLink: "https://www.pudhumaipenn.tn.gov.in/"
    },
    {
        id: "matric_scholarship",
        title: "Post Matric Scholarship",
        title_ta: "மெட்ரிக் பிந்தைய உதவித்தொகை",
        provider: "Central/State Govt",
        provider_ta: "மத்திய/மாநில அரசு",
        amount: "Tuition + Maintenance",
        amount_ta: "கட்டணம் + பராமரிப்பு",
        deadline: "October 2024",
        deadline_ta: "அக்டோபர் 2024",
        eligibility: "SC/ST/SCA students with family income < ₹2.5 Lakhs.",
        eligibility_ta: "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்கும் குறைவான SC/ST/SCA மாணவர்கள்.",
        category: "Community",
        category_ta: "சமூகம்",
        applyLink: "https://scholarships.gov.in/"
    },
    {
        id: "first_graduate",
        title: "First Graduate Concession",
        title_ta: "முதல் தலைமுறை பட்டதாரி சலுகை",
        provider: "TN Govt",
        provider_ta: "தமிழக அரசு",
        amount: "~₹20,000 - ₹25,000 / Year",
        amount_ta: "~₹20,000 - ₹25,000 / ஆண்டு",
        deadline: "During Counseling",
        deadline_ta: "கலந்தாய்வின் போது",
        eligibility: "First person in family to attend college. TNEA/Medical counseling.",
        eligibility_ta: "குடும்பத்தில் கல்லூரிக்குச் செல்லும் முதல் நபர். TNEA/மருத்துவக் கலந்தாய்வு.",
        category: "Govt",
        category_ta: "அரசு",
        applyLink: "https://www.tneaonline.org/"
    },
    {
        id: "agarwal_vidya",
        title: "Agarwal Vidya Vihar Scholarship",
        title_ta: "அகர்வால் வித்யா விஹார் உதவித்தொகை",
        provider: "Private Trust",
        provider_ta: "தனியார் அறக்கட்டளை",
        amount: "₹10,000 - ₹50,000",
        amount_ta: "₹10,000 - ₹50,000",
        deadline: "August 2024",
        deadline_ta: "ஆகஸ்ட் 2024",
        eligibility: "Meritorious students from economically weak backgrounds in Chennai.",
        eligibility_ta: "சென்னையில் பொருளாதார ரீதியாக பின்தங்கிய திறமையான மாணவர்கள்.",
        category: "Means",
        category_ta: "பொருளாதாரம்",
        applyLink: "https://www.agarwalvidyavihar.com/"
    },
    {
        id: "mahindra_finance",
        title: "Mahindra Finance Swabhimaan",
        title_ta: "மஹிந்திரா ஃபைனான்ஸ் ஸ்வாபிமான்",
        provider: "Mahindra & Mahindra",
        provider_ta: "மஹிந்திரா & மஹிந்திரா",
        amount: "₹5,000 - ₹20,000",
        amount_ta: "₹5,000 - ₹20,000",
        deadline: "September 2024",
        deadline_ta: "செப்டம்பர் 2024",
        eligibility: "Drivers' children (Cab/Auto/Truck) pursuing UG/PG.",
        eligibility_ta: "ஓட்டுநர்களின் (கார்/ஆட்டோ/லாரி) குழந்தைகள், இளங்கலை/முதுகலை பயில.",
        category: "Means",
        category_ta: "பொருளாதாரம்",
        applyLink: "https://www.mahindra.com/"
    },
    {
        id: "inspire_she",
        title: "INSPIRE Scholarship (SHE)",
        title_ta: "INSPIRE உதவித்தொகை (SHE)",
        provider: "DST, Govt of India",
        provider_ta: "DST, இந்திய அரசு",
        amount: "₹80,000 / Year",
        amount_ta: "₹80,000 / ஆண்டு",
        deadline: "November 2024",
        deadline_ta: "நவம்பர் 2024",
        eligibility: "Top 1% in Class 12 Board Exams pursuing Basic Sciences (B.Sc).",
        eligibility_ta: "12 ஆம் வகுப்பில் முதல் 1% மதிப்பெண் பெற்று அடிப்படை அறிவியல் (B.Sc) பயிலும் மாணவர்கள்.",
        category: "Merit",
        category_ta: "தகுதி",
        applyLink: "https://online-inspire.gov.in/"
    }
];
