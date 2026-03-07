import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PixelateImageProps {
    src: string;
    className?: string;
    gridSize?: number;
    objectPosition?: "center" | "top" | "bottom" | "left" | "right";
    objectFit?: "cover" | "contain";
}

const PixelateImage = ({
    src,
    className = "",
    gridSize = 50,
    objectPosition = "center",
    objectFit = "cover"
}: PixelateImageProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const img = new Image();
        img.src = src;

        let obj = { pixelSize: gridSize };
        let animation: gsap.core.Tween;
        let resizeObserver: ResizeObserver;

        const render = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;

            if (w === 0 || h === 0) return;

            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }

            if (!img.complete || img.naturalWidth === 0) return;

            const imgRatio = img.naturalWidth / img.naturalHeight;
            const canvasRatio = w / h;
            let drawW = w;
            let drawH = h;
            let offsetX = 0;
            let offsetY = 0;

            if (objectFit === "cover") {
                if (imgRatio > canvasRatio) {
                    drawW = h * imgRatio;
                    offsetX = (w - drawW) / 2;
                } else {
                    drawH = w / imgRatio;
                    if (objectPosition === "top") offsetY = 0;
                    else if (objectPosition === "bottom") offsetY = h - drawH;
                    else offsetY = (h - drawH) / 2;
                }
            } else {
                if (imgRatio > canvasRatio) {
                    drawW = w;
                    drawH = w / imgRatio;
                    if (objectPosition === "top") offsetY = 0;
                    else if (objectPosition === "bottom") offsetY = h - drawH;
                    else offsetY = (h - drawH) / 2;
                } else {
                    drawH = h;
                    drawW = h * imgRatio;
                    if (objectPosition === "left") offsetX = 0;
                    else if (objectPosition === "right") offsetX = w - drawW;
                    else offsetX = (w - drawW) / 2;
                }
            }

            ctx.clearRect(0, 0, w, h);

            const size = Math.max(1, Math.floor(obj.pixelSize));

            if (size <= 1) {
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
                return;
            }

            const offCanvas = document.createElement("canvas");
            offCanvas.width = Math.max(1, Math.floor(w / size));
            offCanvas.height = Math.max(1, Math.floor(h / size));
            const offCtx = offCanvas.getContext("2d");

            if (offCtx) {
                offCtx.imageSmoothingEnabled = false;
                offCtx.drawImage(img, offsetX / size, offsetY / size, drawW / size, drawH / size);

                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(offCanvas, 0, 0, w, h);
            }
        };

        img.onload = () => {
            resizeObserver = new ResizeObserver(() => {
                render();
            });
            resizeObserver.observe(container);

            render();

            animation = gsap.to(obj, {
                pixelSize: 1,
                duration: 1.5,
                ease: "power2.inOut",
                onUpdate: render,
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        };

        return () => {
            if (resizeObserver) resizeObserver.disconnect();
            if (animation) animation.kill();
        };
    }, [src, gridSize, objectPosition, objectFit]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </div>
    );
};

export default PixelateImage;
