// DARK MODE STUFF

// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#os-level

// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// if (prefersDarkScheme.matches) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// Check if the #moon element exists
const btn = document.getElementById('moon');
if (btn) {
  // Select the theme preference from localStorage
  const currentTheme = localStorage.getItem("theme");

  // If the current theme in localStorage is "dark"...
  if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Listen for a click on the button 
  btn.addEventListener("click", function() {
    // Toggle the .dark-theme class on each click
    document.documentElement.classList.toggle("dark");
    
    // Let's say the theme is equal to light
    let theme = "light";
    // If the body contains the .dark-theme class...
    if (document.documentElement.classList.contains("dark")) {
      // ...then let's make the theme dark
      theme = "dark";
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
  });
}

// END DARK MODE STUFF

// SCROLL ANIMATION STUFF

//  Watch scroll for logo animation
// window.addEventListener('scroll', () => {
  
//   if(window.scrollY < document.getElementById('header').offsetHeight - 100) {
//     //  if near the top of the page
//     document.getElementById('logo').classList.remove('text-5xl')  
//     document.getElementById('logo').classList.add('text-9xl')        
//   } else if (window.scrollY == 0) {
//     // if at the top of the page
//     setTimeout(function() {
//       document.getElementById('logo').classList.remove('text-5xl')  
//       document.getElementById('logo').classList.add('text-9xl')          
//     }, 1200);      
//   } else {
//     // if on the page
//     document.getElementById('logo').classList.add('text-5xl')  
//     document.getElementById('logo').classList.remove('text-9xl')      
//   }
// }, false);

// END SCROLL ANIMATION STUFF

// SLIDESHOW STUFF
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}

let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dotsContainer = document.querySelector('.dots-container');

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

if (slides.length > 0) {
  showSlides(slideIndex);


  let prevArrow = document.querySelector('.left'); // replace '.prev' with the actual selector for your left arrow
  let nextArrow = document.querySelector('.right'); // replace '.next' with the actual selector for your right arrow

  prevArrow.addEventListener('click', function(event) {
    plusSlides(-1);
  });

  nextArrow.addEventListener('click', function(event) {
    plusSlides(1);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
      plusSlides(1);
    }
  });
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// END SLIDESHOW STUFF

// Scroll to contact form

// let contactMenuItem = document.querySelector('#contact-button');
// contactMenuItem.addEventListener('click', function(event) {
//   event.preventDefault(); // prevent the default action
//   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
// });

// FEATURED WORK SLIDER

let featuredIndex = 0;
const featuredWorks = document.querySelectorAll('.featured-work');
const featuredPrev = document.querySelectorAll('.featured-prev');
const featuredNext = document.querySelectorAll('.featured-next');


function showFeaturedWork(n) {
  featuredWorks.forEach((work, index) => {
    const image = work.querySelector('.featured-image');
    const content = work.querySelector('.featured-content');
    
    if (index === n) {
      work.style.display = 'grid';
      image.classList.add('fade-in');
      image.classList.remove('fade-out');
      content.classList.add('fade-in');
      content.classList.remove('fade-out');
    } else {
      work.style.display = 'none';
      image.classList.remove('fade-in');
      image.classList.add('fade-out');
      content.classList.remove('fade-in');
      content.classList.add('fade-out');
    }
  });
}

function changeFeaturedWork(n) {
  featuredIndex += n;
  if (featuredIndex >= featuredWorks.length) {
    featuredIndex = 0;
  } else if (featuredIndex < 0) {
    featuredIndex = featuredWorks.length - 1;
  }
  showFeaturedWork(featuredIndex);
}

featuredPrev.forEach(button => button.addEventListener('click', () => changeFeaturedWork(-1)));
featuredNext.forEach(button => button.addEventListener('click', () => changeFeaturedWork(1)));


// Initialize the first featured work
showFeaturedWork(featuredIndex);

// END FEATURED WORK SLIDER


// ROTATING HERO TEXT STUFF
const rotatingText = document.querySelector('#rotating-text');
const textArray = ["arts organizations", "architects and designers", "small businesses and startups", "scientists and educators"];
let currentIndex = 0;
let currentText = textArray[currentIndex];
let currentCharIndex = 0;
function updateRotatingText() {
  rotatingText.textContent = currentText;
  rotatingText.classList.add('fade-in-up'); // Add animation class for sliding up and in

  setTimeout(() => {
    rotatingText.classList.remove('fade-in-up');
    rotatingText.classList.add('fade-out-up'); // Add animation class for sliding up and out

    setTimeout(() => {
      rotatingText.classList.remove('fade-out-up');
      currentIndex = (currentIndex + 1) % textArray.length; // Move to the next text
      currentText = textArray[currentIndex];
      updateRotatingText(); // Recursively call to update the text
    }, 500); // Duration of fade-out-up animation
  }, 4000); // Wait 5 seconds before fading out
}

// Start the rotating text animation
updateRotatingText();
