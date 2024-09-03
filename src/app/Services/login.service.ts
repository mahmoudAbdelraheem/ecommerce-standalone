import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../Models/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl = `${environment.baseUrl}/users`;
  userData: Iuser = {} as Iuser;
  isUserLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router:Router) {
    this.isUserLoggedIn = new BehaviorSubject<boolean>(this.isLoggedIn);
  }

  login() {
    let isLogin = false;
    this._startLogin(this.userData).subscribe({
      next(user) {
        isLogin = true;
        localStorage.setItem('token', user.id);
      },
      error(err) {
        isLogin = false;
      },
    });
    if (isLogin) {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/loginForm']);
  }

  get isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  get userLoginObservable() {
    return this.isUserLoggedIn.asObservable();
  }

  _startLogin(userData: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(this.loginUrl, userData);
  }
}
