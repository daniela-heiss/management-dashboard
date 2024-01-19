import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { Revenue } from "../model/revenue";
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
  selector: 'app-rev-next-year',
  templateUrl: './rev-next-year.component.html',
  styleUrl: './rev-next-year.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class RevNextYearComponent implements OnInit{
  date = new FormControl(moment('2024-01-01'));
  private revenueService: RevenueService;
  public expectedRev: Observable<Revenue>;
  minDate = new Date('2024-01-01');

  constructor(revenueService: RevenueService){
    this.revenueService = revenueService;
    this.expectedRev = this.revenueService.getExpectedRevenue('2024');
    this.minDate = new Date('2024-01-01');
  }

 ngOnInit(): void {
   
 }



  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.date.value;
    ctrlValue?.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    dp.close();

    const newDate = this.date.value?.toDate() as Date;
    this.expectedRev = this.revenueService.getExpectedRevenue(this.dateToYear(newDate));
  }

  dateToString(date: Date){
    date.setUTCHours(date.getUTCHours() + 2);

    const year = date.toISOString().slice(0, 4);
    const month = date.toISOString().slice(5, 7);
    const day = date.toISOString().slice(8, 10);

    const dateString = `${year}-${month}-${day}`;

    return dateString;
  }

  dateToYear(date: Date){
    date.setUTCHours(date.getUTCHours() + 2);

    const year = date.toISOString().slice(0, 4);

    const yearString = `${year}`;

    return yearString;
  }
}