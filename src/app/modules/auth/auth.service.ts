import {Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

export interface User {
  email:string;
  password: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private auth: Auth,
    private http: HttpClient,
  ) {}

  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(async result => {
      const idToken = await result.user.getIdToken();
      console.log("IdToken in signup in authService: ", idToken);
      return this.http.post(
        environment.url + '/users',
        { username: result.user.displayName, email: result.user.email },
        { headers: { Authorization: `Bearer ${idToken}` } }
      ).toPromise();
    });
  }

  logout() {
    return signOut(this.auth);
  }

  userExist(email: string): Observable<any> {
    return this.http.get<boolean>(`${environment.url}/users/isExist?email=${encodeURIComponent(email)}`)
  }
}
