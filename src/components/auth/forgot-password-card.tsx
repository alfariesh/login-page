'use client';

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const ForgotPasswordCard = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary px-4 py-16 sm:px-6">
            <BackgroundPattern
                pattern="square"
                size="lg"
                className="pointer-events-none absolute -left-40 top-0 hidden h-[120%] w-[120%] opacity-20 lg:block"
            />
            <BackgroundPattern
                pattern="circle"
                size="md"
                className="pointer-events-none absolute -bottom-32 -right-24 h-[60%] w-[60%] opacity-40"
            />

            <div className="relative z-10 flex w-full max-w-xl flex-col gap-8 rounded-3xl border border-secondary/30 bg-primary/80 p-8 shadow-xl backdrop-blur md:p-12">
                <div className="flex flex-col items-center gap-4 text-center">
                    <UntitledLogoMinimal className="size-12" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Reset your password</h1>
                        <p className="text-md text-tertiary">
                            Enter the email address associated with your account and we will send you instructions to reset your password.
                        </p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Forgot password form data:", data);
                    }}
                    className="flex flex-col gap-6"
                >
                    <Input
                        isRequired
                        hideRequiredIndicator
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        size="md"
                    />

                    <Button type="submit" size="lg" className="w-full">
                        Send reset link
                    </Button>
                </Form>

                <div className="flex flex-col gap-3 rounded-2xl border border-secondary/20 bg-white/5 p-6 text-left text-sm text-tertiary">
                    <p className="font-semibold text-primary">Need additional help?</p>
                    <p>
                        Check your spam folder if the email does not arrive within a few minutes. You can also contact our support team for manual
                        assistance.
                    </p>
                    <div className="flex gap-3">
                        <Button href="/login" color="link-color" size="md">
                            Back to login
                        </Button>
                        <Button href="mailto:support@example.com" color="link-gray" size="md">
                            Contact support
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

