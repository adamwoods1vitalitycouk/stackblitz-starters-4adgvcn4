# Challenge 3: Broken Toggle - Hint

## The Problem
The button shows the message, but clicking again doesn't hide it.

## Things to Check
1. **What does "toggle" mean?**
   - Toggle = switch between two states (on/off, true/false)
   - Currently: always sets to `true`

2. **Look at the `toggle()` method**
   - What does it do right now?
   - Does it actually toggle, or just set to one value?

3. **Watch the status indicator**
   - It shows "Message is currently: VISIBLE" or "HIDDEN"
   - Does it change back and forth when you click?

## What You Need
Make the `toggle()` method actually toggle between `true` and `false`.

## Boolean Toggle Reminder
To toggle a boolean:
```typescript
// Instead of always setting to true:
this.value = true;

// Toggle it:
this.value = !this.value;
```

The `!` operator flips the boolean (true → false, false → true).
