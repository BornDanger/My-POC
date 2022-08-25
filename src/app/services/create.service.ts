import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { create, Users } from './getuser';
@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private httpServer = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getCreatedUsers(): Observable<create>{
    return this.http.get<create>(this.httpServer).pipe(catchError(this.errorHandler))
  }
  createUser(data:create){
    return this.http.post<create>(this.httpServer,data)
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
