"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ModeToggle() {
    const [isDark, setIsDark] = React.useState(false);

    // detectar tema inicial
    React.useEffect(() => {
        const dark = document.documentElement.classList.contains("dark");
        setIsDark(dark);
    }, []);

    // aplicar clase cuando cambia
    React.useEffect(() => {
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <AnimatedThemeToggler onClick={toggleTheme} />
        // <AnimatedThemeToggler onClick={toggleTheme}>
        //     <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        //     <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        //     <span className="sr-only">Toggle theme</span>
        // </AnimatedThemeToggler>
    );
}
