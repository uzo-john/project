//Navigation effect onscroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//scroll to top

const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on scroll 
window.addEventListener("scroll" , () =>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active"); 
        }
        else{
          document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu 

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

 //scroll animation 
 ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100

});

const revealOptions = {
   delay: 500,
   interval: 200,
 };
 
 ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { ...revealOptions, origin: 'left' });
 ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { ...revealOptions, origin: 'right' });
 ScrollReveal().reveal('.home .info p, .home .info .btn', { delay: 700, origin: 'left' });
 ScrollReveal().reveal('.home .media-icons i, .contact-left li', { ...revealOptions, origin: 'left' });
 ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
 ScrollReveal().reveal('.about .description, .copy-right', { ...revealOptions, origin: 'right' });
 ScrollReveal().reveal('.skills-description .service-description, .contact-card, .client-swiper, contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom' });
 ScrollReveal().reveal('.about', { ...revealOptions, origin: 'right' });
 ScrollReveal().reveal('.footer .group', { ...revealOptions, origin: 'top' });
 ScrollReveal().reveal('.home-huh-blurb', { ...revealOptions, origin: 'left' });
 ScrollReveal().reveal('.layout-third-md', { ...revealOptions, origin: 'top' });

 