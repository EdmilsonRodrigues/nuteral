import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface AuthResponse {
  token?: string;
  redirect?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check authentication status on service initialization
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    // You might want to make an API call to verify the session
    this.http.get<AuthResponse>(`${environment.apiUrl}/api/auth/status`)
      .pipe(
        catchError((error) => {
          this.isAuthenticatedSubject.next(false);
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.isAuthenticatedSubject.next(true);
      });
  }

  getHandshakeToken(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(
      `${environment.apiUrl}/api/auth/handshake`,
      { withCredentials: true }
    ).pipe(
      catchError(this.handleError)
    );
  }

  login(encryptedCredentials: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(
      `${environment.apiUrl}/api/auth/login`,
      {
        params: { credentials: encryptedCredentials },
        withCredentials: true
      }
    ).pipe(
      tap(response => {
        this.isAuthenticatedSubject.next(true);
        if (response.redirect) {
          this.router.navigate([response.redirect]);
        }
      }),
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/api/auth/logout`,
      { withCredentials: true }
    ).pipe(
      tap(() => {
        this.isAuthenticatedSubject.next(false);
        this.router.navigate(['/admin/login']);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // Redirect to login on unauthorized
      this.router.navigate(['/admin/login']);
    }
    return throwError(() => error);
  }
}
