function newTask(){
    let listItem = document.createElement("li"); 
    let box = document.createElement("input")
    box.setAttribute("type", "checkbox");
    document.getElementById("tasklist").appendChild(listItem);
    listItem.appendChild(box);
    listItem.innerHTML = listItem.innerHTML + document.getElementById("inputTask").value;
    listItem.addEventListener("click", completeTask);
}

function completeTask(){
    let completedTasks = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < completedTasks.length; i++)
    {
        if(completedTasks[i].checked)
        {
            completedTasks[i].parentNode.setAttribute("class", "checked");
        }
    }   
}

const removeTask = () => {
    let removedTasks = document.querySelectorAll("input[type=checkbox]");
    console.log("in remove");
    for (let i = 0; i < removedTasks.length; i++)
    {
        if(removedTasks[i].checked)
        {
            document.getElementById("tasklist").removeChild(removedTasks[i].parentNode);
            console.log(removedTasks[i]);
        
        }
    } 
   
}









