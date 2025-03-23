import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

// Create the CanActivateFn for AdminGuard
export const adminGuard: CanActivateFn = () => {
  const router = inject(Router); // Inject the router service
  const role = localStorage.getItem('user_role');

  if (role !== 'admin') {
    router.navigate(['/user/tickets']);
    return false;
  }

  return true;
};
