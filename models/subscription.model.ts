import { Feature } from "./feature.model";

export class Subscription {
  title: string;
  price: number;
  days: number;
  features: Feature[];
}
