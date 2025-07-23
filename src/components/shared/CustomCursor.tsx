"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { damping: 40, stiffness: 500 });
    const smoothY = useSpring(mouseY, { damping: 40, stiffness: 500 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                translateX: smoothX,
                translateY: smoothY,
            }}
        >
            <div className="w-6 h-6 rounded-full bg-primary/80 mix-blend-difference -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
}
