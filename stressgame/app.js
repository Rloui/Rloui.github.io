// $(() => {

// })
// Pseudo Code

// create the 52 cards in the deck to be played with

// create a class for the outline of each card with a constructor

// constructor valuses color, suit, and values

////////////////
// Class Deck, creates outline for deck of cards
////////////////
class Deck {
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

////////////////
// Array to hold deck
////////////////
// create an array to hold the deck
const deck = []

////////////////
// Function creates deck
////////////////
// create a render deck function
const createDeck = () => {
    // use a loop to fill the deck array with card objects
    // first loop give card is color
    // for (let i = 0; i < cardColor.length; i++) {
        // first loop creates the card suit
        for (let j = 0; j < suits.length; j++) {
            // second loop creates the card value
            for (let k = 0; k < ranks.length; k++) {
                if(suits[j] === 'clubs' || suits[j] === 'spades') {
                    let suitColor = cardColor[0]
                    const deckCreation = new Deck(suits[j], ranks[k], suitColor)
                    deck.push(deckCreation)
                } else {
                    suitColor = cardColor[1]
                    const deckCreation = new Deck(suits[j], ranks[k], suitColor)
                    deck.push(deckCreation)
                }
            }
        }
    // }
}
createDeck()


//  create a shuffle function

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