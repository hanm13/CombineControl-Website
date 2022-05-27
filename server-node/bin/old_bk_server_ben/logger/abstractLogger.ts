import {Logger} from "./logger";

export abstract class AbstractLogger implements Logger {
    protected constructor(protected name: string) {

    }

    abstract addConstantArgs(args?: object): void;

    abstract debug(message: string, args?: object): void;

    abstract error(message: string, args?: object): void;

    abstract fatal(message: string, args?: object): void;

    abstract info(message: string, args?: object): void;

    abstract trace(message: string, args?: object): void;

    abstract warn(message: string, args?: object): void;
}
