export function isReactComponent(value: any): value is React.ComponentType<any> {
    return typeof value === "function";
}