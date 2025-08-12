"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import FacebookIcon from "@/assets/icons/facebook.svg"
import InstagramIcon from "@/assets/icons/instagram.svg"
import TwitterIcon from "@/assets/icons/twitter.svg"
import YouTubeIcon from "@/assets/icons/youtube.svg"
import TiktokIcon from "@/assets/icons/tiktok.svg"

const navItems = [
    { id: "home", label: "Home"},
    { id: "services", label: "Services" },
    { id: "about", label: "About"},
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
]

const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon,
    tiktok: TiktokIcon,
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            className="bg-accent-200 dark:bg-dark-accent-200 text-text dark:text-dark-text py-8 overflow-hidden"
        >
            <div
                className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center gap-6"

            >
                <div className="flex items-center">
                    <Image
                        src="/images/HFE_Logo.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="object-contain w-auto h-8 md:w-8 md:h-auto"
                    />
                    <span className="text-xl font-bold">JiePrass</span>
                </div>

                <div className="hidden md:flex gap-4 flex-wrap">
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            href={`#${item.id}`}
                            className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-card dark:hover:bg-dark-card transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div
                className="container mx-auto px-6 md:px-0 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-64"
            >
                <div className="flex flex-col justify-between">
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Driven by vision, built with passion, crafted with intention.
                    </h1>

                    <div className="flex md:hidden flex-wrap mt-8 gap-4">
                        {navItems.map((item, key) => (
                            <Link
                                key={key}
                                href={`#${item.id}`}
                                className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <p className="text-xs text-text-sub dark:text-dark-text-sub hidden md:flex">
                        &copy; {currentYear} JiePrass all right reserved
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-text-sub dark:text-dark-text-sub font-semibold">Location</h2>
                        <p>Jl. Raya Puncak, Gadog No.619, Pandansari, Ciawi District, Bogor Regency</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-text-sub dark:text-dark-text-sub font-semibold">Email</h2>
                        <p>renjieprass@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-text-sub dark:text-dark-text-sub font-semibold">Contact</h2>
                        <p>+62 857 7025 3105</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-text-sub dark:text-dark-text-sub font-semibold">Social Media</h2>
                        <div className="flex gap-2">
                            {["facebook", "youtube", "instagram", "twitter", "tiktok"].map((platform) => {
                                const Icon = icons[platform as keyof typeof icons]
                                return (
                                    <Link key={platform} href={`https://${platform}.com/jie.env`} target="_blank" rel="noopener noreferrer">
                                        <Icon className="text-text dark:text-dark-text w-8 h-8 hover:opacity-80 transition" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-center items-center">
                    <h1 className="text-[90px] md:text-[363px] cursor-default text-text dark:text-dark-text mb-6 leading-none font-semibold text-center">
                        JiePrass
                    </h1>
                </div>

                <button
                    onClick={scrollToTop}
                    className="w-full rounded-xl border border-gray-700 px-4 md:px-8 py-4 flex items-center justify-between gap-4 bg-neutral-800 text-sm hover:bg-neutral-700 transition cursor-pointer"
                >
                    <span className="text-left text-white">
                        Back To<br /> Top of Pages
                    </span>
                    <div className="bg-white text-black rounded-full p-2">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                </button>
            </div>

            <p className="text-xs text-center text-subtle md:hidden mt-4">
                &copy; {currentYear} JiePrass all right reserved
            </p>
        </footer>
    );
}
