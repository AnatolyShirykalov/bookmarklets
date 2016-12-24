{
  let sleep = (time)=> new Promise(
    (resolve) => setTimeout(resolve, time*1000)
  );
  let pg = document.querySelector('.pagination')
  if (pg){
    let u = pg.children[0].href;
    let step = (url) => {
      fetch(url).then(
        (r)=>r.text().then((s) => {
          let p = new DOMParser().parseFromString(s,'text/html').querySelector('.pagination');
          if (p) {
            let h = p.children[0].attributes.href.value;
            step(h);
          } else if (r.status==429){
            console.log(r.statusText, "sleep 10 secs");
            sleep(10).then(
              ()=>step(url)
            );
          } else{
            document.location = url
          }
        })
      )
    };
    step(u)
  }
}
