const rates = [1, 1.25, 1.5, 1.75, 2, 2.5, 3];
document.addEventListener('keydown', function(event) {
  if (!event.shiftKey || event.ctrlKey) {
    return;
  }

  const elem = document.querySelector('video');
  if (!elem) {
    console.error('No video tag');
  }
  const rate = elem.playbackRate;
  const idx = rates.findIndex(r => rate <= r);
  // >
  if (event.keyCode === 190) {
    elem.playbackRate = rates[idx < rates.length - 1 ? idx + 1 : rates.length];
  }
  // <
  if (event.keyCode === 188) {
    elem.playbackRate = rates[idx > 0 ? idx - 1 : 0];
  }
});
