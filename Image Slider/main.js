const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextButton  = document.querySelector(".next-btn");
const prevButton  = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let no_of_images = slideImage.length;
let slide_width = slideImage[0].clientWidth;
let currentSlide = 0;

function init()
{
    slideImage.forEach((img, i) =>{
        img.style.left = i * 100 +"%";
    });

    slideImage[0].classList.add("active");
}

init();

function createNavigationDots(){
    
    for(let i = 0; i < no_of_images; i++)
    {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () =>
        {
            goToSlide(i);
        });

    }

    navigationDots.children[0].classList.add("active");
}

nextButton.addEventListener('click', () =>
{
    if( currentSlide >= no_of_images - 1)
    {
        goToSlide(0);
        currentSlide = 0;
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});


function goToSlide(slide_number)
{
    slidesContainer.style.transform = "translateX(-"+slide_width * slide_number+"px)";
    currentSlide = slide_number;
    setActiveClass();
}


prevButton.addEventListener('click', () =>
{
    if( currentSlide <= 0)
    {
        goToSlide(no_of_images-1);
        currentSlide = no_of_images-1;
        return;
    }
    currentSlide--;
   goToSlide(currentSlide);

});

function setActiveClass()
{
    let currentActive = document.querySelector(".slide-image.active");

    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    let currentDot = document.querySelector(".single-dot.active");

    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}