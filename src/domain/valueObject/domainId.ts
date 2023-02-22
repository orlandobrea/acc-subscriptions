import uuid from "uuid";
import { DomainException } from "../domainException";

export class DomainId {
  id: string;

  constructor(id?: string) {
    if (id && !uuid.validate(id)) {
      throw new DomainException(
        "INVALID_UUID",
        "id provided is not a valid uuid"
      );
    }
    this.id = id ? id : uuid.v4();
  }

  getValue() {
    return this.id;
  }
}
