import {AbstractModel} from "./abstractModel";
import {Business} from "../business/business";
import {Phrases} from "../../cfg/phrases";
import {DbError} from "../db/error/dbError";
import {DbErrorType} from "../db/error/dbErrorType";
import {ApiError} from "../error/apiError";

export class Administrator extends AbstractModel {
    public readonly steamID: string;
    private alias: string;
    public readonly aDate: Date;
    private lvl: number;
    private lastLvl: number;
    private steam64: string;

    public constructor(businessLogic: Business<Administrator>, obj: AdministratorMembers) {
        super(businessLogic, obj.id);
        this.parseObjectToMembers(obj);
        this.logger.addConstantArgs({id: this.steamID});
    }

    public async promote(levels: number = 1): Promise<void> {
        this.logger.info(`Increasing level by ${levels} levels to be ${this.lvl + levels}.`);

        await this.setLevel(this.lvl + levels);
        this.logger.info(`Successfully updated the level in database.`);
    }

    public async demote(levels: number = 1): Promise<void> {
        this.logger.info(`Decreasing level by ${levels} levels to be ${this.lvl - levels}.`);
        await this.setLevel(this.lvl - levels);
        this.logger.info(`Successfully updated the level in database.`);
    }

    public async suspend(): Promise<void> {
        this.logger.info(`Suspending administrator.`);
        await this.setLevel(0);
        this.logger.info(`Successfully suspended administrator.`);
    }

    public async changeAlias(alias: string): Promise<void> {
        this.logger.info(`Changing alias to be "${alias}", replacing the alias "${this.alias}"`);
        this.alias = alias;
        await this.businessLogic.update(this);
    }

    public async remove(): Promise<void> {
        // todo: finish
    }

    private async setLevel(level: number = 1): Promise<void> {
        if (level > 9) {
            throw new ApiError(Phrases.Administrator.LVL_TOO_HIGH, `${level}`);
        }

        if (level < 0) {
            throw new ApiError(Phrases.Administrator.LVL_TOO_LOW, `${level}`);
        }

        this.lastLvl = this.lvl;
        this.lvl = level;
        this.logger.info(`Set level to be ${level}.`);

        try {
            await this.businessLogic.update(this);
            this.logger.info(`Successfully updated the level in database.`);
        } catch (e) {
            if (e instanceof DbError) {
                switch (e.code) {
                    case DbErrorType.NO_RECORDS_FOUND:
                        throw new ApiError(Phrases.Db.NO_RECORD_FOUND, e.message);
                    case DbErrorType.CONNECTION_ERROR:
                        this.logger.error(`Error when approaching the database: ${e.toString()}`);
                        throw new ApiError(Phrases.Db.CONNECTION_PROBLEM, e.message);
                }
            }

            this.logger.error(`Unknown error occurred: ${e.toString()}`);
            throw new ApiError(Phrases.General.UNKNOWN_ERROR_OCCURRED, null);
        }
    }
}

export interface AdministratorMembers {
    steamID: string;
    alias: string;
    lvl: number;
    aDate: Date;
    steam64: string;
    id: number;
    lastLvl: number;
}