import { Subscription } from "../model/subscription";
import { SubscriptionId } from "../valueObject/subscriptionId";

export interface SubscriptionRepository {
  save(obj: Subscription): Promise<SubscriptionId>;
  getById(id: SubscriptionId): Promise<Subscription | null>;
  getAll(): Promise<Subscription[]>;
}
