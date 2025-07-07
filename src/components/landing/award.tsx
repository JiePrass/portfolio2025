"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const awards = [
    {
        title: "Juara 1 Hackathon 2024",
        description: "Memenangkan kompetisi nasional dengan solusi web inovatif.",
        image: "/images/temp.png",
    },
    {
        title: "Best Design Award",
        description: "Penghargaan atas UI/UX terbaik di kompetisi desain digital.",
        image: "/images/temp.png",
    },
    {
        title: "Top 10 Finalist",
        description: "Masuk 10 besar peserta terbaik dalam lomba pemrograman.",
        image: "/images/temp.png",
    },
    {
        title: "Top 10 Finalist",
        description: "Masuk 10 besar peserta terbaik dalam lomba pemrograman.",
        image: "/images/temp.png",
    },
    {
        title: "Top 10 Finalist",
        description: "Masuk 10 besar peserta terbaik dalam lomba pemrograman.",
        image: "/images/temp.png",
    },
    {
        title: "Top 10 Finalist",
        description: "Masuk 10 besar peserta terbaik dalam lomba pemrograman.",
        image: "/images/temp.png",
    },
]

export default function Award() {
    return (
        <section className="py-12 lg:py-20 bg-accent-200 dark:bg-dark-accent-200">
            {/* Label & Heading */}
            <div className="flex container mx-auto px-6 flex-col items-center mb-12">
                <div className="flex items-center">
                    <div className="w-4 h-[2px] bg-dark-primary rounded-full mr-2" />
                    <span className="text-sm font-medium">Achievement</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-center">
                    Penghargaan &amp; Prestasi
                </h2>
            </div>

            {/* --- WRAPPER agar slider right-aligned & ter-clip --- */}
            <div className="overflow-hidden ml-6 flex justify-end lg:ml-[99px]">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1.25}
                    slidesOffsetAfter={48}                 /* kartu terakhir terpotong */
                    breakpoints={{
                        768: { slidesPerView: 2.25, slidesOffsetAfter: 48 },
                        1024: { slidesPerView: 3.25, slidesOffsetAfter: 48 },
                    }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="pb-12"
                >
                    {awards.map((award, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white dark:bg-dark-accent-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full h-48">
                                    <Image src={award.image} alt={award.title} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{award.title}</h3>
                                    <p className="text-sm text-dark-text-sub dark:text-dark-text-sub mt-1">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
