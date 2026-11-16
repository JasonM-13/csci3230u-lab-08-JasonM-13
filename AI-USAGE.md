# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — Controlled Input
- **Date:** 2026-11-15
- **Tool / model:** ChatGPT 5.6 Luna
- **Files:** `src/AddTodoForm`
- **Prompt (verbatim):**

  ```
  I currently have onChange={(e) => setText(e.target.value)} for controlled input. How does it differ from onChange={() => setText(text)}
  ```

- **What it produced & what I kept / changed / rejected:** The AI explained that setText(text) uses an existing state value instead of using a new value entered by the user. I change my code so that the input updates React state whenever the users type. The model told me that I needed a variable to track the event and get the current text in the input that is stored by the variable, hence (e) => setText(e.target.value)

---

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** (2–3 sentences. e.g. it mutated
  state instead of copying, used a stale/old React idiom, missed an edge case, or
  over-engineered something simple.)

- **Explain-every-line check:** I can explain every line of the AI-assisted code in this
  lab and why it's correct. ☐  *(Your TA may ask you to walk through any of it.)*
