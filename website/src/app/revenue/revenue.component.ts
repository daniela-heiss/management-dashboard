import { Component, OnInit } from '@angular/core';
import { Revenue } from "../model/revenue";
import { RevenueService } from "../service/revenue.service";
import { Observable } from "rxjs";
import { dateToString } from '../utility/functions';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent implements OnInit {

  private revenueService: RevenueService;
  public totalRev: Observable<Revenue[]>;
  public lastMonthRev: Observable<Revenue[]>;
  public lastYearRev: Observable<Revenue[]>;

  startDate: Date;
  endDate: Date;
  monthStartDate: Date;
  monthEndDate: Date;
  yearStartDate: Date;
  yearEndDate: Date;

  constructor(revenueService: RevenueService) {
    this.startDate = new Date('2023-12-11');
    this.endDate = new Date('2023-12-13');
    this.monthStartDate = new Date('2023-11-01');
    this.monthEndDate = new Date('2023-11-30');
    this.yearStartDate = new Date('2022-01-01');
    this.yearEndDate = new Date('2022-12-31');

    this.revenueService = revenueService;
    this.totalRev = this.revenueService.getRevenue(dateToString(this.startDate), dateToString(this.endDate));
    this.lastMonthRev = this.revenueService.getRevenue(dateToString(this.monthStartDate), dateToString(this.monthEndDate));
    this.lastYearRev = this.revenueService.getRevenue(dateToString(this.yearStartDate), dateToString(this.yearEndDate));
  }

  ngOnInit() { }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    if (dateRangeStart.value != "" && dateRangeEnd.value != "") {
      let lastYearDates: string[] = this.subtractYear(dateRangeStart.value, dateRangeEnd.value);
      let lastMonthDates: string[] = this.subtractMonth(dateRangeStart.value, dateRangeEnd.value);

      const dateStart = new Date(dateRangeStart.value);
      const dateEnd = new Date(dateRangeEnd.value);

      this.monthStartDate = new Date(lastMonthDates[0]);
      this.monthEndDate = new Date(lastMonthDates[1]);
      this.yearStartDate = new Date(lastYearDates[0]);
      this.yearEndDate = new Date(lastYearDates[1]);

      this.totalRev = this.revenueService.getRevenue(dateToString(dateStart), dateToString(dateEnd));
      this.lastYearRev = this.revenueService.getRevenue(lastYearDates[0], lastYearDates[1]);
      this.lastMonthRev = this.revenueService.getRevenue(lastMonthDates[0], lastMonthDates[1]);
    }
  }

  subtractYear(dateRangeStart: string, dateRangeEnd: string) {

    let dates: string[] = []
    const dateStart = new Date(dateRangeStart);
    const dateEnd = new Date(dateRangeEnd);

    const lastYearStart = new Date();
    const lastYearEnd = new Date();

    lastYearStart.setFullYear(dateStart.getFullYear() - 1);
    lastYearStart.setDate(1);
    lastYearStart.setMonth(0);

    lastYearEnd.setFullYear(dateEnd.getFullYear() - 1);
    lastYearEnd.setDate(31);
    lastYearEnd.setMonth(11);

    dates[0] = dateToString(lastYearStart);
    dates[1] = dateToString(lastYearEnd);

    return dates;
  }

  subtractMonth(dateRangeStart: string, dateRangeEnd: string) {

    let dates: string[] = []
    const dateStart = new Date(dateRangeStart);
    const dateEnd = new Date(dateRangeEnd);
    const lastDayOfMonth = new Date();

    dateStart.setMonth(dateStart.getMonth() - 1);
    dateStart.setDate(1);

    dateEnd.setDate(26);  
    dateEnd.setMonth(dateStart.getMonth());

    lastDayOfMonth.setFullYear(dateEnd.getFullYear());  
    lastDayOfMonth.setMonth(dateEnd.getMonth() + 1);
    lastDayOfMonth.setDate(0);

    dateEnd.setDate(lastDayOfMonth.getDate());

    dates[0] = dateToString(dateStart);
    dates[1] = dateToString(dateEnd);

    return dates;
  }
}