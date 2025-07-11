"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    highlight: string;
    description: string;
    image: string;
    client: string;
    duration: string;
    country: string;
    url: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Batikan",
        highlight: "Batik Small Business Web Platform",
        description:
            "A product catalog website built for local batik artisans, featuring an online showcase, cart system, and admin dashboard using Vite and React.",
        image: "/images/temp.png",
        client: "UMKM Batik Nusantara",
        duration: "2 Months",
        country: "Indonesia",
        url: "/images/temp.png",
    },
    {
        id: 2,
        title: "Highfive",
        highlight: "Tourism Website with Optimized SEO",
        description:
            "A tourism platform with SEO-optimized landing pages, dynamic blog content, and a simple booking flow built using Next.js and Contentful CMS.",
        image: "/images/temp.png",
        client: "Highfive Travel",
        duration: "3 Months",
        country: "Indonesia",
        url: "/images/temp.png",
    },
    {
        id: 3,
        title: "Fourtivity",
        highlight: "Web Design for Productivity Boost",
        description:
            "A lightweight productivity web app featuring to-do lists, Pomodoro-style timers, and weekly progress tracking, built with Figma.",
        image: "/images/temp.png",
        client: "Internal Project",
        duration: "1.5 Months",
        country: "Indonesia",
        url: "/images/temp.png",
    },
];

export default function Projects() {
    return (
        <section className="container mx-auto py-12 lg:py-20 px-6">
            {/* ─── Heading ─── */}
            <div className="flex items-center mb-3">
                <span className="w-4 h-[2px] bg-dark-primary rounded-full mr-2" />
                <span className="text-sm font-medium">Latest Projects</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
                Selected Works&nbsp;
                <span className="text-primary">that solve real problems.</span>
            </h2>

            {/* ─── Content ─── */}
            <div className="space-y-16 lg:space-y-24">
                {projects.map((proj, idx) => (
                    <article
                        key={proj.id}
                        className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={proj.image}
                                alt={`${proj.title} preview`}
                                width={800}
                                height={600}
                                className="object-cover aspect-[4/3]"
                                priority={idx === 0}
                            />
                        </div>

                        {/* Textual content */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                                {proj.title}&nbsp;&ndash;&nbsp;
                                <span className="text-primary">{proj.highlight}</span>
                            </h3>
                            <p className="text-base leading-relaxed mb-8 text-text-sub dark:text-dark-text-sub">
                                {proj.description}
                            </p>

                            {/* Info table */}
                            <div className=" rounded-2xl overflow-hidden mb-8">
                                <div className="grid grid-cols-2 text-sm">
                                    <span className="py-3 px-4 font-medium">Client</span>
                                    <span className="py-3 px-4 text-right">{proj.client}</span>

                                    <span className="py-3 px-4 font-medium">
                                        Duration
                                    </span>
                                    <span className="py-3 px-4 text-right">
                                        {proj.duration}
                                    </span>

                                    <span className="py-3 px-4 font-medium">Country</span>
                                    <span className="py-3 px-4 text-right">
                                        {proj.country}
                                    </span>
                                </div>
                            </div>

                            <Link
                                href={proj.url}
                                className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                View Details
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
