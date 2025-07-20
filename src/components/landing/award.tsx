"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const awards = [
    {
        title: "Top 3 Web Development SEFEST 2025",
        description: "Achieved top 3 in SEFEST 2025 for excellence in web development and innovation.",
        image: "/images/sertif-sefest.png",
    },
    {
        title: "Top 3 UI/UX Design Crowd IT 2025",
        description: "Recognized among the top 3 participants for outstanding UI/UX design in Crowd IT 2025.",
        image: "/images/sertif-crowdit.png",
    },
    {
        title: "Participant UI/UX Design Smart IT Competition 2025",
        description: "Recognized for UI/UX excellence in a national digital design competition.",
        image: "/images/sertif-uns.jpg",
    },
    {
        title: "Participant Crowd IT 2025 Seminar",
        description: "Participated in Crowd IT 2025 to broaden knowledge and understanding of Design Thinking",
        image: "/images/sertif-seminar-crowdit.png"
    },
    {
        title: "Participant IT Knowledge 2025",
        description: "Participated in IT Knowledge 2025 to enhance technical insights and professional growth.",
        image: "/images/sertif-itk.png",
    },
    {
        title: "Top 10 UI/UX Design LP3I Depok School Competition 2025",
        description: "Ranked in the top 10 for UI/UX design in a regional competition held by LP3I Depok.",
        image: "/images/sertif-ldsc.png",
    },
];

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
                    Award &amp; Achievement
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
                            <div className="bg-white dark:bg-dark-accent-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[333px] flex flex-col">
                                <div className="relative w-full mt-4 h-48">
                                    <Image src={award.image} alt={award.title} fill className="object-contain" />
                                </div>

                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-semibold text-lg">{award.title}</h3>
                                    <p className="text-sm text-dark-text-sub dark:text-dark-text-sub mt-1 line-clamp-3">
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
