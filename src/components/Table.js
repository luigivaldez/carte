// @flow

import React from 'react';

import CardDescription from '../util/CardDescription';
import Hand from './Hand';

type TableProps = {
  hands: Array<Array<CardDescription>>;
};

export default class Table extends React.Component<TableProps, void> {
  render() {
    let positions;
    switch (this.props.hands.length) {
      case 1:
        positions = ['S'];
        break;
      case 2:
        positions = ['S', 'N'];
        break;
      case 3:
        positions = ['S', 'W', 'E'];
        break;
      case 4:
      default:
        positions = ['S', 'W', 'N', 'E'];
        break;
    }
    const hands = this.props.hands.map((hand: Array<CardDescription>, player: number) => {
      return <Hand cards={hand} position={positions[player]} key={positions[player]} />
    });
    return (
      <div
        style={{
          backgroundColor: 'darkgreen',
          padding: '15px',
          display: 'flex',
        }}
      >
        {hands}
      </div>
    );
  }
}
