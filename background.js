var taskList = document.getElementById("taskList");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var item = document.createElement("li");
    item.innerText = "document.getElementsByClassName()[0].value";
    taskList.appendChild(item);
})