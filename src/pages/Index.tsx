import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.png";
import PixelateImage from "@/components/PixelateImage";
import ParticleField from "@/components/ParticleField";
import { Play } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { label: "UI", delay: 0.3 },
  { label: "Frontend", delay: 0.4 },
  { label: "Backend", delay: 0.5 },
  { label: "Fullstack", delay: 0.6 },
  { label: "Nodejs", delay: 0.7 },
];

const navItems = [
  { label: "Tutorials", active: false },
  { label: "Hello", active: true },
  { label: "Work", active: false },
];

const Index = () => {
  const container = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(skillsRef.current, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full bg-background overflow-x-hidden relative">
      <ParticleField />
      <div className="relative min-h-screen text-foreground overflow-hidden flex flex-col z-10">
        {/* Top Logo */}
        <header className="relative z-10 flex items-center justify-between px-8 pt-6 md:px-12">
          <div />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
          >
            <span className="font-display text-sm font-bold tracking-tight">M</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-1.5"
          >
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-4 h-px bg-foreground ml-auto" />
          </motion.button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center relative px-6 md:px-12">
          {/* Left Side - Hello & Info */}
          <motion.div
            className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight text-foreground">
              Hello.
            </h1>
            <div className="mt-6 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-primary" />
                <span className="text-sm font-medium text-foreground">Sayantan Pal</span>
              </div>
              <p className="text-xs text-muted-foreground ml-8 max-w-[160px] leading-relaxed">
                Full Stack Developer<br />based in WB,India
              </p>
            </div>
          </motion.div>

          {/* Center - Portrait with Orbital Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-border/30 animate-spin-slow">
              {/* Orbital dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-muted" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground/40" />
            </div>

            {/* Middle ring */}
            <div className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-border/20 animate-spin-reverse">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted-foreground/60 to-muted" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted-foreground/40 to-background shadow-inner" />
              </div>
            </div>

            {/* Inner ring glow */}
            <div className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border border-primary/20 animate-pulse-ring" />

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[270px] lg:h-[270px] rounded-full overflow-hidden z-10 bg-muted/20"
            >
              <PixelateImage src={portraitImg} gridSize={40} />
              {/* Smoke overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Side - Skills */}
          <motion.div
            className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ul className="space-y-3 text-right">
              {skills.map((skill) => (
                <motion.li
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: skill.delay, duration: 0.5 }}
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {skill.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Play Reel Button - Bottom Right */}
          <motion.div
            className="absolute bottom-24 right-8 md:right-16 lg:right-24 flex items-center gap-3 z-10 cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
              <Play className="w-3.5 h-3.5 text-foreground fill-foreground" />
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Reel
            </span>
          </motion.div>
        </main>

        {/* Bottom Navigation */}
        <motion.footer
          className="relative z-10 flex items-center justify-between px-8 pb-6 md:px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="text-xs text-muted-foreground tracking-widest">
            minhpham.design
          </span>

          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`text-xs transition-colors ${item.active
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
              />
            ))}
          </div>
        </motion.footer>
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Index;
