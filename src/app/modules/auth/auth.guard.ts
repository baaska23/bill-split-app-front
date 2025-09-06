import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { Observable, map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return authState(this.auth).pipe(
      take(1),
      map(user => {
        if (user) {
          console.log("Current user is: ", user);
          return true;
        } else {
          console.log("No user found, redirecting to login");
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
