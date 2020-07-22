document.addEventListener('scroll', function (e) {
    const top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#wrapper > li').offsetTop;
  
     if (isVisible) {
       document.getElementById('wrapper').classList.add('animate');
     }
  });

  document.addEventListener('scroll', function (e) {
    const top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#animation > img').offsetTop;
  
     if (isVisible) {
       document.getElementById('animation').classList.add('animate');
     }
  });