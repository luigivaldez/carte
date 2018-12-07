import CardTable from '../util/CardTable';

it('Can deal cards', () => {
  const cardTable = new CardTable(4, 3);
  expect(cardTable.remainingCards()).toEqual(28);
  expect(cardTable.playerHand(0).length).toEqual(3);
  expect(cardTable.playerHand(3).length).toEqual(3);
  expect(cardTable.playerHand(4)).toEqual(null);

  cardTable.dealMore(2);
  expect(cardTable.playerHand(0).length).toEqual(5);
  expect(cardTable.remainingCards()).toEqual(20);
});
