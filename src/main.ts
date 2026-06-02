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
      <h1>Angular Interview Challenges</h1>
      <nav>
        <button (click)="currentChallenge = 1" [class.active]="currentChallenge === 1">
          Challenge 1: Basics
        </button>
        <button (click)="currentChallenge = 2" [class.active]="currentChallenge === 2">
          Challenge 2: RxJS Search
        </button>
        <button (click)="currentChallenge = 3" [class.active]="currentChallenge === 3">
          Challenge 3: Reactive Forms
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
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      border-bottom: 3px solid #007bff;
      padding-bottom: 10px;
    }
    nav {
      margin: 20px 0;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    nav button {
      padding: 10px 20px;
      background: #f0f0f0;
      border: 2px solid #ccc;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      transition: all 0.3s;
    }
    nav button:hover {
      background: #e0e0e0;
    }
    nav button.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
    }
    .challenge-container {
      margin-top: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class App {
  currentChallenge = 1;
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
