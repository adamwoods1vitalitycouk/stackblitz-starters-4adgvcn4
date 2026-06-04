# Challenge 1: Broken Button - Hint

## The Problem
The button doesn't do anything when clicked.

## Things to Check
1. **Is the button wired to a click event?**
   - Look at the button in the template
   - Does it have `(click)="..."`?

2. **Does the method exist?**
   - Check the component class
   - Is there a method that increments `count`?

## What You Need
- A method that increases `count` by 1
- Wire the button to call that method when clicked

## Angular Syntax Reminder
- Click event: `(click)="methodName()"`
- Increment: `this.count++` or `this.count = this.count + 1`
