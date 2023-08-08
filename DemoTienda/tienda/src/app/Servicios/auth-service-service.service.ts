import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente, Login } from "../interface/cliente";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceServiceService {
  isAuthenticated: boolean = false;
  private userSubject!: BehaviorSubject<Cliente>;
  public user!: Observable<Cliente>;
  cookies: any;

  

  constructor(
    private router: Router,
    private http: HttpClient
) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
}

public get userValue() {
    return this.userSubject.value;
}
login(login:Login) {
  return this.http.post<Cliente>(`${environment.UrlApi}Login/loginCliente`, login)
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          if(user.clienteId>0)
          this.isAuthenticated=true;
          this.userSubject.next(user);
          return user;
      }));
}
  login0(login:Login) {
    const params = new HttpParams()
    .set('usuario', login.user)
    .set('password', login.pwd)
     return this.http.post<Cliente>(`${environment.UrlApi}Login/loginCliente`, login)
         .pipe(map(user => {
                   
             this.isAuthenticated=true;
 
             localStorage.setItem('user', JSON.stringify(user));
             this.userSubject.next(user);
             return user;
         }));
 }
 
 setToken(token: String) {
  this.cookies.set("token", token);
  console.log(this.cookies);
}
getToken() {
  return this.cookies.get("token");
} 

getTuser() {
  return this.cookies.get("user");
} 
  }