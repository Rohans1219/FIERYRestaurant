import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {

}
