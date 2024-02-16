import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,ViewOrderInfoComponent,ViewOrdersComponent,PlaceOrderComponent,HttpClientModule,ViewOrderInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}
