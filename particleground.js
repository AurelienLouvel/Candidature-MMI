document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#776BF8',
    lineColor: '#776BF8',
    directionY: 'up',
    maxSpeedY:'2',
    particleRadius: '5',
    parallaxMultiplier:'22',
    density:'50000',
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

