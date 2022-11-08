import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginEndpoint } from 'src/app/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginAttempt(username: string, password: string) {
      return this.http.post(loginEndpoint.original, {username, password})
  }
}
