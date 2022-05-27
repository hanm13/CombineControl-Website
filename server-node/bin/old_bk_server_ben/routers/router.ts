import {Request, Response} from "express";

export interface Router {
    addMiddleware(func: (req: Request, res: Response, next: Function) => void): void;
    setRoutes(): void;
}