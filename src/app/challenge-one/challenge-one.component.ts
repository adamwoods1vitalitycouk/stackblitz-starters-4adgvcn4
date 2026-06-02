import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: Add proper TypeScript interface for User
// interface User { ... }

@Component({
  selector: 'app-challenge-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Challenge 1: Fix the Bugs 🐛</h2>
    <p><strong>Tasks:</strong></p>
    <ul>
      <li>Fix the button disabled binding (should be disabled while loading)</li>
      <li>Fix the user name display (template error when user is null)</li>
      <li>Add proper TypeScript typing for the 'user' property</li>
      <li>Make the 'Save' button actually call the saveUser() method</li>
    </ul>

    <div class="card">
      <h3>User Profile</h3>

      <!-- BUG: This should use property binding, not attribute -->
      <div>
        <label>Name: {{ user.name }}</label>
        <!-- BUG: Safe navigation operator needed above -->
      </div>

      <div>
        <label>Email: {{ user?.email }}</label>
      </div>

      <div class="button-group">
        <!-- BUG: disabled should be property bound [disabled], not attribute -->
        <button disabled="isLoading" (click)="loadUser()">
          {{ isLoading ? 'Loading...' : 'Load User' }}
        </button>

        <!-- BUG: Click handler not wired up -->
        <button class="btn-success">Save</button>
      </div>

      @if (message) {
        <div class="message">{{ message }}</div>
      }
    </div>
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
    li { margin: 5px 0; }
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
    .button-group {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    button {
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    button:hover {
      background: #0056b3;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    button.btn-success {
      background: #28a745;
    }
    button.btn-success:hover {
      background: #218838;
    }
    .message {
      margin-top: 15px;
      padding: 10px;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      color: #155724;
    }
    label {
      display: block;
      margin: 10px 0;
      font-size: 14px;
    }
  `]
})
export class ChallengeOneComponent {
  // BUG: Should be typed with User interface, not 'any'
  user: any = null;
  isLoading = false;
  message = '';

  loadUser() {
    this.isLoading = true;
    this.message = '';

    // Simulate API call
    setTimeout(() => {
      this.user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      this.isLoading = false;
      this.message = 'User loaded successfully!';
    }, 1000);
  }

  saveUser() {
    this.message = 'User saved successfully!';
  }
}

/* SOLUTION:

1. Add User interface:
interface User {
  name: string;
  email: string;
}

2. Type the user property:
user: User | null = null;

3. Fix template bugs:
- Line with user.name: {{ user?.name }} (add safe navigation)
- disabled="isLoading": [disabled]="isLoading" (property binding)
- Save button: <button class="btn-success" (click)="saveUser()">Save</button>
*/
