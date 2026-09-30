// Select elements
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        // Create li
        const li = document.createElement("li");

        li.classList.add("task");

        // Create task text
        const span = document.createElement("span");

        span.textContent = task.text;

        // Add completed class
        if (task.completed) {
            span.classList.add("completed");
        }

        // Create complete button
        const completeButton = document.createElement("button");

        completeButton.textContent = "Complete";

        completeButton.dataset.action = "complete";
        completeButton.dataset.index = index;


        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-btn");

        deleteButton.dataset.action = "delete";
        deleteButton.dataset.index = index;


        // Add elements to li
        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);


        // Add li to ul
        taskList.appendChild(li);

    });
}


// Add task
function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";

    displayTasks();
}


// Save tasks
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// Add button event
addBtn.addEventListener("click", addTask);


// Enter key event
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Event delegation
taskList.addEventListener("click", function(event) {

    const button = event.target;

    if (button.tagName !== "BUTTON") {
        return;
    }

    const action = button.dataset.action;

    const index = Number(button.dataset.index);


    // Complete task
    if (action === "complete") {

        tasks[index].completed = !tasks[index].completed;

    }


    // Delete task
    if (action === "delete") {

        tasks.splice(index, 1);

    }


    saveTasks();

    displayTasks();

});


// Load saved tasks
displayTasks();