"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// --- Types ---

export type SchoolBoard = "CBSE" | "ICSE" | "State" | "IB" | "Other";
export type FinancialRange = "Compact (< 5L)" | "Moderate (5L - 15L)" | "Comfortable (15L - 40L)" | "Premium (> 40L)";
export type AcademicStanding = "Average" | "Above Average" | "High Achiever";

export interface StudentProfile {
    name: string;
    grade: number; // 8 to 12
    age: number;
    board: SchoolBoard;
    financialStatus: FinancialRange;
    academicStanding: AcademicStanding;
    biologylnterest: boolean; // Critical for Neuroscience
}

export interface PathwayChoice {
    stream11th: "Science_Bio" | "Science_Math" | "Humanities_Psych" | "Other" | null;
    undergradDegree: "MBBS" | "BSc_Psych" | "BSc_Neuro" | "BA_Psych" | "Eng_Bio" | null;
    postgradPlan: "India_MPhil" | "Abroad_PhD" | "India_MD" | null;
}

export interface SimulationState {
    currentStage: "Foundation" | "Stream_Selection" | "Undergrad" | "Postgrad" | "Professional";
    projectedAge: number;
    totalCost: number;
    failureRisk: number; // 0-100%
    completedModules: string[];
}

interface MentorContextType {
    profile: StudentProfile;
    setProfile: (p: Partial<StudentProfile>) => void;
    pathway: PathwayChoice;
    setPathway: (p: Partial<PathwayChoice>) => void;
    simulation: SimulationState;
    advanceStage: () => void;
    resetSimulation: () => void;
}

// --- Defaults ---

const defaultProfile: StudentProfile = {
    name: "Student",
    grade: 8,
    age: 13,
    board: "CBSE",
    financialStatus: "Moderate (5L - 15L)",
    academicStanding: "Above Average",
    biologylnterest: true,
};

const defaultPathway: PathwayChoice = {
    stream11th: null,
    undergradDegree: null,
    postgradPlan: null,
};

const defaultSimulation: SimulationState = {
    currentStage: "Foundation",
    projectedAge: 13,
    totalCost: 0,
    failureRisk: 10, // Base competition risk
    completedModules: [],
};

// --- Context ---

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export function MentorProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfileState] = useState<StudentProfile>(defaultProfile);
    const [pathway, setPathwayState] = useState<PathwayChoice>(defaultPathway);
    const [simulation, setSimulationState] = useState<SimulationState>(defaultSimulation);

    // Load from local storage on mount (optional persistence)
    useEffect(() => {
        const saved = localStorage.getItem("neuropath_state");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.profile) setProfileState(parsed.profile);
                if (parsed.pathway) setPathwayState(parsed.pathway);
            } catch (e) {
                console.error("Failed to load state", e);
            }
        }
    }, []);

    // Save on change
    useEffect(() => {
        const state = { profile, pathway };
        localStorage.setItem("neuropath_state", JSON.stringify(state));
    }, [profile, pathway]);

    const setProfile = (p: Partial<StudentProfile>) => {
        setProfileState((prev) => ({ ...prev, ...p }));
    };

    const setPathway = (p: Partial<PathwayChoice>) => {
        setPathwayState((prev) => ({ ...prev, ...p }));
    };

    const advanceStage = () => {
        // Simple state machine logic (can be expanded)
        setSimulationState((prev) => {
            let nextStage = prev.currentStage;
            let ageIncrement = 0;

            switch (prev.currentStage) {
                case "Foundation":
                    nextStage = "Stream_Selection";
                    ageIncrement = 2; // 8th -> 10th
                    break;
                case "Stream_Selection":
                    nextStage = "Undergrad";
                    ageIncrement = 2; // 10th -> 12th
                    break;
                case "Undergrad":
                    nextStage = "Postgrad";
                    ageIncrement = 3; // BSc
                    break;
                case "Postgrad":
                    nextStage = "Professional";
                    ageIncrement = 2; // MSc
                    break;
            }

            return {
                ...prev,
                currentStage: nextStage,
                projectedAge: prev.projectedAge + ageIncrement,
            };
        });
    };

    const resetSimulation = () => {
        setProfileState(defaultProfile);
        setPathwayState(defaultPathway);
        setSimulationState(defaultSimulation);
        localStorage.removeItem("neuropath_state");
    };

    return (
        <MentorContext.Provider
            value={{
                profile,
                setProfile,
                pathway,
                setPathway,
                simulation,
                advanceStage,
                resetSimulation,
            }}
        >
            {children}
        </MentorContext.Provider>
    );
}

export function useMentor() {
    const context = useContext(MentorContext);
    if (context === undefined) {
        throw new Error("useMentor must be used within a MentorProvider");
    }
    return context;
}
