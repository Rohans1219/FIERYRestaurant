import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [NgFor,RouterOutlet,RouterLink],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

orders:Order[]=[]
  constructor(private orderservice:OrderService,private http:HttpClient){  }

  ngOnInit():void{
    this.getOrders();
    
  }

  getOrders():void{
    this.orderservice.getOrders().subscribe((orders)=>this.orders=orders)
    console.log()

    
  }
}
