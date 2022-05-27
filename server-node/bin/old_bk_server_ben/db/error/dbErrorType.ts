export enum DbErrorType {
    NO_RECORDS_FOUND = 404,
    CONNECTION_ERROR = 500
}

export namespace DbErrorType {

    export function lookupCode(code: DbErrorType): string {
        return DbErrorType[code];
    }
}