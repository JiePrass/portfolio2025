// components/ServiceCard.tsx
"use client";

import Image from "next/image";

export interface ServiceItem {
    id: number;
    title: string;
    image: string;
    description: string;
}

interface Props {
    item: ServiceItem;
}

export function ServiceCard({ item }: Props) {

    return (
        <div className="flex flex-col justify-between rounded-3xl bg-dark-accent-300">
            <div className="flex flex-col mb-18 px-6">
                <div className="">
                    <h3 className="text-2xl font-medium border-b border-dark-text-sub/40 py-4">
                        {item.title}
                    </h3>
                </div>
                <p className="text-dark-text-sub pt-4">{item.description}</p>
            </div>

            <div className="relative">
                {/* Soft shadows */}
                <span className="absolute inset-0 rounded-3xl blur-[2px] scale-90 bg-gray-400/70 -translate-y-12 z-0" />
                <span className="absolute inset-0 rounded-3xl blur-[1px] scale-95 bg-gray-500/90 -translate-y-6 z-0" />

                <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover rounded-3xl aspect-[4/3] w-full relative"
                />
            </div>
        </div>
    );
}
