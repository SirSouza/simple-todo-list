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
