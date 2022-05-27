import {AbstractLogger} from "./abstractLogger";
import {getLogger, Logger} from "log4js";

export class Log4jsLogger extends AbstractLogger {
    private logger: Logger;

    public constructor(name: string) {
        super(name);
        this.logger = getLogger(name);
    }

    addConstantArgs(args?: object): void {
        this.setContexts(args);
    }

    warn(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.warn(message);
        this.removeContexts(args);
    }

    debug(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.debug(message);
        this.removeContexts(args);
    }

    error(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.error(message);
        this.removeContexts(args);
    }

    fatal(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.fatal(message);
        this.removeContexts(args);
    }

    info(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.info(message);
        this.removeContexts(args);
    }

    trace(message: string, args?: object): void {
        this.setContexts(args);
        this.logger.trace(message);
        this.removeContexts(args);
    }
    
    private setContexts(args?: object) {
        if (args) {
            for (let property in args) {
                this.logger.addContext(property, args[property]);
            }
        }
    }

    private removeContexts(args?: object) {
        if (args) {
            for (let property in args) {
                this.logger.removeContext(property);
            }
        }
    }
}