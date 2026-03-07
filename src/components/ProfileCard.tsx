import profilePhoto from "@/assets/profile-photo.jpg";
import PixelateImage from "@/components/PixelateImage";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-1 shadow-2xl">
            {/* Inner card */}
            <div className="relative overflow-hidden rounded-xl bg-background">
                {/* Social icons top-right */}
                <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
                    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
                        <Twitter className="h-4 w-4 text-foreground" />
                    </a>
                    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
                        <Linkedin className="h-4 w-4 text-foreground" />
                    </a>
                    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
                        <Github className="h-4 w-4 text-foreground" />
                    </a>
                </div>

                {/* Available badge */}
                <div className="absolute left-4 top-1/3 z-10 -rotate-90 origin-left">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Available for Work
                    </span>
                </div>

                {/* Photo */}
                <div className="relative h-80 w-full bg-muted/20">
                    <PixelateImage src={profilePhoto} objectPosition="top" gridSize={50} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
                </div>

                {/* Text content */}
                <div className="relative px-6 pb-6 pt-2">
                    <h2 className="text-2xl font-bold text-foreground">Hey, I'm Sayantan</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        I help startups grow with clean code and
                        <br />
                        thoughtful engineering, based in WB, India.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-5 flex items-center gap-3">
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a href="#" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                            Let's talk
                        </a>
                        <a href="#" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
