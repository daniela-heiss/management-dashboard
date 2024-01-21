import { Injectable } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public listCustomers(): Observable<CustomerDTO[]> {
    return this.httpClient.get<CustomerDTO[]>('http://localhost:8080/customer');
  }

  public getHighestRevCustomer(startDate: string, endDate: string): Observable<CustomerDTO[]> {
    const options = { params: new HttpParams().set('startDate', startDate).set('endDate', endDate) };
    return this.httpClient.get<CustomerDTO[]>('http://localhost:8080/customer/highest', options);
  }

  public getHighestOrdersCustomer(startDate: string, endDate: string): Observable<CustomerDTO[]> {
    const options = { params: new HttpParams().set('startDate', startDate).set('endDate', endDate) };
    return this.httpClient.get<CustomerDTO[]>('http://localhost:8080/customer/most', options);
  }
}
