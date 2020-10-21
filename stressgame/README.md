GitHub Repo - https://github.com/Rloui/Rloui.github.io/tree/master/stressgame
Site - https://rloui.github.io/stressgame/

Approach:

Friday:
- choose project Idea

Saturday: 
- psedo code 

Sunday: 
- set up new git

Monday: 
- create all of the cards
- brainstorm gameplay

Tuesday:    
- complete gameplay for the game in JS
- complete DOM manipulation*

Wednesday:  
- troubleshoot JS and DOM minipulation
- style html with css

Thursday:   
- add transitions and what not
- complete README and presentation
- get feed back

Friday: 
- reveiw game

Technologies Used
- HTML
- CSS
- Javascript
- JQuery

Chosing Data Structure
- for the cards an object should be used be cause it will have three properties, keys: color, suit, and values
- use a class to create the blueprint for each card object

Directions
- Goal: to match each deck of 4 cards with the same rank

The Set up
- multiplayer
1. Shuffle a deck of 52 cards

2. deal out 13 piles of 4

4. each player gets 6 piles of 4 cards

3. flip the last pile up so that it is visable

- single player
1. cut deck of 52 to 28 cards

2. Shuffle a deck of 28 cards

3. deal out 7 piles of 4

4. player gets 6 piles of 4 cards

5. flip the last pile up so that it is visable

Gameplay

5. count douwn from 3 and the game begins

6. each player picks up one deck at a time and flips it up

7. player compares hand to cards availible in the middle

8. player discards first and then picks up the card they need and does this as many times as     they want for each hand

9. player puts current deck back face down

10. player repeats this for all other deck until all their decks match

Winning

11. when player has a set of 4 that match they flip that pile up

12. player verifies they have all matching cards in all piles

13. player taps all piles

14. player yells stress

15. player won the game it they beat the other person or the time


Unsolved Problems
- when rendering the hand and middle card arrays the correct suits are not rendering to the correct card
        -something is going on with the classes and how when I add a class 2 classe end up on the same div and the latter class take control of the image presented which isnt the right class

- there is a problem with my click function when the user clicks on 2 cards from their hand in a row or middle card it stores those card positions and in turn messing up the swap. Right now you have to alternate only clicking middle card and then a pile card and vice versa

- the winning conditions are based on the rank of the card because of the previous problem I was not able to work on this. If I were to do this I would make a loop that compares the first card of a pile to the rest of the cards of that pile and repeat this for every hand

- also all aspects of the page are not responsive, only some elements are. This in turn shifts the rows, columns, and headers of the game

Resources
- used to get the location of card suit sprite http://www.spritecow.com/
- used as reference for suffle function: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

