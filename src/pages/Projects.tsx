import { useEffect, useRef } from "react";
import { MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SideNav from "@/components/SideNav";
import BottomNav from "@/components/BottomNav";
import ProjectCard from "@/components/ProjectCard";

// Using the same placeholder image for all projects for now
import shapeImg from "@/assets/3d-shape.png";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "E-Commerce Reimagined",
        category: "Full Stack",
        image: shapeImg,
    },
    {
        title: "Fintech Dashboard UI",
        category: "Frontend",
        image: shapeImg,
    },
    {
        title: "AI Copywriter Platform",
        category: "Full Stack",
        image: shapeImg,
    },
    {
        title: "Healthcare Portal",
        category: "Backend",
        image: shapeImg,
    },
];

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header entrance animation
            const tl = gsap.timeline();

            tl.from(".title-word", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            })
                .from(".subtitle-text", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .from(".header-line", {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 1.2,
                    ease: "power3.inOut"
                }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-hidden font-body">
            {/* Grid background behind everything */}
            <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />

            {/* Main Layout Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_4fr] min-h-screen">

                {/* Left Sidebar */}
                <aside className="hidden lg:flex flex-col justify-between border-r border-border p-8 pt-12 relative bg-background/50 backdrop-blur-sm">
                    {/* Top Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="font-display font-bold text-sm relative z-10">S</span>
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Portfolio</span>
                    </div>

                    <SideNav />

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-muted-foreground">© 2026</span>
                        <span className="text-xs font-medium text-primary">All rights reserved</span>
                    </div>
                </aside>

                {/* Right Content Area */}
                <main className="flex flex-col relative">

                    {/* Header Section */}
                    <header ref={headerRef} className="px-6 md:px-12 lg:px-24 pt-24 pb-16 relative">
                        <div className="header-line absolute bottom-0 left-0 w-full h-px border-b border-border/60" />

                        <div className="max-w-4xl">
                            <p className="subtitle-text text-primary text-sm tracking-[0.3em] uppercase mb-6 font-semibold flex items-center gap-3">
                                <span className="w-8 h-px bg-primary" />
                                Selected Works
                            </p>

                            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase overflow-hidden">
                                <div className="title-word inline-block mr-4">Featured</div>
                                <div className="title-word inline-block text-muted-foreground/30">Projects</div>
                            </h1>

                            <div className="subtitle-text mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed border-l-2 border-primary/30 pl-4">
                                    A curated selection of recent engineering and design projects focused on high performance and aesthetics.
                                </p>
                                <button className="group flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                                    View Archive
                                    <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Projects Grid Container */}
                    <section className="flex-1 px-6 md:px-12 lg:px-24 py-16 pb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
                            {projectsData.map((project, index) => (
                                <div key={project.title} className={index % 2 !== 0 ? "md:mt-24" : ""}>
                                    <ProjectCard
                                        index={index}
                                        title={project.title}
                                        category={project.category}
                                        image={project.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom Mobile Footer & Navigation */}
                    <footer className="mt-auto px-6 md:px-12 lg:px-24 py-8 border-t border-border/50 bg-background/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="lg:hidden flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center">
                                <span className="font-display font-bold text-sm">S</span>
                            </div>
                            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Portfolio</span>
                        </div>

                        <BottomNav />

                        <p className="subtitle-text text-sm text-muted-foreground">
                            Based in WB, India <span className="mx-2 text-border">|</span> Sayantan Pal
                        </p>
                    </footer>

                </main>
            </div>
        </div>
    );
};

export default Projects;
