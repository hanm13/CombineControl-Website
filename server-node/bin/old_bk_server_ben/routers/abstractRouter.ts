import {IRouter, Request, Response} from "express";
import {Router} from "./router";

export abstract class AbstractRouter implements Router {
    protected constructor(protected router: IRouter<any>, protected baseRoute: string) {
    }

    addMiddleware(func: (req: Request, res: Response, next: Function) => void): void {
        this.router.use(func);
    }

    abstract setRoutes();
}