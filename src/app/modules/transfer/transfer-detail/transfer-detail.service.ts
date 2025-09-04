import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TransferDetailService {
  constructor(private http: HttpClient) {}

  getTransferDetails(): Observable<any> {
    return this.http.get(environment.url + '/transfer-details')
  }
}
