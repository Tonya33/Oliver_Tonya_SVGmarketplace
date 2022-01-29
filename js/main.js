(() => {
  //this is js comment
  console.log('this is some text');

  //go into the document and make a reference to the element that you want to work with
  let theHeading = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");

//create a function that runs when theHeader is clicked
  function logElement() {
    console.log('clicked on the element:', this.id);
  }

//listen for a oser event and something
//the do something is the function we run when the element is clicked
  theHeading.addEventListener("click", logElement);
  /*this is a block comment
  that can run on multiple lines*/

//loop through all of the icons and add event handling
//process each icon at a time and add behaviour
  theIcons.forEach(icon => icon.addEventListener('click', logElement));

})();
