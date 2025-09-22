import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class BillListService {
  constructor(private http: HttpClient) {}

  getGroupById$(id: string): Observable<any> {
    return this.http.get(environment.url + `/groups/${id}`);
  }

  createBill$(bill: any): Observable<any> {
    return this.http.post(environment.url + "/create", bill);
  }
}
