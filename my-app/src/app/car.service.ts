import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from '@angular/core/src/console';
import { MOTORSHOWS } from 'src/app/mock-motor-show';
import { MotorShow } from 'src/app/models/motor-show';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carServiceUrl = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars';
  private carServiceMockUrl = 'api/motorShows';
    constructor( private http: HttpClient) { }

  // Returns mock API response.
  getCars(): Observable<MotorShow[]> {
    return of(MOTORSHOWS);
  }

  /* //utilize angular-in-memory-web-api => mock data service.
    getCars(): Observable<MotorShow[]> {
    return this.http.get<MotorShow[]>(this.carServiceMockUrl);
  } */

  /*
    //Return the response from real API.
    getCars(): Observable<MotorShow[]> {
     return this.http.get<MotorShow[]>(this.carServiceUrl).pipe(
       catchError(this.handleError('getMotorShows', []))
   );
  } */

 /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // tslint:disable-next-line:no-console
    console.info(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
