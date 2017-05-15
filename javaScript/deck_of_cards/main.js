
function DeckConsturctor(name){
  if (!(this instanceof DeckConsturctor)) {
    // the constructor was called without "new".
    return new DeckConsturctor(name);
  }
  this.name = name;
  this._suits = [' of Spades', ' of Clubs', ' of Hearts', ' of Diamonds'];
  this._values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  this._fullDeck = [];
  this.arr = [];
  this.shuffle = shuffle;
  self = this;

} // closing constructor

DeckConsturctor.prototype.deckMaker = function(){
  //another way to make the deckMaker
  // suits.forEach(function(suit){
  //   values.forEach(function(values){
  //     self.cards.push(new Card(value, suit));
  //   })
  // })

  for (i = 0; i < this._suits.length; i++){
    for (x = 0; x < this._values.length; x++){
      arr = this._values[x] + this._suits[i];
      this._fullDeck.push(arr);
    }
  } // ending for loop
  return this.shuffle(); //This shuffles the deck right after it is made.
} // ending function deckMaker
function shuffle() { // Fisher–Yates shuffle!!!
  var m = this._fullDeck.length, t, i;
  console.log('shuffling the deck******************************')
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = this._fullDeck[m];
    this._fullDeck[m] = this._fullDeck[i];
    this._fullDeck[i] = t;
  }
  console.log(this._fullDeck);
  deck = this._fullDeck
  return this;
} // closing deckMaker prototype

var dealer = new DeckConsturctor("dealer");
console.log(dealer);
dealer.deckMaker().shuffle().shuffle(); // shuffeling the deck 3x
console.log('*************shuffeling done**************************');
console.log(deck.length);
console.log(deck);

function Player(name){
  if (!(this instanceof Player)) {
    // the constructor was called without "new".
    return new Player(name);
  }
  this.name = name;
}
Player.prototype.hand = function(){
  deck.pop
}
