// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("formMsg");

    if (!name || !email) {
        msg.textContent = "All fields are required.";
        msg.style.color = "red";
        return;
    }

    const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
        msg.textContent = "Invalid email format.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
    this.reset();
});

// TO-DO LIST + NOTIFICATIONS
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const reminderInput = document.getElementById("reminderTime");
    const taskText = taskInput.value.trim();
    const reminderTime = reminderInput.value;

    if (taskText === "") return alert("Enter a task!");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = () => li.classList.toggle("completed");

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    if (reminderTime) scheduleNotification(taskText, reminderTime);

    taskInput.value = "";
    reminderInput.value = "";
}

function scheduleNotification(task, time) {
    if (!("Notification" in window)) return;

    Notification.requestPermission().then((perm) => {
        if (perm !== "granted") return;

        const taskTime = new Date(time).getTime();
        const now = new Date().getTime();
        const delay = taskTime - now;

        if (delay > 0) {
            setTimeout(() => {
                new Notification("⏰ Task Reminder", {
                    body: `Reminder: ${task}`,
                });
            }, delay);
        }
    });
}