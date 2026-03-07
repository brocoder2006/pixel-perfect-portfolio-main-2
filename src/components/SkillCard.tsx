interface SkillCardProps {
    name: string;
    image: string;
    level: number;
}

const SkillCard = ({ name, image, level }: SkillCardProps) => {
    return (
        <div className="skill-card group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 h-1 bg-muted w-full">
                <div
                    className="h-full bg-primary skill-progress"
                    style={{ width: `${level}%` }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 overflow-hidden p-2">
                    <img src={image} alt={name} className="w-full h-full object-contain" />
                </div>
                <span className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">
                    {name}
                </span>
                <span className="text-xs text-muted-foreground">{level}%</span>
            </div>
        </div>
    );
};

export default SkillCard;
