document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navBar a');
  
  function setActiveLink() {
      const scrollPosition = window.scrollY;

      // Loop through each section and check if it's in the viewport
      document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop - 60; // Adjusted for the header height
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              // Remove the 'active' class from all links
              navLinks.forEach(link => link.classList.remove('active'));

              // Add the 'active' class to the corresponding link
              const correspondingLink = document.querySelector(`.navBar a[href="#${section.id}"]`);
              if (correspondingLink) {
                  correspondingLink.classList.add('active');
              }
          }
      });
  }

  // Add scroll event listener to update the active link
  window.addEventListener('scroll', setActiveLink);

  // Call the function on page load to set the initial active link
  setActiveLink();
});