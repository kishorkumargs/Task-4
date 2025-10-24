// Function to add a task
function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const ul = document.getElementById("todoList");
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;
        span.classList.add("task-text");

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);
        editButton.classList.add("edit-btn");

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTask(li);
        removeButton.classList.add("rm-btn");

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => toggleTaskCompletion(span);
        completeButton.classList.add("complete-btn");

        // Appends buttons and text to the list item
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        li.appendChild(completeButton);

        
        li.classList.add("todo-item");

        // Appends list item to the list
        ul.appendChild(li);

        input.value = "";
    }
    else {
        alert("Please enter a valid task.");
    }
}
// Function to edit an existing task
function editTask(span) {
    // Prompt the user to enter a new task description
    const newTask = prompt("Edit your task:", span.textContent);
    
    // Update the task only if the input is not null or empty
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim(); 
    }
}

// Function to remove a task
function removeTask(task){
    const ul = document.getElementById("todoList"); // Get the list container
    ul.removeChild(task); // Remove the specified task element
}

// Function to mark a task as completed
function toggleTaskCompletion(span) {
    span.classList.toggle("completed");
}

// Event listener for the Add Task button
document.getElementById("task-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
document.getElementById("add-btn").addEventListener("click", (event) => {
    addTask();
});