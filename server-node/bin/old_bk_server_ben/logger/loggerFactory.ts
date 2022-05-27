import {Logger} from "./logger";
import {Log4jsLogger} from "./log4jsLogger";

export class LoggerFactory {

    public static getLogger(name: string): Logger {
        return new Log4jsLogger(name);
    }
}