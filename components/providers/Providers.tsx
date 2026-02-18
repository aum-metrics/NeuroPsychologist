"use client";

import { MentorProvider } from "./MentorContext";
import { ThemeProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <MentorProvider>
                {children}
            </MentorProvider>
        </ThemeProvider>
    );
}
