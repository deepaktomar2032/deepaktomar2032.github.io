---
slug: storing-passwords
title: 'How Password Security Has Changed?'
date: 2026-02-15
excerpt: 'A professional look at protecting user data, from basic hashing to modern industry standards.'
tags: [Security, Architecture, Hashing, Authentication]
---

<script>
  import CodeBlock from "$lib/components/blogs/code-block.svelte";
</script>

If you're building a website or an app, one of the biggest responsibilities you have is looking after your users' passwords.

Databases get breached. It happens all the time. When it does, the question is simple: how bad is the damage?

But how exactly should you store them? Not all methods are created equal. Let's walk through the evolution of password storage, from insecure to industry-standard.

---

## 1. The F-Tier: Plain Text

This is the absolute bottom of the barrel. Storing passwords in **plain text** means saving them exactly as the user typed them (e.g., "Password123") in a normal column in your database.

**How it works?**

- You just save the string of characters directly into your data table.

**The problem:**

- There is zero defense. If an attacker gets into your database, they instantly own every single account.

**Cons:**

- Everything. If the database is compromised, you are done. Reputational damage, legal trouble, user trust gone.
- There are no pros here. This method is outdated and unacceptable.

---

## 2. The D-Tier: Encryption

The next step up is **Encryption**. This sounds fancy, but it's still risky.

**How it works?**

- You use a "key" to scramble the password into gibberish before saving it. To see the real password, you use that same key to "unlock" it.

**Why it's needed?**

- It ensures that if someone glimpses the database, they see nonsense instead of "Password123."

**The Catch:**

- If an attacker steals your database _and_ finds your encryption key (which is often hidden in a nearby config file), they can decrypt every single password back to plain text. It also opens the door for "insider jobs" where employees might abuse their access to the key.

**Pros over plain text:**

- It adds one extra layer of defense; the attacker has to find the key first.

**Cons:**

- If the key is lost, the security is gone.

---

## 3. The C-Tier: Hashing

Now we're getting somewhere. **Hashing** is a "one-way" process.

**How it works?**

- You run the password through a function that creates a unique "fingerprint" (a hash). You store the fingerprint, not the password. When a user logs in, you hash what they typed and see if the fingerprints match.

**The "Brown Paint" Analogy:**

Think of it like mixing three colors of paint. You get a specific shade of brown. You can't "un-mix" the brown to figure out the original colors, but if you mix the same three colors again, you'll always get that exact same brown.

**Pros over encryption:**

- You can verify a password without ever actually knowing what it is.
- There is no "key" to steal that can turn the hashes back into passwords.

**The weakness: Dictionary attacks**

If a user's password is “123456” or “password”, an attacker can:

- Hash common passwords
- Compare them to your database

This is called a dictionary attack.

Even worse, attackers can precompute huge databases of common password hashes, called rainbow tables.

So hashing alone is not enough.

---

## 4. The B-Tier: Salting

To stop those "matching games," we add a little flavor: **Salt**.

**How it works?**

- You generate a random string of characters (the salt) for every user. You add this salt to their password _before_ hashing it. You then store both the salt and the hash in the database.

**Why it's needed?**

- Even if two users have the same password (like "123456"), their salts will be different, so their hashes will look completely different.

**Example: Hashing with bcrypt and salt**

```js
// Example: Hashing with bcrypt and salt
const bcrypt = require('bcrypt')
const saltRounds = 12
const password = 'user-password'
const hash = await bcrypt.hash(password, saltRounds)
```

**Pros over hashing:**

- It makes Rainbow Tables useless.
- Even if two users have the same password, their hashes will be different because their salts are different.

**The weakness:**

- Attackers can still: Take the salt, Try password guesses one by one, Hash and compare
- Modern hardware (like GPUs) is incredibly fast. Even with salts, an attacker can still guess billions of passwords per second to see if any eventually match your hash.

So if users choose weak passwords, they can still be cracked. We need something stronger.

---

## 5. The A-Tier: Slow Hashing (bcrypt)

This is where real security begins. Instead of using general-purpose hash functions, we use special password hashing algorithms like **bcrypt**.

These are designed to be slow on purpose.

**Why slow is good?**

- If a normal hash runs billions of times per second, attackers can guess billions of passwords per second. But if each hash takes 1 second? Now they can only try 1 guess per second per machine. That changes everything.

**How it works?**

- These algorithms include salting automatically.
- They have a configurable “work factor”.
- Increasing the work factor makes hashing exponentially slower. So you can adjust security as hardware gets faster.

**The "Work Factor":**

- You can tell the computer to take, say, 0.5 seconds to calculate one hash. While 0.5 seconds is nothing to a human logging in, it's a nightmare for an attacker trying to guess millions of combinations. It turns "billions of guesses per second" into "a few thousand."

### Structure of a bcrypt Hash

A typical bcrypt string contains the version, the "cost" (how slow it is), the salt, and the hash all in one:

<CodeBlock language="text">
  $2b$12$76D1685932503AD0592345.u868478536835634
</CodeBlock>

**Pros over Salting:**

- Built-in salting.
- Resistant to GPU attacks.
- Customizable difficulty.
- Dramatically slows brute-force attacks.

Attackers might still break weak passwords, but they cannot break them at scale easily.

Security isn't about being unbreakable. It's about being hard enough that attackers move on.

**Cons:**

- It requires more server power and careful configuration.

---

## 6. The S-Tier: No Passwords at All

The ultimate way to secure a password? Avoid storing passwords entirely.

**Use:**

- "Sign in with Google," "Apple," "Facebook," or OAuth providers.

**Why is this powerful?**

- You delegate the security to the giants who have billions of dollars to spend on protection. If you don't have a password database, there is nothing for an attacker to steal from you.

**Note:**

- It's not always suitable for every product, but when possible, it removes the problem completely.
