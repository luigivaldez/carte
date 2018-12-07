// @flow

import type { Suit, Value } from '../components/Card';

export default class CardDescription {
  constructor(suit: Suit, value: Value) {
    this.suit = suit;
    this.value = value;
  }

  suit: Suit;
  value: Value;

  getImage() {
    return `img/${this.value}${this.suit}.png`;
  }

  toString() {
    return this.getName();
  }

  getName() {
    let valueName;
    switch (this.value) {
      case 1:
        valueName = 'Asso';
        break;
      case 2:
        valueName = 'Due';
        break;
      case 3:
        valueName = 'Tre';
        break;
      case 4:
        valueName = 'Quattro';
        break;
      case 5:
        valueName = 'Cinque';
        break;
      case 6:
        valueName = 'Sei';
        break;
      case 7:
        valueName = 'Sette';
        break;
      case 8:
        valueName = 'Fante';
        break;
      case 9:
        valueName = 'Cavaliere';
        break;
      case 10:
        valueName = 'Re';
        break;
      default:
        valueName = `${this.value}`;
        break;
    }
    if (this.value === 1) {
      return `L'${valueName} di ${this.suit}`;
    }
    return `Il ${valueName} di ${this.suit}`;
  }
}
