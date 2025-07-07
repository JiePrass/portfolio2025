"use client";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaUsers, FaPhone } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="px-6 py-12 lg:py-20">
            <div className="container mx-auto flex justify-center flex-col lg:flex-row items-center gap-16">

                {/* Left side: Image & Badge */}
                <div className="flex justify-center">
                    {/* BUNGKUS GAMBAR & BADGE */}
                    <div className="relative">
                        {/* Profile Image */}
                        <div className="rounded-t-full bg-primary dark:bg-dark-primary">
                            <Image
                                src="/images/about.png"
                                alt="Oliver Scott"
                                width={400}
                                height={400}
                                className="object-cover"
                            />
                        </div>

                        {/* Total Customer Badge */}
                        <div className="absolute top-4 gap-1 bg-card-muted dark:bg-dark-card px-4 py-2 rounded-xl shadow flex flex-col items-center justify-center text-center">
                            <div className="rounded-full bg-dark-accent text-white flex justify-center items-center p-1.5">
                                <FaUsers size={16} />
                            </div>
                            <div className="">
                                <p className="text-xs text-text-sub dark:text-dark-text-sub">Total Customer</p>
                                <p className="text-xl font-bold">25+</p>
                            </div>
                        </div>

                        {/* Certified Badge */}
                        <div className="absolute bottom-4 -right-2 lg:left-1/2 whitespace-nowrap bg-card-muted dark:bg-dark-card px-6 py-2 rounded-full shadow flex items-center gap-2">
                            <span className="w-3 h-3 bg-dark-accent rounded-full" />
                            <p className="text-sm font-medium">
                                Students of SMKN 4 Bogor
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: Text and Info */}
                <div className="w-full flex flex-col justify-center max-w-xl">
                    {/* Section Label */}
                    <div className="flex items-center">
                        <div className="w-4 h-[2px] bg-dark-primary rounded-full mr-2" />
                        <span className="text-sm font-medium">About Me</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Who is <span className="text-primary">Renjie?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-text-sub dark:text-dark-text-sub my-6 text-sm leading-relaxed">
                        I’m a passionate web developer with real-world experience in building modern, responsive websites. I’ve completed various freelance projects and collaborated with businesses to deliver functional and client-focused digital solutions.
                    </p>


                    {/* Stats */}
                    <div className="flex justify-between gap-4">
                        <div className="text-center md:text-start bg-card dark:bg-dark-card rounded-xl p-4 shadow">
                            <p className="text-lg lg:text-2xl font-bold dark:text-white">50+</p>
                            <p className="text-sm text-text-sub dark:text-dark-text-sub">Project Completed</p>
                        </div>
                        <div className="text-center md:text-start bg-card dark:bg-dark-card rounded-xl p-4 shadow">
                            <p className="text-lg lg:text-2xl font-bold dark:text-white">5+</p>
                            <p className="text-sm text-text-sub dark:text-dark-text-sub">Company Collaboration</p>
                        </div>
                        <div className="text-center md:text-start bg-card dark:bg-dark-card rounded-xl p-4 shadow">
                            <p className="text-lg lg:text-2xl font-bold dark:text-white">2+</p>
                            <p className="text-sm text-text-sub dark:text-dark-text-sub">Years of Experience</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:flex gap-4 hidden my-6">
                        <Button asChild>
                            <Link href="/">
                                <FaPhone size={16} />
                                (+62) 857-7025-3105
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/">
                                <MdEmail size={16} />
                                renjieprass@gmail.com
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
