"use client";

export function Theme({ children }: { children: React.ReactNode }) {
    return <div className="light-mode">{children}</div>;
}
