import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintsService } from '../hints.service';

@Component({
  selector: 'app-challenge-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="challenge">
      <h2>Challenge 1: Broken Button</h2>
      <p class="instructions">
        The "Add" button should increment the counter, but it doesn't work.
        <br><strong>Fix it so clicking the button increases the count.</strong>
      </p>

      <div class="demo-area">
        <button>Add</button>
        <p class="count-display">Current count: {{ count }}</p>
      </div>

      <div class="hints-section">
        <button class="hint-button" (click)="showNextHint()">
          {{ getHintButtonText() }}
        </button>

        @if (currentHintLevel > 0) {
          <div class="hint-box">
            @for (hint of getVisibleHints(); track $index) {
              <p class="hint-text">💡 {{ hint }}</p>
            }
          </div>
        }

        <p class="hint-file-link">
          Or open <code>src/app/challenge-one/HINT.md</code> to see all hints
        </p>
      </div>
    </div>
  `,
  styles: [`
    .challenge {
      padding: 20px;
    }
    h2 {
      color: #333;
      margin-bottom: 10px;
    }
    .instructions {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 15px 0;
      line-height: 1.6;
    }
    .demo-area {
      background: #f9f9f9;
      border: 2px solid #ddd;
      border-radius: 8px;
      padding: 30px;
      margin: 20px 0;
      text-align: center;
    }
    button {
      padding: 12px 30px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }
    button:hover {
      background: #0056b3;
    }
    .count-display {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin-top: 20px;
    }
    .hints-section {
      margin-top: 30px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      border: 2px dashed #ccc;
    }
    .hint-button {
      padding: 10px 20px;
      background: #ffc107;
      color: #000;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.3s;
    }
    .hint-button:hover {
      background: #e0a800;
      transform: translateY(-2px);
    }
    .hint-box {
      margin-top: 15px;
      padding: 15px;
      background: #e7f3ff;
      border-left: 4px solid #007bff;
      border-radius: 4px;
    }
    .hint-text {
      margin: 10px 0;
      font-size: 14px;
      color: #004085;
      line-height: 1.6;
    }
    .hint-file-link {
      margin-top: 15px;
      font-size: 12px;
      color: #666;
      text-align: center;
    }
    .hint-file-link code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
    }
  `]
})
export class ChallengeOneComponent {
  count = 0;
  currentHintLevel = 0;
  private hints: string[] = [];

  constructor(private hintsService: HintsService) {
    this.hints = this.hintsService.getHints('challenge-one');
  }

  showNextHint() {
    if (this.currentHintLevel < this.hints.length) {
      this.currentHintLevel++;
    }
  }

  getVisibleHints(): string[] {
    return this.hints.slice(0, this.currentHintLevel);
  }

  getHintButtonText(): string {
    if (this.currentHintLevel === 0) return '💡 Get Hint';
    if (this.currentHintLevel < this.hints.length) return '💡 Get Another Hint';
    return '💡 No More Hints';
  }

  // TODO: Add a method to increment the count.
}
