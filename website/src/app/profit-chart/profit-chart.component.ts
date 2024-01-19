import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { RevenueYear } from "../model/revenueYear";
import { RevenueService } from "../service/revenue.service";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'app-profit-chart',
  templateUrl: './profit-chart.component.html',
  styleUrl: './profit-chart.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class ProfitChartComponent implements OnInit{
  date = new FormControl(moment('2023-01-01'));
  chart: any;
  maxDate: Date;
  minDate: Date;
  data: string;
  private revenueService: RevenueService;
  public yearRev: Observable<RevenueYear>
  /*public janRev: Observable<Revenue>;
  public febRev: Observable<Revenue>;
  public marRev: Observable<Revenue>;
  public aprRev: Observable<Revenue>;
  public mayRev: Observable<Revenue>;
  public junRev: Observable<Revenue>;
  public julRev: Observable<Revenue>;
  public augRev: Observable<Revenue>;
  public sepRev: Observable<Revenue>;
  public octRev: Observable<Revenue>;
  public novRev: Observable<Revenue>;
  public decRev: Observable<Revenue>;*/

  constructor(revenueService: RevenueService){
    this.maxDate = new Date('2023-12-31');
    this.minDate = new Date('2022-01-01')

    this.revenueService = revenueService;
    this.yearRev = this.revenueService.getRevenueYear('2023');
    this.yearRev = this.revenueService.getRevenueYear('2023').subscribe((data) => {
      this.data = data;
    /*this.janRev = this.revenueService.getRevenue('2023-01-01', '2023-01-31');
    this.febRev = this.revenueService.getRevenue('2023-02-01', '2023-02-28');
    this.marRev = this.revenueService.getRevenue('2023-03-01', '2023-03-31');
    this.aprRev = this.revenueService.getRevenue('2023-04-01', '2023-04-30');
    this.mayRev = this.revenueService.getRevenue('2023-05-01', '2023-05-31');
    this.junRev = this.revenueService.getRevenue('2023-06-01', '2023-06-30');
    this.julRev = this.revenueService.getRevenue('2023-07-01', '2023-07-31');
    this.augRev = this.revenueService.getRevenue('2023-08-01', '2023-08-31');
    this.sepRev = this.revenueService.getRevenue('2023-09-01', '2023-09-30');
    this.octRev = this.revenueService.getRevenue('2023-10-01', '2023-10-31');
    this.novRev = this.revenueService.getRevenue('2023-11-01', '2023-11-30');
    this.decRev = this.revenueService.getRevenue('2023-12-01', '2023-12-31');*/
  }

  ngOnInit() {
    const newDate = this.date.value?.toDate() as Date
    this.generateChart(newDate);
    
  }

  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.date.value;
    ctrlValue?.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    dp.close();
    console.log(this.date.value);

    const newDate = this.date.value?.toDate() as Date;
    console.log(newDate);
  }


  generateChart(date: Date) {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Total Revenue',
        data: [1000, 1500, 1200, 1700, 1600, 2000, 3000, 2500, 2100, 2300, 2500, 300],
        borderColor: 'green',
        fill: false
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    this.chart = new Chart('profitChart', {
      type: 'line',
      data: data,
      options: options
    });
  }

  updateChart(date: Date) {
    if (this.chart) {
      this.chart.data.datasets[0].data = [1000, 1500, 1200, 1700, 1600, 2000, 3000, 2500, 2100, 2300];
      this.chart.update();
    }
  }

}




