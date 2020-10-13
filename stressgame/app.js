// $(() => {

// })
// Pseudo Code

// create the 52 cards in the deck to be played with

// create a class for the outline of each card with a constructor

// constructor valuses color, suit, and values

////////////////
// Class Deck, creates outline for deck of cards
////////////////
class Card {
	// holds outline for a card
	constructor(suit, rank, color) {
		this.suit = suit
		this.rank = rank
		this.color = color
	}
}

class Player {
	constructor(name) {
		this.name = name
	}
	pileOne = []
	pileTwo = []
	pileThree = []
	pileFour = []
	pileFive = []
	pileSix = []
}
const playerOne = new Player('Roger')
// console.log(playerOne)

////////////////
// Arrays for card info
////////////////
// suits: hearts, diamonds, clubs, spades
const suits = [ 'clubs', 'diamonds', 'hearts', 'spades' ]

// color: red and black
const cardColor = [ 'black', 'red' ]

// ranks: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
const ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]

// this array to holds the deck
const deck = []

////////////////
// Function creates deck
////////////////
const createDeck = () => {
	// instantiates each card in deck
	// use a loop to fill the deck array with card objects
	// first loop creates the card suit
	for (let j = 0; j < suits.length; j++) {
		// second loop creates the card value
		for (let k = 0; k < ranks.length; k++) {
			// if else statement specifies the color of the card
			if (suits[j] === 'clubs' || suits[j] === 'spades') {
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
const deckSizer = () => {
	// returns resized deck array ofr player mode
	let playersMode = prompt('what mode do you want to play in Mult-player or Single player? Type Single or Mult below')
	// resizes deck for multi player mode elss if single player mode
	if (playersMode === 'Mult' || playersMode === 'mult') {
		return deck
	} else if (playersMode === 'Single' || playersMode === 'single') {
		for (let i = 0; i < deck.length; i++) {
			if (i === 7 || i === 14 || i === 21 || i === 28) {
				for (let j = 0; j < 6; j++) {
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
const shuffledDeck = () => {
	// returns shuffled playingcards array
	// one loop shuffles once
	for (let i = 0; i < 500; i++) {
		let firstCard = Math.floor(Math.random() * playingDeck.length)
		let secondCard = Math.floor(Math.random() * playingDeck.length)
		let hold = playingDeck[firstCard]

		// swaps card from the first position to the second position
		playingDeck[firstCard] = playingDeck[secondCard]
		//swaps card from the secons position the the first position
		playingDeck[secondCard] = hold
	}
	return playingDeck
}
shuffledDeck()

////////////////
// Function Deals Players Hand
////////////////
const dealPlayerCards = (player) => { // I think this only works for one player, player 2 would have the same hand(not good)
	// if multiplayer with 52 cards each player gets 6 piles of 4 and 4 cards do in the middle in th middle
	// if single player with 28 cards, the player gets 6 piles and 4 cards go into the middle
    for (let i = 0; i < shuffledDeck().length; i++) {
        if (i < 4) {
            player.pileOne.push(shuffledDeck()[i])
        } else if (i < 8){
            player.pileTwo.push(shuffledDeck()[i])
        } else if (i < 12){
            player.pileThree.push(shuffledDeck()[i])
        } else if (i < 16){
            player.pileFour.push(shuffledDeck()[i])
        } else if (i < 20){
            player.pileFive.push(shuffledDeck()[i])
        } else if (i < 24){
            player.pileSix.push(shuffledDeck()[i])
        }
    }
}
dealPlayerCards(playerOne)

////////////////
// Function Deals the Middle Cards
////////////////
// this array holds the cards that are flipped in the middle
const middleCards = []

const dealMiddleCards = () => {
    // this pulls the middle cards from the last 4 postions in the shuffled deck
    for (let i = shuffledDeck().length - 1; i >= shuffledDeck().length - 4 ; i--) {
        middleCards.push(shuffledDeck()[i])
    }
}
dealMiddleCards()

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
