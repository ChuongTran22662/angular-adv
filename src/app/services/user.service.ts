import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll1(): Observable<any> {
        return this.http.get<any[]>(`https://6421ba6934d6cd4ebd7a87e0.mockapi.io/api/todo/users`)
          .pipe(catchError(httpError => throwError(httpError)));
    }

    getAll2(): Observable<any> {
      return this.http.get<any[]>(`https://6421ba6934d6cd4ebd7a87e0.mockapi.io/api/todo/users`)
        .pipe(catchError(httpError => throwError(httpError)));
    }
}
