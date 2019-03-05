import { Feature } from "./feature.model";

export class Subscription {
  title: string;
  /**price of */
  price?: number = 0;
  days?: number = 28;
  avaiable?: boolean = true;
  features: Feature[] = [];
  transaction: {
    price?: number;
    percentage?: number;
  } = {};
}
