let tasks = [];

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("\n--- Task List ---");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
        });
    }
}

function addTask(description) {
    tasks.push({ description, completed: false });
    console.log(`Task "${description}" added.`);
    displayTasks();
}

function removeTask(id) {
    if (id > 0 && id <= tasks.length) {
        const removedTask = tasks.splice(id - 1, 1);
        console.log(`Task "${removedTask[0].description}" removed.`);
        displayTasks();
    } else {
        console.log("Invalid task ID.");
    }
}

function toggleTaskCompletion(id) {
    if (id > 0 && id <= tasks.length) {
        tasks[id - 1].completed = !tasks[id - 1].completed;
        console.log(`Task "${tasks[id - 1].description}" marked as ${tasks[id - 1].completed ? 'completed' : 'incomplete'}.`);
        displayTasks();
    } else {
        console.log("Invalid task ID.");
    }
}

function updateTask(id, newDescription) {
    if (id > 0 && id <= tasks.length) {
        tasks[id - 1].description = newDescription;
        console.log(`Task ${id} updated to "${newDescription}".`);
        displayTasks();
    } else {
        console.log("Invalid task ID.");
    }
}


function searchTasks(query) {
    const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(query.toLowerCase()));
    if (filteredTasks.length > 0) {
        console.log("\n--- Search Results ---");
        filteredTasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
        });
    } else {
        console.log("No tasks found.");
    }
}


function showMenu() {
    console.log("\n--- Task Manager Menu ---");
    console.log("1. Add a task");
    console.log("2. Display all tasks");
    console.log("3. Toggle task completion");
    console.log("4. Remove a task");
    console.log("5. Update a task description");
    console.log("6. Search for a task by name");
    console.log("0. Exit");

    const option = prompt("Choose an option (type number): ");
    handleUserInput(option);
}

function handleUserInput(option) {
    switch (option) {
        case '1':
            const description = prompt("Enter task description: ");
            addTask(description);
            showMenu();
            break;
        case '2':
            displayTasks();
            showMenu();
            break;
        case '3':
            const toggleId = parseInt(prompt("Enter task ID to toggle completion: "));
            toggleTaskCompletion(toggleId);
            showMenu();
            break;
        case '4':
            const removeId = parseInt(prompt("Enter task ID to remove: "));
            removeTask(removeId);
            showMenu();
            break;
        case '5':
            const updateId = parseInt(prompt("Enter task ID to update: "));
            const newDescription = prompt("Enter new description: ");
            updateTask(updateId, newDescription);
            showMenu();
            break;
        case '6':
            const query = prompt("Enter task name to search: ");
            searchTasks(query);
            showMenu();
            break;
        case '0':
            console.log("Exiting Task Manager...");
            break;
        default:
            console.log("Invalid option. Try again.");
            showMenu();
            break;
    }
}

console.log("Task Manager initialized. Type `showMenu()` to start.");
