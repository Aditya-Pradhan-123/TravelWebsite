
window.addEventListener('scroll',function(){
  const header = document.querySelector('.navbar')
  header.classList.toggle("sticky", window.scrollY > 0)
});
SpecialSlider();
function SpecialSlider(){
const slider = document.querySelector('.special-package');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
}


const mobileBtn = document.getElementById('mobile-cta');
              const nav = document.querySelector('nav');
              const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".about-content", 10, { top: "0%" }, "-=10")
  .fromTo(".about-details", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);


RecommendSlider();
function RecommendSlider(){
const slider2 = document.querySelector('.recommend-package');

let isDown = false;
let startX;
let scrollLeft;

slider2.addEventListener('mousedown', (e) => {
  isDown = true;
  slider2.classList.add('active');
  startX = e.pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
});
slider2.addEventListener('mouseleave', () => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider2.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
 
}


 

