import { getToken } from './cookie';
import { templateMessage } from './templateFunction';
import { SOCKET } from './types';
import { elementUi } from './UI_element';
const token = getToken();

export const webSocket: SOCKET = {
    socket: '',
    INIT_CONNECTION(): void {
        const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

        socket.onmessage = (event: MessageEvent) => {
            const dataUser = JSON.parse(event.data);
            templateMessage(dataUser.user.name, dataUser.text, dataUser.createdAt);
            const liContainer = elementUi.template.templateContainer.content.cloneNode(true);
            elementUi.mainBlockElements.ulList.appendChild(liContainer);
        };
        socket.onclose = () => {
            this.RECONNECT();
        };
        this.socket = socket;
    },
    SEND_MESSAGE(message: string): void {
        if (this.socket) {
            this.socket.send(JSON.stringify({ text: message }));
        }
    },
    RECONNECT(): void {
        this.INIT_CONNECTION();
    },
    CLOSE(): void {
        if (this.socket) {
            this.socket.close();
        }
    },
};
