import { Component, OnInit } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { OrdersService } from "../service/orders.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-highest-order-customer',
  templateUrl: './highest-order-customer.component.html',
  styleUrl: './highest-order-customer.component.scss'
})
export class HighestOrderCustomerComponent implements OnInit {

  private orderService: OrdersService;
  public customers: Observable<OrdersDTO[]>;
  //public customerOne: Observable<CustomerDTO>;

  startDate: Date;
  endDate: Date;

  constructor(ordersService: OrdersService){
    this.orderService = ordersService;
    this.customers = this.orderService.getHighestOrdersCustomer('2023-12-11', '2023-12-13');
    //this.customerOne = this.customers.pipe(first());

    this.startDate = new Date('12/11/2023');
    this.endDate = new Date('12/13/2023');
  }

  ngOnInit(): void {
   
  }




  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      console.log(dateRangeStart.value);
      console.log(dateRangeEnd.value);
    }
  }
}
