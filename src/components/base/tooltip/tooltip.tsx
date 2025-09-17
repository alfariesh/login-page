"use client";

import React from "react";

export interface TooltipProps {
    children: React.ReactNode;
    content?: string;
    title?: string;
    description?: string;
    placement?: string;
    isDisabled?: boolean;
    offset?: number;
}

export const Tooltip = ({ children, content, title }: TooltipProps) => {
    return <span title={title || content}>{children}</span>;
};

export const TooltipTrigger = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => {
    return <div className={className} {...props}>{children}</div>;
};