<<<<<<< HEAD
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    console.log('click hamburger');

    if (header.classList.contains('open')) {  // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
    } else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
        
    } 
=======
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    console.log('click hamburger');

    if (header.classList.contains('open')) {  // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
    } else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
        
    } 
>>>>>>> 6c1a4e25b87e62da09a3c83aaef29772fef9415f
});