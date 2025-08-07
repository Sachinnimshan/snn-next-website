

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    link?: string; // Optional, as some certificates may not have a link
}