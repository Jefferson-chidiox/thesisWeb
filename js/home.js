document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links with the class "nav-link"
    const navLinks = document.querySelectorAll('.nav-link');
    // Select all sections in the document
    const sections = document.querySelectorAll('section');
  
    // Function to set the active navigation link based on scroll position
    const setActiveLink = () => {
      // Initialize index to the number of sections
      // This index will eventually point to the currently visible section
      let index = sections.length;
  
      // Loop backwards through sections until we find the section that's in view.
      // The condition shifts the index down if the section's top is still below the current scroll position + 50 pixels.
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      // Remove the "active" class from all navigation links
      navLinks.forEach((link) => link.classList.remove('active'));
      // Add the "active" class to the navigation link corresponding to the active section
      navLinks[index].classList.add('active');
    };
  
    // Set the correct navigation link as active when the page loads
    setActiveLink();
    // Update the active link on scroll
    window.addEventListener('scroll', setActiveLink);
  
    // Add click event listeners to all navigation links for smooth scrolling behavior
    navLinks.forEach((link, idx) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default jump-to behavior of anchor links
        // Scroll smoothly to the section corresponding to the clicked navigation link
        sections[idx].scrollIntoView({ behavior: 'smooth' });
      });
    });
  });