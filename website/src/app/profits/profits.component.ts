import { Component } from '@angular/core';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrl: './profits.component.scss'
})
export class ProfitsComponent {
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      console.log(dateRangeStart.value);
      console.log(dateRangeEnd.value);
    }
  }
}
