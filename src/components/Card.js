// @flow

import React from 'react';

import CardDescription from '../util/CardDescription';
import CardImages from '../util/CardImages';

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

export default class Card extends React.Component<CardProps, void> {
  static defaultProps = {
    faceUp: false,
    onClick: () => { },
  };

  constructor(props: CardProps) {
    super(props);
    (this: any).handleClick = this.handleClick.bind(this);
  }

  btn: ?HTMLButtonElement;

  handleClick() {
    if (this.btn) {
      this.btn.blur();
    }
    this.props.onClick(this.props.card, this.props.faceUp);
  }

  render() {
    let contents;
    if (this.props.faceUp) {
      const cardName = this.props.card.getName();
      const cardImage = CardImages.imageForCard(this.props.card);

      const imageUrl = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/${cardImage}` : cardImage;
      contents = (
        <img
          src={imageUrl}
          alt={cardName}
          style={{
            width: '180px',
            height: '250px',
            border: '2px solid yellow',
            borderRadius: '8px',
          }}
        />
      );
    } else {
      contents = (
        <img
          src="cardBackground.png"
          alt="Card (unknown)"
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'blue',
            margin: 0,
            border: '2px solid yellow',
            borderRadius: '8px',
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
          padding: 0,
          perspective: '1000px',
          background: 'none',
          border: 'none'
        }}
        onClick={this.handleClick}
        ref={(btn) => { this.btn = btn; }}
      >
        {contents}
      </button>
    );
  }
}
