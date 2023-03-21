import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly APIUrl = 'http://localhost:5200';

  constructor(private http: HttpClient) { }

  login(val: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + '/api/auth/login', val);
  }
}
