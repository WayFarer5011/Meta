    const storiesContentHeaders = document.getElementById('#stories-content-headers');
    const storiesHeaders = document.getElementsByClassName('stories__headers');
    const storiesBox = document.getElementsByClassName('stories__box');
    const storiesContainer = document.querySelector('.stories__content');
    const activeBox = document.getElementsByClassName('active__box');


    for (let i = 0; i < storiesHeaders.length; i++) {
        storiesHeaders[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active__link");
      
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active__link", "");
          }
      
          // Add the active class to the current/clicked button
          this.className += " active__link";
        });
      }

      /*const storiesBox = document.getElementsByClassName('stories__box');
      if(storiesBox) {
        storiesBox.addEventListener('click', () => {
          storiesBox.classList.add('active__box')  
        })
      } 
      */


// NAV-MENU
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.add('active__menu');
});

navClose.addEventListener('click', () => {
  nav.classList.remove('active__menu');
});

//TABBED COMPONENT
/*
storiesContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.stories__headers');

  //Guard Clausse
  if(!clicked) return;

  //remove active class
  //storiesHeaders.forEach(t => t.classList.remove('active__box'));
  storiesBox.forEach(c => classList.remove('active__box'));

  //Activate class
  clicked.classList.add('active__box');

  //Activate content area
  document.querySelector(`.stories__box--${clicked.dataset.tab}`).classList.add('active__box');
});
*/

storiesContentHeaders.addEventListener('click', function(e) {
  const clicked = e.target.closest('.stories__headers');

  if(!clicked) return;

  storiesBox.forEach(c => c.classList.remove('active__box'));

  clicked.classList.add('active__box');
  
  document.querySelector(`.stories__box${clicked.dataset.tab}`).classList.add('active__box');
});