export type BadgeColors =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "neutral"
    | "brand"
    | "gray"
    | "gray-blue"
    | "blue-light"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "orange";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeVariant = "solid" | "outline" | "subtle";

export type BadgeTypes = "filled" | "outlined" | "outlined-border" | "pill-color" | "modern";

export type FlagTypes = "flag" | "flag-outline";

export type Sizes = "sm" | "md" | "lg";

export type IconComponentType = React.ComponentType<{ className?: string }>;

export type BadgeTypeToColorMap = {
    [K in BadgeTypes]: BadgeColors[];
};

export const badgeTypes: BadgeTypeToColorMap & {
    pillColor: "pill-color";
    badgeColor: "filled";
    badgeModern: "modern";
} = {
    filled: ["primary", "secondary", "success", "warning", "error", "info", "neutral", "brand", "gray", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"],
    outlined: ["primary", "secondary", "success", "warning", "error", "info", "neutral", "brand", "gray", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"],
    "outlined-border": ["primary", "secondary", "success", "warning", "error", "info", "neutral", "brand", "gray", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"],
    "pill-color": ["primary", "secondary", "success", "warning", "error", "info", "neutral", "brand", "gray", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"],
    modern: ["primary", "secondary", "success", "warning", "error", "info", "neutral", "brand", "gray", "gray-blue", "blue-light", "blue", "indigo", "purple", "pink", "orange"],
    pillColor: "pill-color",
    badgeColor: "filled",
    badgeModern: "modern",
};