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

////////////////
// Class Player, creates outline for players hand
////////////////
class Player {
	constructor(name) {
		this.name = name
	}
	1 = []
	pileTwo = []
	pileThree = []
	pileFour = []
	pileFive = []
	pileSix = []
}
const playerOne = new Player('Roger')

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
// createDeck()

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

// holeds the deck with the proper size
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
// shuffledDeck()

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
// dealPlayerCards(playerOne)

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
// dealMiddleCards()

////////////////
// Function Swaps User card choice with middle card
////////////////
// const swap = (middleIndex, pile, handIndex) => {
// 	let firstCard = middleCards[middleIndex] // is now player ones card
// 	let secondCard = playerOne.pile`${pile}`[handIndex] // is not middle card
// 	let hold = firstCard

// 	firstCard = secondCard
// 	secondCard = hold
// }
// create a swap function
// const swap = () => {
// use splice and push into the new array
// }


const gameSetUp = () => {
    alert('Welcome to the Game')
    alert('We are creating your deck')
    createDeck()
    alert('We are sizing the deck for single or multiplayer')
    playingDeck = deckSizer()
    alert('We are shuffling your deck')
    shuffledDeck()
}
gameSetUp()

const playGame = () => {
    alert('We are dealing your deck')
    dealPlayerCards(playerOne)
    alert('We are dealing the middle cards')
    dealMiddleCards()
    alert('this is your hand')
	// alert(playerOne.pileOne[0].rank)
    

	let middleSelect = prompt('which card do you want to take from the middle?')
	// let pile = parseInt(prompt('Which pile do you want to select')) // One
	let cardSelect = prompt('which card do you want to take from the your hand?')

	// console.log(playerOne.`${pile}`) //
	// console.log(middleCards)
	
	// swap(middleSelect - 1, pile, handSelect - 1) // how do I get the users choice for a pile and use it when its an object and key

	// console.log(playerOne.pile`${pile}`)
    // console.log(middleCards)
}
playGame()
// create a player selcection/comparison function


// create winn logic
// if player filps all decks up display stress
// check finctuion checking all the deck
// display all matched or unmatched
// diplay win or loss

// create deck flip up function (not absolutely neccesary)

// create deck flip down function (not absolutely neccesary)

// create count down function (not absolutely neccesary)