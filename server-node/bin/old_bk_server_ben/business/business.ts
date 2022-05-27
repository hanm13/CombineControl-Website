import {Model} from "../models/Model";

export interface Business<T extends Model> {
    update(obj: T): Promise<void>;

    remove(obj: T): Promise<void>;

    create(obj: T): Promise<void>;

    getOne(id: number): Promise<T>;


}