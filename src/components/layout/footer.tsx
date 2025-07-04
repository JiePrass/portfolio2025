"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import FacebookIcon from "@/icons/facebook.svg"
import InstagramIcon from "@/icons/instagram.svg"
import TwitterIcon from "@/icons/twitter.svg"
import YouTubeIcon from "@/icons/youtube.svg"
import TiktokIcon from "@/icons/tiktok.svg"

const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/paket", label: "Paket Wisata" },
    { href: "/artikel", label: "Artikel" },
    { href: "/kontak", label: "Kontak" },
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
            className="text-foreground py-8 overflow-hidden"
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
                    <span className="text-xl font-bold">Highfive Management</span>
                </div>

                <div className="hidden md:flex gap-4 flex-wrap">
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            href={item.href}
                            className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors"
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h1>

                    <div className="flex md:hidden flex-wrap mt-8 gap-4">
                        {navItems.map((item, key) => (
                            <Link
                                key={key}
                                href={item.href}
                                className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <p className="text-xs text-[#595A5B] hidden md:flex">
                        &copy; {currentYear} Highfive Management seluruh hak cipta dilindungi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">Lokasi</h2>
                        <p>Jl. Raya Tajur, Kp. Buntar, Kel. Muara Sari, Kec. Bogor Selatan</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">Email</h2>
                        <p>highfive@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">Kontak</h2>
                        <p>+62 838 7963 0647</p>
                        <p>+62 857 7025 3105</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">Media Sosial</h2>
                        <div className="flex gap-2">
                            {["facebook", "youtube", "instagram", "twitter", "tiktok"].map((platform) => {
                                const Icon = icons[platform as keyof typeof icons]
                                return (
                                    <Link key={platform} href={`https://${platform}.com`} target="_blank" rel="noopener noreferrer">
                                        <Icon className="text-foreground hover:opacity-80 transition inline-block overflow-visible" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-center items-center">
                    <h1 className="text-[90px] md:text-[323px] cursor-default text-neutral-800 mb-8 md:mb-16 leading-none font-semibold text-center">
                        Highfive
                    </h1>
                </div>

                <button
                    onClick={scrollToTop}
                    className="w-full rounded-xl border border-gray-700 px-4 md:px-8 py-4 flex items-center justify-between gap-4 bg-neutral-800 text-sm hover:bg-neutral-700 transition cursor-pointer"
                >
                    <span className="text-left text-white">
                        Kembali Ke<br /> Halaman Paling Atas
                    </span>
                    <div className="bg-white text-black rounded-full p-2">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                </button>
            </div>

            <p className="text-xs text-center text-subtle md:hidden mt-4">
                &copy; {currentYear} Highfive Management seluruh hak cipta dilindungi
            </p>
        </footer>
    );
}
