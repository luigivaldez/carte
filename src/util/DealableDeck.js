// @flow

import CardDescription from './CardDescription';
import Deck from './Deck';

export default class DealableDeck {
  cards: Array<CardDescription>;

  constructor() {
    this.reset();
  }

  next(): CardDescription | null {
    if (this.cards.length > 0) {
      return this.cards.pop();
    }
    return null;
  }

  reset() {
    const deck = new Deck();
    deck.shuffle();
    this.cards = deck.cards.slice();
  }

  size(): number {
    return this.cards.length;
  }
}
