import { elementUi } from './UI_element';
import { getToken } from './cookie';

const url = {
    root: 'https://edu.strada.one/api/user',
    me: 'https://edu.strada.one/api/user/me',
    story: 'https://edu.strada.one/api/messages/',
};

const tokenForUser = async () => {
    const userEmail = elementUi.input.inputSendMail?.value;
    try {
        const response = await fetch(url.root, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email: userEmail,
            }),
        });
        if (!response.ok) {
            console.log('Error');
        }
        const data = await response.json();
        console.log('token', data);
    } catch (error) {
        console.error(error);
    }
};

const getUserResponse = async () => {
    const token = getToken();

    const response = await fetch(url.me, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

const changeUserName = async (name: string) => {
    const requestBody = {
        name,
    };
    const token = getToken();
    const response = await fetch(url.root, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Your User Agent String',
        },
        body: JSON.stringify(requestBody),
    });

    return response;
};

const getMessageStory = async () => {
    const token = getToken();
    const response = await fetch(url.story, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};
const getDataUser = async () => {
    const responseUser = await getUserResponse();
    const dataUser = await responseUser.json();
    return dataUser;
};

export { changeUserName, getDataUser, getMessageStory, getUserResponse, tokenForUser };
