
export class EventBus {
    listeners: { [x: string]: any[]; } = {};
  
    on(event: string, callback: any ) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
  
      this.listeners[event].push(callback);
    }
  
    off(event: string, callback: () => void) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
  
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== callback
      );
    }
  
    emit(event: string, ...args: ({ [x: string]: object | string; } | undefined)[]) {
      if (!this.listeners[event]) {
        throw new Event(`Нет события: ${event}`);
      }
      
        this.listeners[event].forEach(listener => {
        listener(...args);
      });
    }
  }