import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar class="navbar">
      <div class="navbar-inner">
        <a routerLink="/" class="logo">
          <img src="/logo.png" alt="NeuroGuard Logo" class="logo-img">
        </a>

        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/login" routerLinkActive="active" *ngIf="!auth.isLoggedIn">Login</a>
          <a routerLink="/register" routerLinkActive="active" *ngIf="!auth.isLoggedIn">Register</a>
          <button mat-button class="btn-accent nav-cta" routerLink="/register" *ngIf="!auth.isLoggedIn">
            Get Started
          </button>
          <button mat-button *ngIf="auth.isLoggedIn" (click)="auth.logout()" class="logout-btn">
            <mat-icon>logout</mat-icon> Logout
          </button>
        </nav>

        <button mat-icon-button class="hamburger" (click)="toggleMenu()">
          <mat-icon>{{ menuOpen ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="mobile-menu" [class.open]="menuOpen">
        <a routerLink="/" (click)="menuOpen = false" routerLinkActive="active"
           [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/login" (click)="menuOpen = false" routerLinkActive="active"
           *ngIf="!auth.isLoggedIn">Login</a>
        <a routerLink="/register" (click)="menuOpen = false" routerLinkActive="active"
           *ngIf="!auth.isLoggedIn">Register</a>
        <button mat-raised-button class="btn-accent mobile-cta" routerLink="/register"
                (click)="menuOpen = false" *ngIf="!auth.isLoggedIn">Get Started</button>
        <button mat-button *ngIf="auth.isLoggedIn" (click)="auth.logout(); menuOpen = false"
                class="logout-btn">
          <mat-icon>logout</mat-icon> Logout
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      padding: 0;
      height: auto;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 1px 12px rgba(26,31,87,0.04);
    }
    .navbar-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      width: 100%;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    .logo-img {
      height: 200px;
      width: auto;
      display: block;
    }
    .logo-text {
      font-size: 22px;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -0.5px;
    }
    .logo-accent {
      color: var(--accent);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nav-links a {
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      color: var(--text-secondary);
      transition: var(--transition);
      text-decoration: none;
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary);
      background: rgba(113,174,254,0.08);
    }
    .nav-cta {
      margin-left: 8px !important;
      border-radius: 8px !important;
      font-size: 13px !important;
    }
    .logout-btn {
      color: var(--text-secondary) !important;
    }
    .hamburger {
      display: none;
      color: var(--primary);
    }
    .mobile-menu {
      display: none;
      flex-direction: column;
      padding: 8px 24px 20px;
      gap: 4px;
    }
    .mobile-menu.open {
      display: flex;
    }
    .mobile-menu a {
      padding: 12px 16px;
      border-radius: 8px;
      font-weight: 500;
      color: var(--text-secondary);
      transition: var(--transition);
    }
    .mobile-menu a:hover,
    .mobile-menu a.active {
      color: var(--primary);
      background: rgba(113,174,254,0.08);
    }
    .mobile-cta {
      margin-top: 8px;
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: inline-flex; }
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;

  constructor(public auth: AuthService) { }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
