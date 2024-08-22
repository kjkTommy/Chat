const setMessageInLocalStorage = (message: string): void => {
    localStorage.setItem('message', message);
};

const getMessageFromLocalStorage = (): string | null => {
    return localStorage.getItem('message');
};
export { getMessageFromLocalStorage, setMessageInLocalStorage };
