import { Component, OnInit } from '@angular/core';
import { Revenue } from "../model/revenue";
import { RevenueService } from "../service/revenue.service";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent implements OnInit {

  private revenueService: RevenueService;
  public totalRev: Observable<Revenue>;
  //public lastMonthRev: Observable<Revenue>;
  //public lastYearRev: Observable<Revenue>;

  startDate: Date;
  endDate: Date;
  //public errorMessage: string;

  constructor(revenueService: RevenueService){
    this.startDate = new Date('2023-12-11');
    this.endDate = new Date('2023-12-12');

    this.revenueService = revenueService;
    this.totalRev = this.revenueService.getRevenue('2023-12-11', '2023-12-13');
    //this.lastMonthRev = this.revenueService.getRevenue();
    //this.lastYearRev = this.revenueService.getRevenue();

  }

  ngOnInit() {
    /*console.dir(this.customers);
    this.customerService.listCustomers()
    .subscribe(
      res => console.log(res)
    );*/
  }


  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      //let lastYearDates: string[] = this.subtractYear(dateRangeStart.value, dateRangeEnd.value);
      /*const lastMonthDate = new Date();
      lastYearDate.setMonth(lastYearDate.getMonth() -1);*/
      const dateStart = new Date(dateRangeStart.value);
      const dateEnd = new Date(dateRangeEnd.value);

      console.log(dateRangeStart.value, dateRangeEnd.value);
      
      this.totalRev = this.revenueService.getRevenue(this.dateToString(dateStart), this.dateToString(dateEnd));
      //this.lastMonthRev = this.revenueService.getRevenue();
      //this.lastYearRev = this.revenueService.getRevenue(lastYearDates[0], lastYearDates[1]);
    }
  }

  subtractYear(dateRangeStart: string, dateRangeEnd: string){

    let dates: string[] = []
    const dateStart = new Date(dateRangeStart);
    const dateEnd = new Date(dateRangeEnd);

    const lastYearStart = new Date();
    const lastYearEnd = new Date();

    lastYearStart.setFullYear(dateStart.getFullYear() -1);
    lastYearStart.setDate(1);
    lastYearStart.setMonth(0);

    lastYearEnd.setFullYear(dateEnd.getFullYear() -1);
    lastYearStart.setDate(31);
    lastYearStart.setMonth(11);

    dates[0] = this.dateToString(lastYearStart);
    dates[1] = this.dateToString(lastYearEnd);

    return dates;
  }

  subtractMonth(dateRangeStart: string, dateRangeEnd: string){

    let dates: string[] = []
    const dateStart = new Date(dateRangeStart);
    const dateEnd = new Date(dateRangeEnd);

    const lastMonthStart = new Date();
    const lastMonthEnd = new Date();
    const lastDayOfMonth = new Date();

    lastMonthStart.setMonth(dateStart.getMonth() -1);
    lastMonthStart.setDate(1);

    if (dateEnd.getMonth() > lastMonthStart.getMonth()){
      lastMonthEnd.setMonth(dateEnd.getMonth() -1);
      lastDayOfMonth.setMonth(lastMonthEnd.getMonth() + 1);
      lastDayOfMonth.setDate(0);
      lastMonthEnd.setDate(lastDayOfMonth.getDate());
    /*  switch (lastMonthEnd.getMonth()){
        case 0:
          lastMonthEnd.setDate(31);
          break;
        case 1:
          lastMonthEnd.setDate(28);
          break;
        case 2:
          lastMonthEnd.setDate(31);
          break;
        case 3:
          lastMonthEnd.setDate(30);
          break;
        case 4:
          lastMonthEnd.setDate(31);
          break;
        case 5:
          lastMonthEnd.setDate(30);
          break;
        case 6:
          lastMonthEnd.setDate(31);
          break;
        case 7:
          lastMonthEnd.setDate(30);
          break;
        case 8:
          lastMonthEnd.setDate(31);
          break;
        case 9:
          lastMonthEnd.setDate(30);
          break;
        case 10:
          lastMonthEnd.setDate(30);
          break;
        case 11:
          lastMonthEnd.setDate(31);
          break;
      }*/
    }

    /*const lastMonthDate = new Date();
      lastYearDate.setMonth(lastYearDate.getMonth() -1);*/

    /*lastMonthStart.setFullYear(dateStart.getFullYear() -1);
    lastMonthEnd.setDate(1);
    lastYearStart.setMonth(0);

    lastYearEnd.setFullYear(dateEnd.getFullYear() -1);
    lastYearStart.setDate(31);
    lastYearStart.setMonth(11);

    dates[0] = this.dateToString(lastYearStart);
    dates[1] = this.dateToString(lastYearEnd);

    return dates;*/
  }

  dateToString(date: Date){
    const year = date.toISOString().slice(0, 4);
    const month = date.toISOString().slice(5, 7);
    const day = date.toISOString().slice(8, 10);
    const dateString = `${year}-${month}-${day}`;

    return dateString;
  }

  changeFormat(date: string){
    const day = date.slice(7, 10);
    const month = date.slice(4, 5);
    const year = date.slice(0, 4);
    
    const dateString = `${year}-${month}-${day}`;

    return dateString;
  }
}