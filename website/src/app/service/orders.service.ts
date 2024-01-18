import { Injectable } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) {}

  public listOrders(): Observable<OrdersDTO[]> {
    console.log('execute listOrders');
    return this.httpClient.get<OrdersDTO[]>('http://localhost:8080/orders')
  }

  public getHighestRevCustomer(startDate: string, endDate: string): Observable<OrdersDTO[]> {
    console.log('execute get highest rev customer');
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<OrdersDTO[]>('http://localhost:8080/customer_highest', options);
  }

  public getHighestOrdersCustomer(startDate: string, endDate: string): Observable<OrdersDTO[]> {
    console.log('execute get highest rev customer');
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<OrdersDTO[]>('http://localhost:8080/orders/most', options);
  }
}
