const toSnake = str => str
    .replace(/[^a-zA-Z]/g, '_')
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

export const safeToSnake = (str) => {
    const res = toSnake(str);
    return (res.length >= 2) ? res : str; // considering element with one symbol is too short to be safe
};
