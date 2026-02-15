import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="auth-page">
      <div class="auth-left">
        <div class="auth-brand">
          <img src="/NeuroGuard.png" alt="NeuroGuard Logo" class="brand-logo">
          <h2>Neuro<span class="accent">Guard</span></h2>
          <p>Intelligent Alzheimer Patient Monitoring Platform</p>
        </div>
        <div class="auth-illustration">
          <div class="floating-card fc-1">
            <mat-icon>monitor_heart</mat-icon>
            <span>Real-Time Monitoring</span>
          </div>
          <div class="floating-card fc-2">
            <mat-icon>psychology</mat-icon>
            <span>AI Analytics</span>
          </div>
          <div class="floating-card fc-3">
            <mat-icon>shield</mat-icon>
            <span>Secure & HIPAA</span>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <mat-card class="auth-card">
          <div class="auth-card-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your dashboard</p>
          </div>

          <form (ngSubmit)="onLogin()" class="auth-form">
            <mat-form-field appearance="outline">
              <mat-label>Email Address</mat-label>
              <input matInput type="email" [(ngModel)]="email" name="email"
                     placeholder="doctor&#64;alzguard.com" required>
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'"
                     [(ngModel)]="password" name="password"
                     placeholder="Enter your password" required>
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button"
                      (click)="hidePassword = !hidePassword">
                <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </mat-form-field>

            <div class="auth-extras">
              <label class="remember-me">
                <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe">
                <span>Remember me</span>
              </label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            <button mat-raised-button class="btn-primary auth-submit" type="submit"
                    [disabled]="loading">
              <mat-spinner diameter="20" *ngIf="loading"></mat-spinner>
              <span *ngIf="!loading">Sign In</span>
            </button>

            <div class="auth-divider">
              <span>or</span>
            </div>

            <button mat-stroked-button class="social-btn" type="button">
              <mat-icon>business</mat-icon>
              Continue with SSO
            </button>

            <p class="auth-footer-text">
              Don't have an account?
              <a routerLink="/register" class="auth-link">Create one now</a>
            </p>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: calc(100vh - 68px);
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .auth-left {
      background: linear-gradient(160deg, var(--primary) 0%, var(--primary-light) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px;
      position: relative;
      overflow: hidden;
    }
    .auth-brand {
      text-align: center;
      color: white;
      z-index: 1;
    }
    .brand-logo {
      height: 120px;
      width: auto;
      margin-bottom: 8px;
    }
    .auth-brand h2 {
      font-size: 32px;
      font-weight: 800;
      margin: 0 0 8px;
    }
    .accent { color: var(--accent); }
    .auth-brand p {
      opacity: 0.7;
      font-size: 15px;
    }
    .auth-illustration {
      margin-top: 48px;
      position: relative;
      z-index: 1;
    }
    .floating-card {
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 12px;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 12px;
      transition: var(--transition);
    }
    .floating-card:hover {
      background: rgba(255,255,255,0.2);
      transform: translateX(8px);
    }
    .fc-1 { animation: fadeInLeft 0.6s ease-out; }
    .fc-2 { animation: fadeInLeft 0.8s ease-out; margin-left: 32px; }
    .fc-3 { animation: fadeInLeft 1s ease-out; }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .auth-right {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 32px;
      background: var(--bg-alt);
    }
    .auth-card {
      width: 100%;
      max-width: 440px;
      padding: 40px !important;
      border-radius: var(--radius-lg) !important;
      box-shadow: var(--shadow-md) !important;
    }
    .auth-card-header {
      margin-bottom: 32px;
    }
    .auth-card-header h2 {
      font-size: 26px;
      font-weight: 800;
      color: var(--primary);
      margin: 0 0 6px;
    }
    .auth-card-header p {
      color: var(--text-muted);
      font-size: 14px;
      margin: 0;
    }
    .auth-form {
      display: flex;
      flex-direction: column;
    }
    .auth-extras {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .remember-me {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--text-secondary);
      cursor: pointer;
    }
    .forgot-link {
      font-size: 13px;
      color: var(--accent-dark);
      font-weight: 600;
    }
    .auth-submit {
      width: 100%;
      height: 48px;
      font-size: 15px !important;
    }
    .auth-divider {
      text-align: center;
      margin: 20px 0;
      position: relative;
    }
    .auth-divider::before,
    .auth-divider::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 40%;
      height: 1px;
      background: var(--border);
    }
    .auth-divider::before { left: 0; }
    .auth-divider::after { right: 0; }
    .auth-divider span {
      background: white;
      padding: 0 12px;
      font-size: 13px;
      color: var(--text-muted);
    }
    .social-btn {
      width: 100%;
      height: 44px;
      border-color: var(--border) !important;
      color: var(--text-secondary) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .auth-footer-text {
      text-align: center;
      margin-top: 24px;
      font-size: 14px;
      color: var(--text-muted);
    }
    .auth-link {
      color: var(--accent-dark);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .auth-page {
        grid-template-columns: 1fr;
      }
      .auth-left { display: none; }
      .auth-card { padding: 28px !important; }
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  hidePassword = true;
  rememberMe = false;
  loading = false;

  constructor(private auth: AuthService, private router: Router) { }

  onLogin(): void {
    if (!this.email || !this.password) return;
    this.loading = true;
    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
