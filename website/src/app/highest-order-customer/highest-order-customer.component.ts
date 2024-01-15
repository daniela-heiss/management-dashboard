import { Component } from '@angular/core';

@Component({
  selector: 'app-highest-order-customer',
  templateUrl: './highest-order-customer.component.html',
  styleUrl: './highest-order-customer.component.scss'
})
export class HighestOrderCustomerComponent {
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      console.log(dateRangeStart.value);
      console.log(dateRangeEnd.value);
    }
  }
}
