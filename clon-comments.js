document.styleSheets[0].insertRule("myComments {
[].filter.call(
  document.links,
  (a) => a.href.match(/\/archive\/\?file_id=\d+$/)
).forEach( (a) => {
  let run = (url, cb) => {
    if (url.match(/^\?/)) url = 'http://classic-online.ru/archive/' + url
    console.log('start url', url)
    if (!url) return console.error(
      'the first argument of run must be defined',
      new Error().stack
    )
    if (typeof(cb) != 'function') 
      return console.error(
        'the second argument of run must be a function',
        new Error().stack
      )
    $.ajax({
      url: a.href,
      success: (body) => {
        let doc = new DOMParser().parseFromString(
          body,
          'text/html'
        )
        cb(doc.getElementsByClassName('comment'))
        let cont = doc.querySelector('ul.paging')
        if (cont) {
          let links = [].filter.call(cont.children, (l) => l.textContent.match(/^\d+$/))
          let cur   = links.findIndex( (l) => l.className.match(/active/))
          if (cur < links.length - 2) {
            debugger
            console.log(cur, links.length - 2, 'Continue from', url, 'to', links[cur + 1].firstElementChild.href, 'spec', links[cur+1].firstElementChild.getAttribute('href'))
            run(links[cur + 1].firstElementChild.getAttribute('href'), cb)
          }
        }
        
      },
      error: (error) => {
        console.error('myAjax', error)
      }
    })
  }
  let div = document.createElement('div')
  div.style.width = '90%'
  div.style.marginLeft = '10%'
  a.parentElement.parentElement.parentElement.parentElement.appendChild(div)
  run(a.href, (cmts) => {
    [].forEach.call(cmts, (cmt) => div.appendChild(cmt))
  })
})
