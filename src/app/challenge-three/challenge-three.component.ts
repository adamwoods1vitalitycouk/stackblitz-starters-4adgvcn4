import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge-three',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Challenge 3: Build a Reactive Form 📝</h2>
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Create a registration form with email and password fields</li>
      <li>Email: Required and must be valid email format</li>
      <li>Password: Required, min 8 characters, must contain at least one number</li>
      <li>Show validation errors only after field is touched</li>
      <li>Disable submit button until form is valid</li>
      <li>On submit, display success message with the email</li>
    </ul>

    <div class="card">
      <h3>User Registration</h3>

      <!-- TODO: Bind this form to your FormGroup using [formGroup] and (ngSubmit) -->
      <form>

        <!-- Email Field -->
        <div class="form-group">
          <label>Email *</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
          />
          <!-- TODO: Add formControlName="email" -->
          <!-- TODO: Show validation errors only when touched and invalid -->
          <div class="error">
            <!-- Show: "Email is required" when required error -->
            <!-- Show: "Invalid email format" when email error -->
          </div>
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label>Password *</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password (min 8 chars, must include number)"
          />
          <!-- TODO: Add formControlName="password" -->
          <!-- TODO: Show validation errors only when touched and invalid -->
          <div class="error">
            <!-- Show: "Password is required" when required error -->
            <!-- Show: "Password must be at least 8 characters" when minlength error -->
            <!-- Show: "Password must contain at least one number" when containsNumber error -->
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="btn-primary"
        >
          <!-- TODO: Add [disabled]="!registrationForm?.valid" -->
          Register
        </button>
      </form>

      @if (submitMessage) {
        <div class="success">
          {{ submitMessage }}
        </div>
      }
    </div>

    <!-- HINT Section -->
    <details class="hints">
      <summary>💡 Hints (click to expand)</summary>
      <ul>
        <li><strong>Step 1:</strong> In ngOnInit(), use FormBuilder to create the form:
          <code>this.registrationForm = this.fb.group(&#123; email: ['', [...]], password: ['', [...]] &#125;)</code>
        </li>
        <li><strong>Step 2:</strong> Add validators: Validators.required, Validators.email, Validators.minLength(8)</li>
        <li><strong>Step 3:</strong> Create custom validator: passwordContainsNumber(control: AbstractControl)</li>
        <li><strong>Step 4:</strong> Bind form: <code>&lt;form [formGroup]="registrationForm" (ngSubmit)="onSubmit()"&gt;</code></li>
        <li><strong>Step 5:</strong> Bind inputs: <code>&lt;input formControlName="email" /&gt;</code></li>
        <li><strong>Step 6:</strong> Show errors: <code>&#64;if (registrationForm.get('email')?.touched && registrationForm.get('email')?.invalid)</code></li>
        <li><strong>Step 7:</strong> Check specific error: <code>registrationForm.get('email')?.errors?.['required']</code></li>
        <li><strong>Step 8:</strong> Disable button: <code>[disabled]="!registrationForm.valid"</code></li>
      </ul>
    </details>
  `,
  styles: [`
    h2 { color: #333; }
    ul {
      background: #fff3cd;
      border: 1px solid #ffc107;
      border-radius: 4px;
      padding: 15px 15px 15px 35px;
      margin: 15px 0;
    }
    li { margin: 8px 0; }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 12px;
      color: #c7254e;
    }
    .card {
      padding: 20px;
      background: #f9f9f9;
      border-radius: 4px;
      margin-top: 10px;
    }
    h3 {
      margin-top: 0;
      color: #555;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }
    .form-control {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 2px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }
    .form-control:focus {
      outline: none;
      border-color: #007bff;
    }
    .form-control.ng-invalid.ng-touched {
      border-color: #dc3545;
    }
    .error {
      color: #dc3545;
      font-size: 12px;
      margin-top: 5px;
      min-height: 18px;
    }
    .btn-primary {
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;
    }
    .btn-primary:hover:not(:disabled) {
      background: #0056b3;
    }
    .btn-primary:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    .success {
      margin-top: 20px;
      padding: 15px;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      color: #155724;
      border-radius: 4px;
    }
    .hints {
      margin-top: 30px;
      padding: 15px;
      background: #e7f3ff;
      border: 1px solid #007bff;
      border-radius: 4px;
    }
    .hints summary {
      cursor: pointer;
      font-weight: bold;
      color: #0056b3;
    }
    .hints ul {
      background: transparent;
      border: none;
      padding-left: 20px;
    }
  `]
})
export class ChallengeThreeComponent implements OnInit {
  registrationForm!: FormGroup;
  submitMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // TODO: Initialize the form here using FormBuilder
    // this.registrationForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8), this.passwordContainsNumber]]
    // });
  }

  onSubmit() {
    // TODO: Implement submit logic
    // Check if form is valid
    // Get email value: this.registrationForm.get('email')?.value
    // Display success message
    // Reset form: this.registrationForm.reset()
  }

  // TODO: Create custom validator for password must contain number
  // passwordContainsNumber(control: AbstractControl): ValidationErrors | null {
  //   const value = control.value;
  //   if (!value) return null;
  //   const hasNumber = /\d/.test(value);
  //   return hasNumber ? null : { containsNumber: true };
  // }
}

/* COMPLETE SOLUTION:

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge-three',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Challenge 3: Build a Reactive Form 📝</h2>
    [Same template as above but with fixes...]

    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label>Email *</label>
        <input type="email" formControlName="email" class="form-control" placeholder="Enter email" />
        @if (registrationForm.get('email')?.touched && registrationForm.get('email')?.invalid) {
          <div class="error">
            @if (registrationForm.get('email')?.errors?.['required']) {
              <div>Email is required</div>
            }
            @if (registrationForm.get('email')?.errors?.['email']) {
              <div>Invalid email format</div>
            }
          </div>
        }
      </div>

      <div class="form-group">
        <label>Password *</label>
        <input type="password" formControlName="password" class="form-control" placeholder="Enter password" />
        @if (registrationForm.get('password')?.touched && registrationForm.get('password')?.invalid) {
          <div class="error">
            @if (registrationForm.get('password')?.errors?.['required']) {
              <div>Password is required</div>
            }
            @if (registrationForm.get('password')?.errors?.['minlength']) {
              <div>Password must be at least 8 characters</div>
            }
            @if (registrationForm.get('password')?.errors?.['containsNumber']) {
              <div>Password must contain at least one number</div>
            }
          </div>
        }
      </div>

      <button type="submit" [disabled]="!registrationForm.valid" class="btn-primary">Register</button>
    </form>
  `,
  styles: [...]
})
export class ChallengeThreeComponent implements OnInit {
  registrationForm!: FormGroup;
  submitMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordContainsNumber]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('email')?.value;
      this.submitMessage = `Registration successful! Welcome ${email}`;
      this.registrationForm.reset();
    }
  }

  passwordContainsNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const hasNumber = /\d/.test(value);
    return hasNumber ? null : { containsNumber: true };
  }
}
*/
