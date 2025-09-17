'use client';

import { BookOpen01, Check, Copy01, Cube01, HelpCircle } from "@untitledui/icons";
import { HeroAnimation } from "@/components/shared-assets/animation/hero-animation";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { useClipboard } from "@/hooks/use-clipboard";

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <div className="flex h-dvh flex-col">
            <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-12 pt-16 md:px-8">
                <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
                    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                        <div className="relative flex size-24 items-center justify-center rounded-full border border-secondary/40 bg-secondary/40">
                            <UntitledLogoMinimal className="size-10" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="text-balance text-display-sm font-semibold text-primary lg:text-display-md">
                                Untitled UI Next.js starter kit
                            </h1>
                            <p className="max-w-xl text-lg text-tertiary">
                                Get started by using the components that ship with this starter kit or add new ones to match your product needs.
                            </p>
                        </div>

                        <div className="relative flex h-11 w-full max-w-md items-center rounded-lg border border-secondary bg-secondary text-left shadow-sm">
                            <code className="px-3 font-mono text-secondary">npx untitledui@latest add</code>
                            <hr className="h-11 w-px bg-border-secondary" />
                            <ButtonUtility
                                color="tertiary"
                                size="sm"
                                tooltip={clipboard.copied ? "Copied" : "Copy"}
                                className="mx-1"
                                icon={clipboard.copied ? Check : Copy01}
                                onClick={() => clipboard.copy("npx untitledui@latest add")}
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                            <Button
                                href="https://www.untitledui.com/react/docs/introduction"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="link-color"
                                size="lg"
                                iconLeading={BookOpen01}
                            >
                                Docs
                            </Button>
                            <div className="hidden h-px w-4 bg-brand-solid lg:block" />
                            <Button
                                href="https://www.untitledui.com/react/resources/icons"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="link-color"
                                size="lg"
                                iconLeading={Cube01}
                            >
                                Icons
                            </Button>
                            <div className="hidden h-px w-4 bg-brand-solid lg:block" />
                            <Button
                                href="https://github.com/untitleduico/react/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="link-color"
                                size="lg"
                                iconLeading={HelpCircle}
                            >
                                Help
                            </Button>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-secondary/40 bg-secondary/20 p-4 shadow-lg md:p-8 lg:max-w-2xl">
                        <HeroAnimation className="aspect-[4/3] w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
