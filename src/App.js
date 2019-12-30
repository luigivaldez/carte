import React from 'react';
import Table from './components/Table';
import CardTable from './util/CardTable';
import './App.css';

type AppState = {
  cardTable: CardTable;
};

class App extends React.Component<void, {}, AppState> {
  constructor(props: any) {
    super(props);

    const cardTable = new CardTable(2, 3);
    this.state = {
      cardTable,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Carte
        </header>
        <Table hands={this.state.cardTable.hands} />
      </div>
    );
  }
}

export default App;
