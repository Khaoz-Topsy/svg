# Security

- Running JS in SVGs might sounds like a bad idea
- Because it is

## JS opens a massive can of 🪱

- An SVG that redirects
- An SVG that pretends to be a service that you trust
  - For example a facebook login
- Worst case, if am attacker can get their code into an SVG on your site
  - DOM injection & script abuse

## Mitigations

- Don't let users upload SVGs
- An SVG is only as powerful and an HTML tag
  - Do not unsafely set HTML on your website with user content
  - SVG or HTML
  - Sanitise what your users send to you

## ▶️ I hope that these don't scare you too much
