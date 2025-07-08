// components/ServiceSection.tsx
"use client";

import { ServiceCard, ServiceItem } from "../shared/ServiceCard";


const services: ServiceItem[] = [
    {
        id: 1,
        title: "Web Development",
        image: "/images/temp.png",
        description: "Building responsive, fast, and optimized websites for all devices.",
    },
    {
        id: 2,
        title: "Fullstack Development",
        image: "/images/temp.png",
        description: "Developing high-performance applications with scalable architecture.",
    },
    {
        id: 3,
        title: "UI/UX Design",
        image: "/images/temp.png",
        description: "Designing visually appealing interfaces with a focus on intuitive user experiences.",
    },
];


export default function ServiceSection() {
    return (
        <section
            id="services"
            className="bg-dark-accent-100 p-6 lg:p-16 text-dark-text w-full md:rounded-4xl"
        >
            {/* Heading */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-dark-text-sub/60 pb-6 mb-10 gap-4">
                <h2 className="text-4xl font-semibold">
                    <span className="text-dark-primary">Services&nbsp;</span>I Provide
                </h2>
                <p className="text-dark-text-sub max-w-lg lg:text-end">
                    End-to-end digital solutions: from research, design, implementation, to continuous optimization.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                {services.map((item) => (
                    <ServiceCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
