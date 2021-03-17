var container = document.getElementById("container");
container.style.width = "600px";
container.style.height = "405px";
container.style.position ="relative"
container.style.border = "1px solid #000"
var numberOfImages = 6;
let animalList = []
var flipped = 0;

function SquareImg() {
    var squareImg = document.createElement('div')
    squareImg.style = "width: 200px; height: 200px; background-color: blue; position: relative; border: 1px solid #000;"
    return (
        squareImg
    )
}

function GirafImg() {
    var girafImg = document.createElement('img');
    girafImg.setAttribute("src", "./assets/Giraf.jpeg")
    girafImg.setAttribute("width", "200");
    girafImg.setAttribute("height", "200");
    //container.appendChild(girafImg)
    return (
        girafImg
    )
} 

function PantherImg() {
    var pantherImg = document.createElement('img');
    pantherImg.setAttribute("src", "./assets/Panther.jpeg")
    pantherImg.setAttribute("width", "200");
    pantherImg.setAttribute("height", "200");
    //container.appendChild(pantherImg)
    return (
        pantherImg
    )
}

function ElephantImg() {
    var elephantImg = document.createElement('img');
    elephantImg.setAttribute("src", "./assets/Elephant.jpeg")
    elephantImg.setAttribute("width", "200");
    elephantImg.setAttribute("height", "200");
    //container.appendChild(elephantImg)
    return (
        elephantImg
    )
}



function SquareImageSet(callbackA, callbackB) {
    let i = callbackA(), 
        s = callbackB(),
        count = 0;
    
    var object = {
        picture: i,
        square: s,
        count: count
    }
    
    object.square.onclick = object.count + 1;
    
    //console.log(thisSet)
    return ( 
        object
    )
}


function CreateListOfSets(callback){
    let girafSetOne = callback(GirafImg, SquareImg)
    let girafSetTwo = callback(GirafImg, SquareImg)
    let pantherSetOne = callback(PantherImg, SquareImg)
    let pantherSetTwo = callback(PantherImg, SquareImg)
    let ElephantSetOne = callback(ElephantImg, SquareImg)
    let ElephantSetTwo = callback(ElephantImg, SquareImg)

    var listOfAnimal = []
    listOfAnimal.push(girafSetOne, girafSetTwo, pantherSetOne, pantherSetTwo, ElephantSetOne, ElephantSetTwo)
    return(
        animalList = shuffle(listOfAnimal)
    )
}

CreateListOfSets(SquareImageSet)
console.log(animalList)


function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function Game(){
      animalList.forEach(element => {
          element.picture.onclick = function() {console.log(this)}
          
          container.appendChild(element.picture)
          console.log(element)
      });
  }

  Game()