import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ParticleField from "@/components/ParticleField";

const Skills = () => {
    return (
        <div className="relative min-h-screen bg-background">
            <ParticleField />
            <HeroSection />
            <SkillsSection />

            {/* Footer */}
            <footer className="relative z-10 py-12 text-center">
                <p className="text-muted-foreground text-sm font-body">
                    Built with <span className="text-primary">passion</span> & code
                </p>
            </footer>
        </div>
    );
};

export default Skills;
