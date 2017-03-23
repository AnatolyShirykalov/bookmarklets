{
  let wg = 0;
  let wgDone = () => {
    if (wg > 1) {  wg-=1; return }
    $('tr').filter((index, elem) => {
      if(!elem.querySelector('td.new_files')) return null;
      let comments = parseInt(
        elem.querySelector('div.listen > a > span').innerText.replace(/[()]/g,'')
      );
      let b = elem.querySelectorAll('div.listen > span');
      let likes = parseInt(b[b.length - 1].innerText.replace(/[()]/g,'')); 
      let omi   = x => x > 10 ? 255 - parseInt(1050/x) : 15 * x;
      let red   = omi(likes);
      let green = omi(comments);
      elem.style.backgroundColor = `rgb(${red},${green},0)`;
      return (comments == 0 && likes < 3) || (elem.innerHTML.match(/сопрано|баритон|тенор/));
    }).each((index, elem)=>$(elem).remove());
    $('audio').each((b, a) => {
      a.src = '/a.php?file_id=' + a.id.replace(/^.+_/,'') ;
      a.style="width: 100%";
    });
    $('ul.paging').remove();
    $('tr').filter((i,e)=>e.textContent.match(/^\s+$/)).remove();
    document.addEventListener('play', function(e){
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
            }
        }
    }, true);
  };
  let urls = [].filter.call( document.querySelector('ul.paging').children, (elem, index) =>
    elem.classList.length == 0 && elem.querySelector('a')
  ).map((elem, index) =>
    elem.querySelector('a')
  ).map((elem, index) => elem.href);
  wg = urls.length;
  urls.forEach((url, index) => {
    $.ajax({
      url,
      success: (data) => {
        $('div.al > table > tbody').append(
          $(
            new DOMParser().parseFromString(
              data,
              'text/html'
            ).querySelectorAll('div.al > table > tbody > tr')
          ).slice(3,13)
        ); 
        wgDone()
      }
    })
  });
}

