import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserRequest } from '../payload/request/user-request.model';

const BASE_URL = 'http://localhost:8080/api/users';
// const BASE_URL = '/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(BASE_URL);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(BASE_URL + '/' + id);
  }

  addUser(userRequest: UserRequest): Observable<User> {
    return this.http.post<User>(BASE_URL, {
      fullName: userRequest.fullName,
      email: userRequest.email,
      password: userRequest.password,
    });
  }

  updateUser(id: number, userRequest: UserRequest): Observable<User> {
    return this.http.patch<User>(BASE_URL + '/' + id, {
      fullName: userRequest.fullName,
      email: userRequest.email,
      password: userRequest.password,
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(BASE_URL + '/' + id);
  }
}
