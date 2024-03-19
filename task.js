
// Function to add a task to the UI
function addTaskToList(summary, dueDate) {
    let taskList = document.getElementById("taskList");

    let createTask = document.createElement("div");
    createTask.classList.add("task");

    // Inside task element, create the checkbox and content
    let parent = document.createElement("div");
    parent.classList.add("unChecked");

    // Create the checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "myCheckbox");

    // Create the label
    let label = document.createElement("label");
    label.setAttribute("for", "myCheckbox");
    label.textContent = summary;
    label.classList.add("label");

    // Create a span element for the due date
    let span = document.createElement("span");
    // Create a new element inside the span
    let icon = document.createElement("span");
    icon.innerHTML = '<i class="fa-regular fa-clock"></i>';
    icon.classList.add("icon")
    // Append the new element to the span
    span.appendChild(icon);
    // Create a text node for the due date to display both icon and due date
    let dueDateNode = document.createTextNode(dueDate);

    // Append the text node to the span
    span.appendChild(dueDateNode);

    // Add classes to the span
    span.classList.add("due-date");

    // Append the checkbox, label, and span to the parent div
    parent.appendChild(checkbox);
    parent.appendChild(label);
    parent.appendChild(span);

    // Append the parent div to the task element
    createTask.appendChild(parent);

    // Append the created task to the task list
    taskList.appendChild(createTask);

    // Update delete button visibility
    updateDeleteButtonVisibility();
}

// Function to update the visibility of the delete button
function updateDeleteButtonVisibility() {
    let tasks = document.querySelectorAll('.task');
    let deleteButton = document.getElementById('deleteButton');

    // If there are tasks, display the delete button, otherwise hide it
    if (tasks.length > 0) {
        deleteButton.style.display = 'block';
    } else {
        deleteButton.style.display = 'none';
    }
}

// Function to save tasks to local storage
function saveTaskToLocalStorage(summary, dueDate) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ summary, dueDate });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove checked tasks
function removeCheckedTasks() {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (task.querySelector('input[type="checkbox"]').checked) {
            task.remove();
            updateLocalStorage();
        }
    });

    // Update delete button visibility after removal
    updateDeleteButtonVisibility();
}

// Function to update local storage after removing tasks
function updateLocalStorage() {
    let tasks = document.querySelectorAll('.task');
    let updatedTasks = [];
    tasks.forEach(task => {
        let summary = task.querySelector('.label').textContent;
        let dueDate = task.querySelector('.due-date').textContent;
        updatedTasks.push({ summary, dueDate });
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Event listener for add task button
document.getElementById("add").addEventListener("click", function () {
    document.getElementById('popup').style.display = "block";
    document.querySelector('.overlay').style.display = 'block';
});

// Event listener for cancel popup button
document.getElementById("cancelPopup").addEventListener("click", function () {
    document.getElementById('popup').style.display = "none";
    document.querySelector('.overlay').style.display = 'none';
});

// Event listener for save button
document.getElementById("save").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';

    // Get values from form fields
    var summary = document.getElementById("summary").value;
    var dueDate = document.getElementById("date").value;

    // Add task to UI
    addTaskToList(summary, dueDate);

    // Save task to local storage
    saveTaskToLocalStorage(summary, dueDate);

    // Update delete button visibility after adding task
    updateDeleteButtonVisibility();
});

// Event listener for logout button
document.getElementById("logout").addEventListener("click", function () {
    // Clear any session data or authentication tokens
    // For example, if using sessionStorage:
    // sessionStorage.clear();
    // If using cookies:
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear username cookie

    // Redirect to the login page
    window.location.href = "index.html";
});

// Event listener for delete button
document.getElementById("deleteButton").addEventListener("click", function () {
    removeCheckedTasks();
});

// Load tasks from local storage when the page loads
window.addEventListener('load', function () {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToList(task.summary, task.dueDate);
    });

    // Update delete button visibility after loading tasks
    updateDeleteButtonVisibility();
});
