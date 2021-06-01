var taskList = document.getElementById("taskList");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var item = document.createElement("li");
    if (document.getElementsByClassName("at")[0].value != "") {
        var data = "<button onclick='remove(event)'>-</button> <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+document.getElementsByClassName("at")[0].value+"</p>"
        item.innerHTML = data ;
        taskList.appendChild(item);
    }

    document.getElementsByClassName("at")[0].value = "";
})

function remove(e){
    
}