type ErrorConstructor<T> = abstract new (...args: any[]) => T;

export class ModelError extends Error {
  readonly name = this.constructor.name;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  static isError<E extends ErrorConstructor<ModelError>>(
    this: E,
    error: unknown,
  ): error is InstanceType<E> {
    return error instanceof this;
  }
}
