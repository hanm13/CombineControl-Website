import {PresenterModule} from "./presenterModule";
import {Business} from "../business/business";
import * as util from "util";

export abstract class AbstractModule implements PresenterModule {
    protected constructor(public businessLogic: Business<AbstractModule>, public readonly id?: number) {

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