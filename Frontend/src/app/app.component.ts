import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidenavComponent, FooterComponent],
  template: `
    <div class="app-shell">
      <app-navbar></app-navbar>
      <main class="app-main">
        <app-sidenav></app-sidenav>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .app-main {
      flex: 1;
      margin-top: 68px;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.checkAuth();
  }
}
