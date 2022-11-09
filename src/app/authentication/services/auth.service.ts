import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginEndpoint } from 'src/app/endpoints/endpoints';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userStorageKey = 'user';

  authenticated = false;
  authUser: User | null = null;

  constructor(private http: HttpClient) { 
    this.getUserFromStorage();
  }

  loginAttempt(username: string, password: string) {
      return this.http.post(loginEndpoint.original, {username, password})
  }

  userAuthenticated(user: User) {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));

    this.authUser = user;
    this.authenticated = true;
  }

  getUserFromStorage() {
    const user = localStorage.getItem(this.userStorageKey);
    if(user) {
      this.authUser = JSON.parse(user);
      this.authenticated = true;
    }
  }

  clearAuthStorage() {
    localStorage.removeItem(this.userStorageKey);
  }
}
