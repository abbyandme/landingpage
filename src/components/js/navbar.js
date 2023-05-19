
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
  if (hamburger.getAttribute('aria-expanded') == 'false')
  {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', 'true');
    navBar.style.display = "block";
  }

  else{
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', 'false');
    navBar.style.display = 'none';
  }
})

document.querySelectorAll('.nav-link').forEach(
  n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
  }))

