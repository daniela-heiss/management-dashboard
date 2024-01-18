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
  date = new FormControl(moment());
  dateValue: Date;
  private revenueService: RevenueService;
  public expectedRev: Observable<Revenue>;

  constructor(revenueService: RevenueService){
    this.revenueService = revenueService;
    this.expectedRev = this.revenueService.getExpectedRevenue('2024');
    this.dateValue = new Date('2023.01.01');
    //this.customerOne = this.customers.pipe(first())
  }

 ngOnInit(): void {
   
 }



  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.date.value;
    ctrlValue?.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    dp.close();
    console.log(this.date.value, ctrlValue);
  }

  onYearChange(date: HTMLInputElement){
    if (date.value != ""){

      const newDate = new Date(date.value);

      this.expectedRev = this.revenueService.getExpectedRevenue(this.dateToString(newDate));
    }
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
  /*dateRangeChange(selectedDate: HTMLInputElement){
    console.log(selectedDate.value);
    //HTML ADD: #selectedDate (dateChange)="dateRangeChange(selectedDate)"
  }*/
}

/*export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
    providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { 
     provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    },
   ]
})

export class MainFormComponent implements OnInit {

    @ViewChild('picker', { static: false })
    private picker!: MatDatepicker<Date>;  

    chosenYearHandler(ev, input){
      let { _d } = ev;
      this.selectYear = _d;
      this.picker.close()
    }
}*/