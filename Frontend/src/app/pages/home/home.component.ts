import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-circle c1"></div>
        <div class="hero-circle c2"></div>
        <div class="hero-circle c3"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="material-icons">verified</span>
            Trusted by 500+ Healthcare Providers
          </div>
          <h1>Intelligent <span class="gradient-text">NeuroGuard</span><br>Patient Security and Monitoring</h1>
          <p class="hero-subtitle">
            Empower caregivers with real-time cognitive health tracking,
            smart alerts, and the NeuroGuard Safety Bracelet for maximum patient security.
          </p>
          <div class="hero-actions">
            <a mat-raised-button class="btn-primary hero-btn" routerLink="/register">
              Start Free Trial
              <span class="material-icons">arrow_forward</span>
            </a>
            <a mat-button class="btn-outline hero-btn" routerLink="/">
              <span class="material-icons">play_circle</span>
              Watch Demo
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10K+</span>
              <span class="stat-label">Patients Monitored</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Care Satisfaction</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Smart Alerts</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="dashboard-preview">
            <div class="preview-header">
              <div class="preview-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="preview-title">Patient Dashboard</span>
            </div>
            <div class="preview-body">
              <div class="preview-card pc-1">
                <mat-icon>favorite</mat-icon>
                <div>
                  <span class="pc-label">Heart Rate</span>
                  <span class="pc-value">72 bpm</span>
                </div>
              </div>
              <div class="preview-card pc-2">
                <mat-icon>psychology</mat-icon>
                <div>
                  <span class="pc-label">Cognitive Score</span>
                  <span class="pc-value">85/100</span>
                </div>
              </div>
              <div class="preview-card pc-3">
                <mat-icon>directions_walk</mat-icon>
                <div>
                  <span class="pc-label">Activity Level</span>
                  <span class="pc-value">Active</span>
                </div>
              </div>
              <div class="preview-chart">
                <span class="chart-title">Weekly Cognitive Trend</span>
                <div class="chart-bars">
                  <div class="bar" *ngFor="let h of barHeights" [style.height.%]="h"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Why NeuroGuard</span>
          <h2>Everything You Need for<br><span class="gradient-text">Patient Care Excellence</span></h2>
          <p class="section-desc">Our platform combines medical expertise with cutting-edge technology
            to deliver comprehensive Alzheimer patient monitoring.</p>
        </div>
        <div class="features-grid">
          <mat-card *ngFor="let f of features" class="feature-card card-elevated">
            <div class="feature-icon-wrap" [style.background]="f.bg">
              <mat-icon [style.color]="f.color">{{ f.icon }}</mat-icon>
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Bracelet Section -->
    <section class="section bracelet">
      <div class="container bracelet-container">
        <div class="bracelet-visual">
          <img src="/bracelet.jpg" alt="NeuroGuard Safety Bracelet" class="bracelet-image">
        </div>
        <div class="bracelet-content">
          <span class="section-tag">Advanced Hardware</span>
          <h2>Intelligent <span class="gradient-text">Safety Bracelet</span></h2>
          <p>The NeuroGuard Bracelet is a state-of-the-art wearable designed specifically for Alzheimer patients. It detects falls, monitors wandering, and identifies potential dangers to ensure maximum patient security 24/7.</p>
          <div class="bracelet-perks">
            <div class="perk">
              <mat-icon>notification_important</mat-icon>
              <span>Instant Fall Detection</span>
            </div>
            <div class="perk">
              <mat-icon>gps_fixed</mat-icon>
              <span>Smart Safe-Zones</span>
            </div>
            <div class="perk">
              <mat-icon>emergency</mat-icon>
              <span>SOS Alert Button</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section how-it-works">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">How It Works</span>
          <h2>Simple Steps to <span class="gradient-text">Better Care</span></h2>
        </div>
        <div class="steps-grid">
          <div class="step" *ngFor="let s of steps; let i = index">
            <div class="step-number">{{ i + 1 }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials / Trust Section -->
    <section class="section trust">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Trusted By Professionals</span>
          <h2>What <span class="gradient-text">Caregivers Say</span></h2>
        </div>
        <div class="testimonials-grid">
          <mat-card *ngFor="let t of testimonials" class="testimonial-card card-elevated">
            <div class="testimonial-header">
              <div class="testimonial-avatar" [style.background]="t.avatarColor">
                {{ t.initials }}
              </div>
              <div>
                <p class="testimonial-name">{{ t.name }}</p>
                <p class="testimonial-role">{{ t.role }}</p>
              </div>
            </div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <div class="testimonial-stars">
              <mat-icon *ngFor="let s of [1,2,3,4,5]">star</mat-icon>
            </div>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to Transform Patient Care?</h2>
          <p>Join thousands of healthcare providers using NeuroGuard to deliver better patient security and care.</p>
          <div class="cta-actions">
            <a mat-raised-button class="btn-accent hero-btn" routerLink="/register">
              Get Started Free
              <span class="material-icons">arrow_forward</span>
            </a>
            <a mat-button class="btn-outline cta-outline" routerLink="/">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ── Hero ── */
    .hero {
      position: relative;
      min-height: 92vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(160deg, #f8f9ff 0%, #eef3ff 50%, #f0f6ff 100%);
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .hero-circle {
      position: absolute;
      border-radius: 50%;
      opacity: 0.12;
    }
    .c1 {
      width: 600px; height: 600px;
      background: var(--accent);
      top: -200px; right: -100px;
      animation: float 8s ease-in-out infinite;
    }
    .c2 {
      width: 400px; height: 400px;
      background: var(--primary);
      bottom: -100px; left: -80px;
      animation: float 10s ease-in-out infinite reverse;
    }
    .c3 {
      width: 200px; height: 200px;
      background: var(--accent);
      top: 40%; left: 40%;
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      position: relative;
      z-index: 1;
      padding-top: 80px;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(113,174,254,0.1);
      color: var(--primary);
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    .hero-badge .material-icons {
      font-size: 16px;
      color: var(--accent);
    }
    .hero h1 {
      font-size: 52px;
      font-weight: 800;
      line-height: 1.1;
      color: var(--primary);
      margin: 0 0 20px;
      letter-spacing: -1px;
    }
    .hero-subtitle {
      font-size: 17px;
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 500px;
      margin-bottom: 32px;
    }
    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .hero-btn {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
    }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: 48px;
      padding-top: 32px;
      border-top: 1px solid var(--border);
    }
    .stat-number {
      display: block;
      font-size: 28px;
      font-weight: 800;
      color: var(--primary);
    }
    .stat-label {
      font-size: 13px;
      color: var(--text-muted);
    }
    .stat-divider {
      width: 1px;
      height: 40px;
      background: var(--border);
    }

    /* Dashboard Preview */
    .hero-visual {
      display: flex;
      justify-content: center;
    }
    .dashboard-preview {
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      overflow: hidden;
      width: 420px;
      border: 1px solid var(--border);
      animation: slideUp 0.8s ease-out;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .preview-header {
      background: var(--primary);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .preview-dots {
      display: flex;
      gap: 6px;
    }
    .preview-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .preview-dots span:nth-child(1) { background: #ff6b6b; }
    .preview-dots span:nth-child(2) { background: #ffd93d; }
    .preview-dots span:nth-child(3) { background: #6bcb77; }
    .preview-title {
      color: rgba(255,255,255,0.8);
      font-size: 13px;
      font-weight: 500;
    }
    .preview-body {
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
    .preview-card {
      padding: 14px;
      border-radius: var(--radius-sm);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .pc-1 {
      background: rgba(235,87,87,0.08);
      mat-icon { color: #EB5757; }
    }
    .pc-2 {
      background: rgba(113,174,254,0.1);
      mat-icon { color: var(--accent); }
    }
    .pc-3 {
      background: rgba(39,174,96,0.08);
      mat-icon { color: #27AE60; }
    }
    .pc-label {
      display: block;
      font-size: 11px;
      color: var(--text-muted);
    }
    .pc-value {
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: var(--primary);
    }
    .preview-chart {
      grid-column: 1 / -1;
      padding: 16px;
      background: var(--bg-alt);
      border-radius: var(--radius-sm);
    }
    .chart-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
      margin-bottom: 12px;
      display: block;
    }
    .chart-bars {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      height: 60px;
    }
    .bar {
      flex: 1;
      background: linear-gradient(to top, var(--primary), var(--accent));
      border-radius: 4px 4px 0 0;
      min-height: 8px;
      transition: height 0.6s ease;
    }

    /* ── Features ── */
    .features {
      background: white;
    }
    .section-header {
      margin-bottom: 56px;
    }
    .section-tag {
      display: inline-block;
      background: rgba(113,174,254,0.1);
      color: var(--accent-dark);
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .section-header h2 {
      font-size: 38px;
      font-weight: 800;
      color: var(--primary);
      margin: 0 0 16px;
      letter-spacing: -0.5px;
    }
    .section-desc {
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 560px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
    }
    .feature-card {
      padding: 32px !important;
      text-align: center;
      cursor: default;
    }
    .feature-icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }
    .feature-icon-wrap mat-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
    }
    .feature-card h3 {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary);
      margin: 0 0 10px;
    }
    .feature-card p {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    /* ── How It Works ── */
    .how-it-works {
      background: var(--bg-alt);
    }
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 32px;
      counter-reset: steps;
    }
    .step {
      text-align: center;
      padding: 32px 20px;
    }
    .step-number {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: white;
      font-size: 22px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }
    .step h3 {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary);
      margin: 0 0 10px;
    }
    .step p {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    /* ── Testimonials ── */
    .trust { background: white; }
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    .testimonial-card {
      padding: 28px !important;
    }
    .testimonial-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 16px;
    }
    .testimonial-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 16px;
    }
    .testimonial-name {
      font-weight: 700;
      color: var(--primary);
      margin: 0;
      font-size: 15px;
    }
    .testimonial-role {
      color: var(--text-muted);
      font-size: 13px;
      margin: 2px 0 0;
    }
    .testimonial-text {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.7;
      font-style: italic;
      margin: 0 0 12px;
    }
    .testimonial-stars mat-icon {
      color: #F2994A;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    /* ── CTA ── */
    .cta {
      background: var(--bg-alt);
    }
    .cta-card {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
      border-radius: var(--radius-xl);
      padding: 64px;
      text-align: center;
      color: white;
    }
    .cta-card h2 {
      font-size: 36px;
      font-weight: 800;
      margin: 0 0 16px;
    }
    .cta-card p {
      font-size: 16px;
      opacity: 0.8;
      margin: 0 0 32px;
    }
    .cta-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .cta-outline {
      border-color: white !important;
      color: white !important;
      &:hover {
        background: white !important;
        color: var(--primary) !important;
      }
    }

    /* ── Bracelet Section ── */
    .bracelet {
      background: white;
      padding: 100px 0;
    }
    .bracelet-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }
    .bracelet-visual {
      display: flex;
      justify-content: center;
      position: relative;
    }
    .bracelet-image {
      width: 100%;
      max-width: 800px;
      max-height: 600px;
      object-fit: contain;
      height: auto;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.02);
      }
    }
    .bracelet-content h2 {
      font-size: 38px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 24px;
    }
    .bracelet-content p {
      font-size: 16px;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 32px;
    }
    .bracelet-perks {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .perk {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      color: var(--primary);
    }
    .perk mat-icon {
      color: var(--accent);
    }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }
      .hero h1 { font-size: 36px; }
      .hero-subtitle { margin: 0 auto 32px; }
      .hero-actions { justify-content: center; }
      .hero-stats { justify-content: center; }
      .dashboard-preview { width: 100%; max-width: 380px; }
      .section-header h2 { font-size: 28px; }
      .cta-card { padding: 40px 24px; }
      .cta-card h2 { font-size: 26px; }
    }
  `]
})
export class HomeComponent {
  barHeights = [45, 60, 35, 75, 55, 85, 70];

  features = [
    {
      icon: 'monitor_heart',
      title: 'Real-Time Monitoring',
      desc: 'Track vital signs, cognitive patterns, and behavioral changes with continuous, non-invasive monitoring.',
      bg: 'rgba(235,87,87,0.08)',
      color: '#EB5757'
    },
    {
      icon: 'psychology',
      title: 'Cognitive Assessment',
      desc: 'AI-powered cognitive scoring system that tracks mental acuity trends over time with clinical precision.',
      bg: 'rgba(113,174,254,0.1)',
      color: '#71AEFE'
    },
    {
      icon: 'notifications_active',
      title: 'Smart Alerts',
      desc: 'Intelligent notification system that alerts caregivers to unusual patterns or potential emergencies.',
      bg: 'rgba(242,153,74,0.1)',
      color: '#F2994A'
    },
    {
      icon: 'analytics',
      title: 'Advanced Analytics',
      desc: 'Detailed reports and trend analysis to help healthcare providers make informed treatment decisions.',
      bg: 'rgba(39,174,96,0.08)',
      color: '#27AE60'
    },
    {
      icon: 'location_on',
      title: 'Location Tracking',
      desc: 'GPS-enabled safe zones with instant alerts when patients wander beyond designated boundaries.',
      bg: 'rgba(155,89,182,0.08)',
      color: '#9B59B6'
    },
    {
      icon: 'groups',
      title: 'Care Team Collaboration',
      desc: 'Seamless communication between doctors, caregivers, and family members in a unified platform.',
      bg: 'rgba(26,31,87,0.06)',
      color: '#1A1F57'
    },
  ];

  steps = [
    { title: 'Create Account', desc: 'Sign up as a caregiver, doctor, or family member in just a few clicks.' },
    { title: 'Add Patients', desc: 'Register patients and configure monitoring parameters and safe zones.' },
    { title: 'Monitor & Track', desc: 'Access real-time dashboards, receive smart alerts, and track cognitive trends.' },
    { title: 'Improve Care', desc: 'Use AI-driven insights and reports to optimize treatment plans and outcomes.' },
  ];

  testimonials = [
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Neurologist, Mayo Clinic',
      text: 'NeuroGuard has revolutionized how we monitor our patients. The cognitive trend analysis and bracelet integration are incredibly powerful.',
      initials: 'ER',
      avatarColor: 'linear-gradient(135deg, #1A1F57, #71AEFE)'
    },
    {
      name: 'Michael Thompson',
      role: 'Family Caregiver',
      text: 'The peace of mind this platform gives me is priceless. I can check on my mother\'s well-being anytime, anywhere.',
      initials: 'MT',
      avatarColor: 'linear-gradient(135deg, #27AE60, #6bcb77)'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Care Home Director',
      text: 'Since implementing NeuroGuard, our response times to patient needs have improved by 60%. It\'s an essential tool for patient security.',
      initials: 'SM',
      avatarColor: 'linear-gradient(135deg, #F2994A, #f2c94c)'
    },
  ];
}
