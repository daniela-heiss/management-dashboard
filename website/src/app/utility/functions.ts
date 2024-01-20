export function dateToString(date: Date) {
    date.setUTCHours(date.getUTCHours() + 2);

    const year = date.toISOString().slice(0, 4);
    const month = date.toISOString().slice(5, 7);
    const day = date.toISOString().slice(8, 10);

    const dateString = `${year}-${month}-${day}`;

    return dateString;
}

export function dateToYear(date: Date) {
    date.setUTCHours(date.getUTCHours() + 2);

    const year = date.toISOString().slice(0, 4);

    const yearString = `${year}`;

    return yearString;
}