import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule],
    template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #sidenav
        [mode]="isMobile ? 'over' : 'side'"
        [opened]="auth.isLoggedIn && !isMobile"
        class="sidenav"
        *ngIf="auth.isLoggedIn">
        <div class="sidenav-header">
          <div class="user-avatar">
            <mat-icon class="avatar-icon">person</mat-icon>
          </div>
          <p class="user-name">{{ auth.currentUser?.name }}</p>
          <p class="user-role">{{ auth.currentUser?.role | titlecase }}</p>
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/" routerLinkActive="active-link"
             [routerLinkActiveOptions]="{exact: true}" (click)="closeMobile()">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/" (click)="closeMobile()">
            <mat-icon matListItemIcon>people</mat-icon>
            <span matListItemTitle>Patients</span>
          </a>
          <a mat-list-item routerLink="/" (click)="closeMobile()">
            <mat-icon matListItemIcon>monitor_heart</mat-icon>
            <span matListItemTitle>Monitoring</span>
          </a>
          <a mat-list-item routerLink="/" (click)="closeMobile()">
            <mat-icon matListItemIcon>calendar_month</mat-icon>
            <span matListItemTitle>Appointments</span>
          </a>
          <a mat-list-item routerLink="/" (click)="closeMobile()">
            <mat-icon matListItemIcon>analytics</mat-icon>
            <span matListItemTitle>Reports</span>
          </a>
          <a mat-list-item routerLink="/" (click)="closeMobile()">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content class="main-content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
    styles: [`
    .sidenav-container {
      flex: 1;
    }
    .sidenav {
      width: 260px;
      background: var(--bg);
      border-right: 1px solid var(--border);
    }
    .sidenav-header {
      padding: 24px 20px;
      text-align: center;
      border-bottom: 1px solid var(--border);
      background: linear-gradient(135deg, rgba(26,31,87,0.03) 0%, rgba(113,174,254,0.06) 100%);
    }
    .user-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
    }
    .avatar-icon {
      color: white;
      font-size: 28px;
    }
    .user-name {
      font-weight: 600;
      color: var(--primary);
      margin: 0;
      font-size: 14px;
    }
    .user-role {
      color: var(--text-muted);
      font-size: 12px;
      margin: 4px 0 0;
    }
    .active-link {
      background: rgba(113,174,254,0.1) !important;
      color: var(--primary) !important;
    }
    .main-content {
      min-height: calc(100vh - 68px);
      display: flex;
      flex-direction: column;
    }
  `]
})
export class SidenavComponent {
    @ViewChild('sidenav') sidenav!: MatSidenav;
    isMobile = false;

    constructor(
        public auth: AuthService,
        private breakpointObserver: BreakpointObserver
    ) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.isMobile = result.matches;
        });
    }

    toggle(): void {
        this.sidenav?.toggle();
    }

    closeMobile(): void {
        if (this.isMobile) {
            this.sidenav?.close();
        }
    }
}
