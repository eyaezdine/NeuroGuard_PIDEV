import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/logo.png" alt="NeuroGuard Logo" class="footer-logo-img">
            </div>
            <p class="footer-desc">
              Empowering caregivers with intelligent patient safety monitoring and the NeuroGuard Bracelet danger detection system.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Platform</h4>
            <a routerLink="/">Home</a>
            <a routerLink="/">Features</a>
            <a routerLink="/">Pricing</a>
            <a routerLink="/">About</a>
          </div>

          <!-- Resources -->
          <div class="footer-col">
            <h4>Resources</h4>
            <a routerLink="/">Documentation</a>
            <a routerLink="/">Blog</a>
            <a routerLink="/">Support</a>
            <a routerLink="/">Privacy Policy</a>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello&#64;neuroguard.com">hello&#64;neuroguard.com</a>
            <a href="tel:+21652456789">+216 52 456 789</a>
            <div class="social-icons">
              <a href="#" aria-label="Twitter"><span class="material-icons">group</span></a>
              <a href="#" aria-label="LinkedIn"><span class="material-icons">work</span></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} NeuroGuard. All rights reserved.</p>
          <p class="footer-legal">Building a safer world for patients with cognitive challenges.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--primary);
      color: rgba(255,255,255,0.8);
      padding: 64px 0 0;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 48px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 16px;
    }
    .footer-logo-img {
      height: 150px;
      width: auto;
      display: block;
    }
    .logo-text {
      font-size: 20px;
      font-weight: 800;
      color: white;
    }
    .accent { color: var(--accent); }
    .footer-desc {
      font-size: 14px;
      line-height: 1.6;
      opacity: 0.7;
    }
    .footer-col h4 {
      color: white;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .footer-col a {
      display: block;
      color: rgba(255,255,255,0.65);
      font-size: 14px;
      padding: 6px 0;
      transition: var(--transition);
    }
    .footer-col a:hover {
      color: var(--accent);
      transform: translateX(4px);
    }
    .social-icons {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    .social-icons a {
      display: inline-flex;
      padding: 0;
    }
    .social-icons .material-icons {
      font-size: 20px;
    }
    .footer-bottom {
      padding: 24px 0;
      text-align: center;
      font-size: 13px;
      opacity: 0.6;
    }
    .footer-legal {
      margin-top: 4px;
      font-size: 12px;
    }
    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
    }
    @media (max-width: 480px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
