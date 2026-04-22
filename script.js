let input = document.querySelector("#input_box");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

let tasks = [];

// Load tasks from localStorage
let savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  showTasks();
}

btn.addEventListener("click", function () {
  let data = input.value;
  if (data.trim() !== "") {
    // Store task as object with text and completed status
    tasks.push({ text: data, completed: false });
    input.value = "";
    showTasks();
  }
});

function showTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tasks[i].completed;

    // Add strikethrough style when checkbox is checked
    let taskText = document.createElement("span");
    taskText.textContent = tasks[i].text;

   

    // Toggle completed status when checkbox changes
    checkbox.onchange = function () {
      tasks[i].completed = checkbox.checked;
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteTask(i);
    };

    // Append elements to li
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}
