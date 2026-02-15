import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatSelectModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="auth-page">
      <div class="auth-left">
        <div class="auth-brand">
          <img src="/NeuroGuard.png" alt="NeuroGuard Logo" class="brand-logo">
          <h2>Neuro<span class="accent">Guard</span></h2>
          <p>Join thousands of healthcare professionals</p>
        </div>
        <div class="benefits-list">
          <div class="benefit" *ngFor="let b of benefits">
            <div class="benefit-icon">
              <mat-icon>{{ b.icon }}</mat-icon>
            </div>
            <div>
              <h4>{{ b.title }}</h4>
              <p>{{ b.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <mat-card class="auth-card">
          <div class="auth-card-header">
            <h2>Create Account</h2>
            <p>Start your free 14-day trial today</p>
          </div>

          <form (ngSubmit)="onRegister()" class="auth-form">
            <mat-form-field appearance="outline">
              <mat-label>Full Name</mat-label>
              <input matInput [(ngModel)]="name" name="name"
                     placeholder="Dr. Jane Smith" required>
              <mat-icon matPrefix>person</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email Address</mat-label>
              <input matInput type="email" [(ngModel)]="email" name="email"
                     placeholder="doctor&#64;hospital.com" required>
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Role</mat-label>
              <mat-select [(ngModel)]="role" name="role" required>
                <mat-option value="doctor">Doctor / Physician</mat-option>
                <mat-option value="caregiver">Caregiver</mat-option>
                <mat-option value="admin">Facility Admin</mat-option>
                <mat-option value="patient">Patient / Family</mat-option>
              </mat-select>
              <mat-icon matPrefix>badge</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'"
                     [(ngModel)]="password" name="password"
                     placeholder="At least 8 characters" required>
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button"
                      (click)="hidePassword = !hidePassword">
                <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Confirm Password</mat-label>
              <input matInput [type]="hideConfirm ? 'password' : 'text'"
                     [(ngModel)]="confirmPassword" name="confirmPassword"
                     placeholder="Re-enter your password" required>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <button mat-icon-button matSuffix type="button"
                      (click)="hideConfirm = !hideConfirm">
                <mat-icon>{{ hideConfirm ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </mat-form-field>

            <label class="terms-check">
              <input type="checkbox" [(ngModel)]="agreedTerms" name="agreedTerms">
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>

            <button mat-raised-button class="btn-primary auth-submit" type="submit"
                    [disabled]="loading || !agreedTerms">
              <mat-spinner diameter="20" *ngIf="loading"></mat-spinner>
              <span *ngIf="!loading">Create Account</span>
            </button>

            <p class="auth-footer-text">
              Already have an account?
              <a routerLink="/login" class="auth-link">Sign in</a>
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
    }
    .auth-brand {
      text-align: center;
      color: white;
      margin-bottom: 48px;
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

    .benefits-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 360px;
    }
    .benefit {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      color: white;
      animation: fadeIn 0.6s ease-out both;
    }
    .benefit:nth-child(2) { animation-delay: 0.15s; }
    .benefit:nth-child(3) { animation-delay: 0.3s; }
    .benefit:nth-child(4) { animation-delay: 0.45s; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .benefit-icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      border-radius: 12px;
      background: rgba(255,255,255,0.12);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .benefit-icon mat-icon {
      color: var(--accent);
      font-size: 22px;
    }
    .benefit h4 {
      margin: 0 0 4px;
      font-size: 15px;
      font-weight: 600;
    }
    .benefit p {
      margin: 0;
      font-size: 13px;
      opacity: 0.7;
      line-height: 1.5;
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
      max-width: 480px;
      padding: 40px !important;
      border-radius: var(--radius-lg) !important;
      box-shadow: var(--shadow-md) !important;
    }
    .auth-card-header {
      margin-bottom: 28px;
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
    .terms-check {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 24px;
      cursor: pointer;
    }
    .terms-check a {
      color: var(--accent-dark);
      font-weight: 600;
    }
    .auth-submit {
      width: 100%;
      height: 48px;
      font-size: 15px !important;
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
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  role = '';
  hidePassword = true;
  hideConfirm = true;
  agreedTerms = false;
  loading = false;

  benefits = [
    { icon: 'speed', title: 'Quick Setup', desc: 'Get started in minutes with our intuitive onboarding process.' },
    { icon: 'lock', title: 'HIPAA Compliant', desc: 'Enterprise-grade security protecting sensitive patient data.' },
    { icon: 'support_agent', title: '24/7 Support', desc: 'Dedicated expert support whenever you need assistance.' },
    { icon: 'credit_card_off', title: 'Free for 14 Days', desc: 'Full access to all features. No credit card required.' },
  ];

  constructor(private auth: AuthService, private router: Router) { }

  onRegister(): void {
    if (!this.name || !this.email || !this.password || !this.role) return;
    if (this.password !== this.confirmPassword) return;
    this.loading = true;
    this.auth.register(this.name, this.email, this.password, this.role).subscribe({
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
