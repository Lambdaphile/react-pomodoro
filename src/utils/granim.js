import Granim from 'granim';

const granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  image: {
    blendingMode: 'multiply',
    source: '../../dist/89df56b92a3362639193d54da77e8d69.jpg',
    stretchMode: ['stretch-if-smaller', 'stretch-if-smaller'],
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
