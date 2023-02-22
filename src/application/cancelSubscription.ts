import { Subscription } from "../domain/model/subscription";
import { SubscriptionRepository } from "../domain/repositories/subscriptionRepository";
import { SubscriptionId } from "../domain/valueObject/subscriptionId";
import { NotFoundException } from "./errors/NotFoundException";

export class CancelSubscription {
  private readonly repository: SubscriptionRepository;
  constructor(subscriptionRepository: SubscriptionRepository) {
    this.repository = subscriptionRepository;
  }

  async run(id: SubscriptionId): Promise<void> {
    const subscription = await this.repository.getById(id);
    if (!subscription) throw new NotFoundException("Subscription not found");
    subscription.consent = false;
    await this.repository.save(subscription);
    return;
  }
}
