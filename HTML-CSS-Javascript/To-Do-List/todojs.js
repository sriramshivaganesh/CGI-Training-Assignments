// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteButton = document.createElement("span");

    taskSpan.innerText = taskText;
    deleteButton.innerText = "Delete";

    deleteButton.classList.add("delete");

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Add event listener to mark a task as complete
    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    // Add event listener to delete a task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
}

// Add event listener to the "Add" button
document.getElementById("addTask").addEventListener("click", addTask);

// Add event listener to the input field for adding a task when Enter is pressed
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
