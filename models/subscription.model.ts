import { Feature } from "./feature.model";

export class Subscription {
  title: string;
  price: number;
  days: number;
  avaiable: boolean;
  features: Feature[];
}
