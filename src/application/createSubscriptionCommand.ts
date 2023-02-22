import { Gender } from "../domain/valueObject/gender";
import { SubscribedToNewsletterId } from "../domain/valueObject/subscribedToNewsletterId";

export interface createSubscriptionCommand {
  email: string;
  firstName?: string;
  gender?: Gender;
  dateOfBirth: Date;
  consent: boolean;
  subscribedToNewsletterId: SubscribedToNewsletterId;
}
