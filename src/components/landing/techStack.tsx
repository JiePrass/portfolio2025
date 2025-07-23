"use client";

import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel, FaReact } from "react-icons/fa6";
import { SiTypescript, SiExpress } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import FigmaIcon from "@/assets/icons/figma.svg";
import { JSX } from "react";

interface Skill {
    name: string;
    description: string;
    icon: JSX.Element;
}

// Brand‑color removed – icons will follow the current text color
const skills: Skill[] = [
    {
        name: "Next.js",
        description:
            "Full‑stack React framework with server components, file‑based routing, and excellent DX.",
        icon: <RiNextjsFill className="w-12 h-12 mb-2" />,
    },
    {
        name: "React",
        description:
            "Core library for building performant UIs with hooks, suspense, and concurrent features.",
        icon: <FaReact className="w-12 h-12 mb-2 text-[#61DAFB]" />,
    },
    {
        name: "Express.js",
        description:
            "Minimal Node.js backend framework perfect for REST APIs and micro‑services.",
        icon: <SiExpress className="w-12 h-12 mb-2" />,
    },
    {
        name: "Laravel",
        description:
            "Batteries‑included PHP framework for rapid, secure web‑app development.",
        icon: <FaLaravel className="w-12 h-12 mb-2 text-[#FF2D20]" />,
    },
    {
        name: "TypeScript",
        description:
            "Typed superset of JavaScript enabling safer, scalable codebases.",
        icon: <SiTypescript className="w-12 h-12 mb-2 text-[#3178C6]" />,
    },
    {
        name: "Figma",
        description:
            "Collaborative design tool for high‑fidelity UI/UX prototypes and hand‑off.",
        icon: <FigmaIcon className="w-12 h-12 mb-2" />,
    },
];

export default function TechStack() {
    return (
        <section className="bg-accent-200 dark:bg-dark-accent-200 px-6 lg:px-0">
            <div className="container mx-auto flex py-12 lg:py-20 flex-col items-center">
                {/* Section heading */}
                <div className="flex items-center">
                    <div className="w-4 h-[2px] bg-dark-primary rounded-full mr-2" />
                    <span className="text-sm font-medium">My Skills</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6">
                    Tech Stack That
                    <span className="text-primary dark:text-dark-primary font-medium"> Power My Work</span>
                </h2>

                {/* Skills grid */}
                <TooltipProvider>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-[1050px]">
                        {skills.map(({ name, description, icon }) => (
                            <Tooltip key={name}>
                                <TooltipTrigger asChild>
                                    <Card className="group flex flex-col border-none items-center transition-all hover:shadow-xl hover:-translate-y-1 bg-card dark:bg-dark-card rounded-2xl">
                                        <CardContent className="flex flex-col items-center justify-center p-0">
                                            {icon}
                                            <span className="mt-1 text-xs font-medium text-text-sub dark:text-dark-text-sub">
                                                {name}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="max-w-xs text-center text-sm leading-relaxed">
                                    {description}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    );
}
