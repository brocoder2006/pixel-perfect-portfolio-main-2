import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

import htmlImg from "@/assets/html5.png";
import cssImg from "@/assets/css3.png";
import jsImg from "@/assets/javascript.png";
import reactImg from "@/assets/react.png";
import tsImg from "@/assets/typescript.png";
import nodeImg from "@/assets/nodejs.png";
import firebaseImg from "@/assets/firebase.png";
import mongoImg from "@/assets/mongodb.png";
import dockerImg from "@/assets/docker.png";
import githubImg from "@/assets/github.png";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", image: htmlImg, level: 95 },
            { name: "CSS", image: cssImg, level: 90 },
            { name: "JavaScript", image: jsImg, level: 92 },
            { name: "React", image: reactImg, level: 88 },
            { name: "TypeScript", image: tsImg, level: 85 },
        ],
    },
    {
        title: "Backend & Tools",
        skills: [
            { name: "Node.js", image: nodeImg, level: 82 },
            { name: "Firebase", image: firebaseImg, level: 78 },
            { name: "MongoDB", image: mongoImg, level: 80 },
            { name: "Docker", image: dockerImg, level: 70 },
            { name: "GitHub", image: githubImg, level: 90 },
        ],
    },
];

const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".category-title").forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
                    x: -100, opacity: 0, duration: 0.8, ease: "power3.out",
                });
            });

            gsap.utils.toArray<HTMLElement>(".skills-grid").forEach((grid) => {
                const cards = grid.querySelectorAll(".skill-card");
                gsap.set(cards, { opacity: 0, y: 60, scale: 0.8, rotateY: 15 });
                ScrollTrigger.create({
                    trigger: grid,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(cards, {
                            opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 0.6,
                            stagger: { each: 0.1, from: "random" }, ease: "back.out(1.4)",
                        });
                    },
                });
            });

            gsap.utils.toArray<HTMLElement>(".skill-progress").forEach((bar) => {
                gsap.from(bar, {
                    scrollTrigger: { trigger: bar, start: "top 90%", toggleActions: "play none none reverse" },
                    width: 0, duration: 1.2, ease: "power2.out", delay: 0.5,
                });
            });

            gsap.from(".timeline-line", {
                scrollTrigger: { trigger: ".timeline-line", start: "top 80%", toggleActions: "play none none reverse" },
                scaleY: 0, transformOrigin: "top center", duration: 1.5, ease: "power2.out",
            });

            gsap.utils.toArray<HTMLElement>(".section-divider").forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
                    scaleX: 0, duration: 0.8, ease: "power3.out",
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 px-4">
            <div className="section-divider mb-20" />
            <div className="max-w-6xl mx-auto relative">
                <div className="timeline-line vertical-line absolute left-0 md:left-8 top-0 h-full hidden md:block" />
                <div className="flex items-center gap-4 mb-16">
                    <div className="category-title">
                        <span className="font-display text-sm tracking-[0.3em] uppercase text-primary glow-text">Skills</span>
                    </div>
                </div>
                {skillCategories.map((category) => (
                    <div key={category.title} className="mb-20 md:pl-20 relative">
                        <div className="hidden md:block absolute left-6 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background glow-box" />
                        <h3 className="category-title text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                            {category.title}<span className="text-primary">.</span>
                        </h3>
                        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-divider mt-8" />
        </section>
    );
};

export default SkillsSection;
