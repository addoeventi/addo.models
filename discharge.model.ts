import { Product } from "../models/product.model";

export class Discharge {
    public guid: string;
    public date: Date;
    public products: Product[]
}