
// document.getElementById("scrollButton").addEventListener("click", function() {
//   document.getElementById("about-title").scrollIntoView({ 
//     behavior: 'smooth' 
//   });
// });

// --------------------------------------------------------------
const scrollButton = document.getElementById('scrollButton');
const skillpers = document.getElementsByClassName('skillper');

scrollButton.addEventListener('click', () => {
  // Scroll to the first element
  skillpers[0].scrollIntoView({ behavior: 'smooth' });

  // Start the animation for each element after a delay
  setTimeout(() => {
    Array.from(skillpers).forEach((element, index) => {
      setTimeout(() => {
        element.style.animation = 'progress 2s forwards';
      }, (index + 1) * 100); // Fixed the delay calculation by adding 1 to the index
    });
  }, 1000); // Added a delay before starting the animations
});

// -----------------------------------------------------------------------------------------

const fadein = document.getElementsByClassName('fade-in');

scrollButton.addEventListener('click', () => {
    // Scroll to the first element
    skillpers[0].scrollIntoView({ behavior: 'smooth' });

    // Start the animation for each element after a delay
    setTimeout(() => {
      Array.from(fadein).forEach((element, index) => {
        setTimeout(() => {
          element.style.animation = 'fade-in-animation 2s forwards';
        }, index * 100); // Add a delay for each element to stagger the animations
      });
    }, 1000); // Add a delay before starting the animations
  });
// -------------------------------------------------------------------------------------------------------------------


// Typing animation---------------------------------------------------------------------------------------------------------------

// const aboutlines = document.getElementsByClassName('about-lines');

// scrollButton.addEventListener('click', () => {
//     // Scroll to the first element
//     aboutlines[0].scrollIntoView({ behavior: 'smooth' });

//     // Start the animation for each element after a delay
//     setTimeout(() => {
//       Array.from(aboutlines).forEach((element, index) => {
//         setTimeout(() => {
//           element.style.animation = 'typing 3s steps(1000, end)';
//         }, index * 80); // Add a delay for each element to stagger the animations
//       });
//     }, 1000); // Add a delay before starting the animations
//   });
//------------------------------------------------------------------------------------

  function openWebsite1() {
    window.open("https://rukayanehlawi.github.io/Chocolate-store-website/", "_blank");
  }

  function openWebsite2() {
    window.open("https://rukayanehlawi.github.io/Beauty-pharmacy/", "_blank");
  }
 function openWebsite3() {
    window.open("https://rukayanehlawi.github.io/visit-japan/", "_blank");
  }

//   ----------------------------------------------------------------------------------
