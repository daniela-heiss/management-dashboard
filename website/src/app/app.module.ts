import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Date-Picker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//App-Components
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfitChartComponent } from './profit-chart/profit-chart.component';
import { RevenueComponent } from './revenue/revenue.component';
import { RevNextYearComponent } from './rev-next-year/rev-next-year.component';
import { HighestRevCustomerComponent } from './highest-rev-customer/highest-rev-customer.component';
import { HighestOrderCustomerComponent } from './highest-order-customer/highest-order-customer.component';

const modules = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OrdersComponent,
    CustomerComponent,
    ProfitChartComponent,
    RevenueComponent,
    RevNextYearComponent,
    HighestRevCustomerComponent,
    HighestOrderCustomerComponent,
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
