import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IClient } from "./client";


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private dataUrl = 'api/data.json';

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.dataUrl).pipe(
      //  tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
