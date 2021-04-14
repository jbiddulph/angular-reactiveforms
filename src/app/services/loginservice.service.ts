import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`https://lookwhatfound.me/api/auth/login`, { email, password, withCredentials: true })
        .pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            this.router.navigate(['/]']);
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  getProfile(): Observable<any> {

    const currentUser = localStorage.getItem('currentUser');
    const token = JSON.parse(currentUser).token;

    const httpHeaders = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer '+token
      })
    }

    return this.http.get<any>("https://lookwhatfound.me/api/auth/profile", httpHeaders)
      .pipe(map(profile => {
        console.log('profile: ',profile)
        return profile;
      }))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
