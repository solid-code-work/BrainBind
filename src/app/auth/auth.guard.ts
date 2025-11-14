import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = () => {
  const oidcSecurityService = inject(OidcSecurityService);
  return oidcSecurityService.isAuthenticated$.pipe(
    map(({ isAuthenticated }) => isAuthenticated)
  );
};
