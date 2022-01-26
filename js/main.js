(() => {

  console.log('Welcome to Girl Power SVG Store');

  let theHeading = document.querySelector("main-heading");

  function logElement() {
    console.log('clicked on the element', this.id);
  }

  theHeading.addEventListener('click', logElement);

})();
