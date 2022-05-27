import {Model} from "./Model";
import {Business} from "../business/business";
import * as util from "util";
import {Logger} from "../logger/logger";
import {LoggerFactory} from "../logger/loggerFactory";

export abstract class AbstractModel implements Model {
    protected logger: Logger = LoggerFactory.getLogger(this.constructor["name"]);

    protected constructor(protected businessLogic: Business<AbstractModel>, public readonly id?: number) {

    }

    protected parseObjectToMembers(obj: object): void {
        for (let property in obj) {
            this[property] = obj[property];
        }
    }

    getObject(): object {
        let obj = {};

        for (let name of Object.getOwnPropertyNames(this)) {
            if (!util.isNullOrUndefined(this[name])) {
                obj[name] = this[name];
            }
        }

        return obj;
    }

}