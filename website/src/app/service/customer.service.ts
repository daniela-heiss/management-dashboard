import { Injectable } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://127.0.0.1:8080/customer';

  constructor(private httpClient: HttpClient) {}

  public listCustomers(): Observable<CustomerDTO[]> {
    console.log('execute listCustomers');
    return this.httpClient.get<CustomerDTO[]>(this.baseURL);
  }

}
