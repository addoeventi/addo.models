import { Feature } from "./feature.model";

export class Subscription {
  title: string;
  created: Date;
  /**price of */
  price?: number = 0;
  days?: number = 28;
  avaiable?: boolean = true;
  features: Feature[] = [];
  transaction: {
    price?: number;
    percentage?: number;
  } = {};
  payment: {
    type: string;
    data: any;
    transactionID: string;
  };
  services: Array<{
    id: string;
    limit: number;
    description: string;
    percentageFee: number;
    fixedFee: number;
  }>;
  info: any;
}
