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

export default class Card extends React.PureComponent<CardDefaultProps, CardProps, void> {
  static defaultProps = {
    faceUp: false,
    onClick: () => { },
  };

  constructor(props: CardProps) {
    super(props);
    (this: any).handleClick = this.handleClick.bind(this);
  }

  btn: HTMLButtonElement;

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

      contents = (
        <img
          src={`${process.env.PUBLIC_URL}/${cardImage}`}
          alt={cardName}
          style={{
            width: '180px',
            height: '250px',
          }}
        />
      );
    } else {
      contents = (
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'blue',
            borderRadius: '8px',
            margin: 0,
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
          border: 'none',
          perspective: '1000px',
        }}
        onClick={this.handleClick}
        ref={(btn) => { this.btn = btn; }}
      >
        {contents}
      </button>
    );
  }
}
