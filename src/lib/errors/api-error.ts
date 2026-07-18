export class ApiError extends Error {
  field?: string;
  code?: string;
  constructor(message: string, field?: string, code?: string) {
    super(message);
    this.name = "ApiError";
    this.field = field;
    this.code = code;
  }
}
