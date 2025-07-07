function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // Mark done on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Right click to delete
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
