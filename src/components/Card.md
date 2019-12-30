#### Example

__1.__ Face-down card.

```jsx
  const CardDescription = require('../util/CardDescription').default;
  <div style={{ backgroundColor: 'darkgreen', padding: '20px' }}>
    <Card card={new CardDescription('Coppe', 3)} />
  </div>
```

__2.__ Face-up 3 of cups.

```jsx
  const CardDescription = require('../util/CardDescription').default;
  <div style={{ backgroundColor: 'darkgreen', padding: '20px' }}>
    <Card card={new CardDescription('Coppe', 3)} faceUp />
  </div>
```

__1.__ Flippable card.

```jsx
  const CardDescription = require('../util/CardDescription').default;
  initialState = {
    faceUp: false,
  };

  <div style={{ backgroundColor: 'darkgreen', padding: '20px' }}>
    <Card card={new CardDescription('Coppe', 3)} faceUp={state.faceUp} onClick={(card, faceUp) => {
    setState({ faceUp: !faceUp });
    }} />
  </div>
```
