import { useEffect, useRef } from "react";
import gsap from "gsap";

const ParticleField = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particles: HTMLDivElement[] = [];
        const count = 30;

        for (let i = 0; i < count; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.opacity = "0";
            container.appendChild(p);
            particles.push(p);

            gsap.to(p, {
                opacity: Math.random() * 0.6 + 0.1,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 3,
            });

            gsap.to(p, {
                y: `${Math.random() * 100 - 50}`,
                x: `${Math.random() * 60 - 30}`,
                duration: Math.random() * 8 + 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 3,
            });
        }

        return () => {
            particles.forEach((p) => p.remove());
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
};

export default ParticleField;
