var container = document.getElementById("container");
var upperContainer = document.getElementById("foundHeading")
container.style.width = "600px";
container.style.height = "400px";
container.style.position ="relative"
container.style.border = "1px solid #000"
container.style.whiteSpace = "nowrap"
var numberOfImages = 6;
let animalList = []
var currentFlipCount = 0
var maxFlipped = 2
let girafPair = []
let pantherPair = []
let elephantPair = []
winPantherTricker = false;
winGirafTricker = false;
winElephantTricker = false;
var girafFound = document.createElement("h1")
var pantherFound = document.createElement("h1")
var elephantFound = document.createElement("h1")

function SquareImg() {
    var squareImg = document.createElement('div')
    squareImg.style = "width: 200px; height: 200px; background-color: blue; position: relative; border: 1px solid #000; box-sizing:border-box;float: left;"
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
        flipped = false;
    
    var object = {
        picture: i,
        square: s,
        flipped: flipped
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
    
    idCounter = 0

    listOfAnimal.forEach(element => {
        element.id = idCounter
        idCounter += 1
    });
    return(
        animalList = shuffle(listOfAnimal)
    )
}

CreateListOfSets(SquareImageSet)
//console.log(animalList)


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


  function checkWin(element){
      // _------------GIRAF--------------
     if (element.id == 1 || element.id == 0){
         if(element.flipped == true){
            girafPair.push(element)
         }
         if(element.flipped == false){
            girafPair.pop()
         }
     }
     
 
     
     if(girafPair.length >= 2){
         girafFound.innerHTML = "Found the girafs"
         girafFound.id = "girafHeading"
         if (winGirafTricker == false){
            console.log("tricker")
            currentFlipCount -= 2
            winGirafTricker = true
           
        }
         
     }
     if(girafPair.length != 2){
         girafFound.innerHTML = ""
     }
     upperContainer.appendChild(girafFound)
    // _------------PANTHER--------------
    if (element.id == 2 || element.id == 3){
        if(element.flipped == true){
           pantherPair.push(element)
        }
        if(element.flipped == false){
           pantherPair.pop()
        }
    }
    
   
    
    if(pantherPair.length >= 2){
        pantherFound.innerHTML = "Found the Panthers"
        pantherFound.id = "girafHeading"
        if (winPantherTricker == false){
            console.log("tricker")
            currentFlipCount -= 2
            winPantherTricker = true
           
        }
        
        
    }
    if(pantherPair.length != 2){
        pantherFound.innerHTML = ""
    }
    upperContainer.appendChild(pantherFound)
    // _------------ELEPHANT--------------
    if (element.id == 4 || element.id == 5){
        if(element.flipped == true){
           elephantPair.push(element)
           
        }
        if(element.flipped == false){
           elephantPair.pop()
        }
    }
    
  
    
    if(elephantPair.length >= 2){
        elephantFound.innerHTML = "Found the Elephants"
        elephantFound.id = "girafHeading"
        if (winElephantTricker == false){
            console.log("tricker")
            currentFlipCount -= 2
            winElephantTricker = true
            console.log(winElephantTricker)
            console.log(currentFlipCount)
        }
    }
    if(elephantPair.length != 2){
        elephantFound.innerHTML = ""
    }
    upperContainer.appendChild(elephantFound)

    };



  function Game(callback, callbackTwo){
      id_counter = 0
      
      animalList.forEach(element => { 
        var innerContainer = document.createElement("div")
        innerContainer.style.width = "200px"
        innerContainer.style.height = "200px"
        innerContainer.style = "box-sizing:border-box;float: left;"
        element.picture.style.display = "none"
        innerContainer.appendChild(element.square)
        innerContainer.appendChild(element.picture)
        
          element.square.onclick = function() {
            if(currentFlipCount < maxFlipped){
              element.flipped = true;
              currentFlipCount += 1
              console.log(currentFlipCount)
              callback(element)
              
              //console.log(element)
              //console.log(currentFlipCount)
            if (element.flipped === false){
                element.square.style.display = "block"
                element.picture.style.display = "none"

                

                // CHECKING WIN CONDITION
                if (animalList[0].id == 1 && animalList[0].flipped == true){
                    console.log("win")
                }
            }
            else {
                element.picture.style.display = "block"
                element.square.style.display = "none"
            }
            }
        }
        
        element.picture.onclick = function(){
            currentFlipCount -= 1
            element.flipped = false;
            callback(element)
            if(element === true){
                element.square.style.display = "none"
                element.picture.style.display = "block"
                
            }
            else {
                element.picture.style.display = "none"
                element.square.style.display = "block"
            }
        }
        container.appendChild(innerContainer)
        console.log(innerContainer)
      });  
  }

  Game(checkWin)

  function checkWinTwo(){
      console.log("hi")
      console.log(pantherPair)
      if (pantherPair.length == 2){
        console.log("currentFlipCount")
        currentFlipCount -= 2          
      }
  }