import { Item } from "./item";

export interface Order{
    orderNo:number;
    contactName:string;
    orderDate:string;
    itemsOrdered:number;
    orderTotal:number;
    taxTotal:number;
    grandTotal:number;
    item: Item[];
}