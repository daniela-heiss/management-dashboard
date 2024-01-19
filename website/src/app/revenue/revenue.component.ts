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
  public lastMonthRev: Observable<Revenue>;
  public lastYearRev: Observable<Revenue>;

  startDate: Date;
  endDate: Date;

  constructor(revenueService: RevenueService){
    this.startDate = new Date('12/11/2023');
    this.endDate = new Date('12/13/2023');

    this.revenueService = revenueService;
    this.totalRev = this.revenueService.getRevenue('2023-12-11', '2023-12-13');
    this.lastMonthRev = this.revenueService.getRevenue('2023-11-01', '2023-11-30');
    this.lastYearRev = this.revenueService.getRevenue('2022-01-31', '2022-12-31');

  }

  ngOnInit() {}


  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    if (dateRangeStart.value != "" && dateRangeEnd.value != ""){
      let lastYearDates: string[] = this.subtractYear(dateRangeStart.value, dateRangeEnd.value);
      let lastMonthDates: string[] = this.subtractMonth(dateRangeStart.value, dateRangeEnd.value);
  
      const dateStart = new Date(dateRangeStart.value);
      const dateEnd = new Date(dateRangeEnd.value);
  
      
      this.totalRev = this.revenueService.getRevenue(this.dateToString(dateStart), this.dateToString(dateEnd));
      this.lastYearRev = this.revenueService.getRevenue(lastYearDates[0], lastYearDates[1]);
      this.lastMonthRev = this.revenueService.getRevenue(lastMonthDates[0], lastMonthDates[1]);
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
    lastYearEnd.setDate(31);
    lastYearEnd.setMonth(11);

    dates[0] = this.dateToString(lastYearStart);
    dates[1] = this.dateToString(lastYearEnd);

    return dates;
  }

  subtractMonth(dateRangeStart: string, dateRangeEnd: string){

    let dates: string[] = []
    const dateStart = new Date(dateRangeStart);
    const dateEnd = new Date(dateRangeEnd);
    const lastDayOfMonth = new Date();

    dateStart.setMonth(dateStart.getMonth() -1);
    dateStart.setDate(1);
 
    dateEnd.setMonth(dateStart.getMonth());

    lastDayOfMonth.setMonth(dateEnd.getMonth() + 1);
    lastDayOfMonth.setDate(0);

    dateEnd.setDate(lastDayOfMonth.getDate());
   
    dates[0] = this.dateToString(dateStart);
    dates[1] = this.dateToString(dateEnd);

    return dates;
  }

  dateToString(date: Date){
    date.setUTCHours(date.getUTCHours() + 2);

    const year = date.toISOString().slice(0, 4);
    const month = date.toISOString().slice(5, 7);
    const day = date.toISOString().slice(8, 10);

    const dateString = `${year}-${month}-${day}`;

    return dateString;
  }
}