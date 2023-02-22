import { Gender } from "../valueObject/gender";
import { SubscribedToNewsletterId } from "../valueObject/subscribedToNewsletterId";
import { SubscriptionId } from "../valueObject/subscriptionId";

export class Subscription {
  id: SubscriptionId;
  email?: string;
  firstName?: string;
  gender?: Gender;
  dateOfBirth?: Date;
  consent?: boolean;
  subscribedToNewsletterId?: SubscribedToNewsletterId;

  constructor() {
    this.id = new SubscriptionId();
  }

  isValid(): boolean {
    return (
      !!this.email &&
      !!this.gender &&
      !!this.dateOfBirth &&
      !!this.subscribedToNewsletterId
    );
  }

  validationErrors(): string[] {
    const errors = [];
    if (!this.subscribedToNewsletterId)
      errors.push("Must be subscribed to a newsletter");
    if (!this.dateOfBirth) errors.push("Must have a birth date");
    if (!this.email) errors.push("Must have an email");
    return errors;
  }
}
