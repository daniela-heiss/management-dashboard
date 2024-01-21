import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { CustomerService } from "../service/customer.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  private customerService: CustomerService;
  public customers: Observable<CustomerDTO[]>;

  constructor(customerService: CustomerService) {

    this.customerService = customerService;
    this.customers = this.customerService.listCustomers();
  }

  ngOnInit() {}
}
