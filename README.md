# Usage
Add to bookmarks "javascript:" + "entry of some file.min.js"

# Example
```
javascript:{let sleep=(time)=>new Promise((resolve)=>setTimeout(resolve,time*1000));let pg = document.querySelector('.pagination');if(pg){let u=pg.children[0].href;let step=(url)=>{fetch(url).then((r)=>r.text().then((s)=>{let p = new DOMParser().parseFromString(s,'text/html').querySelector('.pagination');if(p){h=p.children[0].attributes.href.value;step(h);}else if(r.status==429){console.log(r.statusText, "sleep 10 secs");sleep(10).then(()=>step(url));}else{document.location=url}}))};step(u)}}
```

# Classic-online
[classic-online.ru](http://classic-online.ru) if a web-site with a great number of classical music records.

classic-online.js allow you autoload all posts in one page for one post-adding-date (for example [here](http://classic-online.ru/stat/?p=1&type=files_date&file_type=a&date=2016-12-18)).
