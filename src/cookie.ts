import Cookies from 'js-cookie';

const setToken = (tokenValue: string) => {
    Cookies.set('token', tokenValue, { expires: 365 });

    return tokenValue;
};
const getToken = () => {
    return Cookies.get('token');
};
export { getToken, setToken };
