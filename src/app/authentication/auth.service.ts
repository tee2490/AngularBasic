import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly IS_LOGGED_IN_KEY = 'isLoggedIn';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (this.isBrowser() && localStorage.getItem(this.IS_LOGGED_IN_KEY) === null) {
      localStorage.setItem(this.IS_LOGGED_IN_KEY, 'false');
    }
  }

  login(email: string, password: string): boolean {
    if (!this.isBrowser()) return false;
    if (email && password) {
      localStorage.setItem(this.IS_LOGGED_IN_KEY, 'true');
      console.log('Login successful, isLoggedIn:', this.isLoggedInUser());
      return true;
    }
    console.log('Login failed');
    return false;
  }

  isLoggedInUser(): boolean {
    if (!this.isBrowser()) return false;
    const isLoggedIn = localStorage.getItem(this.IS_LOGGED_IN_KEY) === 'true';
    console.log('isLoggedInUser called, isLoggedIn:', isLoggedIn);
    return isLoggedIn;
  }

  logout(): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(this.IS_LOGGED_IN_KEY, 'false');
    console.log('User logged out');
  }

  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
