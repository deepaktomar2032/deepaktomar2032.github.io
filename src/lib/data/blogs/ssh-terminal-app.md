---
slug: ssh-terminal-app
title: What If Your App Didn't Need a Browser At All?
date: 2026-03-10
excerpt: A tiny coffee shop called terminal.shop proved you can build a fully working app - with auth, payments, and a UI - entirely inside the terminal over SSH. Here's what that means for your next project.
tags: [SSH, Terminal, Go, Developer Tools, Charm]
---

You're building an app. You open a fresh Next.js project, set up auth, install a component library, fight with Tailwind for 45 minutes, configure a database, and... you haven't even written actual logic yet.

What if none of that was necessary?

Some developers asked that exact question - and then built a fully working e-commerce shop that runs entirely inside your terminal. No browser. No frontend. Just SSH.

That shop is **terminal.shop**. If you want the full backstory, Charm wrote a [deep dive on how they built it](https://charm.land/blog/terminaldotshop/). But for now, try it yourself:

```bash
ssh terminal.shop
```

You'll land inside a gorgeous retro UI where you can browse coffee blends, add to cart, and check out. It works. It's real. People buy coffee with it.

But the point of this blog isn't coffee. The point is - **you can build your next app this way too.**

---

### Wait, SSH? Isn't That for Servers?

Yeah, usually. You SSH into a server to fix things, run scripts, or panic at 2am because prod is down.

But SSH is just a protocol. It's a secure connection between two machines. There's no rule that says what happens _after_ you connect has to be a shell.

What if, instead of dropping someone into `bash`, you dropped them into your app?

That's exactly what terminal.shop did. When you connect, you don't get a terminal - you get a full interactive UI. Menus, navigation, colors, everything. All inside your existing terminal window.

---

### The Stack Behind It (And Behind Your Future App)

Terminal.shop was built using a toolkit called **[Charm.sh](https://charm.sh)**. It's a collection of Go libraries built specifically for this kind of thing. Here's what each piece does:

**Wish** - handles the SSH part. Instead of setting up OpenSSH and dealing with shell access and security nightmares, Wish lets you spin up a custom SSH server where _you_ control what happens when someone connects. Think of it like Express.js, but for SSH.

**Bubble Tea** - the UI framework. It handles all the interactive parts - menus, lists, keyboard navigation, animations. It follows a clean Model-Update-View pattern (inspired by the Elm architecture - if you've used Redux, the flow will feel familiar).

**Lip Gloss** - styling. Colors, borders, padding, layout. CSS for your terminal, basically.

Together, these three are all you need to build something like terminal.shop from scratch.

---

### The "No Login Button" Magic

Here's one of the best parts of this whole approach - **you get auth for free**.

When a user connects over SSH, they're already using an SSH key. That key is unique to them. Your app can read it and use it as their identity.

```
First connection?  → Create an account for that key.
Second connection? → "Welcome back."
```

No email. No password. No "forgot password" flow. No OAuth. No JWT headaches.

It's the most frictionless login experience you can build. Users don't even notice it happening.

---

### What Can You Actually Build This Way?

This isn't just a party trick. Here are real things that make sense as SSH apps:

**Developer tools** - a CLI dashboard for your SaaS product. Instead of sending users to `/dashboard`, let them `ssh dashboard.yourapp.com`.

**Internal admin panels** - only accessible to people with the right SSH key. No VPN needed, no auth layer to maintain.

**Portfolio or resume** - show your personality. `ssh hire.yourname.dev`. Developers will love it. It's memorable.

**Interactive docs** - instead of a static docs site, an SSH app where users can browse docs, run examples, and see output live.

**Games** - yes, actual games. Chess, Wordle clones, text adventures. All over SSH.

The common thread? These are all tools used by developers. And developers already have SSH. They're already comfortable in a terminal. You're meeting them where they are.

---

### Okay But What About Payments?

Fair question. You can't swipe a card in a terminal.

Terminal.shop solves this the simple way - when you hit checkout, the app generates a short URL. You open it in your browser, complete the Stripe checkout, and the terminal app updates instantly via a webhook.

```
Terminal → "Here's your checkout link: trm.sh/pay/abc123"
User opens link → Pays on phone/browser
Stripe webhook fires → Terminal shows "Payment received ✓"
```

It's not a hack. It's actually a really clean separation. The terminal handles the UX, the browser handles the one thing browsers are good at - payment forms.

---

### Want to See It In Action?

I built a minimal working SSH server using Wish and Bubble Tea that you can clone, build, and run in under 5 minutes. Check it out here: [terminal-app on GitHub](https://github.com/deepaktomar2032/terminal-app.git).

---

### Is This Overkill For Your App?

Maybe. Probably. But that's not really the point.

The real question is: **who are your users?**

If your users are developers, they live in the terminal. They have SSH set up. They're already tired of opening yet another browser tab for yet another SaaS dashboard.

An SSH app is fast, secure, and honestly - it makes a statement. It says you care about the experience. That you thought about it differently.

Terminal.shop didn't go viral because coffee is revolutionary. It went viral because someone looked at a 30-year-old protocol and said "what if we used this to sell beans?" - and then actually did it well.

---

### Where to Start

If you want to try this yourself:

1. Install Go - [go.dev](https://go.dev)
2. Check out the Charm docs - [charm.sh](https://charm.sh)
3. Clone [my starter repo](https://github.com/deepaktomar2032/terminal-app.git) - a minimal working SSH server you can build and run in under 5 minutes
4. Or browse the [official Wish examples](https://github.com/charmbracelet/wish/tree/main/examples)

Start small. Build your portfolio over SSH. Or a tiny dashboard for a side project. Get the feel of it.

Then, next time someone asks "how do I access your app?" - you get to say: just SSH in.
