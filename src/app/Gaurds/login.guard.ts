import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
   const loginService = inject(LoginService);
   const router = inject(Router);

   if (loginService.isLoggedIn) {
     return true;
   } else {
     router.navigate(['/loginForm']);
     return false;
   }
};
