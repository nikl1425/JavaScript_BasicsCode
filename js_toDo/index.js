

var taskDisplay = document.getElementById('tasks')
var count = 0
var today = (new Date()).toISOString().split('T')[0];

function myFunction(event) {
    var tasks = []
    var deadlines = []
    event.preventDefault();
    var myTodo = document.getElementById("text-value");
    var myDeadline = document.getElementById("date-value")
    var myTuple = [myTodo.value, myDeadline.value]
    tasks.push(myTuple)
    //deadlines.push(myDeadline.value)
    updateTasks(taskDisplay, tasks)
    console.log(tasks)
}

function updateTasks(list, array){
    count += 1
    array.forEach(element => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        let checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        button.innerHTML = "Remove Task"
        list.appendChild(li) 
        li.innerHTML = `Task: ${element[0]} Created: ${today} Deadline: ${element[1]} Solved: `
        li.appendChild(checkBox)
        li.appendChild(button)
        console.log(element)
        button.onclick = (() => {
            count -= 1
            taskDisplay.removeChild(li)
        })
        checkBox.onclick = (() => {
            if (checkBox.checked) {
                li.style.backgroundColor = "green"
            }
            if (!checkBox.checked) {
                li.style.backgroundColor = "cyan"
            }         
        })
    });
}