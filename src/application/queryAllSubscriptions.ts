import { Subscription } from "../domain/model/subscription";
import { SubscriptionRepository } from "../domain/repositories/subscriptionRepository";
import { SubscriptionId } from "../domain/valueObject/subscriptionId";
import { NotFoundException } from "./errors/NotFoundException";

export class QueryAllSubscriptions {
  private readonly repository: SubscriptionRepository;
  constructor(subscriptionRepository: SubscriptionRepository) {
    this.repository = subscriptionRepository;
  }

  async run(): Promise<Subscription[]> {
    return await this.repository.getAll();
  }
}
