# Angular Interview Challenges - Guide

## Overview
This project contains 3 progressively challenging tasks to assess Angular, TypeScript, and RxJS skills during technical interviews.

## How to Use During Interview

### Setup (Before the Call)
1. Import this repo into StackBlitz: https://stackblitz.com/github/adamwoods1vitalitycouk/stackblitz-starters-4adgvcn4
2. Share the StackBlitz URL with the candidate
3. Have them fork it so they can edit
4. Ask them to share their screen

### Challenge Overview (45-50 minutes total)

#### Challenge 1: Fix the Bugs (10 minutes) 🐛
**Difficulty:** Easy  
**Skills Tested:** Basic Angular syntax, TypeScript typing, template binding

**What they need to fix:**
- Template safe navigation operator (`user?.name`)
- Property binding vs attribute binding (`[disabled]="isLoading"`)
- Missing click handler on Save button
- Type the `user` property (create User interface)

**Success Criteria:**
- No template errors
- Button disables during loading
- Save button works
- Proper TypeScript typing

---

#### Challenge 2: RxJS Search Implementation (20 minutes) 🔍
**Difficulty:** Medium  
**Skills Tested:** RxJS operators, async handling, memory management

**What they need to implement:**
- Listen to form control value changes
- Debounce input (300ms)
- Use `switchMap` to cancel previous requests
- Handle loading states
- Error handling with `catchError`
- Proper unsubscribe with `takeUntil`

**Pattern Reference:**
This mirrors patterns used in your clt-app:
- `post-code.component.ts` - debounce + switchMap pattern
- `condition-details.component.ts` - search implementation

**Success Criteria:**
- Search works with debounce
- Previous requests are cancelled
- Loading indicator appears
- No memory leaks (unsubscribe on destroy)
- Type "alice" to test (should find Alice Johnson)

---

#### Challenge 3: Reactive Forms (15-20 minutes) 📝
**Difficulty:** Medium-Hard  
**Skills Tested:** Reactive forms, validation, custom validators

**What they need to build:**
- Initialize FormGroup with FormBuilder
- Add built-in validators (required, email, minLength)
- Create custom validator (password must contain number)
- Bind form to template with `[formGroup]` and `formControlName`
- Show validation errors conditionally (only when touched)
- Disable submit button when form invalid
- Handle form submission

**Success Criteria:**
- Form validates correctly
- Errors show only after touch
- Custom validator works (password needs number)
- Submit button disabled until valid
- Success message displays on submit

---

## What to Watch For

### Technical Skills
- **Do they read documentation?** (Good sign)
- **How do they debug?** (Console, DevTools, reading errors)
- **Do they explain their thinking?** (Communication skills)
- **Do they ask clarifying questions?** (Problem-solving approach)

### Red Flags
- Copying code blindly without understanding
- Not testing their changes
- Ignoring error messages
- Can't explain what operators like `switchMap` do

### Green Flags
- Tests incrementally as they code
- Explains trade-offs (e.g., why switchMap vs mergeMap)
- Considers edge cases (what if search is empty?)
- Knows when to reference docs vs memory

---

## Solutions Available

Each component file has commented-out solutions at the bottom. Use these:
1. To verify their approach
2. To guide if they're stuck (give hints, not full solutions)
3. To discuss alternative approaches at the end

---

## Discussion Questions (Last 10 minutes)

After challenges, ask:
1. **Challenge 2:** "Why did we use `switchMap` instead of `mergeMap`?"
2. **Challenge 3:** "How would you test this form component?"
3. **General:** "What would you refactor if you had more time?"
4. **RxJS:** "When would you use `debounceTime` vs `throttleTime`?"
5. **Performance:** "How would you optimize this if the search had 10,000 results?"

---

## Time Management Tips

- **10 min:** Challenge 1 (if they finish early, move on)
- **20 min:** Challenge 2 (most important - this shows RxJS competency)
- **15 min:** Challenge 3 (can skip if running low on time)
- **10 min:** Discussion and questions

If they're fast, ask them to:
- Add tests for Challenge 2
- Add a "Clear" button to Challenge 2
- Add "Confirm Password" field to Challenge 3

---

## Technical Notes

- **Angular Version:** 21 (standalone components, new control flow syntax)
- **RxJS Version:** 7.8
- **Form Type:** Reactive Forms (not Template-driven)
- **Testing:** Not included (can discuss approach)

The patterns used here mirror your production clt-app (Angular 12), so skills are transferable.
