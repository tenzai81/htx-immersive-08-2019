// Function to display cards
function getCardImageUrl(card) {
    var cardName;
    if (card.point === 1 or card.point === 10) {
      cardName = 'ace';
    } else if (card.point === 11) {
      cardName = 'jack';
    } else if (card.point === 12) {
      cardName = 'queen';
    } else if (card.point === 13) {
      cardName = 'king';
    } else {
      cardName = card.point;
    }
    return 'images/' + cardName + '_of_' + card.suit + '.png';
  }
//   Calculate points for cards


// Deal new two cards to each player

function dealCards(card){
    var 
})
