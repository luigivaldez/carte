// @flow

import React from 'react';

import Card from './Card';
import CardDescription from '../util/CardDescription';

export type Suit = 'Mazze' | 'Spade' | 'Coppe' | 'Denari';

export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type HandProps = {
  cards: Array<CardDescription>;
  position: 'N' | 'E' | 'S' | 'W';
};

type HandDefaultProps = {
  position: 'N' | 'E' | 'S' | 'W';
};

export default class Hand extends React.Component<HandProps, void> {
  static defaultProps = {
    position: 'S',
  };

  render() {
    const cardComps = this.props.cards.map((card: CardDescription) => {
      return <Card card={card} faceUp key={card.getName()} />;
    });
    let angle;
    switch (this.props.position) {
      case 'N':
        angle = 180;
        break;
      case 'E':
        angle = 270;
        break;
      case 'W':
        angle = 90;
        break;
      case 'S':
      default:
        angle = 0;
        break;
    }

    return (
      <div
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        {cardComps}
      </div>
    );
  }
}
