let taskList = [];

function addTask() {
  let input = document.getElementById("input-task").value;
  if (input === "") {
    alert("Please enter a task.");
    return;
  }
  for(let task of taskList){
    if(task.task === input) {
      let completionString = task.completed ? "and it is completed." : "and it is ongoing." ;  
      alert("Task already exists, " + completionString); 
      document.getElementById("input-task").value = '';
      return;
    }
  }
  taskList.push({ task: input, completed: false });
  displayTaskList();
  document.getElementById("input-task").value = "";
}

function updateTask(index) {
  let newInput = prompt("Update task:", taskList[index].task);
  if (newInput === null || newInput === "") {
    return;
  }
  taskList[index].task = newInput;
  displayTaskList();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  displayTaskList();
}

function toggleCompleted(index) {
  taskList[index].completed = !taskList[index].completed;
  displayTaskList();
}

function displayTaskList() {
  let taskListUl = document.getElementById("task-list");
  taskListUl.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let taskLi = document.createElement("li");
    let taskText = document.createTextNode(taskList[i].task);
    taskLi.appendChild(taskText);
    if (taskList[i].completed) {
      taskLi.style.textDecoration = "line-through";
    }
    let editButton = document.createElement("button");
    let editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    editButton.onclick = function () {
      updateTask(i);
    };
    taskLi.appendChild(editButton);
    let deleteButton = document.createElement("button");
    let deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    deleteButton.onclick = function () {
      deleteTask(i);
    };
    taskLi.appendChild(deleteButton);
    let completeButton = document.createElement("button");
    let completeButtonText = document.createTextNode(
      taskList[i].completed ? "Incomplete" : "Complete"
    );
    completeButton.appendChild(completeButtonText);
    completeButton.onclick = function () {
      toggleCompleted(i);
    };
    taskLi.appendChild(completeButton);
    taskListUl.appendChild(taskLi);
  }
}

function showRemaining() {
    let taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
      let taskLi = document.createElement("li");
      let taskText = document.createTextNode(taskList[i].task);
      taskLi.appendChild(taskText);
      if (taskList[i].completed) {
        continue;
      }
      let editButton = document.createElement("button");
      let editButtonText = document.createTextNode("Edit");
      editButton.appendChild(editButtonText);
      editButton.onclick = function () {
        updateTask(i);
      };
      taskLi.appendChild(editButton);
      let deleteButton = document.createElement("button");
      let deleteButtonText = document.createTextNode("Delete");
      deleteButton.appendChild(deleteButtonText);
      deleteButton.onclick = function () {
        deleteTask(i);
      };
      taskLi.appendChild(deleteButton);
      let completeButton = document.createElement("button");
      let completeButtonText = document.createTextNode(
        taskList[i].completed ? "Incomplete" : "Complete"
      );
      completeButton.appendChild(completeButtonText);
      completeButton.onclick = function () {
        toggleCompleted(i);
      };
      taskLi.appendChild(completeButton);
      taskListUl.appendChild(taskLi);
    }
  }
  