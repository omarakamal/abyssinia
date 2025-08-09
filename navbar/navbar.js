
  


  


document.addEventListener("DOMContentLoaded",()=>{

  

  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('open');
    navLinks.classList.toggle('open');


    !toggleButton.classList.contains("open") ? toggleButton.style.backgroundColor="transparent" : toggleButton.style.backgroundColor="black"
  });


})


