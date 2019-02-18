import { newGuid } from "ts-guid";
import { Booking } from "./booking.model";

export class Event {
    public guid: string = newGuid();
    public title: string;
    public description: string;
    public from: Date;
    public to: Date;
    public location: string;
    public cover: string;
    public created: Date;
    public modified: Date;
    public link: string;
    public user: string;
    public hidden: boolean;
    public booking: Booking;
    public address: { fullAddress: string, lat: number, lng: number };
    public promo: { radius: number, from: Date, to: Date, importance: number };
    public tags: string[] = [];
}
