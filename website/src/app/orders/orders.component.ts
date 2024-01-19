import { Component, OnInit } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { OrdersService } from "../service/orders.service";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private ordersService: OrdersService;
  public orders: Observable<OrdersDTO[]>;
  public errorMessage: string;

  constructor(ordersService: OrdersService){

    this.ordersService = ordersService;
    this.orders = this.ordersService.listOrders();
    this.errorMessage='';
  }
  ngOnInit(): void {
}
}