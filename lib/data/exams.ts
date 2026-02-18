import { BookOpen, Calendar, MapPin, Globe, CreditCard, Award, GraduationCap, AlertTriangle } from "lucide-react";

export interface Exam {
    id: string;
    title: string;
    title_ta?: string;
    shortName: string;
    shortName_ta?: string;
    type: "National" | "State" | "Institute";
    type_ta?: string;
    description: string;
    description_ta?: string;
    examDate: string;
    examDate_ta?: string;
    applicationDeadline: string;
    applicationDeadline_ta?: string;
    difficulty: "Medium" | "Hard" | "Very Hard";
    difficulty_ta?: string;
    acceptedBy: string;
    acceptedBy_ta?: string;
    website: string;
    fees: string;
    fees_ta?: string;
    streams: string[];
}

export const EXAMS: Exam[] = [
    {
        id: "neet_ug",
        title: "National Eligibility cum Entrance Test (UG)",
        title_ta: "தேசிய தகுதி மற்றும் நுழைவுத் தேர்வு (NEET UG)",
        shortName: "NEET UG",
        shortName_ta: "NEET",
        type: "National",
        type_ta: "தேசிய",
        description: "The sole gateway for MBBS/BDS in India. Highly competitive.",
        description_ta: "இந்தியாவில் MBBS/BDS படிப்பதற்கான ஒரே நுழைவு வாயில். அதிக போட்டி நிறைந்தது.",
        examDate: "May 5, 2024",
        examDate_ta: "மே 5, 2024",
        applicationDeadline: "March 2024",
        applicationDeadline_ta: "மார்ச் 2024",
        difficulty: "Hard",
        difficulty_ta: "கடினம்",
        acceptedBy: "All Medical Colleges (Govt & Pvt) in TN.",
        acceptedBy_ta: "தமிழகத்தில் உள்ள அனைத்து மருத்துவக் கல்லூரிகளும் (அரசு & தனியார்).",
        website: "https://neet.nta.nic.in/",
        fees: "₹1700",
        fees_ta: "₹1700",
        streams: ["medical", "paramedical"]
    },
    {
        id: "tnea",
        title: "Tamil Nadu Engineering Admissions",
        title_ta: "தமிழ்நாடு பொறியியல் சேர்க்கை (TNEA)",
        shortName: "TNEA",
        shortName_ta: "TNEA",
        type: "State",
        type_ta: "மாநிலம்",
        description: "Not an exam, but a counseling process based on Class 12 marks.",
        description_ta: "இது தேர்வு அல்ல, 12 ஆம் வகுப்பு மதிப்பெண் அடிப்படையிலான கலந்தாய்வு செயல்முறை.",
        examDate: "N/A (Counseling)",
        examDate_ta: "தேர்வு இல்லை (கலந்தாய்வு)",
        applicationDeadline: "June 2024",
        applicationDeadline_ta: "ஜூன் 2024",
        difficulty: "Medium",
        difficulty_ta: "நடுத்தரம்",
        acceptedBy: "Anna University & 440+ Affiliated Colleges.",
        acceptedBy_ta: "அண்ணா பல்கலைக்கழகம் & 440+ இணைப்புக் கல்லூரிகள்.",
        website: "https://www.tneaonline.org/",
        fees: "₹500",
        fees_ta: "₹500",
        streams: ["engineering"]
    },
    {
        id: "jee_main",
        title: "Joint Entrance Examination (Main)",
        title_ta: "கூட்டு நுழைவுத் தேர்வு (JEE Main)",
        shortName: "JEE Main",
        shortName_ta: "JEE Main",
        type: "National",
        type_ta: "தேசிய",
        description: "Gateway for NITs, IIITs. NIT Trichy is the top target for TN students.",
        description_ta: "NITகள், IIITகளுக்கான நுழைவு வாயில். NIT திருச்சி தமிழக மாணவர்களின் முக்கிய இலக்கு.",
        examDate: "Jan & April 2024",
        examDate_ta: "ஜனவரி & ஏப்ரல் 2024",
        applicationDeadline: "Dec 2023",
        applicationDeadline_ta: "டிசம்பர் 2023",
        difficulty: "Hard",
        difficulty_ta: "கடினம்",
        acceptedBy: "NIT Trichy, IIIT Kancheepuram, Thanjavur.",
        acceptedBy_ta: "NIT திருச்சி, IIIT காஞ்சிபுரம், தஞ்சாவூர்.",
        website: "https://jeemain.nta.ac.in/",
        fees: "₹1000",
        fees_ta: "₹1000",
        streams: ["engineering"]
    },
    {
        id: "cuet_ug",
        title: "Common University Entrance Test (UG)",
        title_ta: "பொது பல்கலைக்கழக நுழைவுத் தேர்வு (CUET UG)",
        shortName: "CUET UG",
        shortName_ta: "CUET",
        type: "National",
        type_ta: "தேசிய",
        description: "Standardized test for Central Universities. CUTN (Thiruvarur) accepts this.",
        description_ta: "மத்திய பல்கலைக்கழகங்களுக்கான தரப்படுத்தப்பட்ட தேர்வு. CUTN (திருவாரூர்) இதை ஏற்கிறது.",
        examDate: "May 15-31, 2024",
        examDate_ta: "மே 15-31, 2024",
        applicationDeadline: "March 2024",
        applicationDeadline_ta: "மார்ச் 2024",
        difficulty: "Medium",
        difficulty_ta: "நடுத்தரம்",
        acceptedBy: "Central Univ of Tamil Nadu, Gandhigram Rural Inst.",
        acceptedBy_ta: "தமிழ்நாடு மத்திய பல்கலைக்கழகம், காந்திகிராம கிராமப்புற நிறுவனம்.",
        website: "https://cuet.samarth.ac.in/",
        fees: "₹750",
        fees_ta: "₹750",
        streams: ["arts_science", "commerce_ca"]
    },
    {
        id: "ipmat",
        title: "Integrated Programme in Management Aptitude Test",
        title_ta: "IPM உளச்சார்புத் தேர்வு (IPMAT)",
        shortName: "IPMAT",
        shortName_ta: "IPMAT",
        type: "Institute",
        type_ta: "நிறுவனம்",
        description: "Direct entry to IIMs after Class 12. Highly prestigious.",
        description_ta: "12 ஆம் வகுப்புக்குப் பிறகு IIMகளில் நேரடி சேர்க்கை. மிகவும் மதிப்புமிக்கது.",
        examDate: "May 2024",
        examDate_ta: "மே 2024",
        applicationDeadline: "April 2024",
        applicationDeadline_ta: "ஏப்ரல் 2024",
        difficulty: "Very Hard",
        difficulty_ta: "மிகக் கடினம்",
        acceptedBy: "IIM Indore, IIM Rohtak.",
        acceptedBy_ta: "IIM இந்தூர், IIM ரோஹ்தக்.",
        website: "https://www.iimidr.ac.in/",
        fees: "₹4130",
        fees_ta: "₹4130",
        streams: ["management_bba"]
    },
    {
        id: "nift",
        title: "NIFT Entrance Exam",
        title_ta: "NIFT நுழைவுத் தேர்வு",
        shortName: "NIFT",
        shortName_ta: "NIFT",
        type: "National",
        type_ta: "தேசிய",
        description: "For Design & Fashion Technology. NIFT Chennai (Taramani) is a top center.",
        description_ta: "வடிவமைப்பு & ஆடை தொழில்நுட்பத்திற்கான தேர்வு. NIFT சென்னை (தரமணி) ஒரு சிறந்த மையம்.",
        examDate: "Feb 2024",
        examDate_ta: "பிப்ரவரி 2024",
        applicationDeadline: "Jan 2024",
        applicationDeadline_ta: "ஜனவரி 2024",
        difficulty: "Hard",
        difficulty_ta: "கடினம்",
        acceptedBy: "NIFT Chennai & other campuses.",
        acceptedBy_ta: "NIFT சென்னை & பிற வளாகங்கள்.",
        website: "https://nift.ac.in/",
        fees: "₹3000",
        fees_ta: "₹3000",
        streams: ["design_media"]
    },
    {
        id: "clat",
        title: "Common Law Admission Test",
        title_ta: "பொது சட்ட சேர்க்கை தேர்வு (CLAT)",
        shortName: "CLAT",
        shortName_ta: "CLAT",
        type: "National",
        type_ta: "தேசிய",
        description: "Gateway to National Law Universities. TNNLU Trichy accepts this.",
        description_ta: "தேசிய சட்டப் பல்கலைக்கழகங்களுக்கான நுழைவு வாயில். TNNLU திருச்சி இதை ஏற்கிறது.",
        examDate: "Dec 2023",
        examDate_ta: "டிசம்பர் 2023",
        applicationDeadline: "Nov 2023",
        applicationDeadline_ta: "நவம்பர் 2023",
        difficulty: "Hard",
        difficulty_ta: "கடினம்",
        acceptedBy: "TNNLU Trichy & other NLUs.",
        acceptedBy_ta: "TNNLU திருச்சி & பிற NLUகள்.",
        website: "https://consortiumofnlus.ac.in/",
        fees: "₹4000",
        fees_ta: "₹4000",
        streams: ["law"]
    }
];
