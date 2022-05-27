/*import {AbstractBusiness} from "./abstractBusiness";
import {Administrator} from "../models/administrator";

export class Administrators extends AbstractBusiness<Administrator> { //todo: implement
    async create(obj: Administrator): Promise<void> {
        return undefined;
    }

    async getOne(id: number): Promise<Administrator> {
        let obj = await this.dbAccessor.getOneRecord({id: id});
        return new Administrator(this, {
            steamID: obj["steamID"],
            alias: obj["alias"],
            lvl: Number(obj["lvl"]),
            aDate: new Date(obj["adate"]),
            steam64: obj["steam64"],
            id: obj["id"]
        });
    }

    async remove(obj: Administrator): Promise<void> {
        return undefined;
    }

    async update(obj: Administrator): Promise<void> {
        return undefined;
    }


}*/
