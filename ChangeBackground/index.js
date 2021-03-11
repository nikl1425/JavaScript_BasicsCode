var colorList = ['red', 'blue', 'green']


function myFunction() {
    var random = Math.floor(Math.random() * 3);

    document.body.style.background = colorList[random]
}