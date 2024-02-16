import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private uRL="http://localhost:3000/orders";

  constructor(private  http:HttpClient) { }

  
   getOrders():Observable<Order[]>{

    return this.http.get<Order[]>(this.uRL)
   }

      // this.ord= this.http.get<Order[]>(this.uRL).pipe(map(ordersdata=>ordersdata.map(order=> ({
      //   orderno: order.orderNo,
      //   name:order.contactName,
      //   date:order.orderDate,
      //   itemscount:order.itemsOrdered,
      //   total:order.orderTotal,
      //   taxtot:order.taxTotal,
      //   finaltotal:order.grandTotal,
      //   items: order.item.map((items: { itemNo: any; name: any; quantity: any; price: any; itemValue: any }) =>({

      //     itemno:items.itemNo,
      //     name:items.name,
      //     quantity:items.quantity,
      //     price:items.price,
      //     itemvalue:items.itemValue
}
