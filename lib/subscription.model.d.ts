import { Feature } from "./feature.model";
export declare class Subscription {
    title: string;
    price?: number;
    days?: number;
    avaiable?: boolean;
    features: Feature[];
    transaction: {
        price?: number;
        percentage?: number;
    };
}
