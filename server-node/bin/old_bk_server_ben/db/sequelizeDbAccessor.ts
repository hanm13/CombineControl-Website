import {AbstractDbAccessor} from "./abstractDbAccessor";

export class SequelizeDbAccessor extends AbstractDbAccessor {

    public constructor(connectionString: string) {
        super(connectionString);
    }

    async countRecords(query: object): Promise<number> {
        return undefined;
    }

    async getManyRecords<T>(query: object, skip: number, limit: number, orderBy?: string, ascend?: boolean, columns?: string[]): Promise<T[]> {
        return undefined;
    }

    async getOneRecord<T>(query: object): Promise<T[]> {
        return undefined;
    }

    async isExist(query: object): Promise<boolean> {
        return undefined;
    }

    async insertRecord(record: object): Promise<void> {
        return undefined;
    }

    async removeRecord(query: object): Promise<void> {
        return undefined;
    }

    async updateRecord(query: object, obj: object): Promise<void> {
        return undefined;
    }
}