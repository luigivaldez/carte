// @flow

import CardDescription from './CardDescription';
import DealableDeck from './DealableDeck';

export default class CardTable {
  constructor(playerCount: number, initialCards: number) {
    this.playerCount = playerCount;
    this.deck = new DealableDeck();
    this.hands = [];

    
    // Create a hand for each player
    let i;
    for (i = 0; i < playerCount; i++) {
      this.hands.push([]);
    }
    
    // Deal the intial cards
    let j;
    console.log('Dealing the initial hands');
    for (j = 0; j < initialCards; j++) {
      console.log(`Pass #${j + 1}`);
      for (i = 0; i < playerCount; i++) {
        console.log(`Dealing to player ${i + 1}`);
        const nextCard = this.deck.next();
        console.log('The next card from the deck is: ', nextCard.toString().toLocaleLowerCase());
        this.hands[i].push([nextCard]);

        console.log(`Dealt the ${nextCard.toString()} to player #${i + 1}.`);
      }
    }
  }
  
  remainingCards(): number {
    return this.deck.size();
  }

  playerHand(player: number): Array<CardDescription> {
    if (player < this.playerCount) {
      return this.hands[player];
    }
    return null;
  }

  dealMore(count: number) {
    console.log(`Dealing ${count} more cards to each player`);
    let i;
    let j;
    for (j = 0; j < count; j++) {
      console.log(`Pass #${j + 1}`);
      for (i = 0; i < this.playerCount; i++) {
        console.log(`Dealing to player ${i + 1}`);
        const nextCard = this.deck.next();
        console.log('The next card from the deck is: ', nextCard.toString().toLocaleLowerCase());
        this.hands[i].push([nextCard]);

        console.log(`Dealt the ${nextCard.toString()} to player #${i + 1}.`);
      }
    }
  }

  playerCount: number;
  deck: DealableDeck;
  hands: Array<Array<CardDescription>>;
}
