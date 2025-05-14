import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn$.pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return true;
        }
        // non autenticato: redirect a login con returnUrl
        return this.router.createUrlTree(['/login'], {
          queryParams: { returnUrl: state.url },
        });
      })
    );
  }
}
