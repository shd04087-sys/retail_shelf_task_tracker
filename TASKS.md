# Retail Shelf Task Tracker - TASKS.md

## Development Workflow

Follow this workflow carefully.

1. Read `SPEC.md`.
2. Create a clear implementation plan.
3. Do not write code until the plan is clear.
4. Build the smallest working version first.
5. Check the success criteria one by one.
6. Fix any failed criteria.
7. Update `README.md` at the end.
8. Stop when the success criteria are met.
9. Do not add extra features unless requested.

## Phase 1 - Planning

### Task 1.1: Read the Project Brief

Read:

- `SPEC.md`
- `TASKS.md`
- `TEST-CHECKLIST.md`

Understand the project goal, constraints, and success criteria.

Output a short implementation plan before coding.

The plan should include:

- Chosen tech stack
- Main components/pages
- Data model
- localStorage approach
- Basic styling approach
- Testing approach

Do not write code during this step.

## Phase 2 - Project Setup

### Task 2.1: Create the Basic App Structure

Create the project files needed for a simple deployable web app.

Keep the structure simple and readable.

Avoid unnecessary frameworks, libraries, or complex architecture unless there is a clear reason.

### Task 2.2: Add Basic Layout

Create a simple page layout with:

- App title
- Short project description
- Dashboard area
- Task form area
- Filter area
- Task list area

The layout should be mobile-friendly.

## Phase 3 - Data Model

### Task 3.1: Define the Task Data Shape

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

### Task 3.2: Add Sample Data

Create fictional sample data only.

Do not use real company data.

Sample tasks should represent realistic retail shelf/reset work, such as:

- Checking labels
- Front-facing products
- Verifying SKU placement
- Reporting missing stock
- Completing a reset task

## Phase 4 - localStorage

### Task 4.1: Load Data

When the app first loads:

- Check localStorage for existing task data.
- If data exists, load it.
- If no data exists, load fictional sample data.

### Task 4.2: Save Data

Whenever tasks are added, edited, or marked done, save the updated task list to localStorage.

Refreshing the page should not erase task data.

## Phase 5 - Task Features

### Task 5.1: Display Task List

Show all tasks in a readable list or card layout.

Each task should display:

- Bay/location
- SKU
- Task description
- Status
- Priority
- Notes

### Task 5.2: Add Task

Create a form that allows the user to add a task.

Required fields:

- Bay/location
- SKU
- Task description
- Status
- Priority

Optional field:

- Notes

After adding a task:

- The task should appear in the task list.
- Dashboard numbers should update.
- Data should be saved to localStorage.

### Task 5.3: Edit Task

Allow the user to edit an existing task.

The user should be able to update:

- Bay/location
- SKU
- Task description
- Status
- Priority
- Notes

After editing:

- The task list should update.
- Dashboard numbers should update if status changed.
- Data should be saved to localStorage.

### Task 5.4: Mark Task as Done

Add a simple way to mark a task as completed.

When used, the task status should become:

```text
Done
```

After marking a task done:

- The task list should update.
- Dashboard numbers should update.
- Data should be saved to localStorage.

### Task 5.5: Filter Tasks by Status

Add a filter control that allows the user to view:

- All tasks
- Not Started tasks
- In Progress tasks
- Done tasks
- Issue tasks

### Task 5.6: Dashboard Summary

Add a dashboard summary that shows task counts.

At minimum, show:

- Total tasks
- Counts by status

## Phase 6 - Documentation and Testing

### Task 6.1: Update README

Update `README.md` with:

- Project purpose
- Features
- Tech stack
- How to run locally
- How to test manually
- Limitations
- Future improvements

### Task 6.2: Run Manual Checks

Use `TEST-CHECKLIST.md`.

The project is complete only when all required checks pass.
