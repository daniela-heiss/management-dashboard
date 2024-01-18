import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { CustomerService } from "../service/customer.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-highest-rev-customer',
  templateUrl: './highest-rev-customer.component.html',
  styleUrl: './highest-rev-customer.component.scss'
})
export class HighestRevCustomerComponent implements OnInit {
  //public customer: CustomerDTO;
  private customerService: CustomerService;
  public customers: Observable<CustomerDTO[]>;
  //public customerOne: Observable<CustomerDTO>;

  startDate: Date;
  endDate: Date;

  constructor(customerService: CustomerService){
    this.customerService = customerService;
    this.customers = this.customerService.getHighestRevCustomer('2023-12-11', '2023-12-13');
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
