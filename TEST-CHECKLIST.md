# Retail Shelf Task Tracker - TEST-CHECKLIST.md

Use this checklist after implementation.

The project is complete only when all required checks pass.

## 1. Local App Check

### 1.1 App Starts

- [ ] The app runs locally without errors.
- [ ] The main page loads successfully.
- [ ] No major console errors appear during normal use.

Result:

```text
Pass / Fail / Needs Fix
```

## 2. Initial Data Check

### 2.1 Sample Tasks

- [ ] Fictional sample tasks appear on first load when localStorage has no saved tasks.
- [ ] Sample tasks include bay/location, SKU, task description, status, priority, and notes.
- [ ] No real company data is used.

Result:

```text
Pass / Fail / Needs Fix
```

## 3. Dashboard Check

### 3.1 Summary Counts

- [ ] The dashboard shows total task count.
- [ ] The dashboard shows counts by status.
- [ ] Dashboard counts update after adding, editing, or marking a task done.

Result:

```text
Pass / Fail / Needs Fix
```

## 4. Task List Check

### 4.1 Task Display

- [ ] Each task displays bay/location.
- [ ] Each task displays SKU.
- [ ] Each task displays task description.
- [ ] Each task displays status.
- [ ] Each task displays priority.
- [ ] Each task displays notes.

Result:

```text
Pass / Fail / Needs Fix
```

## 5. Add Task Check

### 5.1 Add a New Task

- [ ] The form accepts bay/location.
- [ ] The form accepts SKU.
- [ ] The form accepts task description.
- [ ] The form accepts status.
- [ ] The form accepts priority.
- [ ] The form accepts optional notes.
- [ ] After saving, the new task appears in the list.
- [ ] After saving, dashboard counts update.
- [ ] After saving, data is stored in localStorage.

Result:

```text
Pass / Fail / Needs Fix
```

## 6. Edit Task Check

### 6.1 Edit an Existing Task

- [ ] An existing task can be opened for editing.
- [ ] Bay/location can be updated.
- [ ] SKU can be updated.
- [ ] Task description can be updated.
- [ ] Status can be updated.
- [ ] Priority can be updated.
- [ ] Notes can be updated.
- [ ] After saving, the task list updates.
- [ ] After saving, dashboard counts update if status changed.
- [ ] After saving, data is stored in localStorage.

Result:

```text
Pass / Fail / Needs Fix
```

## 7. Mark Done Check

### 7.1 Complete a Task

- [ ] A task can be marked done.
- [ ] The task status changes to `Done`.
- [ ] Dashboard counts update.
- [ ] Data is stored in localStorage.

Result:

```text
Pass / Fail / Needs Fix
```

## 8. Filter Check

### 8.1 Filter by Status

- [ ] The user can view all tasks.
- [ ] The user can filter by Not Started.
- [ ] The user can filter by In Progress.
- [ ] The user can filter by Done.
- [ ] The user can filter by Issue.
- [ ] The task list updates when the filter changes.

Result:

```text
Pass / Fail / Needs Fix
```

## 9. Persistence Check

### 9.1 Refresh Behavior

- [ ] Added tasks remain after refresh.
- [ ] Edited tasks remain after refresh.
- [ ] Completed tasks remain after refresh.

Result:

```text
Pass / Fail / Needs Fix
```

## 10. Scope Check

### 10.1 Version 1 Scope

- [ ] The app does not include extra features outside the approved V1 scope.
- [ ] The app remains simple and readable.
- [ ] README instructions are clear enough to run and manually test the app.

Result:

```text
Pass / Fail / Needs Fix
```
