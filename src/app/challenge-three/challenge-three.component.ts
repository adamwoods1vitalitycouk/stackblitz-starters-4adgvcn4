import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

      <div class="hint">
        💡 Check the toggle() method. What should happen when you toggle something?
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
    .hint {
      background: #e7f3ff;
      border-left: 4px solid #007bff;
      padding: 12px;
      margin-top: 20px;
      font-size: 14px;
      color: #004085;
    }
  `]
})
export class ChallengeThreeComponent {
  isVisible = false;

  toggle() {
    this.isVisible = true;
  }
}
