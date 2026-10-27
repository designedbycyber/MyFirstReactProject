import { useState, useEffect } from "react";

function getInitialTheme() {
    try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
    } catch { /* storage unavailable */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}
