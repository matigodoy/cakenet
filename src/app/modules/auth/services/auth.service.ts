import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  async login(username: string, password: string) {
    // hardcorded login promise
    this.loading$.next(true);
    const loginPromise = new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        resolve({ username: 'admin', token: '123456', role: 'admin' });
        this.loading$.next(false);
      } else if (username === 'user' && password === 'user') {
        resolve({ username: 'user', token: '123456', role: 'user' });
        this.loading$.next(false);
      } else {
        reject('Invalid credentials');
        this.loading$.next(false);
      }
    });
    return loginPromise;
  }

  async getUserRole(): Promise<string> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || 'user';
  }

  async isAdmin() {
    return (await this.getUserRole()) === 'admin';
  }
}
