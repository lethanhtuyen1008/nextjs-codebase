export function isServerSite(): boolean {
    return typeof window === "undefined";
}
