import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="challenge">
      <h2>Challenge 2: Missing Form Field</h2>
      <p class="instructions">
        This form has a Name field and an Email field in the UI, but the Email field shows an error in the console.
        <br><strong>Fix the form so both fields work without errors.</strong>
      </p>

      <div class="demo-area">
        <form [formGroup]="form">
          <div class="form-field">
            <label>Name:</label>
            <input formControlName="name" placeholder="Enter your name" />
          </div>

          <div class="form-field">
            <label>Email:</label>
            <input formControlName="email" placeholder="Enter your email" />
          </div>

          <button type="button" (click)="showValues()">Show Form Values</button>
        </form>

        @if (formValues) {
          <div class="output">
            <strong>Form Values:</strong>
            <pre>{{ formValues }}</pre>
          </div>
        }
      </div>

      <div class="hint-link">
        💡 Stuck? Open <code>src/app/challenge-two/HINT.md</code> for debugging tips
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
    }
    .form-field {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }
    input {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }
    input:focus {
      outline: none;
      border-color: #007bff;
    }
    button {
      padding: 12px 30px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
    button:hover {
      background: #218838;
    }
    .output {
      margin-top: 20px;
      padding: 15px;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
    }
    pre {
      margin: 10px 0 0 0;
      font-family: monospace;
      color: #155724;
    }
    .hint-link {
      background: #e7f3ff;
      border-left: 4px solid #007bff;
      padding: 12px;
      margin-top: 20px;
      font-size: 14px;
      color: #004085;
      text-align: center;
    }
    .hint-link code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
    }
  `]
})
export class ChallengeTwoComponent implements OnInit {
  form!: FormGroup;
  formValues: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['']
    });
  }

  showValues() {
    this.formValues = JSON.stringify(this.form.value, null, 2);
  }
}
