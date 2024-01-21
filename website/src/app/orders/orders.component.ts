import { Component, OnInit } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { OrdersService } from "../service/orders.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private ordersService: OrdersService;
  public orders: Observable<OrdersDTO[]>;

  constructor(ordersService: OrdersService) {

    this.ordersService = ordersService;
    this.orders = this.ordersService.listOrders();
  }
  ngOnInit(): void {
  }
}