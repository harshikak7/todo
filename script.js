const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("li-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerText = inputBox.value;

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
    listCont.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Click actions
listCont.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save to localStorage
function saveData() {
    localStorage.setItem("data", listCont.innerHTML);
}

// Restore on reload
function restore() {
    listCont.innerHTML = localStorage.getItem("data") || "";
}

restore();
