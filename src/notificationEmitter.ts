import { EventEmitter } from "events";

export class NotificationEmitter extends EventEmitter {
    d: boolean;

    constructor() {
        super();
        this.d = null;//disable
    }
}