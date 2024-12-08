
const menuLinks = document.querySelectorAll('.menu a');

const currentPage = window.location.pathname.split('/').pop();

menuLinks.forEach(link => {
  
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active'); 
  }
});
