import { Socket } from 'socket.io-client';
declare class WebSocketService {
    private socket;
    private readonly API_URL;
    connect(): Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
    disconnect(): void;
    subscribeToApplications(callback: (data: any) => void): () => Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
    subscribeToApplication(applicationId: string, callback: (data: any) => void): () => Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
}
export declare const websocketService: WebSocketService;
export {};
