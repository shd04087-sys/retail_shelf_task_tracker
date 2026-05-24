const STORAGE_KEY = "retailShelfTasks";
const STATUSES = ["Not Started", "In Progress", "Done", "Issue"];
const PRIORITIES = ["Low", "Medium", "High"];

const sampleTasks = [
  {
    id: "task-1",
    bayLocation: "Aisle 12 - Bay 04",
    sku: "1234567",
    description: "Check label and front-face product",
    status: "Not Started",
    priority: "Medium",
    notes: "Verify price tag matches shelf label"
  },
  {
    id: "task-2",
    bayLocation: "Aisle 03 - Endcap 01",
    sku: "4829015",
    description: "Verify promotional SKU placement",
    status: "In Progress",
    priority: "High",
    notes: "Confirm product is in the correct endcap position"
  },
  {
    id: "task-3",
    bayLocation: "Aisle 08 - Bay 02",
    sku: "7712044",
    description: "Report missing stock for shelf reset",
    status: "Issue",
    priority: "High",
    notes: "Shelf space is empty after reset plan check"
  },
  {
    id: "task-4",
    bayLocation: "Aisle 15 - Bay 06",
    sku: "6301182",
    description: "Complete reset task and front-face products",
    status: "Done",
    priority: "Low",
    notes: "Reset completed with labels aligned"
  }
];

let tasks = loadTasks();
let currentFilter = "All";

const taskForm = document.querySelector("#taskForm");
const formTitle = document.querySelector("#form-title");
const taskIdInput = document.querySelector("#taskId");
const bayLocationInput = document.querySelector("#bayLocation");
const skuInput = document.querySelector("#sku");
const descriptionInput = document.querySelector("#description");
const statusInput = document.querySelector("#status");
const priorityInput = document.querySelector("#priority");
const notesInput = document.querySelector("#notes");
const cancelEditButton = document.querySelector("#cancelEditButton");
const statusFilter = document.querySelector("#statusFilter");
const summaryGrid = document.querySelector("#summaryGrid");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", handleFormSubmit);
cancelEditButton.addEventListener("click", resetForm);
statusFilter.addEventListener("change", () => {
  currentFilter = statusFilter.value;
  render();
});

render();

function loadTasks() {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return sampleTasks;
  }

  try {
    const parsedTasks = JSON.parse(storedTasks);
    return Array.isArray(parsedTasks) ? parsedTasks : sampleTasks;
  } catch {
    return sampleTasks;
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function handleFormSubmit(event) {
  event.preventDefault();

  const taskData = {
    id: taskIdInput.value || createTaskId(),
    bayLocation: bayLocationInput.value.trim(),
    sku: skuInput.value.trim(),
    description: descriptionInput.value.trim(),
    status: statusInput.value,
    priority: priorityInput.value,
    notes: notesInput.value.trim()
  };

  if (!isValidTask(taskData)) {
    return;
  }

  if (taskIdInput.value) {
    tasks = tasks.map((task) => (task.id === taskData.id ? taskData : task));
  } else {
    tasks = [taskData, ...tasks];
  }

  saveTasks();
  resetForm();
  render();
}

function isValidTask(task) {
  return (
    task.bayLocation &&
    task.sku &&
    task.description &&
    STATUSES.includes(task.status) &&
    PRIORITIES.includes(task.priority)
  );
}

function createTaskId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function render() {
  renderSummary();
  renderTasks();
}

function renderSummary() {
  const total = tasks.length;
  const counts = STATUSES.map((status) => ({
    label: status,
    value: tasks.filter((task) => task.status === status).length
  }));

  summaryGrid.innerHTML = [
    { label: "Total Tasks", value: total },
    ...counts
  ]
    .map(
      (item) => `
        <div class="summary-item">
          <span class="summary-value">${item.value}</span>
          <span class="summary-label">${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderTasks() {
  const visibleTasks =
    currentFilter === "All"
      ? tasks
      : tasks.filter((task) => task.status === currentFilter);

  if (visibleTasks.length === 0) {
    taskList.innerHTML = '<p class="empty-state">No tasks match this status.</p>';
    return;
  }

  taskList.innerHTML = visibleTasks.map(createTaskCard).join("");

  document.querySelectorAll("[data-edit-id]").forEach((button) => {
    button.addEventListener("click", () => startEdit(button.dataset.editId));
  });

  document.querySelectorAll("[data-done-id]").forEach((button) => {
    button.addEventListener("click", () => markDone(button.dataset.doneId));
  });
}

function createTaskCard(task) {
  const statusClass =
    task.status === "Done"
      ? "status-done"
      : task.status === "Issue"
        ? "status-issue"
        : "";
  const priorityClass = task.priority === "High" ? "priority-high" : "";
  const notes = task.notes || "No notes";
  const doneButton =
    task.status === "Done"
      ? ""
      : `<button type="button" class="primary-button" data-done-id="${escapeHtml(task.id)}">Mark Done</button>`;

  return `
    <article class="task-card">
      <div class="task-card-header">
        <div>
          <h3 class="task-title">${escapeHtml(task.description)}</h3>
          <div>${escapeHtml(task.bayLocation)} | SKU ${escapeHtml(task.sku)}</div>
        </div>
        <div class="task-actions">
          ${doneButton}
          <button type="button" class="secondary-button" data-edit-id="${escapeHtml(task.id)}">Edit</button>
        </div>
      </div>
      <div class="task-meta">
        <span class="badge ${statusClass}">${escapeHtml(task.status)}</span>
        <span class="badge ${priorityClass}">${escapeHtml(task.priority)} Priority</span>
      </div>
      <p class="task-notes">${escapeHtml(notes)}</p>
    </article>
  `;
}

function startEdit(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  taskIdInput.value = task.id;
  bayLocationInput.value = task.bayLocation;
  skuInput.value = task.sku;
  descriptionInput.value = task.description;
  statusInput.value = task.status;
  priorityInput.value = task.priority;
  notesInput.value = task.notes;
  formTitle.textContent = "Edit Task";
  cancelEditButton.classList.remove("hidden");
  bayLocationInput.focus();
}

function markDone(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, status: "Done" } : task
  );
  saveTasks();
  render();
}

function resetForm() {
  taskForm.reset();
  taskIdInput.value = "";
  priorityInput.value = "Medium";
  statusInput.value = "Not Started";
  formTitle.textContent = "Add Task";
  cancelEditButton.classList.add("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
