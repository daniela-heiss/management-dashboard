import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { RevenueYear } from "../model/revenueYear";
import { RevenueService } from "../service/revenue.service";
import { Subscription } from "rxjs";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
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

export class ProfitChartComponent implements OnInit {
  date = new FormControl(moment('2023-01-01'));
  chart: any;
  maxDate: Date;
  minDate: Date;

  private revenueService: RevenueService;
  private subscription: Subscription;

  yearTotalRev: RevenueYear = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0
  };

  constructor(revenueService: RevenueService) {
    this.maxDate = new Date('2023-12-31');
    this.minDate = new Date('2015-01-01')

    this.revenueService = revenueService;

    this.subscription = this.revenueService.getRevenueYear('2023').subscribe((data: RevenueYear) => {
      this.yearTotalRev = data;
      this.generateChart();
    });
  }

  async ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.date.value;
    ctrlValue?.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    dp.close();

    const dateString = this.date.value?.format('YYYY');
    this.subscription = this.revenueService.getRevenueYear(String(dateString)).subscribe((data: RevenueYear) => {
      this.yearTotalRev = data;
      this.updateChart();
    });
  }

  generateChart() {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Total Revenue',
        data: [
        this.yearTotalRev.January,
        this.yearTotalRev.February,
        this.yearTotalRev.March,
        this.yearTotalRev.April,
        this.yearTotalRev.May,
        this.yearTotalRev.June,
        this.yearTotalRev.July,
        this.yearTotalRev.August,
        this.yearTotalRev.September,
        this.yearTotalRev.October,
        this.yearTotalRev.November,
        this.yearTotalRev.December],
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
          beginAtZero: false
        }
      }
    };

    this.chart = new Chart('profitChart', {
      type: 'line',
      data: data,
      options: options
    });
  }

  updateChart() {
    if (this.chart) {

      this.chart.data.datasets[0].data = [
        this.yearTotalRev.January,
        this.yearTotalRev.February,
        this.yearTotalRev.March,
        this.yearTotalRev.April,
        this.yearTotalRev.May,
        this.yearTotalRev.June,
        this.yearTotalRev.July,
        this.yearTotalRev.August,
        this.yearTotalRev.September,
        this.yearTotalRev.October,
        this.yearTotalRev.November,
        this.yearTotalRev.December];
      this.chart.update();
    }
  }
}




