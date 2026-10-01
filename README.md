# Simple Task App for Windows

A lightweight Windows desktop task app with no login, no database, and no external APIs.

## Features

- Add tasks with a title, optional description, due date, and Low / Medium / High priority
- Mark tasks complete or incomplete
- Edit and delete tasks
- Filter tasks by All, Active, or Completed
- Sort tasks by due date, priority, or name
- Saves tasks locally with `localStorage`
- Responsive, clean UI with light/dark mode

## Run instructions

Install dependencies with `npm install`, then run the Windows desktop app with `npm start`.

## Build a Windows `.exe`

Run:

```bash
npm run build:win
```

The generated Windows executable will be saved in the `dist` folder.
