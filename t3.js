function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
  document.getElementById(`${tab}-tab`).classList.add('active');
}

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// To-do list
function addTask() {
  const input = document.getElementById("todoInput");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove(); // Click to remove
    document.getElementById("todoList").appendChild(li);
    input.value = '';
  }
}

// Calendar
function loadCalendar() {
  const now = new Date();
  const container = document.getElementById("calendarContainer");
  container.textContent = now.toDateString();
}
loadCalendar();

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
