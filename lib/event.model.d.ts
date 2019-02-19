import { Booking } from "./booking.model";
export declare class Event {
    guid: string;
    title: string;
    description: string;
    from: Date;
    to: Date;
    location: string;
    cover: string;
    created: Date;
    modified: Date;
    link: string;
    user: string;
    hidden: boolean;
    booking: Booking;
    address: {
        fullAddress: string;
        lat: number;
        lng: number;
    };
    promo: {
        radius: number;
        from: Date;
        to: Date;
        importance: number;
    };
    tags: string[];
}
