import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintsService } from '../hints.service';

@Component({
  selector: 'app-challenge-three',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="challenge">
      <h2>Challenge 3: Broken Toggle</h2>
      <p class="instructions">
        The "Toggle Message" button should show and hide the message, but it only shows it.
        <br><strong>Fix it so the button toggles the message on and off.</strong>
      </p>

      <div class="demo-area">
        <button (click)="toggle()">Toggle Message</button>

        <div *ngIf="isVisible" class="message-box">
          <p>🎉 Hello World!</p>
        </div>

        <div class="status">
          Message is currently: <strong>{{ isVisible ? 'VISIBLE' : 'HIDDEN' }}</strong>
        </div>
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
          Or open <code>src/app/challenge-three/HINT.md</code> to see all hints
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
      background: #6f42c1;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }
    button:hover {
      background: #5a32a3;
    }
    .message-box {
      margin-top: 20px;
      padding: 20px;
      background: #d4edda;
      border: 2px solid #28a745;
      border-radius: 8px;
      animation: slideIn 0.3s ease;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .message-box p {
      margin: 0;
      font-size: 20px;
      color: #155724;
    }
    .status {
      margin-top: 20px;
      padding: 10px;
      background: white;
      border-radius: 4px;
      font-size: 14px;
    }
    .status strong {
      color: #007bff;
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
export class ChallengeThreeComponent {
  isVisible = false;
  currentHintLevel = 0;
  private hints: string[] = [];

  constructor(private hintsService: HintsService) {
    this.hints = this.hintsService.getHints('challenge-three');
  }

  toggle() {
    this.isVisible = true;
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
}
