import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Source } from './getuser';
@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor(private http: HttpClient) {}
  getUsers(): Observable<Source> {
    return this.http
    .get<Source>('https://reqres.in/api/users?page=2')
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error:any){
    let errorMessage = '';

  if (error.error instanceof ErrorEvent) {

   // Get client-side error

   errorMessage = error.error.message;

  } else {

   // Get server-side error

   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

  }

  console.log(errorMessage);

  return throwError(errorMessage);
  }
}

