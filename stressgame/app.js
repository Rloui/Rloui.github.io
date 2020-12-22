$(() => {
	// Pseudo Code

	// create the 52 cards in the deck to be played with

	// create a class for the outline of each card with a constructor

	// constructor valuses color, suit, and values

	///////////////////////////////////////////////////
	// Class Deck, creates outline for deck of cards //
	///////////////////////////////////////////////////
	class Card {
		// holds outline for a card
		constructor(suit, rank, color, suitClass) {
			this.suit = suit
			this.rank = rank
			// this.color = color
			// this.suitClass = suitClass
		}
	}

	////////////////////////////////////////////////////
	// Class Player, creates outline for players hand //
	////////////////////////////////////////////////////
	class Player {
		constructor(name) {
			this.name = name
		}
		hand = [ [], [], [], [], [], [] ] // key hand holds an array 0 - 5 and each array holds 4 objects
	}
	const playerOne = new Player('Roger')

	//////////////////////////
	// Arrays for card info //
	//////////////////////////
	// suits: hearts, diamonds, clubs, spades
	const suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ]

	// color: red and black
	// const cardColor = [ 'black', 'red' ]

	// ranks: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
	const ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]

	// this array to holds the deck
	const deck = []

	///////////////////////////////////////
	// Function creates deck of 52 cards //
	///////////////////////////////////////
	const createDeck = () => {
		// instantiates each card in deck
		// use a loop to fill the deck array with card objects
		// first loop creates the card suit
		for (let j = 0; j < suits.length; j++) {
			// second loop creates the card value
			for (let k = 0; k < ranks.length; k++) {
				// if else statement specifies the color of the card
				// if (suits[j] === 'Clubs' || suits[j] === 'Spades') {
					// let suitColor = cardColor[0]
					const deckCreation = new Card(suits[j], ranks[k])//, suitColor, '.' + suits[j])
					deck.push(deckCreation)
				// } else {
					// suitColor = cardColor[1]
					// const deckCreation = new Card(suits[j], ranks[k])//, suitColor, '.' + suits[j])
					// deck.push(deckCreation)
				// }
			}
		}
	}
	createDeck()

	///////////////////////////////////////////////////
	// Function re sizes deck baised on playing mode //
	///////////////////////////////////////////////////
	const deckSizer = () => {
		// returns resized deck array ofr player mode
		// let playersMode = prompt(
			// 'what mode do you want to play in Mult-player or Single player? Type Single or Mult below' // mult mode
		// )
		// resizes deck for multi player mode elss if single player mode
		// if (playersMode === 'Mult' || playersMode === 'mult') {// mult mode
			// return deck// mult mode
		// } else if (playersMode === 'Single' || playersMode === 'single') {// mult mode
			for (let i = 0; i < deck.length; i++) {
				if (i === 7 || i === 14 || i === 21 || i === 28) {
					for (let j = 0; j < 6; j++) {
						deck.splice(i, 1)
					}
				}
			}
			return deck
		// }// mult mode
	}

	// holeds the deck with the proper playing size
	let playingDeck = deckSizer()

	////////////////////////////
	// Function Shuffles Deck //
	////////////////////////////
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

	/////////////////////////////////
	// Function Deals Players Hand //
	/////////////////////////////////
	const dealPlayerCards = (player) => {
		// I think this only works for one player, player 2 would have the same hand(not good)
		// if multiplayer with 52 cards each player gets 6 piles of 4 and 4 cards do in the middle in th middle
		// if single player with 28 cards, the player gets 6 piles and 4 cards go into the middle
		for (let i = 0; i < playingDeck.length - 4; i++) {
			if (i < 4) {
				player.hand[0].push(playingDeck[i])
			} else if (i < 8) {
				player.hand[1].push(playingDeck[i])
			} else if (i < 12) {
				player.hand[2].push(playingDeck[i])
			} else if (i < 16) {
				player.hand[3].push(playingDeck[i])
			} else if (i < 20) {
				player.hand[4].push(playingDeck[i])
			} else if (i < 24) {
				player.hand[5].push(playingDeck[i])
			}
		}
	}
	dealPlayerCards(playerOne)
	// console.log(playerOne)

	// /////////////////////////////////////
	// // Function Deals the Middle Cards //
	// /////////////////////////////////////
	// this array holds the cards that are flipped in the middle
	const middleCards = [] //we have objects with the number and the suit

	const dealMiddleCards = () => {
		// this pulls the middle cards from the last 4 postions in the shuffled deck
		for (let i = playingDeck.length - 1; i >= playingDeck.length - 4; i--) {
			middleCards.push(playingDeck[i])
		}
	}
	dealMiddleCards()
	// console.log(middleCards)

	///////////////////////////////////////////////////////
	/// Function Renders Cards //
	///////////////////////////////////////////////////////
	const renderCards = () => {
		let count = 0
		// console.log(`before: ${middleCards[0].suit}`)
		// console.log(`before: ${playerOne.hand[0][0].suit}`)// something is going on with the classes and how when I add a class 2 classe end up on the same div and the latter class take control of the image presented which isnt the right class THIS WAS FIXXED

		for (let i = 0; i < middleCards.length; i++) {
			
			$('#drawPiles').find('.value' + i).text(middleCards[i].rank)
			$('#drawPiles').find('.suit' + i).addClass('suit' + middleCards[i].suit)// problem with the suit of the player hand rendering
			// console.log(middleCards[i])
		}
		// console.log(middleCards[0].suit)
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 4; j++) {
				$('.pile').find('.pileValue' + count).text(playerOne.hand[i][j].rank)
				$('.pile').find('.pileSuit' + count).addClass('suit' + playerOne.hand[i][j].suit)// problem with the suit of the player hand rendering
				count++
			}
		}
		// console.log(playerOne.hand[0][0].suit) 
		// i: 0 - 6
		// j: 0 - 4
	}
	renderCards()
	
	//////////////////////////////////////////////////////
	// Function Swaps User card choice with middle card //
	//////////////////////////////////////////////////////

	const swap = (middleIndex, cardIndex, pile) => {        
		let playerCardSwap = playerOne.hand[pile][cardIndex]  
		let middleCardSwap = middleCards[middleIndex]

		// console.log(middleIndex, cardIndex, pile)


		
		// console.log('suit' + middleCards[middleIndex].suit)

		////////////////////////////
		///// Removing the class fixes the double class issue that messed up the render
		///////////////////////////
		$('.suit' + middleIndex).removeClass('suit' + middleCards[middleIndex].suit)
		$('.pileSuit' + pile).removeClass('suit' + playerOne.hand[pile][cardIndex].suit) // pile doesn't work => card index is not supposed to be in the beginning of this, the way the counter renders cards going from 0 to 23 in conjunction with the classes that have that throws everything off <<<==== because of the counting convention NEW PROBLEM



		//// With Splice ////
		playerOne.hand[pile].splice(cardIndex, 1, middleCardSwap)
		middleCards.splice(middleIndex, 1, playerCardSwap)

		
		
		// $('.suit' + middleIndex).removeClass('suit' + middleCards[middleIndex].suit)

		// $('.pileSuit' + pile).removeClass('suit' + playerOne.hand[pile][cardIndex].suit)
		
		//// With splice and Push ////
		// middleCards.splice(middleIndex, 1)
		// middleCards.push(playerCardSwap)

		// playerOne.hand[pile].splice(cardIndex, 1)
		// playerOne.hand[pile].push(middleCardSwap)

		renderCards()
	}

	let click = false

	let selectedMiddleCard = ''
	let selectedPile = 0
	let selectedCard = 0
	
	$('.card').on('click', (e) => {

		if (!click) { // makes the event handeler know if a card has been selected or not
			if ($(e.currentTarget).parent().attr('id') === 'drawPiles') {
				selectedMiddleCard = $(e.currentTarget).attr('id') // the value of card in middle array
				// console.log('middle card was clicked')
			} else if ($(e.currentTarget).parent().attr('class') === 'pile') {
				selectedCard = $(e.currentTarget).attr('id')
				selectedPile = $(e.currentTarget).parent().attr('id')
				// console.log('regular card was clicked')
			}
			return click = true
		}

		if ($(e.currentTarget).parent().attr('class') === 'pile') {
			selectedCard = $(e.currentTarget).attr('id')
			selectedPile = $(e.currentTarget).parent().attr('id')
			// console.log('regular card was clicked')
		} else if ($(e.currentTarget).parent().attr('id') === 'drawPiles') {
			selectedMiddleCard = $(e.currentTarget).attr('id') // the value of card in middle array
			// console.log('middle card was clicked')
		}
		
		swap(selectedMiddleCard, selectedCard, selectedPile)

		e.stopPropagation() // stops event bubbling
		return click = false
	})

	const startSwap = () => {
		let selectedMiddleCard = prompt('which card do you want to take from the middle? 1 - 4:')
		let selectedPile = prompt('Which pile do you want to select? 1 - 6')
		let selectedCard = prompt('which card do you want to take from the your hand? 1 - 4:')

		swap(selectedMiddleCard - 1, selectedCard - 1, selectedPile - 1)
	}
	// $('.card').on('click', startSwap)

	const checkmatches = () => {
		// if player hand1 card one = a number x 
	}


})


////////////////////////////////////////////////////////

	// const gameSetUp = () => {
	//     alert('Welcome to the Game')
	//     alert('We are creating your deck')
	//     // createDeck()
	//     alert('We are sizing the deck for single or multiplayer')
	//     // playingDeck = deckSizer()
	//     alert('We are shuffling your deck')
	//     shuffledDeck()
	// }
	// gameSetUp()

	// const playGame = () => {
	//     alert('We are dealing your deck')
	//     dealPlayerCards(playerOne)
	//     // alert('We are dealing the middle cards')
	// 	dealMiddleCards()

	//     // alert('this is your hand')
	// 	// alert(playerOne.pileOne[0].rank)

	// 	// let selectedMiddleCard = prompt('which card do you want to take from the middle?')
	// 	// let selectedPile = prompt('Which pile do you want to select') // One
	// 	// let selectedCard = prompt('which card do you want to take from the your hand?')

	// 	// swap(selectedMiddleCard - 1, selectedCard - 1, selectedPile) // how do I get the users choice for a pile and use it when its an object and key

	// 	$('.card').on('click', startSwap)
	// 	playGame()
	// }
	// playGame()
// create winn logic
// if player filps all decks up display stress
// check finctuion checking all the deck
// display all matched or unmatched
// diplay win or loss

// create a player selcection/comparison function (mayn not be needed)

// create deck flip up function (not absolutely neccesary)

// create deck flip down function (not absolutely neccesary)

// create count down function (not absolutely neccesary)