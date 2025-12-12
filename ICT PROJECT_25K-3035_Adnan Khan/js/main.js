//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 
})
//Portfolio section - Modal
const projectModals = document.querySelectorAll('.project-modell');
const imgCards = document.querySelectorAll('.img-card');
const projectCloseBtns = document.querySelectorAll('.Project-close-btn');

var projectmodal = function(modalClick){
    projectModals[modalClick].classList.add('active');
}
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', () => {
        projectmodal(i);
    });
});

projectCloseBtns.forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener('click', () => {
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove('active');
        });
    });
});
