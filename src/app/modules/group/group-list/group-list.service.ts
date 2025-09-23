import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {bufferToggle, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class GroupListService {
  constructor(private http: HttpClient) {}

  getGroups$(): Observable<any>{
    return this.http.get(environment.url + '/groups');
  }

  createGroup$(group: any): Observable<any> {
    return this.http.post(environment.url + "/create-group", group);
  }
}
