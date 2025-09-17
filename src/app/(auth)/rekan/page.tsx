import type { Metadata } from "next";
import { LoginSplitImage } from "@/components/auth/login-split-image";

export const metadata: Metadata = {
    title: "Login - Rekan PIHC",
    description: "Login to your account - Rekan PIHC 2025",
};

export default function LoginPage() {
    return <LoginSplitImage />;
}
