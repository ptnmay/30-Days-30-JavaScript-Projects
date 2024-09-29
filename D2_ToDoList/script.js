const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    toggleDelAllBtn();
}

function toggleDelAllBtn() {
    const delAll = document.getElementById("del-all-container");
    if (listContainer.children.length > 0) {
        delAll.style.display = "block";
    } else {
        delAll.style.display = "none";
    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        // toggleDelAllBtn();
    }
    else if (e.target.tagName === "SPAN") {
        if (confirm("Are you sure you want to delete this tasks?")) {
            e.target.parentElement.remove();
            saveData();
            toggleDelAllBtn();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
    toggleDelAllBtn(); // Ensure button visibility based on loaded tasks
}

function delAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listContainer.innerHTML = '';
        saveData();
        toggleDelAllBtn();
    }
}
showTask(); //reload and the data still there


