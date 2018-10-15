export class PubSub {
    public events: any;
    constructor() {
        this.events = {};
    }

    public subscribe(event: string, callback: Function) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }
        return self.events[event].push(callback);
    }

    public publish(event: string, data: Object) {
        let self = this;
        if(!self.events.hasOwnProperty(event)) {
            return [];
        }
        return self.events[event].map((callback: Function) => callback(data))
    }
}