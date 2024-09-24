
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

const show = document.getElementById("show");
const corp_container = document.getElementById("corp_container");
const clozd = document.getElementById("close");

show.addEventListener('click', () => {
    corp_container.style.height = '100%'
    clozd.style.display = "flex"
    show.style.display = "none"
})

clozd.addEventListener('click', () =>{
    corp_container.style.height = '200px'
    clozd.style.display = "none"
    show.style.display = "flex"
})
