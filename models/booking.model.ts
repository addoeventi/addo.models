import { EventGroup } from "./event-group.model";

export class Booking {
  public administrators: string[] = [];
  public groups: EventGroup[] = [];
  public reservations: string[] = [];
  public status: string;
  public packages: any;
  public info: any;
  public services: { [name: string]: Service };
}

export type Service = {
  total: number;
  commons: Package;
  packages: Array<Package>;
};

export type Package = {
  name: string;
  price: number;
  description: string;
  info: any;
  avaiability: number;
};
