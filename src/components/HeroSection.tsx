import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const stripeTopRef = useRef<HTMLDivElement>(null);
    const stripeBotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(stripeTopRef.current, {
                x: "-100%",
                duration: 0.8,
                ease: "power4.out",
            })
                .from(
                    stripeBotRef.current,
                    {
                        x: "100%",
                        duration: 0.8,
                        ease: "power4.out",
                    },
                    "-=0.6"
                )
                .from(
                    titleRef.current,
                    {
                        y: 80,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-letter",
                    {
                        y: 40,
                        opacity: 0,
                        rotateX: -90,
                        duration: 0.6,
                        stagger: 0.03,
                        ease: "back.out(1.7)",
                    },
                    "-=0.8"
                )
                .from(
                    subtitleRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-stat",
                    {
                        scale: 0,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "back.out(2)",
                    },
                    "-=0.3"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const title = "WHAT I DO";
    const stats = [
        { value: "5+", label: "Years Exp" },
        { value: "50+", label: "Projects" },
        { value: "10+", label: "Skills" },
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
            {/* Top hazard stripe */}
            <div ref={stripeTopRef} className="absolute top-0 left-0 w-full h-16 hazard-stripe opacity-80" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-9xl font-display font-black mb-6 tracking-tight">
                    {title.split("").map((char, i) => (
                        <span key={i} className="hero-letter inline-block text-primary glow-text-strong">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
                    Full-stack developer crafting high-performance web applications.
                    Passionate about clean code, scalable architecture, and pixel-perfect UI.
                </p>

                {/* Stats */}
                <div className="flex gap-8 md:gap-16 justify-center mt-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="hero-stat text-center">
                            <div className="text-3xl md:text-5xl font-display font-black text-primary glow-text">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom hazard stripe */}
            <div ref={stripeBotRef} className="absolute bottom-0 left-0 w-full h-16 hazard-stripe opacity-80" />

            {/* Scroll indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-display">Scroll</span>
                <div className="w-px h-8 bg-primary/50" />
            </div>
        </section>
    );
};

export default HeroSection;
