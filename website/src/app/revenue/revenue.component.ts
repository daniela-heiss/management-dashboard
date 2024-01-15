import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent {
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      console.log(dateRangeStart.value);
      console.log(dateRangeEnd.value);
    }
  }
}