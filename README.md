# Retail Shelf Task Tracker

## Project Purpose

Retail Shelf Task Tracker is a small AI-assisted portfolio web app demo for tracking retail shelf, reset, and merchandising tasks. It shows how a practical workplace workflow can become a simple, documented, and deployable prototype.

## Features

- View fictional sample shelf/reset tasks.
- Add new tasks.
- Edit existing tasks.
- Mark tasks as complete.
- Filter tasks by status.
- View a dashboard summary.
- Keep task data after refreshing the page with localStorage.

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser localStorage

## AI-Assisted Development Workflow

- Defined the project goal and constraints.
- Created `SPEC.md`, `TASKS.md`, `TEST-CHECKLIST.md`, and `AGENTS.md`.
- Used Codex to implement the Version 1 app.
- Manually tested the app against the checklist.

## How to Run Locally

Option 1: Open the file directly.

1. Open `index.html` in a web browser.
2. Use the app from that browser tab.

Option 2: Run a small local server.

1. Open a terminal in this project folder.
2. Run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

3. Open `http://127.0.0.1:4173/` in a web browser.

## How to Test Manually

1. Open the app and confirm the main page loads.
2. Confirm sample tasks appear.
3. Add a task with bay/location, SKU, description, status, and priority.
4. Edit a task and confirm the list updates.
5. Mark a task as done and confirm its status changes to `Done`.
6. Filter tasks by each status.
7. Refresh the page and confirm task data remains.
8. Check the browser console for major errors.

## Limitations

- Data is stored only in the current browser's localStorage.
- There is no backend, login, delete action, search, export, or real company data.

## Future Improvements

- Add a delete or archive workflow if requested.
- Add due dates or assigned team members if they become part of the scope.
- Add automated browser tests for repeated verification.
