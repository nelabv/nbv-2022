document.addEventListener('scroll', function(e) {
  const nav = document.getElementById("nav");

  if (window.scrollY > 300) {
      nav.style.backgroundColor = "rgb(248, 242, 220)";
  } else {
      nav.style.backgroundColor = "#FFFDF6";
  }   
});