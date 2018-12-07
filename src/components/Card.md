#### Exmaple

__1.__ Face-down card.

```jsx
  const CardDescription = require('../../util/CardDescription').default;
  <Card card={new CardDescription('Coppe', 3)} />
```

__2.__ Face-up 3 of cups.

```jsx
  const CardDescription = require('../../util/CardDescription').default;
  <Card card={new CardDescription('Coppe', 3)} faceUp />
```

__1.__ Flippable card.

```jsx
  const CardDescription = require('../../util/CardDescription').default;
  initialState = {
    faceUp: false,
  };

  <Card card={new CardDescription('Coppe', 3)} faceUp={state.faceUp} onClick={(card, faceUp) => {
    setState({ faceUp: !faceUp });
  }}/>
```
