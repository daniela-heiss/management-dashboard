import { Injectable } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) {}

  public listOrders(): Observable<OrdersDTO[]> {
    console.log('execute listOrders');
    return this.httpClient.get<OrdersDTO[]>('http://127.0.0.1:8080/orders')
  }
}
