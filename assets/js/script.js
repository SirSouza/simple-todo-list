/* Global variables */

/* Elements */
const inputTask = document.querySelector("#inputTask");
const button = document.querySelector(".buttonAddTask");
const activeTasks = document.querySelector(".ActiveTasks");
const completedTasks = document.querySelector(".completedTasks");
/* Clock */
const divClock = document.querySelector(".clock");

function updateClock() {
	const clock = new Date();

	const hour = clock.getHours().toString().padStart(2, "0");
	const min = clock.getMinutes().toString().padStart(2, "0");
	const sec = clock.getSeconds().toString().padStart(2, "0");

	const fullClock = `${hour}:${min}:${sec}`;
	divClock.textContent = fullClock;
}
updateClock();
setInterval(updateClock, 1000);

/* Calendar */
const divCalendar = document.querySelector(".calendar");

function updateCalendar() {
	const now = new Date();

	const day = now.getDate().toString().padStart(2, "0");
	const mouth = (now.getMonth() + 1).toString().padStart(2, "0");
	const year = now.getFullYear();

	const fullDate = `${day}/${mouth}/${year}`;
	divCalendar.textContent = fullDate;
}
updateCalendar();
setInterval(updateCalendar, 60000);

/* -------------------------------------------------------------------------------- */
/* ----------------------------------- Tasks ---------------------------------------*/
/* -------------------------------------------------------------------------------- */

/* Move tasks */
function moveToCompleted(li, checkbox) {
	checkbox.src = "./assets/images/checked.png";
	completedTasks.append(li);
}
function moveToActive(li, checkbox) {
	checkbox.src = "./assets/images/unchecked.png";
	activeTasks.append(li);
}

/* Delete tasks */
function deleteTasks(li) {
	li.remove();
}

function createTask() {
	if (inputTask.value.trim() === "") {
		alert("A tarefa não pode ser vazia");
	} else {
		const li = document.createElement("li");
		const newCheckbox = document.createElement("img");
		const taskContent = document.createElement("span");
		const trash = document.createElement("img");
		const task = document.createElement("div");
		newCheckbox.src = "./assets/images/unchecked.png";
		newCheckbox.className = "imageCheck";
		trash.src = "./assets/images/trash.png";
		trash.className = "trash";
		taskContent.textContent = inputTask.value;
		task.append(newCheckbox, taskContent);
		task.className = "task";
		newCheckbox.addEventListener("click", () => {
			if (li.parentElement === activeTasks) {
				moveToCompleted(li, newCheckbox);
			} else {
				moveToActive(li, newCheckbox);
			}
		});
		trash.addEventListener("click", () => {
			deleteTasks(li);
		});

		li.append(task, trash);
		activeTasks.append(li);
	}
	inputTask.value = "";
	inputTask.focus();
}
button.addEventListener("click", createTask);
inputTask.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		createTask();
	}
});
