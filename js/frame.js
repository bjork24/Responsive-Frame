function outputUpdate(size) {
  document.querySelector('#small-frame-size').value = size + '%';
  document.getElementById('small-frame').style.width = size + 'vw';
  document.getElementById('large-frame').style.width = (100 - size) + 'vw';
}