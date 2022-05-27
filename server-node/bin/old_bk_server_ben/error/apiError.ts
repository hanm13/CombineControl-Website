export class ApiError extends Error {
    constructor(message: string, public readonly details: any) {
        super(message);
    }

    toJSON(): object {
        return {
          error: true,
          message: this.message,
          details: this.details
        };
    }
}