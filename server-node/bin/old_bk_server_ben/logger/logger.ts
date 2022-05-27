export interface Logger {
    trace(message: string, args?: object): void;
    debug(message: string, args?: object): void;
    info(message: string, args?: object): void;
    warn(message: string, args?: object): void;
    error(message: string, args?: object): void;
    fatal(message: string, args?: object): void;
    addConstantArgs(args?: object): void;
}