var myPurchase = document.getElementById("purchase")
var myCost = document.getElementById("cost")
var purchaseDate = document.getElementById("purchaseDate")
var myList = document.getElementById("myList")
var ExpenseObject = []
var holderList = []
var myForm = document.getElementById("myForm")
var mySum = document.getElementById("sum")




function myFunction(event, callback) {
    event.preventDefault();
    const holderArray = []
    
    ExpenseObject.push({
        names: myPurchase.value,
        expense: myCost.value,
        dateOfExp: purchaseDate.value
    })
    holderArray.push(ExpenseObject)

    if (myPurchase.value === ''){
        alert("you have to type a name")
        myForm.reset();
        return false
    }
    if (!myCost.value){
        alert("you have to type a cost")
        myForm.reset();
        return false
    }
    if (!purchaseDate.value){
        alert("you have to type a date")
        myForm.reset();
        return false
    }
    

    ExpenseObject.forEach(element => {
        var newRow = document.createElement("li");
        newRow.innerHTML = `name = ${element.names} cost = ${element.expense}€ date = ${element.dateOfExp}`
        myList.appendChild(newRow)
        holderList.push(element)
        updateSum(holderList)
        console.log(holderList)
        ExpenseObject.pop(element)
    });

    
    myForm.reset();

}

function updateSum(sequence){
    var sum = Number(0)
    sequence.forEach (function(element) {
        var costs = Number(element.expense)
        console.log(element.expense)
        sum += costs
        mySum.innerHTML = `Total of expends = ${sum}€`
    });
    
    
}
