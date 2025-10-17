'use client';

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { HeroAnimation } from "@/components/shared-assets/animation/hero-animation";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import Image from "next/image";
import { Radio as AriaRadio, RadioGroup as AriaRadioGroup } from "react-aria-components";
import { cx } from "@/utils/cx";

const loginOptions = [
    {
        value: "wcm",
        title: "WCM",
        description: "Platform pupuk subsidi",
        logo: "/wcm logo.webp",
    },
    {
        value: "dimas",
        title: "Dimas",
        description: "Platform pupuk nonsubsidi",
        logo: "/Dimas.webp",
    },
    {
        value: "respons",
        title: "Respons",
        description: "Platform pupuk nonsubsidi",
        logo: "/RESPONS-PI 1.webp",
    },
    {
        value: "andalan",
        title: "Andalan",
        description: "Platform pupuk subsidi",
        logo: "/Andalan.webp",
    },
];

export const LoginSplitImage = () => {
    return (
        <section className="grid min-h-screen grid-cols-1 overflow-hidden bg-primary lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="flex flex-col bg-[#F6F7FE] relative lg:border-r lg:border-gray-200 lg:shadow-lg">
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-120">
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="relative">
                                <BackgroundPattern pattern="grid" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 text-[#E9EBFC] md:block" />
                                <BackgroundPattern
                                    pattern="grid"
                                    size="md"
                                    className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[#E9EBFC] md:hidden"
                                />
                                <Image
                                    src="/Cemara.webp"
                                    alt="Cemara Logo"
                                    width={120}
                                    height={48}
                                    className="relative z-10 max-md:w-[100px]"
                                />
                            </div>
                            <div className="z-10 flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Welcome back</h1>
                                <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Login form data:", data);
                            }}
                            className="relative z-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-5">
                                <AriaRadioGroup aria-label="Login options" className="flex flex-col gap-3">
                                    {loginOptions.map((option) => (
                                        <AriaRadio
                                            key={option.value}
                                            value={option.value}
                                            className={({ isSelected, isFocusVisible }) =>
                                                cx(
                                                    "relative flex cursor-pointer items-center gap-3 rounded-xl bg-primary p-4 outline-focus-ring ring-inset",
                                                    isSelected ? "ring-2 ring-brand" : "ring-1 ring-secondary",
                                                    isFocusVisible && "outline-2 outline-offset-2",
                                                )
                                            }
                                        >
                                            {({ isSelected, isFocusVisible }) => (
                                                <>
                                                    <Image
                                                        src={option.logo}
                                                        alt={option.title}
                                                        width={80}
                                                        height={40}
                                                        className="object-contain"
                                                    />
                                                    <div className="flex flex-1 flex-col">
                                                        <span className="text-md font-semibold text-secondary">{option.title}</span>
                                                        <span className="text-md text-tertiary">{option.description}</span>
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            "relative inline-flex size-5 shrink-0 items-center justify-center rounded-full ring-inset",
                                                            isSelected ? "bg-brand-solid" : "ring-1 ring-primary",
                                                            isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                                        )}
                                                    >
                                                        <div
                                                            className={cx(
                                                                "absolute size-2 rounded-full bg-fg-white",
                                                                isSelected ? "opacity-100" : "opacity-0",
                                                            )}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </AriaRadio>
                                    ))}
                                </AriaRadioGroup>
                                <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="md" />
                                <Input isRequired hideRequiredIndicator label="Password" type="password" name="password" size="md" placeholder="********" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Sign in
                                </Button>

                                <div className="flex items-center justify-center">
                                    <Button color="link-color" size="md" href="#">
                                        Forgot password
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

                <footer className="hidden p-8 pt-11 lg:block">
                    <p className="text-sm text-tertiary">@ Pupuk Indonesia 2025</p>
                </footer>
            </div>

            <div className="relative hidden min-h-screen overflow-hidden bg-primary lg:block">
                <div className="absolute inset-0 h-screen">
                    <HeroAnimation className="h-full w-full" />
                </div>
            </div>
        </section>
    );
};




