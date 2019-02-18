import { Reservation } from "./reservation.model";
import { EventGroup } from "./event-group.model";

export class Booking {
    public administrators: string[] = [];
    public groups: EventGroup[] = [];
    public reservations: string[] = [];
    public status: string;
    public packages: any;
    public limits: any;
    public info: any;
}