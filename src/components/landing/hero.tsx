"use client";

import Image from "next/image";
import Quotes from "@/assets/icons/quotes.svg"
import FacebookIcon from "@/assets/icons/facebook.svg"
import InstagramIcon from "@/assets/icons/instagram.svg"
import TwitterIcon from "@/assets/icons/twitter.svg"
import YouTubeIcon from "@/assets/icons/youtube.svg"
import TiktokIcon from "@/assets/icons/tiktok.svg"
import { Typewriter } from 'react-simple-typewriter'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon,
    tiktok: TiktokIcon,
}

const fadeLeft = { initial: { x: -80, opacity: 1 }, animate: { x: 0, opacity: 1 } };
const fadeRight = { initial: { x: 80, opacity: 1 }, animate: { x: 0, opacity: 1 } };
const upCenter = { initial: { y: 80, opacity: 1 }, animate: { y: 0, opacity: 1 } };
const tr = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export default function HeroSection() {
    return (
        <motion.section
            initial="initial"
            animate="animate"
            className="relative bg-white dark:bg-[#121212] overflow-hidden"
        >
            {/* ✨ Cahaya lembut dari kiri atas */}
            <div
                className="absolute -top-64 -left-64 w-[1000px] h-[1000px] -z-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at top left, rgba(255, 200, 150, 0.3), transparent 70%)",
                    filter: "blur(160px)",
                    opacity: 0.8,
                }}
            />
            <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3">
                {/* ──────── KIRI ──────── */}
                <motion.div
                    variants={fadeLeft}
                    transition={tr}
                    className="absolute top-48 lg:top-0 lg:relative flex flex-col justify-center lg:py-16"
                >
                    <div className="flex h-full flex-col gap-2 justify-end">
                        <Quotes className="w-4 h-4 lg:w-8 lg:h-8 text-primary" />
                        <blockquote className="italic text-xs max-w-48 lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300 lg:max-w-xs mx-auto lg:mx-0">
                            “Renjie built a fast, responsive website with clean code and great attention to detail. The final result exceeded our expectations.”
                        </blockquote>
                    </div>

                    <div className="flex mt-16 lg:mt-0 lg:mb-12 flex-col justify-end h-1/2">
                        <div className="flex relative -space-x-3">
                            {[
                                "/images/profile.png",
                                "/images/profile2.png",
                                "/images/profile3.png",
                                "/images/profile4.png",
                            ].map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`User ${index + 1}`}
                                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow grayscale hover:grayscale-0 transition duration-300"
                                    width={300}
                                    height={300}
                                />
                            ))}
                        </div>

                        <span className="text-xl font-semibold"><span className="text-primary dark:text-dark-primary">25+ Reviews</span> (4.9 of 5)</span>
                        <span className="text-sm text-text-sub dark:text-dark-text-sub">from my valued clients</span>
                    </div>
                </motion.div>

                <motion.div variants={fadeRight} transition={tr} className="flex flex-col absolute right-6 top-50 gap-4 lg:hidden">
                    {["facebook", "youtube", "instagram", "twitter", "tiktok"].map((platform) => {
                        const Icon = icons[platform as keyof typeof icons]
                        return (
                            <Link key={platform} href={`https://${platform}.com`} target="_blank" rel="noopener noreferrer">
                                <Icon className="text-text dark:text-dark-text w-8 h-8 hover:opacity-80 transition" />
                            </Link>
                        )
                    })}
                </motion.div>

                {/* ──────── TENGAH ──────── */}
                <div className="relative flex flex-col h-[666px] justify-between items-center">
                    {/* Heading + badge */}
                    <motion.div variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} transition={tr} className="flex flex-col items-center mt-22">
                        <span className="text-xs font-medium">
                            Hello There!
                        </span>
                        <h1 className="text-center text-3xl lg:text-5xl font-bold">
                            <span className="block">
                                I’m Renjie,
                            </span>
                            <span className="block text-4xl whitespace-nowrap lg:text-6xl text-primary dark:text-dark-primary h-[60px]">
                                <Typewriter
                                    words={['Web Developer', 'Web Designer', 'Fullstack Developer']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={60}
                                    delaySpeed={5000}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Tombol */}
                    <motion.div variants={{ initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 } }}
                        transition={{ ...tr, delay: 0.5  }} className="flex mb-16 lg:mb-26 gap-4 z-10">
                        <Button className="lg:h-10 lg:text-lg lg:px-6">
                            My Projects
                        </Button>
                        <Button variant="outline" className="lg:h-10 lg:text-lg lg:px-6">
                            Hire&nbsp;Me
                        </Button>
                    </motion.div>

                    {/* Lingkaran + Foto absolute, menempel dasar kolom tengah */}
                    <motion.div
                        variants={upCenter}
                        transition={{ ...tr, delay: 0.25 }}
                        className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none"
                    >
                        {/* lingkaran */}
                        <div className="relative w-[400px] h-[400px] lg:w-[520px] lg:h-[520px]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] z-0 bg-primary rounded-full" />
                            {/* foto */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[480px] lg:h-[480px]">
                                <Image src="/images/portfolio.png" alt="Renjie" fill className="object-cover" priority />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ──────── KANAN ──────── */}
                <motion.div
                    variants={fadeRight}
                    transition={{ ...tr, delay: 0.15 }}
                    className="hidden lg:flex flex-col justify-between items-center lg:items-end gap-6 order-3 py-16 lg:py-32 text-center lg:text-right"
                >
                    <div className="flex items-end h-full">
                        <div className="flex flex-wrap justify-end max-w-xs gap-2">
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-secondary">
                                Web&nbsp;Design
                            </span>
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary">
                                Web&nbsp;Development
                            </span>
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-secondary">
                                Mobile&nbsp;App&nbsp;Design
                            </span>
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary">
                            </span>
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-primary">
                                Fullstack&nbsp;Developer
                            </span>
                            <span className="px-4 py-2 rounded-full text-xs font-medium text-white bg-secondary">
                                Design&nbsp;System
                            </span>
                        </div>
                    </div>

                    <div className="h-1/2 flex flex-col justify-end gap-2">
                        <span className="text-lg font-medium">Follow me on</span>
                        <div className="flex gap-4">
                            {["facebook", "youtube", "instagram", "twitter", "tiktok"].map((platform) => {
                                const Icon = icons[platform as keyof typeof icons]
                                return (
                                    <Link key={platform} href={`https://${platform}.com`} target="_blank" rel="noopener noreferrer">
                                        <Icon className="text-text dark:text-dark-text w-8 h-8 hover:opacity-80 transition" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section >
    );
}
