import {DbAccessor} from "./dbAccessor";

export abstract class AbstractDbAccessor implements DbAccessor {
    protected constructor(protected connectionString: string) {

    }

    abstract countRecords(query: object): Promise<number>;

    abstract getManyRecords<T>(query: object, skip: number, limit: number, orderBy?: string, ascend?: boolean, columns?: string[]): Promise<T[]>;

    abstract getOneRecord<T>(query: object): Promise<T[]>;

    abstract isExist(query: object): Promise<boolean>;

    abstract insertRecord(record: object): Promise<void>;

    abstract removeRecord(query: object): Promise<void>;

    abstract updateRecord(query: object, obj: object): Promise<void>;

}
