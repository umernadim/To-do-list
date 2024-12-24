// Select the input, button, and task list
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task) {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = task;

        // Add a delete button to the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Add functionality to delete the task
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteBtn);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input box
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
