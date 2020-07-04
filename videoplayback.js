!function() {
  const div = document.createElement('div');
  div.id = 'aesn-status';
  const style = 'position: fixed; top: 20px; right: 100px; font-size: 24pt; z-index: 1000;';
  const hiddenStyle = `display: none; ${style}`;
  div.style = hiddenStyle;
  document.body.prepend(div);
  let appearanceId = 0;
  const showRate = (rate) => {
    div.innerHTML = `${rate}x`;
    div.style = style;
    appearanceId += 1;
    const scheduledAppearanceId = appearanceId;
    setTimeout(() => {
      if (scheduledAppearanceId === appearanceId) {
        div.style = hiddenStyle;
      }
    }, 2000);
  };
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
    showRate(elem.playbackRate);
  });
}()
