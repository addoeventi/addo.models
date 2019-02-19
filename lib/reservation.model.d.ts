import { ReservationType } from './reservation-type.enum';
export declare class Reservation {
    guid: string;
    title: string;
    fullname: string;
    people: number;
    note: string;
    phone: string;
    is_free: boolean;
    info: any;
    type: ReservationType;
    transation: any;
    fk_group: string;
    fk_pr: string;
    fk_user: string;
    verified: Date;
}
