import {IRoute, IRouter} from "express";
import {Router} from "./router";
import {routerName} from "./routerName";
import {UserRouter} from "./userRouter";

export class RoutersFactory {
    public constructor(protected routerCreator: () => IRouter<any>, protected baseRoute: string) {
        if (!baseRoute.endsWith("/")) {
            this.baseRoute += "/";
        }

        if (!baseRoute.startsWith("/")) {
            this.baseRoute = "/" + baseRoute;
        }
    }

    public getRouter(route: string): Router {
        let finalRoute = this.baseRoute + route;
        switch(route) {
            case routerName.USER:
                return new UserRouter(this.routerCreator(), finalRoute);
            default:
                throw new Error(`Cannot find route ${route}!`);
        }
    }
}