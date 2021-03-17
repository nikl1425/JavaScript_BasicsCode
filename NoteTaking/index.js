
let textValue = document.getElementById("notes")
let myNotes = document.getElementById("myNotes")
let container = document.getElementById("container")
let title = document.getElementById("title")

function myObject(){
    nameOfTitle: "";
    textOfNote: "";
}

function myFunction(event){
    event.preventDefault();
    var hi = textValue.value
    var ho = title.value
    myObject.nameOfTitle = ho;
    myObject.textOfNote = hi;
    console.log(hi)
    var noteList = []
    noteList.push(myObject)
    noteList.forEach(element => {
        noteRow = document.createElement('li')
        noteRow.innerHTML = element.nameOfTitle
        var thisText = element.textOfNote;
        noteRow.onclick = () => myFun(thisText)
        myNotes.appendChild(noteRow)
    });
}
function myFun(input){
    console.log("clicked")
    var d = document.createElement("div")
    d.style = "width:300px; margin-left:25%;"
    var t = document.createElement("p")
    t.innerHTML = input
    b = document.createElement("button");
    this

    b.onclick = function() {
        container.removeChild(d)
    }
    b.innerHTML = "remove this"
    d.appendChild(t)
    d.appendChild(b)
    container.appendChild(d)
    
}

