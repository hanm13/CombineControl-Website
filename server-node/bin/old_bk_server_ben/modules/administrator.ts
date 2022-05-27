import {AbstractModule} from "./abstractModule";
import {Business} from "../business/business";
import * as util from "util";

export class Administrator extends AbstractModule {
    public constructor(public businessLogic: Business<Administrator>, public steamID: string, public alias: string, public lvl: number, public aDate: Date, public steam64: string, public readonly id?: number) {
        super(businessLogic, id);
    }

    public async promote(levels: number = 1): Promise<void> {
        if (this.lvl + levels > 9) {
            // todo: implement throw error
        }

        this.lvl += levels;
        await this.businessLogic.update(this);
    }
}