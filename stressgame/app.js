// $(() => {

// })
// Pseudo Code

// create the 52 cards in the deck to be played with

// create a class for the outline of each card with a constructor

// constructor valuses color, suit, and values

////////////////
// Class Deck, creates outline for deck of cards
////////////////
class Card { // holds outline for a card
    constructor (suit, rank, color) {
        this.suit = suit
        this.rank = rank
        this.color = color
    }
}

////////////////
// Arrays for card info
////////////////
// suits: hearts, diamonds, clubs, spades
const suits = ['clubs', 'diamonds', 'hearts', 'spades']

// color: red and black
const cardColor = ['black', 'red']

// ranks: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

// this array to holds the deck
const deck = []

////////////////
// Function creates deck
////////////////
const createDeck = () => { // instantiates each card in deck
    // use a loop to fill the deck array with card objects
    // first loop creates the card suit
    for (let j = 0; j < suits.length; j++) {
        // second loop creates the card value
        for (let k = 0; k < ranks.length; k++) {
            // if else statement specifies the color of the card
            if(suits[j] === 'clubs' || suits[j] === 'spades') {
            let suitColor = cardColor[0]
            const deckCreation = new Card(suits[j], ranks[k], suitColor)
                deck.push(deckCreation)
            } else {
                suitColor = cardColor[1]
                const deckCreation = new Card(suits[j], ranks[k], suitColor)
                deck.push(deckCreation)
            }
        }
    }
}
// a deck of 52 cards are created
createDeck() 

////////////////
// Function re sizes deck baised on playing mode
////////////////
const deckSizer = () => { // returns resized deck array ofr player mode
    let playersMode = prompt('what mode do you want to play in Mult-player or Single player? Type Single or Mult below')
    // resizes deck for multi player mode elss if single player mode
    if (playersMode === 'Mult' || playersMode === 'mult') {
        return deck
    } else if (playersMode === 'Single' || playersMode === "single") {
        for (let i = 0; i < deck.length; i++) {
            if (i === 7 || i === 14 || i === 21 || i === 28) {
                for (let j = 0; j < 6; j++){
                    deck.splice(i, 1)
                }
            }
        }
        return deck
    }
}
let playingDeck = deckSizer()

////////////////
// Function Shuffles Deck
////////////////
const shuffleDeck = () => { // returns shuffled playingcards array
    // one loop shuffles once 
    for (let i = 0; i < 500; i++) {
        let firstCard = Math.floor(Math.random() * playingDeck.length)
        let secondCard = Math.floor(Math.random() * playingDeck.length)
        let hold = playingDeck[firstCard]

        // swaps card from the first position to the second position
        playingDeck[firstCard] =playingDeck[secondCard] 
        //swaps card from the secons position the the first position
        playingDeck[secondCard] = hold

    }
    return playingDeck
}
shuffleDeck()

// create a deal function
    // for multiplayer or single player
    // of it works for both

// create deck flip up function

// create deck flip down function

// create count down function

// create a player selcection/comparison function
    // potentially not needed

// create winn logic
    // if player filps all decks up display stress
    // check finctuion checking all the deck
    // display all matched or unmatched
    // diplay win or loss