import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  /** Mock login: accetta qualsiasi credenziale */
  login(username: string, password: string): Observable<boolean> {
    // qui potresti aggiungere logica di validazione
    this.loggedInSubject.next(true);
    return of(true);
  }

  logout(): void {
    this.loggedInSubject.next(false);
  }
}
