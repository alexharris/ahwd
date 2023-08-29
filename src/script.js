//  dark mode toggle
document.getElementById('moon').addEventListener('click', (e) => {
  document.getElementsByTagName('html')[0].classList.toggle('dark')
})


//  Watch scroll for logo animation
window.addEventListener('scroll', () => {
  
  if(window.scrollY < document.getElementById('header').offsetHeight - 100) {
    //  if near the top of the page
    document.getElementById('logo').classList.remove('text-5xl')  
    document.getElementById('logo').classList.add('text-9xl')        
  } else if (window.scrollY == 0) {
    // if at the top of the page
    setTimeout(function() {
      document.getElementById('logo').classList.remove('text-5xl')  
      document.getElementById('logo').classList.add('text-9xl')          
    }, 1200);      
  } else {
    // if on the page
    document.getElementById('logo').classList.add('text-5xl')  
    document.getElementById('logo').classList.remove('text-9xl')      
  }
}, false);