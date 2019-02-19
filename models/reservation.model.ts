import { newGuid } from 'ts-guid';
import { ReservationType } from './reservation-type.enum';

export class Reservation {
    public guid: string = newGuid();
    public title: string;
    public fullname: string;
    public people: number;
    public note: string;
    public phone: string;
    public is_free: boolean;
    public info: any;
    public type: ReservationType;
    public transation: any;
    public fk_group: string;
    public fk_pr: string;
    public fk_user: string;
    public verified: Date;
}