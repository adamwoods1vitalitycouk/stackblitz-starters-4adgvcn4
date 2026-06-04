import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChallengeOneComponent } from './app/challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './app/challenge-two/challenge-two.component';
import { ChallengeThreeComponent } from './app/challenge-three/challenge-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChallengeOneComponent, ChallengeTwoComponent, ChallengeThreeComponent],
  template: `
    <div class="container">
      <header>
        <h1>Angular Technical Assessment</h1>
        <p class="subtitle">Fix the bugs in each challenge to demonstrate your Angular skills. All bugs are contained within the folder 'app > challenge-*'.</p>
      </header>

      <nav>
        <button (click)="currentChallenge = 1" [class.active]="currentChallenge === 1">
          <span class="number">1</span>
          <span class="label">Broken Button</span>
        </button>
        <button (click)="currentChallenge = 2" [class.active]="currentChallenge === 2">
          <span class="number">2</span>
          <span class="label">Missing Form Field</span>
        </button>
        <button (click)="currentChallenge = 3" [class.active]="currentChallenge === 3">
          <span class="number">3</span>
          <span class="label">Broken Toggle</span>
        </button>
      </nav>

      <div class="challenge-container">
        @if (currentChallenge === 1) {
          <app-challenge-one />
        }
        @if (currentChallenge === 2) {
          <app-challenge-two />
        }
        @if (currentChallenge === 3) {
          <app-challenge-three />
        }
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    header {
      background: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    h1 {
      color: #333;
      margin: 0;
      font-size: 32px;
    }
    .subtitle {
      margin: 10px 0 0 0;
      color: #666;
      font-size: 16px;
    }
    nav {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    nav button {
      flex: 1;
      min-width: 150px;
      padding: 15px 20px;
      background: white;
      border: 2px solid #ddd;
      cursor: pointer;
      border-radius: 8px;
      font-size: 14px;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    nav button:hover {
      border-color: #007bff;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,123,255,0.2);
    }
    nav button.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
      box-shadow: 0 4px 12px rgba(0,123,255,0.3);
    }
    .number {
      background: rgba(0,0,0,0.1);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
    }
    nav button.active .number {
      background: rgba(255,255,255,0.2);
    }
    .label {
      font-weight: 600;
    }
    .challenge-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      min-height: 400px;
    }
  `]
})
export class App {
  currentChallenge = 1;
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
