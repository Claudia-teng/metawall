import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, SignupUser, LoginUser } from "src/app/model";

@Injectable({ providedIn: 'root' })

export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  public signup(signupUser: SignupUser): Observable<User> {
    return this.http.post<User>(`https://metawall-api.herokuapp.com/users/signup`, signupUser);
  }

  public login(loginUser: LoginUser): Observable<User> {
    return this.http.post<User>(`https://metawall-api.herokuapp.com/users/login`, loginUser);
  }

  public isAuthenticated() {
    const token: string | null = localStorage.getItem('jwt');
    if (!token) return false;
    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);
    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}