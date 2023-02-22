export class NotFoundException extends Error {
  code: string;
  constructor(message: string) {
    super(message);
    this.code = "NOT_FOUND";
  }
}
