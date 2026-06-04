import { Injectable } from '@angular/core';

/**
 * INTERVIEW HINT SERVICE
 *
 * This file contains hints for the interview challenges.
 * Candidates should NOT open this file - it contains the answers!
 *
 * Hints are revealed progressively when candidates click "Get Hint" button.
 */

@Injectable({
  providedIn: 'root'
})
export class HintsService {

  private allHints: { [key: string]: string[] } = {
    'challenge-one': [
      'Is the button wired to a click event? Check if it has (click)="..." in the template.',
      'Does a method exist in the component class that increments the count?',
      'You need to create a method (e.g., increment()) that does this.count++ and wire the button to call it with (click)="increment()"'
    ],

    'challenge-two': [
      'Open the browser console (F12). What error do you see?',
      'Compare the template: you have formControlName="name" and formControlName="email". What does the FormGroup in ngOnInit() have?',
      'Every formControlName in the template needs a matching field in the FormGroup. Add email: [\'\'] to the fb.group() definition.'
    ],

    'challenge-three': [
      'What does "toggle" mean? It should switch between two states (on/off, true/false).',
      'Look at the toggle() method. Does it actually toggle, or does it always set to the same value?',
      'Use the ! operator to flip the boolean: this.isVisible = !this.isVisible instead of always setting it to true.'
    ]
  };

  getHints(challengeKey: string): string[] {
    return this.allHints[challengeKey] || [];
  }
}
