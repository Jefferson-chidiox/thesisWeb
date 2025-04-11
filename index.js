// Get the elements
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const servicesSection = document.querySelector('.thesis-services-section');
const servicesContainer = document.querySelector('.services-container');

// Set initial state (if needed)
let sidebarOpen = true;

// Toggle function
function toggleSidebar() {
  if (sidebarOpen) {
    sidebar.classList.add('closed');  
    mainContent.classList.add('sidebar-closed');
    servicesSection.classList.add('sidebar-closed');
    servicesContainer.classList.add('sidebar-closed');
  } else {
    sidebar.classList.remove('closed');
    mainContent.classList.remove('sidebar-closed');
    servicesSection.classList.remove('sidebar-closed');
    servicesContainer.classList.remove('sidebar-closed');
  }
  sidebarOpen = !sidebarOpen;
}

// Add click event listener to the button
sidebarToggle.addEventListener('click', toggleSidebar);

// Close sidebar by default on mobile
function checkWidth() {
  if (window.innerWidth <= 992 && sidebarOpen) {
    toggleSidebar();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');

  let sidebarOpen = true;

  function toggleSidebar() {
    if (sidebarOpen) {
      sidebar.classList.add('closed');
      mainContent.classList.add('sidebar-closed');
    } else {
      sidebar.classList.remove('closed');
      mainContent.classList.remove('sidebar-closed');
    }
    sidebarOpen = !sidebarOpen;
  }

  if (sidebarToggle && sidebar && mainContent) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
});

// Check on page load
window.addEventListener('load', checkWidth);

// Check on window resize
window.addEventListener('resize', checkWidth);


document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top functionality
  const scrollTopButton = document.querySelector('.scroll-top-button');
  
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show scroll button only when scrolled down
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'flex';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  
  // Initially hide the button
  scrollTopButton.style.display = 'none';

  // JavaScript for back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Smooth scroll to top when button is clicked
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Service card click functionality
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Service clicked:', this.querySelector('h3').textContent);
      // Add custom functionality here if needed
    });
  });
  
  // Consultation button functionality
  const consultationButton = document.querySelector('.consultation-button');
  
  consultationButton.addEventListener('click', function() {
    console.log('Consultation button clicked');
    // Add custom functionality for scheduling a consultation
    // For example, you could open a modal form or redirect to a contact page
  });
});

// JavaScript for form handling
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation could be added here
    
    // Simulating form submission
    console.log('Form submitted');
    
    // Reset form (optional)
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navigation');
  const sidebar = document.querySelector('.sidebar');
  const heroSection = document.querySelector('.hero-section');
  const footer = document.querySelector('.footer');

  function updateBackgroundColor() {
    const heroRect = heroSection.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (heroRect.top <= 0 && heroRect.bottom >= 0) {
      navbar.style.backgroundColor = '#fef5f5';
      sidebar.style.backgroundColor = '#fef5f5';
    } else if (footerRect.top <= window.innerHeight) {
      navbar.style.backgroundColor = '#fef5f5'; // 80% opacity
      sidebar.style.backgroundColor = '#fef5f5'; // 80% opacity
    } else {
      navbar.style.backgroundColor = '';
      sidebar.style.backgroundColor = '';
    }
  }

  window.addEventListener('scroll', updateBackgroundColor);
  updateBackgroundColor(); // Initial check
});

document.addEventListener('DOMContentLoaded', function () {
  const thesisServicesSection = document.querySelector('.thesis-services-section');
  const footer = document.querySelector('.footer');

  function updateSectionColor() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (footerRect.top <= windowHeight) {
      thesisServicesSection.style.backgroundColor = '#fef5f5';
    } else {
      thesisServicesSection.style.backgroundColor = '#f5f5f5';
    }
  }

  window.addEventListener('scroll', updateSectionColor);
  updateSectionColor(); // Initial check
});

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

// Mobile Navigation Handler
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('sidebarToggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // Update sidebar and navigation based on screen size
  function handleResize() {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      body.style.overflow = '';
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Initial check
});