// @flow

import knuthShuffle from 'knuth-shuffle';

import CardDescription from './CardDescription';

import type { Suit, Value } from '../components/Card';

export default class Deck {
  cards: Array<CardDescription>;

  constructor() {
    // Loop through the suits and values and create a card for each
    const newDeck = [];
    ['Mazze', 'Spade', 'Coppe', 'Denari'].forEach((suit: Suit) => {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((value: Value) => {
        newDeck.push(new CardDescription(suit, value));
      })
    });
    this.cards = newDeck;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  dump() {
    this.cards.forEach((card: CardDescription, order: number) => {
      const orderString = order < 9 ? ` ${order + 1}` : `{order + 1}`;
      console.log(`Card #${orderString}: ${card.toString()}`);
    });
  }
}
