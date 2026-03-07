import shape3d from "@/assets/3d-shape.png";
import PixelateImage from "@/components/PixelateImage";
import { Globe } from "lucide-react";

const HeroContent = () => {
    return (
        <div className="flex flex-1 flex-col justify-between py-4">
            {/* Top: Name + role */}
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary" />
                <div>
                    <p className="text-sm font-semibold text-foreground">Sayantan Pal</p>
                    <p className="text-xs text-primary">Full-Stack Developer</p>
                </div>
            </div>

            {/* Main headline */}
            <div className="mt-8">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    Start building{" "}
                    <span className="inline-block rounded-lg bg-primary px-3 py-1 text-primary-foreground">
                        software
                    </span>
                    <br />
                    people remember
                </h1>
            </div>

            {/* Stats + 3D shape */}
            <div className="mt-10 flex items-end gap-8">
                <div className="space-y-6">
                    <div>
                        <p className="text-4xl font-bold text-foreground">5+</p>
                        <p className="text-sm text-muted-foreground">Years of experience</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-foreground">50+</p>
                        <p className="text-sm text-muted-foreground">Projects shipped</p>
                    </div>
                </div>

                <div className="relative ml-auto flex-shrink-0">
                    <div className="h-40 w-40 md:h-52 md:w-52">
                        <PixelateImage src={shape3d} objectFit="contain" gridSize={40} />
                    </div>
                    {/* Award badge */}
                    <div className="absolute -right-2 top-0 flex h-20 w-20 items-center justify-center">
                        <div className="animate-spin-slow rounded-full border border-border p-1">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card text-[8px] font-bold uppercase leading-tight tracking-widest text-muted-foreground">
                                <span className="text-center">TOP<br />DEV<br />2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients */}
            <div className="mt-10 border-t border-border pt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Trusted by teams (2018–26)</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-8">
                    {["Vercel", "Stripe", "Linear", "Raycast"].map((name) => (
                        <span key={name} className="text-sm font-semibold tracking-wide text-muted-foreground/60">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
