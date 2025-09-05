// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

let taskList = [];

  let newTask = {
    id:  taskList.length + 1,
    title: task1Title,
    description: task1Description,
    status: task1Status,
  };

 taskList.push(newTask);

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

  newTask = {
    id:  taskList.length + 1,
    title: task2Title,
    description: task2Description,
    status: task2Status,
  };

 taskList.push(newTask);

 // Repeat the same steps for task 3
const task3Title = prompt("Enter task 3 title:");
const task3Description = prompt("Enter task 3 description:");
let task3Status = prompt(
  "Enter task 3 status (todo, doing, done):"
).toLowerCase();

while (
  task3Status !== "todo" &&
  task3Status !== "doing" &&
  task3Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task3Status = prompt(
    "Enter task 3 status (todo, doing, done):"
  ).toLowerCase();
}

  newTask = {
    id:  taskList.length + 1,
    title: task3Title,
    description: task3Description,
    status: task3Status,
  };

 taskList.push(newTask);

 //Alert the user they've reached the task limit
 alert("There are enough tasks on your board, please check them in the console.");


// Log all tasks to the console
console.log("All tasks: ", taskList);

// Check if any task is done, and log it if so
const doneTasks = taskList.filter(t => t.status === "done");
console.log("Completed tasks: ", doneTasks);


// If neither task1, task2 or task3 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done" && task3Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
