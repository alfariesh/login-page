'use client';

import { useEffect, useMemo } from "react";
import type { Rive, Layout as RiveLayout } from "@rive-app/react-canvas";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { cx } from "@/utils/cx";

const HERO_ANIMATION_SRC = "/animations/hero.riv";

const upscaleMatrix = [4.0, 0, 0, 4.0, 0, -240];

type HeroAnimationProps = {
    className?: string;
    onReady?: (riveInstance: Rive) => void;
    autoplay?: boolean;
    artboard?: string;
    stateMachines?: string | string[];
    layout?: RiveLayout;
};

export const HeroAnimation = ({ className, onReady, autoplay = true, artboard, stateMachines, layout }: HeroAnimationProps) => {
    const riveConfig = useMemo(
        () => ({
            src: HERO_ANIMATION_SRC,
            autoplay,
            artboard,
            stateMachines,
            layout: layout ?? new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
        }),
        [autoplay, artboard, stateMachines, layout],
    );

    const { RiveComponent, rive } = useRive(riveConfig);

    useEffect(() => {
        if (!rive) {
            return;
        }

        if (autoplay && !rive.isPlaying) {
            rive.play();
        }

        // Renderer access removed due to private property restriction

        onReady?.(rive);

        return () => {
            rive.pause();
        };
    }, [rive, autoplay, onReady]);

    return (
        <div className={cx("relative h-full w-full", className)}>
            <RiveComponent
                style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(1.1)",
                    transformOrigin: "top left"
                }}
            />
        </div>
    );
};
