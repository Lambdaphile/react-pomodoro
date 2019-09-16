import Granim from 'granim';

const granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  image: {
    source:
      'https://i.pinimg.com/originals/27/44/bc/2744bce45ca50723ce81aded909090fc.jpg',
    blendingMode: 'multiply',
  },
  states: {
    'default-state': {
      gradients: [
        ['#29323c', '#485563'],
        ['#FF6B6B', '#556270'],
        ['#80d3fe', '#7ea0c4'],
        ['#f0ab51', '#eceba3'],
      ],
      transitionSpeed: 7000,
    },
  },
});
