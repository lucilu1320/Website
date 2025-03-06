import { io, Socket } from 'socket.io-client';

class WebSocketService {
  private socket: Socket | null = null;
  private readonly API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

  connect() {
    if (!this.socket) {
      this.socket = io(this.API_URL, {
        transports: ['websocket'],
        autoConnect: true
      });

      this.socket.on('connect', () => {
        console.log('WebSocket connected');
      });

      this.socket.on('disconnect', () => {
        console.log('WebSocket disconnected');
      });
    }
    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Subscribe to application updates
  subscribeToApplications(callback: (data: any) => void) {
    const socket = this.connect();
    socket.on('application:update', callback);
    return () => socket.off('application:update', callback);
  }

  // Subscribe to specific application
  subscribeToApplication(applicationId: string, callback: (data: any) => void) {
    const socket = this.connect();
    socket.on(`application:${applicationId}`, callback);
    return () => socket.off(`application:${applicationId}`, callback);
  }
}

export const websocketService = new WebSocketService();