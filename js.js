var LIST = [
    "frozen burritoes",
    "bannana foster",
    "egg muffin with egg"
]

var BTN = document.getElementById("myButton");
var doThings = function(event){
    alert("it works!");
    console.log(event);    ;
}

for(let i=0; i<LIST.length;i++){
    var newBTN = BTN.cloneNode(true);
    newBTN.innerHTML = LIST[i];
    document.body.append(newBTN);

    newBTN.addEventListener("click", doThings);
}

var LIST = [
    {
        magicMetal: "silver!",
        bonus:4
    },
    {
        magicMetal: "silver!",
        bonus:4
    },
    {
        magicMetal: "silver!",
        bonus:4
    },
];


var TEMP = document.getElementByID("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementByID("target");



class Game{
    constructor(players, deck){
        this.players = players;
        this.deck = deck;
        this.turn = 0;
        this.turnCount = 3;
        this.activePlayer = players[0];
        this.play();
        
    }
    notOver = function(){
        return this.turn++ == 2;
    }

    play = function(){
        this.deck.shuffle();
        for(var i = 0; i < this.players.length; i++)
            this.deck.deal(this.players[i]);
        
        while( this.notOver() ){
            alert(this.activePlayer.name + " is still playing ");
        }
        
        alert("wtf");
    };

    notOver(){
        alert("that's it, I'm done!");
            return true;
    }
}


class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(){

    }
}


class Deck{
    constructor(num){
        this.cardCount = num;
        this.cards = [];
        this.make();
    }
    deal(player){
        alert( "I dealt to " + player.name);
    }
    
    make(){
        for(var i = 0; i < this.cardCount; i++){
            var card = new Card(i); 
            this.cards.push(card);
        }

    return this.cards;
    }
    shuffle(){
        alert("I shuffled!");
    }
}


class Card{
    constructor(num){
        this.id = num;
        this.suit = Math.floor(num/13);
        this.value = num % 13 ;
        this.background = "Mine.svg";
        this.suits = ["H", "S", "C", "D"];
    }

    getSuit(){
        return suit;
    }

    draw(){
        var copyCard = CARD.cloneNode(true);   
        copyCard.innerHTML = "silver" + this.id;
        copyCard.style.backgroundPositionX = -(this.id) + "00%";
        copyCard.style.backgroundPositionY = Math.floor(this.id/13) + "00%";
        TARGET.append(cardCopy);
    }
}


var playerz = [];
playerz[0] = new Player("bill");
playerz[1] = new Player("sue");
var marieAntoinet = new Deck(52);
new Game(playerz, marieAntoinet);



var makeDeck = function(howMany){
    var deck = [];

    for(var i = 0; i < howMany; i++){
        var card = new Card(i); 
        deck.push(card);
    }

    return deck;
}


var shuffledDeck = function(deck){
   
    for(var i = 0; i < deck.length; i++){
        // swap places for shuffle
        var rnd = Math.floor(Math.random() * deck.length);
        var card1 = deck[i];
        var card2 = deck[rnd];
        deck[i] = card2;
        deck[rnd] = card1;
    }
    return deck;
}


var DECK = new Deck(52);
DECK.shuffle();
Deck.deal();