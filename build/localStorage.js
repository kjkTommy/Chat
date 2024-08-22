const setMessageInLocalStorage = (message) => {
    localStorage.setItem('message', message);
};
const getMessageFromLocalStorage = () => {
    return localStorage.getItem('message');
};
export { getMessageFromLocalStorage, setMessageInLocalStorage };
