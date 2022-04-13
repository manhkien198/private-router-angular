import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormValue } from './model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private router: Router) {}
  public logout(): void {
    console.log('logout');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  public submit(value: FormValue): void {
    if (value.username === 'kienpm' && value.password === 'kienpm') {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
