'use client';

import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const SignupHighlightPanel = () => {
    return (
        <section className="relative flex min-h-screen flex-col bg-primary">
            <div className="absolute inset-0">
                <BackgroundPattern pattern="grid" className="size-full opacity-10" />
            </div>

            <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
                <div className="flex items-center gap-3">
                    <UntitledLogoMinimal className="size-10" />
                    <span className="text-md font-semibold text-primary">Untitled UI</span>
                </div>
                <Button href="/login" color="link-color">
                    Back to login
                </Button>
            </header>

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-stretch px-4 pb-16 sm:px-6">
                <div className="grid w-full gap-8 rounded-3xl border border-secondary/20 bg-primary/80 p-6 shadow-lg backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Create your account</h1>
                            <p className="text-md text-tertiary">
                                Join the community and start building better interfaces with our design tools.
                            </p>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Signup form data:", data);
                            }}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Input isRequired hideRequiredIndicator label="First name" name="firstName" placeholder="Jane" size="md" />
                                <Input isRequired hideRequiredIndicator label="Last name" name="lastName" placeholder="Smith" size="md" />
                            </div>
                            <Input isRequired hideRequiredIndicator label="Work email" name="email" type="email" placeholder="name@company.com" size="md" />
                            <Input isRequired hideRequiredIndicator label="Password" name="password" type="password" placeholder="Create a password" size="md" />
                            <Checkbox name="terms" isRequired label="I agree with the Terms and Privacy Policy" />

                            <Button type="submit" size="lg" className="w-full">
                                Create account
                            </Button>
                            <SocialButton social="google" theme="color" className="w-full">
                                Sign up with Google
                            </SocialButton>
                        </Form>
                    </div>

                    <div className="flex flex-col justify-between gap-8 rounded-2xl bg-white/5 px-6 py-8 text-primary sm:px-8">
                        <div className="flex flex-col gap-5">
                            <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Why join us</span>
                            <h2 className="text-display-xs font-semibold">Everything you need to launch faster</h2>
                            <ul className="flex flex-col gap-4 text-md text-primary/80">
                                <li className="rounded-xl border border-white/10 bg-white/5 p-4">Unlimited access to the component library</li>
                                <li className="rounded-xl border border-white/10 bg-white/5 p-4">Weekly live sessions with design mentors</li>
                                <li className="rounded-xl border border-white/10 bg-white/5 p-4">Early access to upcoming product features</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-md text-primary/80">
                                Already have an account?
                                <br />
                                <Button href="/login" color="link-color" size="md" className="mt-1 inline-flex">
                                    Log in instead
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



