#### Example

__1.__ Three-card hand.

```jsx
  const CardDescription = require('../util/CardDescription').default;

  const cards = [
    new CardDescription('Mazze', 4),
    new CardDescription('Spade', 7),
    new CardDescription('Denari', 1),
  ];
  <Hand cards={cards} />
```

__2.__ Five-card hand in North position

```jsx
  const CardDescription = require('../util/CardDescription').default;

  const cards = [
    new CardDescription('Mazze', 4),
    new CardDescription('Spade', 7),
    new CardDescription('Denari', 1),
    new CardDescription('Spade', 9),
    new CardDescription('Denari', 8),
  ];
  <Hand cards={cards} position="N" />
```

__2.__ Two-card hand in East position

```jsx
  const CardDescription = require('../util/CardDescription').default;

  const cards = [
    new CardDescription('Spade', 7),
    new CardDescription('Denari', 2),
  ];
  <Hand cards={cards} position="E" />
```
