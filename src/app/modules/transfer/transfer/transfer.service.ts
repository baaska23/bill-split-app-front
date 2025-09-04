import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TransferService {
  constructor(private http: HttpClient) {}

  getSend(): Observable<any> {
    return this.http.get(environment.url + '/send')
  }
}
