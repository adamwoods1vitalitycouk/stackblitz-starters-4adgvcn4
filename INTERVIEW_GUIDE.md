# Angular Interview Challenges - 30 Minute Guide

## Overview
Quick technical assessment with 3 simple, realistic bug-fix challenges to evaluate Angular fundamentals.

---

## Interview Structure (30 minutes)

| Time | Activity |
|------|----------|
| 0-5 min | Intro, screen share setup |
| 5-20 min | **3 Challenges** (5 min each) |
| 20-30 min | Discussion & questions |

---

## Setup (Before Interview)

1. **Import to StackBlitz:**  
   Go to: `https://stackblitz.com/github/adamwoods1vitalitycouk/stackblitz-starters-4adgvcn4`

2. **Share with Candidate:**  
   Send them the StackBlitz URL

3. **Ask them to:**
   - Fork the project (so they can edit)
   - Share their screen
   - Work through challenges 1 → 2 → 3

---

## The Challenges

### ✅ Challenge 1: Broken Button (5 min)
**Scenario:** Button doesn't increment the counter

**What's broken:**
- Button has no click handler
- No `increment()` method exists

**What they need to do:**
```typescript
// Add method
increment() {
  this.count++;
}

// Wire button: <button (click)="increment()">Add</button>
```

**Tests:** Event binding, method creation, basic Angular syntax

**Success:** Clicking button increases count

---

### ✅ Challenge 2: Missing Form Field (5 min)
**Scenario:** Email field shows console error

**What's broken:**
- FormGroup only has `name` field
- Template has both `name` and `email` fields
- Console error: `formControlName="email"` not found

**What they need to do:**
```typescript
this.form = this.fb.group({
  name: [''],
  email: ['']  // Add this
});
```

**Tests:** Reactive forms understanding, debugging console errors

**Success:** No console errors, both fields work, "Show Form Values" displays both

---

### ✅ Challenge 3: Broken Toggle (5 min)
**Scenario:** Toggle button only shows message, never hides it

**What's broken:**
```typescript
toggle() {
  this.isVisible = true;  // Always sets to true
}
```

**What they need to do:**
```typescript
toggle() {
  this.isVisible = !this.isVisible;  // Actually toggle
}
```

**Tests:** Boolean logic, understanding toggle behavior, `*ngIf` directive

**Success:** Button shows AND hides the message

---

## What to Watch For

### ✅ **Good Signs:**
- Tests their changes immediately
- Uses console to check for errors (Challenge 2)
- Explains what they're doing
- Asks clarifying questions
- Understands WHY, not just HOW

### ⚠️ **Concerns:**
- Can't identify the issue without heavy hints
- Doesn't test their changes
- Copies code without understanding
- Ignores console errors
- Takes more than 5 min per challenge

---

## Discussion Questions (Last 10 min)

### **Basic Understanding:**
1. "In Challenge 1, what does `(click)` do?"
2. "What's the difference between `{{ }}` and `[ ]` in Angular?"

### **Forms Knowledge:**
3. "What's the difference between Reactive Forms and Template-driven Forms?"
4. "Why did Challenge 2 show a console error?"

### **Debugging:**
5. "How do you typically debug Angular issues?"
6. "What tools do you use? (DevTools, Angular DevTools, etc.)"

### **Real-World:**
7. "Have you worked with Angular before? Which version?"
8. "Tell me about a bug you fixed recently - what was the issue?"

---

## Scoring Guide

| Challenge | Pass | Concern |
|-----------|------|---------|
| **Challenge 1** | Fixes in < 3 min | Can't add event binding |
| **Challenge 2** | Checks console, fixes | Doesn't know what FormGroup is |
| **Challenge 3** | Understands toggle logic | Confused by boolean negation |

**Overall:**
- **Strong:** Completes all 3 in 15 min, explains reasoning
- **Adequate:** Completes 2-3 with some hints
- **Weak:** Struggles with basic concepts, needs heavy guidance

---

## Solutions Reference

### Challenge 1:
```typescript
increment() { this.count++; }
// Template: <button (click)="increment()">Add</button>
```

### Challenge 2:
```typescript
this.form = this.fb.group({
  name: [''],
  email: ['']
});
```

### Challenge 3:
```typescript
toggle() {
  this.isVisible = !this.isVisible;
}
```

---

## Tips for Interviewers

1. **Let them struggle a bit** - See their problem-solving process
2. **Watch for console usage** - Do they check for errors?
3. **Note their communication** - Do they explain their thinking?
4. **Give hints if stuck > 5 min** - "Check the console" or "What does toggle mean?"
5. **Ask "why" questions** - Test understanding, not just memorization

---

## After the Challenges

If they finish early (unlikely), ask them to:
- Add validation to the form (email required)
- Add a "Subtract" button to Challenge 1
- Explain how they would test these components

---

## Red Flags 🚩

- Completes 0-1 challenges in 15 minutes
- Doesn't know what `(click)` or `formControlName` means
- Can't use browser DevTools
- Copy-pastes from Stack Overflow without understanding
- Gets frustrated with simple bugs

## Green Flags ✅

- Systematic debugging approach
- Checks console immediately on errors
- Tests changes incrementally
- Explains their reasoning clearly
- Asks good clarifying questions
- Knows when to look at documentation

---

**Good luck with your interview! 🎯**
