import type { Metadata } from "next";
import { LoginSplitImage } from "@/components/auth/login-split-image";

export const metadata: Metadata = {
    title: "Login",
    description: "Access your Untitled UI account",
};

export default function LoginPage() {
    return <LoginSplitImage />;
}
