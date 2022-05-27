import {DbAccessor} from "./dbAccessor";
import {SequelizeDbAccessor} from "./sequelizeDbAccessor";
import {ImplementationNotFoundError} from "./error/implementationNotFoundError";

export class DbAccessorFactory {

    public constructor(private connectionString: string) {

    }

    public getDbAccessor(implName: string): DbAccessor {
        switch(implName.toLowerCase()) {
            case "sequelize":
                return new SequelizeDbAccessor(this.connectionString);
            default:
                throw new ImplementationNotFoundError(implName);
        }
    }
}