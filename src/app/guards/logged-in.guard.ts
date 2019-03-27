import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUser } from '../authentication/store/authentication.reducer';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(
        private store: Store<any>,
        private router: Router,
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
        return this.store.select(selectUser)
            .pipe(
                map(userState => userState.isLoggedIn),
                map(isLoggedIn => {
                    if (isLoggedIn) {
                        return true;
                    } else {
                        return this.router.parseUrl('login?redirect=' + state.url);
                    }
                })
            );
    }
}
