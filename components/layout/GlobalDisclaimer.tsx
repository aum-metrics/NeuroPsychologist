"use client";

import { AlertTriangle } from "lucide-react";

export function GlobalDisclaimer() {
    return (
        <div className="bg-blue-500/10 border-b border-blue-500/20 px-4 py-2 text-[10px] md:text-xs text-blue-700 dark:text-blue-400 flex items-center justify-center text-center gap-2">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>
                <strong>Community Dataset (Open Access).</strong> Data on Schemes & Exams is for awareness. Always verify with official TNEA/NTA bulletins.
                <a href="https://github.com/aum-metrics/NeuroPsychologist/issues" target="_blank" className="underline ml-2 hover:text-blue-500">
                    Found an error? Suggest Edit
                </a>
            </span>
        </div>
    );
}
