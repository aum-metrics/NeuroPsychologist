import { GraduationCap, Cpu, Stethoscope, Briefcase, Gavel, Palette, Leaf, HeartPulse, Brain, Coffee, Globe, Feather, Landmark } from "lucide-react";

export interface Stream {
    id: string;
    title: string;
    title_ta?: string;
    icon: any;
    overview: string;
    overview_ta?: string;
    scope: string;
    scope_ta?: string;
    futureOutlook: string;
    futureOutlook_ta?: string;
    resilienceScore: number;
    tnValidation: string;
    tnValidation_ta?: string;
    keySkills: string[];
    keySkills_ta?: string[];
    academicRequirements: string;
    academicRequirements_ta?: string;
    downsides: string;
    downsides_ta?: string;
    studyCosts: {
        govt: string;
        private: string;
    };
    grade8Advice: string;
    avgSalary: string;
    archetype: "tech" | "medical" | "management" | "creative" | "commerce";
}

export const STREAMS: Stream[] = [
    {
        id: "engineering",
        title: "Engineering (TNEA/JEE)",
        title_ta: "பொறியியல் (Engineering)",
        icon: Cpu,
        overview: "The default TN choice. 440+ colleges. IT/Services dominates.",
        overview_ta: "தமிழ்நாட்டின் இயல்பான தேர்வு. 440+ கல்லூரிகள். IT/சேவைகள் ஆதிக்கம் செலுத்துகின்றன.",
        scope: "High Demand: Global SaaS (Chennai) & Manufacturing (Coimbatore) need skilled engineers.",
        scope_ta: "அதிக தேவை: சென்னை (SaaS) மற்றும் கோயம்புத்தூர் (உற்பத்தி) திறமையான பொறியாளர்களைத் தேடுகின்றன.",
        futureOutlook: "2036 Vantage: 'Code' will be AI-generated. The value shifts to 'System Architecture' and 'Hardware' (VLSI/Robotics). Pure coders will face crisis.",
        futureOutlook_ta: "2036 பார்வை: 'Code' AI ஆல் உருவாக்கப்படும். மதிப்பு 'System Architecture' மற்றும் 'Hardware' (VLSI/Robotics) க்கு மாறும்.",
        resilienceScore: 6,
        tnValidation: "TNEA 2024 Reality: CEG CSE Cutoff was 199.5 (OC). MIT Cutoff 198+. 1.5 Lakh seats in Tier-3 colleges remained VACANT. Only Top 50 colleges guarantee >₹4LPA.",
        tnValidation_ta: "TNEA 2024 நிதர்சனம்: CEG CSE கட்-ஆஃப் 199.5 (OC). டயர்-3 கல்லூரிகளில் 1.5 லட்சம் இடங்கள் காலியாக உள்ளன. முதல் 50 கல்லூரிகள் மட்டுமே >₹4LPA உத்தரவாதம் அளிக்கின்றன.",
        keySkills: ["System Design", "Maths", "Logic", "Complex Problem Solving"],
        keySkills_ta: ["அமைப்பு வடிவமைப்பு", "கணிதம்", "தர்க்கம்", "சிக்கலான சிக்கல் தீர்த்தல்"],
        academicRequirements: "TNEA Cutoff > 195 (Tier 1); > 185 (Tier 2). JEE Main optional.",
        downsides: "Mass recruiters (TCS/CTS) pay same ₹3.5 - 5 LPA since 2010. Real inflation-adjusted wages have dropped.",
        studyCosts: {
            govt: "₹30k - 50k/Year (CEG/MIT)",
            private: "₹2 - 4 Lakhs/Year (Mgmt Quota)"
        },
        grade8Advice: "Don't just code. Build robots (Arduino). Strong Maths is non-negotiable.",
        avgSalary: "₹3.5 - 12 LPA",
        archetype: "tech"
    },
    {
        id: "medical",
        title: "Medical (NEET TN)",
        title_ta: "மருத்துவம் (Medical)",
        icon: Stethoscope,
        overview: "The most contested path. MMC, Stanley, Kilpauk are legends.",
        overview_ta: "மிகவும் போட்டியுள்ள பாதை. MMC, ஸ்டான்லி, கீழ்ப்பாக்கம் மருத்துவ கல்லூரிகள் புகழ்பெற்றவை.",
        scope: "Perennial Demand: Huge shortage in rural TN. Tier-2 cities (Madurai/Trichy) are new healthcare hubs.",
        scope_ta: "நிரந்தர தேவை: கிராமப்புற தமிழ்நாட்டில் பெரும் பற்றாக்குறை உள்ளது. மதுரை, திருச்சி புதிய மருத்துவ மையங்களாக மாறி வருகின்றன.",
        futureOutlook: "2036 Vantage: AI will handle diagnosis. Doctors will be 'Care Managers' and 'Surgeons'. Empathy will be the premium skill.",
        futureOutlook_ta: "2036 பார்வை: AI நோயறிதலைக் கையாளும். மருத்துவர்கள் 'Parimarippu Melanmai' மற்றும் 'Surgeons' ஆக இருப்பார்கள்.",
        resilienceScore: 9,
        tnValidation: "NEET 2024: Govt School Topper scored 669. 7.5% Quota has 622 Seats (Free). For General, OC Cutoff was 600+.",
        tnValidation_ta: "NEET 2024: அரசுப் பள்ளி மாணவர் 669 மதிப்பெண் பெற்றார். 7.5% இடஒதுக்கீட்டில் 622 இடங்கள் இலவசம்.",
        keySkills: ["Biology", "Emotional Resilience", "Patience", "Service Mindset"],
        keySkills_ta: ["உயிரியல்", "மன உறுதி", "பொறுமை", "சேவை மனப்பான்மை"],
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
        title_ta: "மேலாண்மை (Management)",
        icon: Briefcase,
        overview: "The CEO Track. IIM Indore (IPM), Loyola, Madras Christian College (MCC).",
        overview_ta: "CEO பாதை. IIM இந்தூர் (IPM), லயோலா, மதராஸ் கிறிஸ்டியன் கல்லூரி (MCC).",
        scope: "Corporate Demand: TN's strict corporate culture values professionally groomed managers.",
        scope_ta: "கார்ப்பரேட் தேவை: தமிழ்நாட்டின் கண்டிப்பான கார்ப்பரேட் கலாச்சாரம் தொழில்முறை மேலாளர்களை மதிக்கிறது.",
        futureOutlook: "2036 Vantage: AI runs operations. Managers will focus on 'Strategy', 'Negotiation', and 'Human Motivation'.",
        futureOutlook_ta: "2036 பார்வை: AI செயல்பாடுகளை இயக்கும். மேலாளர்கள் 'Strategy', 'Negotiation' மற்றும் 'Human Motivation' ஆகியவற்றில் கவனம் செலுத்துவார்கள்.",
        resilienceScore: 8,
        tnValidation: "IIM Trichy/Chennai grads start at ₹15LPA+. Loyola BBA grads often get ₹6LPA start. Tier-3 MBA has <₹3LPA placement.",
        tnValidation_ta: "IIM திருச்சி/சென்னை பட்டதாரிகள் ₹15LPA+ இல் தொடங்குகிறார்கள். லயோலா BBA பட்டதாரிகள் பெரும்பாலும் ₹6LPA பெறுகிறார்கள்.",
        keySkills: ["Leadership", "Public Speaking", "Data Sense", "Networking"],
        keySkills_ta: ["தலைமைத்துவம்", "மேடை பேச்சு", "தரவு அறிவு", "Networking"],
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
        title_ta: "பட்டயக் கணக்காளர் (CA)",
        icon: Landmark,
        overview: "The toughest commerce path. Statutory power in signatures.",
        overview_ta: "மிகவும் கடினமான வணிகப் பாதை. கையெழுத்துக்களில் சட்டப்பூர்வ அதிகாரம்.",
        scope: "Statutory Demand: Auditing, Finance, Tax. Every TN business legally needs one.",
        scope_ta: "சட்டப்பூர்வ தேவை: தணிக்கை, நிதி, வரி. ஒவ்வொரு தமிழக நிறுவனத்திற்கும் சட்டப்படி ஒரு CA தேவை.",
        futureOutlook: "2036 Vantage: Routine audit/tax is automated. CAs will become 'Business Advisors' and 'Forensic Auditors'.",
        futureOutlook_ta: "2036 பார்வை: வழக்கமான தணிக்கை/வரி தானியங்கியாக இருக்கும். CAகள் 'Business Advisors' ஆக மாறுவார்கள்.",
        resilienceScore: 7,
        tnValidation: "Pass percentage < 10%. 5-year struggle is real. But a CA in Chennai never starves.",
        tnValidation_ta: "தேர்ச்சி சதவீதம் < 10%. 5 வருட போராட்டம் உண்மையானது. ஆனால் சென்னையில் ஒரு CA ஒருபோதும் பட்டினியால் வாடுவதில்லை.",
        keySkills: ["Accountancy", "Focus", "Law", "Hard Work"],
        keySkills_ta: ["கணக்குப்பதிவியல்", "கவனம்", "சட்டம்", "கடின உழைப்பு"],
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
        title_ta: "சட்டம் (Law)",
        icon: Gavel,
        overview: "School of Excellence (SOEL) vs NLUs. Corp Law vs Litigation.",
        overview_ta: "School of Excellence (SOEL) vs NLUs. கார்ப்பரேட் சட்டம் vs வழக்காடல்.",
        scope: "Growing Demand: Corporate firms in Chennai pay ₹10L+. Litigation is social service initially.",
        scope_ta: "வளரும் தேவை: சென்னையில் உள்ள கார்ப்பரேட் நிறுவனங்கள் ₹10L+ வழங்குகின்றன. வழக்காடல் ஆரம்பத்தில் ஒரு சமூக சேவையாக இருக்கும்.",
        futureOutlook: "2036 Vantage: 'Contract Drafting' is done by AI. Lawyers will focus on 'Courtroom Advocacy' and 'Complex Ethics'.",
        futureOutlook_ta: "2036 பார்வை: 'ஒப்பந்த வரைவு' AI ஆல் செய்யப்படும். வழக்கறிஞர்கள் 'Courtroom Advocacy' மற்றும் 'சிக்கலான நெறிமுறைகளில்' கவனம் செலுத்துவார்கள்.",
        resilienceScore: 7,
        tnValidation: "First-gen lawyers struggle in High Court litigation for 5-7 years before breakeven. SOEL Cutoff is >90% per subject.",
        tnValidation_ta: "முதல் தலைமுறை வழக்கறிஞர்கள் 5-7 ஆண்டுகள் போராடுகிறார்கள். SOEL கட்-ஆஃப் ஒவ்வொரு பாடத்திற்கும் >90% ஆகும்.",
        keySkills: ["Reading", "Logic", "Argument", "Constitution"],
        keySkills_ta: ["வாசிப்பு", "தர்க்கம்", "வாதம்", "அரசியலமைப்பு"],
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
        title_ta: "கலை மற்றும் அறிவியல் (Arts & Science)",
        icon: Globe,
        overview: "Loyola, MCC, Presidency, PSG CAS. Quick entry to workforce.",
        overview_ta: "லயோலா, MCC, பிரசிடென்சி, PSG CAS. வேலைவாய்ப்பிற்கு விரைவான நுழைவு.",
        scope: "Niche Demand: Data Science (B.Sc Stats), English Lit (Content), Psych (HR).",
        scope_ta: "குறிப்பிட்ட தேவை: தரவு அறிவியல் (B.Sc Stats), ஆங்கில இலக்கியம் (Content), உளவியல் (HR).",
        futureOutlook: "2036 Vantage: Generalists will struggle. Specialists (e.g., 'Spatial Statistics') will thrive.",
        futureOutlook_ta: "2036 பார்வை: பொதுவானவர்கள் போராடுவார்கள். நிபுணர்கள் (எ.கா., 'Spatial Statistics') செழிப்பார்கள்.",
        resilienceScore: 5,
        tnValidation: "Loyola/MCC campus placements rival Engineering. B.Sc Stats connects to Data Science jobs (₹4-6LPA).",
        tnValidation_ta: "லயோலா/MCC வளாக வேலைவாய்ப்புகள் பொறியியலுக்கு இணையாக உள்ளன. B.Sc Stats தரவு அறிவியல் வேலைகளுடன் இணைகிறது.",
        keySkills: ["Communication", "Specific Domain Knowledge", "Critical Thinking"],
        keySkills_ta: ["தொடர்புத் திறன்", "குறிப்பிட்ட துறை அறிவு", "விமர்சன சிந்தனை"],
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
        title_ta: "வடிவமைப்பு & ஊடகம்",
        icon: Palette,
        overview: "NIFT Chennai, DJ Academy. UI/UX, Fashion, Film.",
        overview_ta: "NIFT சென்னை, DJ அகாடமி. UI/UX, ஃபேஷன், திரைப்படம்.",
        scope: "Creative Demand: Chennai is a cinema/media hub. Digital marketing is booming.",
        scope_ta: "படைப்பு தேவை: சென்னை ஒரு சினிமா/ஊடக மையம். டிஜிட்டல் மார்க்கெட்டிங் வளர்ந்து வருகிறது.",
        futureOutlook: "2036 Vantage: AI creates the 'Average' content. Humans provide the 'Taste' and 'Direction'.",
        futureOutlook_ta: "2036 பார்வை: AI 'சராசரி' உள்ளடக்கத்தை உருவாக்குகிறது. மனிதர்கள் 'ரசனை' மற்றும் 'திசையை' வழங்குகிறார்கள்.",
        resilienceScore: 8,
        tnValidation: "NIFT graduates start at ₹6LPA. Freelance editors in Chennai charge ₹50k/project. Portfolio is king.",
        tnValidation_ta: "NIFT பட்டதாரிகள் ₹6LPA இல் தொடங்குகிறார்கள். சென்னையில் உள்ள ஃப்ரீலான்ஸ் எடிட்டர்கள் ₹50k வரை வசூலிக்கிறார்கள். போர்ட்ஃபோலியோ முக்கியம்.",
        keySkills: ["Creativity", "Software (Figma/Adobe)", "Empathy", "Visual Eye"],
        keySkills_ta: ["படைப்பாற்றல்", "மென்பொருள் (Figma/Adobe)", "பச்சாதாபம்", "Visual Eye"],
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
        title_ta: "விவசாயம் (Agriculture)",
        icon: Leaf,
        overview: "B.Sc Agri at TNAU Coimbatore. Research & Govt Jobs.",
        overview_ta: "கோயம்புத்தூர் TNAU இல் B.Sc Agri. ஆராய்ச்சி & அரசு வேலைகள்.",
        scope: "Sector Demand: Agri-tech startups, Banking (AFO), Civil Services.",
        scope_ta: "துறை தேவை: அக்ரி-டெக் ஸ்டார்ட்அப்கள், வங்கி (AFO), சிவில் சர்வீசஸ்.",
        futureOutlook: "2036 Vantage: Precision Farming & Biotech. 'Farming' will be 'Managing Drones & Soil Data'.",
        futureOutlook_ta: "2036 பார்வை: துல்லியமான விவசாயம் & பயோடெக். 'விவசாயம்' என்பது 'ட்ரோன்கள் & மண் தரவுகளை நிர்வகிப்பதாக' இருக்கும்.",
        resilienceScore: 8,
        tnValidation: "TNAU is Asia's top rated. Bank AFO exams have specific quota for B.Sc Agri. Cutoff > 190 (OC).",
        tnValidation_ta: "ஆசியாவிலேயே TNAU முதன்மையானது. வங்கி AFO தேர்வுகளில் B.Sc Agri-க்கு குறிப்பிட்ட ஒதுக்கீடு உள்ளது. கட்-ஆஃப் > 190 (OC).",
        keySkills: ["Botany", "Tech awareness", "Field endurance", "Patience"],
        keySkills_ta: ["தாவரவியல்", "தொழில்நுட்ப விழிப்புணர்வு", "கள சகிப்புத்தன்மை", "பொறுமை"],
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
        title_ta: "ஹோட்டல் மேலாண்மை",
        icon: Coffee,
        overview: "IHM Chennai (Taramani). Hospitality & Culinary.",
        overview_ta: "IHM சென்னை (தரமணி). விருந்தோம்பல் & சமையல் கலை.",
        scope: "Service Demand: Tourism in TN (Mahabs, Ooty). Cruise lines.",
        scope_ta: "சேவை தேவை: தமிழ்நாட்டில் சுற்றுலா (மாமல்லபுரம், ஊட்டி). கப்பல் நிறுவனங்கள்.",
        futureOutlook: "2036 Vantage: Service can't be fully automated. Premium 'Human Touch' hospitality will explode.",
        futureOutlook_ta: "2036 பார்வை: சேவையை முழுமையாக தானியியக்கமாக்க முடியாது. பிரீமியம் 'Human Touch' விருந்தோம்பல் வெடிக்கும்.",
        resilienceScore: 7,
        tnValidation: "IHM Chennai has 100% placement. Cruise jobs pay in Dollars ($2000/mo).",
        tnValidation_ta: "IHM சென்னை 100% வேலைவாய்ப்பை வழங்குகிறது. கப்பல் வேலைகள் டாலர்களில் ($2000/மாதம்) வழங்குகின்றன.",
        keySkills: ["Service", "Language", "Grooming", "Discipline"],
        keySkills_ta: ["சேவை", "மொழி", "Grooming", "ஒழுக்கம்"],
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
        title_ta: "துணை மருத்துவம் (Paramedical)",
        icon: HeartPulse,
        overview: "Nursing, Physio, Lab Tech. The backbone of hospitals.",
        overview_ta: "நர்சிங், பிசியோ, லேப் டெக்னீஷியன். மருத்துவமனைகளின் முதுகெலும்பு.",
        scope: "Global Demand: High demand in Chennai hospitals (Apollo/MGM) & Abroad.",
        scope_ta: "உலகளாவிய தேவை: சென்னை மருத்துவமனைகள் (Apollo/MGM) & வெளிநாடுகளில் அதிக தேவை.",
        futureOutlook: "2036 Vantage: Aging population needs care. Robotics will assist, not replace nurses.",
        futureOutlook_ta: "2036 பார்வை: முதியோர் மக்கள் தொகைக்கு கவனிப்பு தேவை. ரோபாட்டிக்ஸ் உதவும், நர்சுகளை மாற்றாது.",
        resilienceScore: 9,
        tnValidation: "Kerala & TN nurses are globally most sought after. UK/Canada migration route is strong.",
        tnValidation_ta: "கேரளா & தமிழ்நாடு செவிலியர்கள் உலகளவில் அதிகம் தேடப்படுகிறார்கள். UK/கனடா குடியேற்ற பாதை வலுவாக உள்ளது.",
        keySkills: ["Care", "Technical Skill", "Empathy", "Stamina"],
        keySkills_ta: ["கவனிப்பு", "தொழில்நுட்ப திறன்", "பச்சாதாபம்", "சகிப்புத்தன்மை"],
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
        title_ta: "உளவியல் (Psychology)",
        icon: Brain,
        overview: "B.Sc/B.A Psychology. The foundation for therapy & neuroscience.",
        overview_ta: "B.Sc/B.A உளவியல். சிகிச்சை மற்றும் நரம்பியல் அறிவியலுக்கான அடித்தளம்.",
        scope: "Social Demand: Mental health crisis needs specialists. HR & UX Research.",
        scope_ta: "சமூக தேவை: மனநல நெருக்கடிக்கு நிபுணர்கள் தேவை. HR & UX ஆராய்ச்சி.",
        futureOutlook: "2036 Vantage: AI diagnoses patterns. Psychologists provide the 'Human Connection' and 'Therapy'.",
        futureOutlook_ta: "2036 பார்வை: AI வடிவங்களைக் கண்டறிகிறது. உளவியலாளர்கள் 'மனித இணைப்பு' மற்றும் 'சிகிச்சையை' வழங்குகிறார்கள்.",
        resilienceScore: 9,
        tnValidation: "Top colleges: WCC, Ethiraj, MSSW. Clinical licensure requires M.Phil (RCI).",
        tnValidation_ta: "சிறந்த கல்லூரிகள்: WCC, எத்திராஜ், MSSW. கிளினிக்கல் உரிமத்திற்கு M.Phil (RCI) தேவை.",
        keySkills: ["Empathy", "Research", "Listening", "Data Analysis"],
        keySkills_ta: ["பச்சாதாபம்", "ஆராய்ச்சி", "கேட்டல்", "தரவு பகுப்பாய்வு"],
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
        title_ta: "கற்பித்தல் (Teaching)",
        icon: GraduationCap,
        overview: "Schools, Colleges, EdTech content.",
        overview_ta: "பள்ளிகள், கல்லூரிகள், EdTech உள்ளடக்கம்.",
        scope: "Perennial Demand: TN has highest Gross Enrolment Ratio. Teachers always needed.",
        scope_ta: "நிரந்தர தேவை: தமிழ்நாட்டில் அதிக மொத்த சேர்க்கை விகிதம் உள்ளது. ஆசிரியர்கள் எப்போதும் தேவை.",
        futureOutlook: "2036 Vantage: AI teaches facts. Teachers teach 'Wisdom' and 'Social Skills'.",
        futureOutlook_ta: "2036 பார்வை: AI உண்மைகளைக் கற்பிக்கிறது. ஆசிரியர்கள் 'ஞானம்' மற்றும் 'சமூக திறன்களை' கற்பிக்கிறார்கள்.",
        resilienceScore: 7,
        tnValidation: "Govt Teachers (TRB) earn ₹50k+ startup. Private schools pay low (₹15k) initially. B.Ed is mandatory.",
        tnValidation_ta: "அரசு ஆசிரியர்கள் (TRB) ₹50k+ சம்பாதிக்கிறார்கள். தனியார் பள்ளிகள் ஆரம்பத்தில் குறைவாக (₹15k) வழங்குகின்றன. B.Ed கட்டாயம்.",
        keySkills: ["Communication", "Mentoring", "Subject Mastery"],
        keySkills_ta: ["தொடர்புத் திறன்", "வழிகாட்டுதல்", "பாட அறிவு"],
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
        title_ta: "அரசு வேலைகள் (TNPSC)",
        icon: Landmark,
        overview: "Group 1 (Dy Collector), Group 2, VAO.",
        overview_ta: "குரூப் 1 (துணை ஆட்சியர்), குரூப் 2, VAO.",
        scope: "Authority & Stability: Power, Stability, Pension.",
        scope_ta: "அதிகாரம் & ஸ்திரத்தன்மை: அதிகாரம், ஸ்திரத்தன்மை, ஓய்வூதியம்.",
        futureOutlook: "2036 Vantage: Governance will be digital, but decision making remains human.",
        futureOutlook_ta: "2036 பார்வை: நிர்வாகம் டிஜிட்டல் மயமாக இருக்கும், ஆனால் முடிவெடுப்பது மனிதனால் செய்யப்படும்.",
        resilienceScore: 8,
        tnValidation: "TNPSC Group 4 2024: 20 Lakh applicants for 9000 posts. Tech coolies are switching to Govt jobs for stability.",
        tnValidation_ta: "TNPSC குரூப் 4 2024: 9000 பதவிகளுக்கு 20 லட்சம் விண்ணப்பதாரர்கள். டெக் ஊழியர்கள் ஸ்திரத்தன்மைக்காக அரசு வேலைகளுக்கு மாறுகிறார்கள்.",
        keySkills: ["General Knowledge", "Tamil", "Aptitude"],
        keySkills_ta: ["பொது அறிவு", "தமிழ்", "Aptitude"],
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
