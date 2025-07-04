"use client";

import { useEffect, useState, useCallback } from "react";

type ColorScheme = "light" | "dark";

const STORAGE_KEY = "theme";

export function useDarkMode() {
    // - hindari hydration mismatch: mulai null, lalu set di useEffect
    const [theme, setTheme] = useState<ColorScheme | null>(null);

    // baca preferensi awal
    useEffect(() => {
        const root = document.documentElement;
        const persisted = (localStorage.getItem(STORAGE_KEY) as ColorScheme) || null;
        const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        const initial = persisted ?? systemPref;
        root.classList.toggle("dark", initial === "dark");
        setTheme(initial);
    }, []);

    // handler toggle
    const toggleDarkMode = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark", next === "dark");
            localStorage.setItem(STORAGE_KEY, next);
            return next;
        });
    }, []);

    const darkMode = theme === "dark";

    return { darkMode, toggleDarkMode, themeReady: theme !== null };
}
