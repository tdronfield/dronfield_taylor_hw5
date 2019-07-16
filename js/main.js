(() => {
console.log('fired!');
// set up your variable stack -> make connections to the elements you're targetting
let mobileNav = document.querySelector(".nav");
    navPanel = document.querySelector('#burgerCon'),
    navLinks = navPanel.querySelectorAll('a');

function toggleNav(event) {
  event.preventDefault();

  console.log('should show nav dropdown');
  //debugger;
  //this should only fire when you click on an anchor tag
  if (this.nodeName == "A") {
    debugger;
    //we clicked on the anchor tag, so do some navigation
    //window.scrollTo({
      //we can ask the window to scroll to a element on the page => smoothscroll effect
      //top: this.offsetTop,
      //effect: 'smooth'
    //})
  }

  navPanel.classList.toggle('show-mobile-nav');
}

mobileNav.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));

})();
