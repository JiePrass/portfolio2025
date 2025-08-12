'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
    const orbitCtr = useAnimation();
    const c1Ctr = useAnimation();
    const c2Ctr = useAnimation();

    const [step, setStep] = useState<'orbit' | 'merge' | 'expand' | 'tap'>('orbit');
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        (async () => {
            // ENTRY: munculkan kedua lingkaran dengan efek spring + delay pada kanan
            await Promise.all([
                c1Ctr.start({
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 18,
                    },
                }),
                c2Ctr.start({
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 18,
                        delay: 0.2,
                    },
                }),
            ]);

            // ORBIT: 3× 180°, bergantian opacity
            for (let i = 0; i < 6; i++) {
                // semuanya pudar dulu sebelum mulai putar
                await Promise.all([
                    c1Ctr.start({ opacity: 0.4, transition: { duration: 0.2 } }),
                    c2Ctr.start({ opacity: 0.4, transition: { duration: 0.2 } }),
                ]);

                // putar container
                await orbitCtr.start({
                    rotate: (i + 1) * 180,
                    transition: { duration: 0.8, ease: 'linear' },
                });

                // setelah putar, tentukan siapa di kiri
                const isC1Left = (i % 2 !== 0);  // putaran ke-1 => true, 2=>false, 3=>true
                await Promise.all([
                    c1Ctr.start({ opacity: isC1Left ? 1 : 0.4, transition: { duration: 0.2 } }),
                    c2Ctr.start({ opacity: isC1Left ? 0.4 : 1, transition: { duration: 0.2 } }),
                ]);

                // jeda singkat sebelum putaran berikutnya
                await new Promise(r => setTimeout(r, 300));
            }

            // MERGE
            setStep('merge');
            await Promise.all([
                c1Ctr.start({ x: 20, transition: { duration: 0.4, ease: 'easeInOut' } }),
                c2Ctr.start({ x: -20, transition: { duration: 0.4, ease: 'easeInOut' } }),
            ]);
            await Promise.all([
                c1Ctr.start({ opacity: 0, transition: { duration: 0.4 } }),
                c2Ctr.start({ opacity: 0, transition: { duration: 0.4 } }),
            ]);

            // EXPAND
            setStep('expand');
            await new Promise(r => setTimeout(r, 50));
            // biarkan <motion.div> expand sendiri via its animate prop
            await new Promise(r => setTimeout(r, 999));

            // TAP
            setStep('tap');
        })();
    }, [orbitCtr, c1Ctr, c2Ctr]);

    const handleTap = () => {
        if (step !== 'tap') return;
        setExiting(true);
        setTimeout(() => onFinish?.(), 1000);
    };

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    className={`fixed inset-0 flex items-center justify-center z-50 cursor-pointer ${step === 'tap' ? 'bg-primary' : 'bg-white'
                        }`}
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    onClick={handleTap}
                >
                    {/* ORBIT & MERGE */}
                    {(step === 'orbit' || step === 'merge') && (
                        <motion.div
                            animate={orbitCtr}
                            initial={{ rotate: 0 }}
                            style={{
                                position: 'relative',
                                width: 80,
                                height: 40,
                                transformOrigin: '50% 50%',
                            }}
                        >
                            <motion.div
                                className="absolute w-10 h-10 bg-primary rounded-full"
                                style={{ left: 0, top: 0 }}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={c1Ctr}
                            />
                            <motion.div
                                className="absolute w-10 h-10 bg-primary rounded-full"
                                style={{ left: 40, top: 0 }}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={c2Ctr}
                            />
                        </motion.div>
                    )}

                    {/* EXPAND CENTER */}
                    {step === 'expand' && (
                        <motion.div
                            className="absolute bg-primary rounded-full"
                            style={{ width: 40, height: 40 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 100 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    )}

                    {/* TAP TEXT */}
                    {step === 'tap' && (
                        <motion.p
                            className="absolute text-white text-lg font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            Tap anywhere to start!
                        </motion.p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
