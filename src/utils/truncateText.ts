
export default function truncateText(text: string, limit: number = 150): string {
    if (!text) return "";
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
}