"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import {
    Menu,
    X,
    Home,
    Wrench,
    Info,
    Folder,
    FileText,
    Phone
} from "lucide-react";
import DarkModeToggle from "../shared/DarkmodeToggle";

// Navigasi + ikon khusus sidebar
const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Wrench },
    { id: "about", label: "About", icon: Info },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Phone },
] as const;

type NavItem = (typeof navItems)[number];

export default function Header() {
    const [activeId, setActiveId] = useState<string>("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const controls = useAnimation();
    const lastScrollY = useRef<number>(0);

    /* ---------------- SCROLL‑SPY ---------------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    /* ------------- HIDE/SHOW ON SCROLL ------------- */
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current && currentY > 80) {
                controls.start({ y: "-100%" });
            } else {
                controls.start({ y: 0 });
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    /* ------------- LOCK SCROLL WHEN SIDEBAR OPEN ------------- */
    useEffect(() => {
        if (menuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /* ------------- Helpers ------------- */
    const linkClass = (id: string) =>
        clsx(
            "font-semibold transition-colors",
            activeId === id
                ? "text-primary dark:text-dark-primary"
                : "text-text-sub dark:text-dark-text-sub hover:text-primary/80 dark:hover:text-dark-primary/80"
        );

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* ======= TOP NAVBAR ======= */}
            <motion.header
                animate={controls}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm px-6 lg:px-0"
            >
                <div className="container mx-auto">
                    <div className="flex justify-between items-center bg-card dark:bg-dark-card rounded-full mt-4 py-2 px-6 lg:px-8 shadow-lg">
                        {/* Logo */}
                        <Link
                            href="#home"
                            className="text-2xl lg:text-3xl font-bold text-primary dark:text-dark-text"
                        >
                            JiePrass
                        </Link>

                        {/* Desktop Nav (tanpa ikon) */}
                        <nav className="hidden lg:flex gap-8">
                            {navItems.slice(0, 5).map(({ id, label }) => (
                                <Link key={id} href={`#${id}`} className={linkClass(id)}>
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Toggle & Contact */}
                        <div className="flex gap-4 items-center">
                            <DarkModeToggle />
                            <Button variant="secondary" asChild className="hidden lg:block">
                                <Link href="#">Contact</Link>
                            </Button>

                            {/* Hamburger */}
                            <button
                                className="lg:hidden text-text dark:text-dark-text"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* ======= MOBILE SIDEBAR ======= */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                    >
                        <motion.aside
                            className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-card-muted dark:bg-dark-card-muted p-6 flex flex-col shadow-2xl"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center border-b border-text-sub dark:border-dark-text-sub mb-6 pb-2">
                                <Link
                                    href="#home"
                                    className="text-2xl font-bold text-primary dark:text-dark-text"
                                    onClick={closeMenu}
                                >
                                    JiePrass
                                </Link>
                                <button
                                    className="text-text dark:text-dark-text"
                                    aria-label="Close menu"
                                    onClick={closeMenu}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <span className="text-text dark:text-dark-text text-sm font-semibold mb-3">Menu</span>

                            {/* Nav links with icons */}
                            <nav className="flex flex-col gap-4">
                                {navItems.map(({ id, label, icon: Icon }: NavItem) => (
                                    <Link
                                        key={id}
                                        href={`#${id}`}
                                        className={clsx(linkClass(id), "flex items-center gap-3")}
                                        onClick={closeMenu}
                                    >
                                        <Icon size={18} className="shrink-0" />
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
