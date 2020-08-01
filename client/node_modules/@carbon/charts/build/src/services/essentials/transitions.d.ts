import { Service } from "../service";
import { Transition } from "d3-transition";
export declare class Transitions extends Service {
    pendingTransitions: {};
    init(): void;
    getTransition(name?: string, animate?: boolean): Transition<any, any, any, any>;
    getInstantTransition(name?: string): Transition<any, any, any, any>;
    getPendingTransitions(): {};
}
