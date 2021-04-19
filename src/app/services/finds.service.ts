import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Find } from '../models/find';

@Injectable({
  providedIn: 'root'
})
export class FindsService {
  apiURL = 'https://lookwhatfound.me';

  currentUser = localStorage.getItem('currentUser');
  token = JSON.parse(this.currentUser).token;

  constructor(
    private http: HttpClient,
  ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }

  // HttpClient API get() method => Fetch All Finds list
  getAllFinds(): Observable<Find> {
    return this.http.get<Find>(this.apiURL + '/api/allartworks', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getFind(id): Observable<Find> {
    return this.http.get<Find>(this.apiURL + '/api/allartworks/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create Find
  createFind(find): Observable<Find> {
    return this.http.post<Find>(this.apiURL + '/api/allartworks/create', JSON.stringify(find), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update Find
  updateFind(id, find): Observable<Find> {
    return this.http.put<Find>(this.apiURL + '/api/allartworks/' + id, JSON.stringify(find), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Find
  deleteFind(id){
    return this.http.delete<Find>(this.apiURL + '/api/allartworks/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
