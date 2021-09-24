const humbergerButton = document.getElementById("humberger");
humbergerButton.addEventListener('click', () =>{
  const headerNav = document.getElementById('navigation');
  headerNav.classList.toggle('in');
});