const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '')
    {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li"); // creating html element
        li.innerHTML = inputBox.value;  // storing the value of innerBox in it
        listContainer.appendChild(li);   //print
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; //unicode for multiplication/cross sign "x"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

 listContainer.addEventListener ("click", function(e) {
 
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("task", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("task");
}
showTask();