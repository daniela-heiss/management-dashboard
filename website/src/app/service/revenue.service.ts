import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Revenue } from '../model/revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private httpClient: HttpClient) {}

  public getRevenue(startDate: string, endDate: string): Observable<Revenue> {
    console.log('execute get rev');
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<Revenue>('http://127.0.0.1:8080/revenue', options);
  }


}
