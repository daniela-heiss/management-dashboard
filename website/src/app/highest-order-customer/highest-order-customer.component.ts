import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { CustomerService } from "../service/customer.service";
import { Observable } from "rxjs";
import { dateToString } from '../utility/functions';

@Component({
  selector: 'app-highest-order-customer',
  templateUrl: './highest-order-customer.component.html',
  styleUrl: './highest-order-customer.component.scss'
})
export class HighestOrderCustomerComponent implements OnInit {

  private customerService: CustomerService;
  public customers: Observable<CustomerDTO[]>;

  startDate: Date;
  endDate: Date;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
    this.customers = this.customerService.getHighestOrdersCustomer('2023-12-11', '2023-12-13');

    this.startDate = new Date('12/11/2023');
    this.endDate = new Date('12/13/2023');
  }

  ngOnInit(): void {

  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    if (dateRangeStart.value != "" && dateRangeEnd.value != "") {
      const dateStart = new Date(dateRangeStart.value);
      const dateEnd = new Date(dateRangeEnd.value);

      this.customers = this.customerService.getHighestOrdersCustomer(dateToString(dateStart), dateToString(dateEnd));
    }
  }
}
