import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninResponse } from '../payload/response/signin-response.model';
import { SignupResponse } from '../payload/response/signup-response.model';

const BASE_URL = 'http://localhost:8080/api/auth';
// const BASE_URL = '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<SigninResponse> {
    return this.http.post<SigninResponse>(
      BASE_URL + '/signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    fullName: string,
    email: string,
    password: string
  ): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(
      BASE_URL + '/signup',
      {
        fullName,
        email,
        password,
      },
      httpOptions
    );
  }
}
