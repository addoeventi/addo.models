export class EventGroup{
    public fk_group: string;
    public status: "pending" | "active"
    public limits: any = {
        list: -1,
        table: -1,
        dinner: -1,
        presale: -1
    };
}