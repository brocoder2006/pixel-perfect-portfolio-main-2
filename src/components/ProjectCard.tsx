import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
    index: number;
    title: string;
    category: string;
    image: string;
    link?: string;
    className?: string;
}

// GSAP-style cubic bezier — smooth power3.out
const gsapEase = [0.22, 1, 0.36, 1] as const;
const gsapEaseIn = [0.55, 0.055, 0.675, 0.19] as const;

const ProjectCard = ({ index, title, category, image, link, className = "" }: ProjectCardProps) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const stagger = 0.15 * index + 0.4;

    return (
        <motion.a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            className={`block group relative cursor-pointer overflow-hidden rounded-lg ${className}`}
            // Container reveal: clip from bottom
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.2, delay: stagger, ease: gsapEase }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Image wrapper with parallax zoom-out entrance */}
            <div className="relative overflow-hidden aspect-square">
                <motion.div
                    className="h-full w-full"
                    initial={{ scale: 1.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 1.6, delay: stagger + 0.15, ease: gsapEase }}
                >
                    <motion.img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: stagger + 0.3 }}
                        whileHover={{ scale: 1.08 }}
                        style={{ transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                </motion.div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number — slides in from right */}
                <motion.div
                    className="absolute top-3 right-3"
                    initial={{ x: 40, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: stagger + 0.6, ease: gsapEase }}
                >
                    <span className="font-display text-5xl font-bold text-foreground/15 group-hover:text-foreground/50 transition-colors duration-500">
                        {index + 1}
                    </span>
                </motion.div>
            </div>

            {/* Text — slides up with mask */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-5"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: stagger + 0.5, ease: gsapEase }}
            >
                <motion.p
                    className="text-xs font-body uppercase tracking-[0.25em] text-muted-foreground mb-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: stagger + 0.65, ease: gsapEase }}
                >
                    {category}
                </motion.p>
                <motion.h3
                    className="font-display text-lg font-semibold text-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: stagger + 0.75, ease: gsapEase }}
                >
                    {title}
                </motion.h3>
            </motion.div>

            {/* Shimmer sweep on entrance */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 40%, hsl(var(--foreground) / 0.06) 50%, transparent 60%)",
                }}
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "200%" } : {}}
                transition={{ duration: 1.2, delay: stagger + 0.4, ease: gsapEaseIn }}
            />
        </motion.a>
    );
};

export default ProjectCard;
