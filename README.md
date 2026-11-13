# Pokédex Debug Lab (Starter)

This Pokédex has **one bug**. Your mission: find it, read the error, name its type, and fix it.

## 1. Fork and clone
1. Click **Fork** at the top right of this repo to copy it to your own GitHub account.
2. On your fork, click **Code** and copy the URL, then run:
   ```
   git clone https://github.com/YOUR-USERNAME/pokemon_starter.git
   cd pokemon_starter
   code .
   ```

## 2. Run it
In VS Code, right-click `index.html` and choose **Open with Live Server**
(or double-click `index.html`).

## 3. See the bug
Use every feature once. Tick each one when it works the way you expect.

- [ ] The page shows 8 Pokémon cards
- [ ] Typing a name in the search box filters the cards
- [ ] The type dropdown shows only that type
- [ ] The heart adds a favourite, and clicking it again removes it
- [ ] Train adds the Training boost to that Pokémon's Attack
- [ ] Battle! shows a winner

One of them does nothing, and the page gives you no clue why.

## 4. Open the Console
1. Press **F12** to open DevTools.
2. Click the **Console** tab.
3. Click the broken feature again. Look for a **red message**.

## 5. Read the error
A Console error tells you three things. Here is a made-up example, not your bug:

```
Uncaught TypeError: Cannot read properties of null      app.js:8
         └ type of error ┘ └ what went wrong ────────┘   └ file : line ┘
```

Write down: **What type?** **What does it say?** **Which file and line?**
Click the file name in the Console to jump straight to that line.

## 6. Identify the type
| Type | What it means | How it looks |
|------|---------------|--------------|
| **Syntax** | The code breaks the rules of the language, so the browser cannot read it | A red error as soon as the page loads |
| **Runtime** | The code reads fine, but crashes when that line runs | A red error when you click or do something |
| **Logical** | The code runs, but gives the wrong result | No error. The answer is just wrong |

Which one is yours?

## 7. Fix it
1. **Go to the line** the Console showed.
2. **Read the error again** and look at that line closely.
3. **Fix one thing**, save, and refresh.
4. **Test again.** Click the feature. The red message should be gone and the feature should work.

## Bug log
| What the Console said | Type (syntax, runtime or logical) | Which file and line | What I changed |
|-----------------------|-----------------------------------|---------------------|----------------|
|                       |                                   |                     |                |
