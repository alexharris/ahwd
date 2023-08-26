console.log('hello')

// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

  window.addEventListener('scroll', () => {
    if(window.scrollY < 100) {
      document.getElementById('logo').classList.remove('text-4xl')  
      document.getElementById('logo').classList.add('text-9xl')  
      // document.getElementById('logo').classList.add('outline-text')  
       
    } else {
      document.getElementById('logo').classList.add('text-4xl')  
      document.getElementById('logo').classList.remove('text-9xl')  
      // document.getElementById('logo').classList.remove('outline-text')  
      // document.getElementById('main').classList.add('fixed')
      
    }
    
    
    
  }, false);