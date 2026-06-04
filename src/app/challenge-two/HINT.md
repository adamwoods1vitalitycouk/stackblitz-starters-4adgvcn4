# Challenge 2: Missing Form Field - Hint

## The Problem
The email input field is showing an error in the browser console.

## Things to Check
1. **Open the browser console** (F12 or right-click → Inspect)
   - What error do you see?
   - What is Angular complaining about?

2. **Compare the template vs the FormGroup**
   - Template has: `formControlName="name"` and `formControlName="email"`
   - What does the FormGroup in `ngOnInit()` have?

3. **Are they matching?**
   - Every `formControlName` in the template needs a matching field in the FormGroup

## What You Need
Add the missing field to the FormGroup definition.

## Angular Reactive Forms Reminder
```typescript
this.form = this.fb.group({
  fieldName: ['default value']
});
```

Each field in the template needs a matching entry in the FormGroup.
