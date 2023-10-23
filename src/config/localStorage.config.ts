export const setValidatedWithExpiration = (key: string, value: any, expirationTime: number) => {
    const item = {
        isValidated: value,
        expiry: new Date().getTime() + expirationTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithExpiration = (key: string) => {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null; // Item doesn't exist
    }

    const item = JSON.parse(itemString);
    const now = new Date().getTime();

    if (now > item.expiry) {
        localStorage.removeItem(key); // Remove the expired item
        return null; // Item is expired
    }

    return item.isValidated;
};
