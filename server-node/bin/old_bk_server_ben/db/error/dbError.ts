import {DbErrorType} from "./dbErrorType";

export class DbError extends Error {
    public constructor(message: string, public readonly code: number) {
        super(message);
    }
}