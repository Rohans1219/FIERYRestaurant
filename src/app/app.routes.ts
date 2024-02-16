import { Routes } from '@angular/router';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{path:'orders',component: ViewOrdersComponent},
{path:'orders/:id',component:ViewOrderInfoComponent},
{path:'payments',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'placeorder',component:PlaceOrderComponent},
{path:'',redirectTo:'/home',pathMatch:'full'}

];
