import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { EncryptionService } from '../../../core/services/encryption.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  private handshakeToken: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private encryptionService: EncryptionService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Get handshake token first
      this.authService.getHandshake().subscribe({
        next: (response: { token: string }) => {
          this.handshakeToken = response.token;
          this.encryptAndLogin();
        },
        error: (error: any) => {
          this.error = 'Failed to get handshake token';
          console.error('Handshake error:', error);
        }
      });
    }
  }

  private encryptAndLogin() {
    const credentials = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };

    // Encrypt credentials using handshake token
    const encryptedCredentials = this.encryptionService.encryptCredentials(credentials, this.handshakeToken);

    // Login with encrypted credentials
    this.authService.login({ username: credentials.username, password: encryptedCredentials }).subscribe({
      error: (error) => {
        this.error = 'Credenciais inválidas';
        this.authService.getHandshake().subscribe({
          next: (response) => {
            this.handshakeToken = response.token;
          },
          error: (error) => {
            this.error = 'Erro ao iniciar autenticação. Tente novamente.';
          }
        });
      }
    });
  }
}
