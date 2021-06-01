var taskList = document.getElementById("taskList");
var form = document.getElementById("form");
var tasks = []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementsByClassName("at")[0].value != "") {
        tasks.push(document.getElementsByClassName("at")[0].value)
        render();
    }

    document.getElementsByClassName("at")[0].value = "";
})


function render() {

    taskList.innerHTML = "";
    tasks.forEach((val, index) => {
        var item = document.createElement("li");
        var data = "<button name='"+index+"' class='del'>-</button> <p> &nbsp; &nbsp; &nbsp; &nbsp;" + val + "</p>"
        item.innerHTML = data;
        taskList.appendChild(item);
    })
    addButtonEvents();
}

function addButtonEvents(){
    var buttons = document.getElementsByClassName("del");
    for(button of buttons){
        button.addEventListener("click", (e)=>{
            remove(e.srcElement.name)
        })
    }
}

function remove(index) {
   console.log(index);
   tasks.splice(parseInt(index), 1);
   render();
}