el = document.createElement('iframe')
pc = document.querySelector('.playerContainer')
pc.innerHTML=''
pc.appendChild(el)
el.contentDocument.location = 'http://classic-online.ru/download.php?file_id=' + document.location.href.split('=')[1]
metka=document.createElement('button')
metka.innerHTML = 'Создать метку'
pc.appendChild(metka)
table=document.createElement('table')
pc.appendChild(table)
metka.addEventListener('click', function(){
  var time = el.contentDocument.querySelector('video').currentTime
  var tr = document.createElement('tr')
  table.appendChild(tr)
  var td = document.createElement('td')
  tr.appendChild(td)
  var button = document.createElement('button')
  td.appendChild(button)
  button.innerHTML = time
  button.addEventListener('click', function(event){
    el.contentDocument.querySelector('video').currentTime = parseFloat(event.target.innerHTML)
  })
  var input = document.createElement('input')
  input.setAttribute('id',time)
  var td2 = document.createElement('td')
  tr.appendChild(td2)
  td2.appendChild(input)
}
