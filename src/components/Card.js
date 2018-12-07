// @flow

import React from 'react';

import CardDescription from '../util/CardDescription';

export type Suit = 'Mazze' | 'Spade' | 'Coppe' | 'Denari';

export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type CardProps = {
  card: CardDescription;
  faceUp: boolean;
  onClick: (card: CardDescription, faceUp: boolean) => void;
};

type CardDefaultProps = {
  faceUp: boolean;
  onClick: (card: CardDescription, faceUp: boolean) => void;
};

export default class Card extends React.PureComponent<CardDefaultProps, CardProps, void> {
  static defaultProps = {
    faceUp: false,
    onClick: () => {},
  };

  render() {
    let contents;
    if (this.props.faceUp) {
      const cardName = CardDescription.getName(this.props.card);
      const cardImage = CardDescription.getImage(this.props.card);

      contents = <img src={cardImage} alt={cardName} />;
    } else {
      contents = (
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'blue',
            borderRadius: '8px',
            margin: 0,
            border: '8px solid white',
          }}
        />
      );
    }

    return (
      <button
        type="button"
        style={{
          width: '180px',
          height: '250px',
        }}
        onClick={() => { this.props.onClick(this.props.card, this.props.faceUp); }}
      >
        {contents}
      </button>
    );
  }
}
