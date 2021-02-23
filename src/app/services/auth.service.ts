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

  redirectUrl: string;

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
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-token');
  }

  isLoggedIn() {
    if (localStorage.getItem('auth-user') && localStorage.getItem('auth-token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('auth-token'));
    return currentUser.token;
  }

  recoverPassword(email: string){
    return this.http.post(AUTH_API + 'recover', {
      email : email
    }, httpOptions);
  }

  resetPassword(password : string, confirmPassword: string,token:string){
    return this.http.post(AUTH_API + `reset/${token}`, {
      password: password,
      confirmPassword : confirmPassword,
      token : token
    }, httpOptions);
  }
}
