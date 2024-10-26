const menuIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.body.addEventListener("click", (event) => {
    const clickedElement = event.target,
      imgs = document.querySelectorAll(".img");
  
    if (!clickedElement.classList.contains("img")) {
      imgs.forEach((img) => img.classList.remove("open"));
      return;
    }
  
    if (clickedElement.classList.contains("open")) {
      clickedElement.classList.remove("open");
      return;
    }
  
    imgs.forEach((img) => img.classList.remove("open"));
    clickedElement.classList.add("open");
  });
  
  document.body.addEventListener("click", (event) => {});
  