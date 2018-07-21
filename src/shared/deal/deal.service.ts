import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

import { Deal } from '../../shared/deal/deal.model';


@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/deals');
  }

  public deleteDeal(deal) {
    return this.http.delete('http://localhost:8080/api/deals' + "/"+ deal.id);
  }

  public createDeal(deal) {
    return this.http.post<Deal>('http://localhost:8080/api/deals', deal);
  }
}
