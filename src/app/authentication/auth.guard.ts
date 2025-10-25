import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log('authGuard executed, isLoggedIn:', auth.isLoggedInUser());

  if (auth.isLoggedInUser()) {
    return true; // Allow access if logged in
  } else {
    router.navigate(['/login']); // Redirect to login page
    return false; // Block access
  }
};
