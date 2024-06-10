interface SOCKET {
    socket: WebSocket | '';
    INIT_CONNECTION(): void;
    SEND_MESSAGE(message: string): void;
    RECONNECT(): void;
    CLOSE(): void;
}
interface user {
    name: string;
}
interface infoAboutMessage {
    text: string;
    user: user;
    createdAt: string;
}
