export class EventBus {
    listeners: { [x: string]: any[]; } = {};
    
  
    on<T>(event: string | number, callback: T)  {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    }
  
    off(event: string | number, callback: () => void) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== callback);
    }
  
    emit(event: string | number, ...args: [] ) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
        }

      this.listeners[event].forEach(listener => {
          listener(...args);
      });
    }
  }
  
  const eventBus = new EventBus();