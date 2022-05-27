export interface DbAccessor {

    getManyRecords(query: object, skip: number, limit: number, orderBy: string): Promise<object[]>;
    getManyRecords(query: object, skip: number, limit: number, orderBy: string, ascend: boolean): Promise<object[]>;
    getManyRecords(query: object, skip: number, limit: number, orderBy: string, ascend: boolean, columns: string[]): Promise<object[]>;

    getOneRecord(query: object): Promise<object>;

    countRecords(query: object): Promise<number>;

    updateRecord(query: object, obj: object): Promise<void>;

    removeRecord(query: object): Promise<void>;

    insertRecord(record: object): Promise<void>;

    isExist(query: object): Promise<boolean>;

}