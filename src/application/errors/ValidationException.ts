export class ValidationException extends Error {
  code: string;
  errorList: string[];

  constructor(errorList: string[]) {
    super(errorList.join("\n"));
    this.code = "VALIDATION";
    this.errorList = errorList;
  }
}
