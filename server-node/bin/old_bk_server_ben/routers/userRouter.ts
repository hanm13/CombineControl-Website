import {AbstractRouter} from "./abstractRouter";
import e = require("express");

export class UserRouter extends AbstractRouter {
    constructor(router: e.IRouter<any>, baseRoute: string) {
        super(router, baseRoute);
    }

    setRoutes(): void {

    }
}