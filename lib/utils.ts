// lib/utils.ts

// Utility to merge class names
export function cn(...classes: (string | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
}

// Example common helper functions
export function isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
}

export function formatDate(date: Date, format: string): string {
    // Implement a simple date formatting, e.g., YYYY-MM-DD
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
}