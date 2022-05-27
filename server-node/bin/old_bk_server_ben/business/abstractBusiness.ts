import {DbAccessor} from "../db/dbAccessor";
import {Business} from "./business";
import {Model} from "../models/Model";

export abstract class AbstractBusiness<T extends Model> implements Business<T> {

    protected constructor(protected dbAccessor: DbAccessor) {

    }

    abstract create(obj: T): Promise<void>;

    abstract getOne(id: number): Promise<T>;

    abstract remove(obj: T): Promise<void>;

    abstract update(obj: T): Promise<void>;


}