"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const { themeReady } = useDarkMode();
    if (!themeReady) return null;          // render setelah mount
    return <>{children}</>;
}
