import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Revenue } from '../model/revenue';
import { RevenueYear } from '../model/revenueYear';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private httpClient: HttpClient) {}

  public getRevenue(startDate: string, endDate: string): Observable<Revenue[]> {
    const options = {params: new HttpParams().set('startDate', startDate).set('endDate', endDate)};
    return this.httpClient.get<Revenue[]>('http://localhost:8080/orders/revenue', options);
  }

  public getExpectedRevenue(year: string): Observable<Revenue[]> {
    const options = {params: new HttpParams().set('year', year)};
    return this.httpClient.get<Revenue[]>('http://localhost:8080/orders/expected', options);
  }

  public getRevenueYear(year: string): Observable<RevenueYear> {
    const options = {params: new HttpParams().set('year', year)};
    return this.httpClient.get<RevenueYear>('http://localhost:8080/orders/getYearRev', options);
  }
}
