import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loadAdminGuard: CanMatchFn = () => {
  const router = inject(Router);

  const role = typeof window !== 'undefined'
    ? window.localStorage.getItem('role')
    : null;

  return role === 'ADMIN' ? true : false;
};
