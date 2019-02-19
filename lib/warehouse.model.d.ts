import { Product } from './product.model';
import { Discharge } from './discharge.model';
import { ShoppingList } from './shopping-list.model';
export declare class Warehouse {
    guid: string;
    name: string;
    products: Product[];
    discharges: Discharge[];
    shoppingList: ShoppingList;
    history: ShoppingList[];
    modified: Date;
}
