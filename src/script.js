// DARK MODE STUFF

// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#os-level

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Select the button
const btn = document.getElementById('moon');
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
document.getElementById('moon').addEventListener("click", function() {
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

// END DARK MODE STUFF

// SCROLL ANIMATION STUFF

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

// END SCROLL ANIMATION STUFF