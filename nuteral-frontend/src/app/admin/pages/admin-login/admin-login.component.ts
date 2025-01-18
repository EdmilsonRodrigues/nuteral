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
    this.getHandshakeToken();
  }

  private getHandshakeToken() {
    this.authService.getHandshakeToken().subscribe({
      next: (response) => {
        if (response.token) {
          this.handshakeToken = response.token;
        }
      },
      error: (error) => {
        this.error = 'Erro ao iniciar autenticação. Tente novamente.';
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.handshakeToken) {
      const credentials = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };

      const encryptedCredentials = this.encryptionService.encryptCredentials(
        credentials,
        this.handshakeToken
      );

      this.authService.login(encryptedCredentials).subscribe({
        error: (error) => {
          this.error = 'Credenciais inválidas';
          this.getHandshakeToken(); // Get new token after failed attempt
        }
      });
    }
  }
}
