import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

      <div class="hint">
        💡 Check: Is the button wired to a method? Does that method exist?
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
export class ChallengeOneComponent {
  count = 0;

  // TODO: Add a method to increment the count.
}
