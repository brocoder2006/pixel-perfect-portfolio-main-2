import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";

const About = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:gap-16">
                <ProfileCard />
                <HeroContent />
            </div>
        </div>
    );
};

export default About;
