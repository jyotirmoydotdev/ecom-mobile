export function apiurl(): string {
    if (typeof window !== "undefined") {
        return "http://192.168.31.6:3000";
    } else {
        return "http://localhost:3000";
    }
}