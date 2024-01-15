import { Component } from '@angular/core';

@Component({
  selector: 'app-highest-rev-customer',
  templateUrl: './highest-rev-customer.component.html',
  styleUrl: './highest-rev-customer.component.scss'
})
export class HighestRevCustomerComponent {
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      console.log(dateRangeStart.value);
      console.log(dateRangeEnd.value);
    }
  }
}
