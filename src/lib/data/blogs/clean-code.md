---
slug: clean-code
title: Is Your Code Clean - Or Just Working?
date: 2026-03-09
excerpt: Most developers write code that *works*. But working code and *clean* code? That's two very different things. Here are 10 golden rules that'll make your teammates stop cursing your name at 2am.
tags: [Software Development, Clean Code, Best Practices, Programming]
---

Ever looked at your old code and wondered if a cat walked across your keyboard? Here are 10 simple rules to stop the chaos and write code that doesn't make your future self want to quit.

---

### 1. Stop Using Magic Numbers (They're Confusing)

A "magic number" is a random number sitting in your code with no explanation. Like `price * 1.18`. Where did 1.18 come from? Is it tax? or some secret formula?

You knew what it meant when you wrote it. You just forgot to tell anyone else.

```js
// Bad
const priceWithTax = price * 1.18;

// Good
const GST_RATE = 0.18;
const priceWithTax = price * (1 + GST_RATE);
```

Now anyone reading this knows exactly what's going on.

---

### 2. Name Things Like a Human

Variable names that actually tell you what they hold.

We're lazy. `d` is faster to type than `billingCycleDays`. But your future self will hate you for it.

```js
// Bad
let d // days?

// Good
let billingCycleDays
```

The comment `// days?` is literally a question mark. That's your code asking for help. Don't do that to it.

---

### 3. Avoid Deep Nesting

When your `if` is inside an `if` is inside another `if`, and suddenly you need a map to find the closing braces.

You keep adding edge cases without stopping to rethink the structure. One condition becomes two. Two becomes five. And now you have the pyramid of doom.

```js
// Bad
if (user) {
  if (user.isActive) {
    if (hasAccess(user)) {
      process(user);
    }
  }
}

// Good
if (!user) return;
if (!user.isActive) return;
if (!hasAccess(user)) return;
process(user);
```

"Return early" is your best friend. Fail fast, exit fast, keep the happy path clean.

---

### 4. Don't Pass 7 Arguments Into a Function (Please)

If your function takes 10 parameters, it’s going to drop something.

The function started small. Then requirements changed. Then someone added age. Then city & so on. Nobody stopped to clean it up.

```js
// Bad
createUser(name, email, age, city, zip, hobby, shoeSize)

// Good
const request = { name, email, age, city, zip, hobby, shoeSize }
createUser(request)
```

Wrap your parameters into an object. It's cleaner, easier to extend, and you won’t mix up the age with the shoe size.

---

### 5. Keep Functions Small (One Job. That's It.)

A function should do **one** thing. If it handles login, sends email, and calculates weather - it’s doing way too much.

```js
// Bad - one 100-line mega-function
function doEverything() { ... }

// Good - three small, focused functions
function authenticate() { ... }
function sendWelcomeEmail() { ... }
function logActivity() { ... }
```

Small functions are easier to test and way easier to fix.

---

### 6. Stay DRY (Don't Repeat Yourself)

Copy-pasting code is the ultimate “lazy now, cry later” move.

```js
// Bad - same logic in multiple places
function discountA(p) {
  return p - p * 0.1
}
function discountB(p) {
  return p - p * 0.1
}

// Good - one reusable function
function applyDiscount(price, rate) {
  return price - price * rate
}
```

One place to update. Zero forgotten copies.

---

### 7. KISS - Keep It Simple, Stupid

The simplest solution is usually the best one. Fancy, clever code feels great to write. It's awful to read.

```js
// Bad - unnecessarily clever
const r = x ? (y ? a : b) : (z ? c : d);

// Good - readable
if (x && y) return a;
if (x) return b;
if (z) return c;
return d;
```

Clever code is hard to debug. Simple code is understandable to a sleepy, Monday-morning version of yourself.

---

### 8. Prefer Composition Over Inheritance

Instead of extending a class to borrow its behavior (inheritance), you should _include_ that behavior as a component (composition).

Inheritance feels natural at first. `EmailNotifier extends Order` sounds fine... until you realize an email notifier is not an Order. It just _uses_ order data. Big difference.

```js
// Bad
class EmailNotifier extends Order {
  /* not-an-is-a */
}

// Good
class OrderService {
  constructor(notifier) {
    this.notifier = notifier
  }
}
```

Composition gives you flexibility. Inheritance gives you headaches when requirements shift (and they always shift).

---

### 9. Comment the _Why_, Not the _What_

Comments should explain _why_ you did something, not _what_ you're doing. The code already shows what it's doing.

We write comments to feel helpful. "// increment i" helps nobody. The code is self-explanatory. The _reason_ behind it often isn't.

```js
// Bad
i++ // increment i

// Good
i++ // skip the header row in the CSV file
```

If someone reads your code and thinks _"what is this doing?"_ - that's a naming problem.  
If they think _"but WHY is it doing this?"_ - that's a comment problem.

---

### 10. Write Commit Messages Like You're Explaining It to a Co-worker

We're in a rush and just want to push. But three months later, `git blame` returns "fix" and nobody knows what was fixed or why.

Your commit message should tell people _what changed and why_, not just "fix" or "changes". "Fixed bug" is the worst commit message in history.

```text
# Bad
fix
changes

# Good
Add null check in user validation to prevent crash on empty form submit
Fix login crash on mobile devices caused by missing auth token
Refactor payment service to use strategy pattern for multi-gateway support
```

In six months, you won’t remember why this “stuff” was updated.

---

### So, Is Your Code Clean Now?

Here's the thing - you don't need to apply all 10 rules at once. Start with one that made you go _"oh no, I do that."_

Clean code isn't about being perfect. It's about being kind - to your teammates and to future developers who'll be debugging this at 11pm six months from now.

Write code like someone's reading it. Because they are. And sometimes, that someone is you.

---
