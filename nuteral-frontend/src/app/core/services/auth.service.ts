import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(environment.bypassAdmin);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    // Set initial authentication state based on bypass setting
    this.isAuthenticatedSubject.next(environment.bypassAdmin);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    if (environment.bypassAdmin) {
      // Mock successful login in development
      return of({ success: true, token: 'mock-token' }).pipe(
        tap(() => {
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('token', 'mock-token');
        })
      );
    }

    // Real login logic for production
    return this.http.get<any>(`${environment.apiUrl}/api/auth/login`, {
      params: { credentials: btoa(JSON.stringify(credentials)) }
    }).pipe(
      tap(response => {
        this.isAuthenticatedSubject.next(true);
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): Observable<any> {
    if (environment.bypassAdmin) {
      // Mock logout in development
      return of({ success: true }).pipe(
        tap(() => {
          this.isAuthenticatedSubject.next(false);
          localStorage.removeItem('token');
        })
      );
    }

    // Real logout logic for production
    return this.http.get(`${environment.apiUrl}/api/auth/logout`).pipe(
      tap(() => {
        this.isAuthenticatedSubject.next(false);
        localStorage.removeItem('token');
      })
    );
  }

  getHandshake(): Observable<any> {
    if (environment.bypassAdmin) {
      // Mock handshake in development
      return of({ token: 'mock-handshake-token' });
    }

    // Real handshake logic for production
    return this.http.get(`${environment.apiUrl}/api/auth/handshake`);
  }

  isAuthenticated(): boolean {
    if (environment.bypassAdmin) {
      return true;
    }
    
    // Real authentication check for production
    return this.isAuthenticatedSubject.value;
  }

  getToken(): string | null {
    if (environment.bypassAdmin) {
      return 'mock-token';
    }
    
    // Real token retrieval for production
    return localStorage.getItem('token');
  }
}
