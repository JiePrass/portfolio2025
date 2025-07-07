import { Button } from "@/components/ui/button"; // Pastikan kamu punya komponen Button

export default function CTA() {
    return (
        <section className="bg-accent-200 dark:bg-dark-accent-200 relative">
            {/* CTA Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-12 px-4 z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Interested in working together?
                </h2>
                <p className="text-lg md:text-xl font-medium mb-6 text-text-sub dark:text-dark-text-sub">
                    Let’s bring your ideas to life with clean, modern code.
                </p>
                <Button size="lg" className="text-white bg-primary hover:bg-primary/80">
                    Contact Me
                </Button>
            </div>
        </section>
    );
}
