import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:9000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,confirmPassword: string, roles:any[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      confirmPassword,
      roles
    }, httpOptions);
  }

  verifyUser(confirmationCode){
    return this.http.get(AUTH_API + 'verifyuser/'+confirmationCode, httpOptions );
  }

  logout() {
    sessionStorage.removeItem('auth-user');
    sessionStorage.removeItem('auth-token');
  }

  isLoggedIn() {
    if (sessionStorage.getItem('auth-user') && sessionStorage.getItem('auth-token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(sessionStorage.getItem('auth-token'));
    return currentUser.token;
  }
}
