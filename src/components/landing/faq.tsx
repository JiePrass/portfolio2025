/* components/FAQ.tsx */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { MdChat, MdSend, MdWhatsapp } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

const faqs = [
    {
        q: "Are you available for freelance or contract work?",
        a: "Yes. I’m currently accepting both short-term contracts and full-cycle projects.",
    },
    {
        q: "Which tech stack do you specialise in?",
        a: "Next.js, React, Express.js, Laravel, Flutter, TypeScript and modern tooling (Vite, Tailwind).",
    },
    {
        q: "How long does a typical build take?",
        a: "2 – 4 weeks for an MVP; complex platforms are scoped separately.",
    },
    {
        q: "Do you support existing designs or brand guidelines?",
        a: "Yes. I can start from your current assets or craft a fresh, consistent UI kit.",
    },
    {
        q: "Is post-launch maintenance included?",
        a: "A 30-day warranty is free; ongoing SLA packages are available on request.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState<number | null>(null);
    const [message, setMessage] = useState("");

    /* — handlers — */
    const toggle = (i: number) => setActive(prev => (prev === i ? null : i));
    const sendMail = () =>
        window.open(
            `mailto:hello@yourportfolio.dev?subject=Project%20Enquiry&body=${encodeURIComponent(
                message
            )}`,
            "_blank"
        );
    const sendWhatsApp = () =>
        window.open(
            `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    return (
        <section className="container mx-auto px-6 py-12 lg:py-20">
            {/* label + heading */}
            <div className="flex items-center mb-3 justify-center">
                <span className="w-4 h-[2px] bg-dark-primary rounded-full mr-2" />
                <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
                Got a question? <span className="text-primary">Here are the answers</span>
            </h2>

            {/* content */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* ───── FAQ list ───── */}
                <div className="flex flex-col md:w-2/3 space-y-4">
                    {faqs.map(({ q, a }, i) => {
                        const open = i === active;
                        return (
                            <div key={i} className="bg-card dark:bg-dark-card rounded-xl shadow overflow-hidden">
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left md:text-lg font-medium"
                                    aria-expanded={open}
                                >
                                    {q}
                                    {open ? (
                                        <ChevronUp className="w-5 h-5" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ type: "spring", stiffness: 220, damping: 28 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-4 pt-0 text-subtle text-base">{a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* ───── contact card ───── */}
                <div className="bg-card dark:bg-dark-card rounded-2xl p-6 w-full md:w-1/3 flex flex-col gap-6 shadow-lg self-start h-fit">
                    {/* header */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <MdChat className="text-primary" size={42} />
                        <h3 className="text-lg font-semibold">Still have questions? Let’s talk!</h3>
                        <p className="text-sm text-dark-text-sub">
                            Drop your message below – I reply within a few hours.
                        </p>
                    </div>

                    {/* form */}
                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-sm font-medium text-dark-text-sub text-left" htmlFor="message">
                            Your Message
                        </label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className="min-h-[120px] resize-none bg-card-muted text-text-sub dark:bg-dark-card-muted dark:text-dark-text-sub"
                        />

                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <Button
                                onClick={sendMail}
                                className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center gap-2"
                            >
                                <MdSend size={18} /> Email
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={sendWhatsApp}
                                className="flex-1 rounded-full flex items-center justify-center gap-2"
                            >
                                <MdWhatsapp size={18} /> WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
