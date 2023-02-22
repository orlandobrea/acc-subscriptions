import { SubscriptionRepository } from "../domain/repositories/subscriptionRepository";
import { SubscriptionId } from "../domain/valueObject/subscriptionId";
import { createSubscriptionCommand } from "./createSubscriptionCommand";
import { Subscription } from "../domain/model/subscription";
import { Builder } from "builder-pattern";
import { ValidationException } from "./errors/ValidationException";

export class CreateSubscription {
  private readonly repository: SubscriptionRepository;
  constructor(subscriptionRepository: SubscriptionRepository) {
    this.repository = subscriptionRepository;
  }

  validateOrFail(subscription: Subscription) {
    if (!subscription.isValid())
      throw new ValidationException(subscription.validationErrors());
  }

  async run(
    command: createSubscriptionCommand
  ): Promise<SubscriptionId | ValidationException> {
    try {
      const subscription = Builder<Subscription>()
        .email(command.email)
        .gender(command.gender)
        .consent(command.consent)
        .firstName(command.firstName)
        .dateOfBirth(command.dateOfBirth)
        .subscribedToNewsletterId(command.subscribedToNewsletterId)
        .build();
      this.validateOrFail(subscription);
      const id = subscription.id;
      await this.repository.save(subscription);
      return id;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
