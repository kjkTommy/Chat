import { getToken } from './cookie';
import { templateMessage } from './templateFunction';
import { elementUi } from './UI_element';
const token = getToken();
export const webSocket = {
    socket: '',
    INIT_CONNECTION() {
        const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
        socket.onmessage = (event) => {
            const dataUser = JSON.parse(event.data);
            templateMessage(dataUser.user.name, dataUser.text, dataUser.createdAt);
            const liContainer = elementUi.template.templateContainer.content.cloneNode(true);
            elementUi.mainBlockElements.ulList.appendChild(liContainer);
        };
        socket.onclose = (CloseEvent) => {
            this.RECONNECT();
        };
        this.socket = socket;
    },
    SEND_MESSAGE(message) {
        if (this.socket) {
            this.socket.send(JSON.stringify({ text: message }));
        }
    },
    RECONNECT() {
        this.INIT_CONNECTION();
    },
    CLOSE() {
        if (this.socket) {
            this.socket.close();
        }
    },
};
