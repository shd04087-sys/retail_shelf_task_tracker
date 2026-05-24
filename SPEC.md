# Retail Shelf Task Tracker - SPEC.md

## Project Name

Retail Shelf Task Tracker

## Project Goal

Build a small web app demo that helps track retail shelf/reset tasks.

The main purpose of this project is to create a job-search portfolio project. It should demonstrate the ability to use AI-assisted development to turn a real workplace workflow into a working, documented, and deployable prototype.

This project should be practical, simple, and easy for an employer to understand.

## Target Users

The target users are:

- Retail workers
- Merchandising/reset associates
- Inventory staff
- Store supervisors

The app should feel like a small internal tool that could help a store team track shelf or reset work.

## Version 1 Scope

Version 1 should be the smallest working version of the app.

It should allow a user to:

1. View sample shelf/reset tasks.
2. Add a new task.
3. Edit an existing task.
4. Mark a task as complete.
5. Filter tasks by status.
6. View a simple dashboard summary.
7. Refresh the page without losing task data.

Do not add features beyond this scope unless requested.

## Core Features

### 1. Task List

The app must display a list of shelf/reset tasks.

Each task should include:

- Bay/location
- SKU
- Task description
- Status
- Priority
- Notes

Example task:

```text
Bay/Location: Aisle 12 - Bay 04
SKU: 1234567
Task Description: Check label and front-face product
Status: Not Started
Priority: Medium
Notes: Verify price tag matches shelf label
```

### 2. Add Task

The app must include a form for adding a new task.

Required fields:

- Bay/location
- SKU
- Task description
- Status
- Priority

Optional field:

- Notes

### 3. Edit Task

The app must allow users to edit existing tasks.

Editable fields:

- Bay/location
- SKU
- Task description
- Status
- Priority
- Notes

### 4. Mark Task Complete

The app must include a simple way to mark a task complete.

When marked complete, the task status must become:

```text
Done
```

### 5. Filter Tasks

The app must allow filtering tasks by status.

Allowed status values:

- Not Started
- In Progress
- Done
- Issue

The app may also include an `All` filter option so users can see every task.

### 6. Dashboard Summary

The app must show a simple dashboard summary that updates when tasks change.

The summary should include task counts, such as total tasks and counts by status.

### 7. Data Persistence

The app must use browser localStorage so refreshing the page does not erase task data.

When the app first loads:

- Load task data from localStorage if it exists.
- Load fictional sample data if no saved data exists.

Whenever tasks are added, edited, or marked done:

- Save the updated task list to localStorage.

## Data Model

Each task should include:

- `id`
- `bayLocation`
- `sku`
- `description`
- `status`
- `priority`
- `notes`

Allowed status values:

- Not Started
- In Progress
- Done
- Issue

Allowed priority values:

- Low
- Medium
- High

## Sample Data Rules

Sample data must be fictional only.

Do not use real company data.

Sample tasks should represent realistic retail shelf/reset work, such as:

- Checking labels
- Front-facing products
- Verifying SKU placement
- Reporting missing stock
- Completing a reset task

## Design Requirements

- Keep the layout simple and readable.
- Make the app mobile-friendly.
- Use a practical internal-tool style.
- Avoid unnecessary frameworks, libraries, or complex architecture.
