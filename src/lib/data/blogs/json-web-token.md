---
slug: json-web-token
title: Why My Banking App Keeps Logging Me Out? (No, It’s Not Just You!)
date: 2026-03-05
excerpt: Ever wondered why your banking or finance app logs you out again and again? It’s not broken - it’s protecting you. Let’s break down what’s really happening in simple terms.
tags: [Security, JWT, Authentication, Mobile Apps]
---

You open your banking app.

You log in.

Everything works.

Life is good.

Then two days later… you open the app again.

Boom.

**_Session expired. Please log in again._**

Annoying? Yes.  
Broken app? No.  
Security feature? Absolutely.

Let’s understand what’s really happening - in simple terms.

---

### First: What Does "Logged In" Actually Mean?

When you log into an app, you type your username and password.

The app checks with the server:  
_Hey, is this person legit?_

If yes, the server doesn’t want you to send your password again and again. That would be silly.

So instead, it gives you something like a **temporary pass**.

Think of it like a hotel key card.

You check in once at the reception (login).  
They give you a key card (a token).  
Now you can open your room without showing your passport every time.

That key card is what developers call a **token**.

Sometimes specifically: a **JWT (JSON Web Token)** - but don't worry about the fancy name, it's just a digital pass.

---

### So Why Does It Expire?

Because key cards expire.

Imagine if your hotel key worked forever.  
Even after you checked out.

Bad idea, right?

If someone steals your phone, guesses your password, or copies your token - they shouldn't have access forever.

So apps say:

> _This pass is valid only for some time._

For banking apps, that time is usually short - sometimes minutes, sometimes hours, rarely days.

Security > Convenience.

Especially when money is involved.

---

### What Happens Behind the Scenes?

Let’s make it simple.

When you log in:

1. You send username + password.
2. Server checks it.
3. Server gives you a token.
4. App saves that token.
5. Every request uses that token instead of your password.

But here’s the catch:

Tokens have an **expiry time** inside them - like milk, after expiry they're no longer valid.

If you open the app after that time, the server says:

> _Sorry. This pass is dead. Please log in again._

---

### But Sometimes It Logs Me Out Even When I Use It Daily?

Good question.

There are usually two tokens involved:

- **Access Token** (short life)
- **Refresh Token** (longer life)

Think of it like this:

Access Token = Day pass  
Refresh Token = Permission to get a new day pass

If the access token expires, the app quietly uses the refresh token to get a new one.

You don’t even notice.

But if:

- The refresh token expires
- You haven’t opened the app for a long time
- The app was updated
- You changed your password
- The bank forced logout for security
- The system detected something suspicious

Then everything gets invalidated.

And you must log in again.

---

### Why Banking Apps Log You Out More Often

Because they are paranoid.

And that’s a good thing.

Banks deal with:

- Money
- Identity
- Fraud
- Regulations
- Legal requirements

They are required to:

- Expire sessions quickly
- Force re-authentication
- Prevent token reuse
- Protect against stolen devices

If your social media app stays logged in for 6 months, okay. If your banking app does that? That's a lawsuit waiting to happen.

---

### What Is a JWT (Very Simply)?

A JWT is just a small piece of text that contains:

- Who you are
- When it was created
- When it expires
- A signature (to prove it wasn’t changed)

It's like a digitally signed permission slip. If someone edits it, the signature breaks - the server sees it and rejects it.

---

### Why Not Just Stay Logged In Forever?

Because phones get:

- Lost
- Stolen
- Sold
- Hacked
- Shared

If login never expired, anyone holding your phone could access your account.

Security is always a trade-off between convenience and safety. Banks choose safety, every time.

---

### So Next Time You Get Logged Out…

Instead of thinking:

> _This stupid app again._

Think:

> _Okay… they are protecting my money._

Still annoying - but now you know why.

---

### Final Simple Summary

When you log in, you get a temporary digital pass (token). That pass expires - for security reasons, especially in financial apps. If it expires, you log in again. Not because the app is broken, but because it's doing its job.

---

Security is invisible when it works.

Annoying when it interrupts.

But very important when something goes wrong.
