import { Service } from "../service";
export declare class Events extends Service {
    documentFragment: DocumentFragment;
    init(): void;
    addEventListener(type: string, listener: Function): void;
    removeEventListener(type: string, listener: Function): void;
    dispatchEvent(eventType: string, eventDetail?: object): void;
}
