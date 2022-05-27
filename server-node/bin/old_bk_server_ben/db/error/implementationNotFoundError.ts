export class ImplementationNotFoundError extends Error {
    public constructor(public readonly implName: string) {
        super(`Could not find implementation '${implName}'`);
    }
}