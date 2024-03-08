
// document.getElementById("scrollButton").addEventListener("click", function() {
//   document.getElementById("about-title").scrollIntoView({ 
//     behavior: 'smooth' 
//   });
// });

// --------------------------------------------------------------
const scrollButton = document.getElementById('scrollButton');
const skillpers = document.querySelectorAll('.skill-bar .skillper');

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
}

);

window.addEventListener('scroll', () => {
  const scrollOffset = window.innerHeight; // adjust this value as needed
  const elementPosition = skillpers.getBoundingClientRect().top;

  if (elementPosition < scrollOffset) {
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
   
  }
}
);

function animateElements() {
  var elements = document.querySelectorAll('.skillper');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  }
}

// Function to handle button click event
function handleClick() {
  window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
}

// Attach event listener to scroll event
window.addEventListener('scroll', animateElements);

// Attach event listener to button click event
scrollButton.addEventListener('click', handleClick);

// -----------------------------------------------------------------------------------------

const fadein = document.querySelectorAll('.fade-in');

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


 window.addEventListener('scroll', () => {
  const scrollOffset = window.innerHeight; // adjust this value as needed
  const elementPosition = fadein.getBoundingClientRect().top;

  if (elementPosition < scrollOffset) {
     // Scroll to the first element
  fadein[0].scrollIntoView({ behavior: 'smooth' });

  // Start the animation for each element after a delay
  setTimeout(() => {
    Array.from(fadein).forEach((element, index) => {
      setTimeout(() => {
        element.style.animation = 'fade-in-animation forwards';
      }, (index + 1) * 100); // Fixed the delay calculation by adding 1 to the index
    });
  }, 1000); // Added a delay before starting the animations
   
  }
}
);


// Function to handle scrolling and animate the elements
function animateElements() {
  var elements = document.querySelectorAll('.fade-in');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  }
}

// Function to handle button click event
// function handleClick() {
//   window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
// }

// // Attach event listener to scroll event
// window.addEventListener('scroll', animateElements);

// // Attach event listener to button click event
// scrollButton.addEventListener('click', handleClick);
 
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
