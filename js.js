var LIST = [
    "frozen burritoes",
    "bannana foster",
    "egg muffin with egg"
]

var BTN = document.getElementById("myButton");
var doThings = function(event){
    alert("Nobody likes gus");
    console.log(event);    ;
}

for(let i=0; i<LIST.length;i++){
    var newBTN = BTN.cloneNode(true);
    newBTN.innerHTML = LIST[i];
    document.body.append(newBTN);

    newBTN.addEventListener("click", doThings);
}

var TEMP = document.getElementByID("temp");
var TARGET = document.getElementByID("target");

var CARD = TEMP.querySelector(".card");

for(var i = 0; count < 5; i++){
    var copyCard = CARD.cloneNode(true);
    TARGET.append(copyCard);
}
