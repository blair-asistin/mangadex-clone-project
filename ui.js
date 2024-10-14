// NAVIGATION BAR

const searchBar = document.getElementById("search-bar");

//When search bar is pressed it stretches and removes Ctrl icon and K icon
searchBar.addEventListener('focus', () =>{

    const ctrlContainer = document.querySelector(".ctrl-container");
    const searchContainer = document.querySelector(".search-container");

    const searchQuery = document.createElement("div");
    searchQuery.classList.add("search-query");
    searchQuery.style.transition = "width 0.2s";


    searchContainer.appendChild(searchQuery);
    searchQuery.textContent = "Enter a search query...";

    searchBar.style.width = "744px";
    searchBar.style.outline = "1px solid #E87646";
    searchBar.style.transition = "width 0.2s";

    ctrlContainer.remove();

    // setTimeout(function () {
        
    //     searchQuery.style.width = "744px";
    //     
    // }, 0);

    
    
});


//When user does not focus the search bar comes back to normal and Ctrl icon and K icon returns
searchBar.addEventListener('blur', () => {

    const searchContainer = document.querySelector(".search-container");
    const searchQuery = document.querySelector(".search-query");

    searchQuery.remove();

    const createCtrl = document.createElement("div");
    createCtrl.classList.add("ctrl-container");

    const createIcon = document.createElement("div");
    createIcon.classList.add("ctrl-icon");
    createIcon.textContent = "Ctrl";

    const createK = document.createElement("div");
    createK.classList.add("k-icon");
    createK.textContent = "K";

    
    searchBar.style.width = "300px";
    searchBar.style.outline = "none";
    searchBar.style.borderColor = "#2C2C2C";

    createCtrl.appendChild(createIcon);
    createCtrl.appendChild(createK);

    searchContainer.appendChild(createCtrl);

});


const navbarSticky = document.querySelector("#NavBar");

function stickynavbar() {
    
    if (window.scrollY > 0) { // Check if the scroll position is greater than 0
        navbarSticky.classList.add('sticky');
        navbarSticky.style.backgroundColor = "#0F1011";
        navbarSticky.style.borderBottom= "solid 1px #E87646"
    } else {
        navbarSticky.classList.remove("sticky");
        navbarSticky.removeAttribute("style");
    }
}

window.addEventListener("scroll", stickynavbar);



//IMAGE SLIDER
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide .img-container");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn= document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button Listeners

nextBtn.addEventListener('click', () => {

    if(counter >= carouselImages.length-1){
        return;
    }

    console.log(size);

    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {

    if(counter <= 0){
        return;
    }

    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () =>{
    if(carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }


});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });