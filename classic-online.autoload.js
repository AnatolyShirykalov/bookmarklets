$($('ul.paging')[0].children).filter((index, elem)=>
  elem.classList.length == 0
).map((index, elem) =>
  elem.querySelector('a')
).map((index, elem) => elem.href).each((index, url) => 
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
      $('tr').filter((index, elem) => {
        if(!elem.querySelector('td.new_files')) return null;
        let comments = parseInt(
          elem.querySelector('div.listen > a > span').innerText.replace(/[()]/g,'')
        );
        let b = elem.querySelectorAll('div.listen > span');
        let likes = parseInt(b[b.length - 1].innerText.replace(/[()]/g,'')); 
        return (comments + likes == 0)
      }).each((index, elem)=>{
        $(elem).css('display','none')
        $('audio').each((b, a) => {
          a.src = '/a.php?file_id=' + a.id.replace(/^.+_/,'') 
          a.style="width: 100%"
        })
      })
    }
  })
);
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
