import { Injectable } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) {}

  public listCustomers(): Observable<CustomerDTO[]> {
    console.log('execute listCustomers');
    return this.httpClient.get<CustomerDTO[]>(this.baseURL);
  }

  public getHighestRevCustomer(startDate: string, endDate: string): Observable<CustomerDTO[]> {
    console.log('execute get highest rev customer');
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<CustomerDTO[]>('http://localhost:8080/customer_highest', options);
  }

  public getHighestOrdersCustomer(startDate: string, endDate: string): Observable<CustomerDTO[]> {
    console.log('execute get highest rev customer');
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<CustomerDTO[]>('http://localhost:8080/orders/most', options);
  }
}
