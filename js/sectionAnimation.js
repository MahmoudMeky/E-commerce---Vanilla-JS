// Animating Featuers Section
let featuresElements = document.querySelectorAll("#features .container >div")

function hideElements(elements) {

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 0;
        elements[i].style.transform = `translateY(100px)`
        elements[i].style.transition = `.5s`

    }


}

function showElements(elements) {

    for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
            elements[i].style.opacity = 1;
            elements[i].style.transform = `translateY(00px)`
        }, i * 200);
    }

}





function hideElement(element) {

    element.style.opacity = 0;
    element.style.transform = `translateY(100px)`
    element.style.transition = `.5s`
        // setTimeout(() => element.style.display = "none", 500)

}

function showElement(element) {

    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = `translateY(00px)`
    }, 100);

    // setTimeout(() => element.style.display = "block", 500)
}



// Animating Cart Box

function showAndHideElement(elementClicked, elementToShow) {
    let isElementDisplayed = 0;
    elementClicked.addEventListener("click", function(e) {

        if (!isElementDisplayed) {

            elementToShow.style.display = "block";
            hideElement(elementToShow);

            showElement(elementToShow);
            isElementDisplayed = 1;
        } else {

            hideElement(elementToShow);
            setTimeout(function() {
                elementToShow.style.display = "none";
            }, 400)
            isElementDisplayed = 0;
        }
    }, true)
};


// Cartbox Show / Hide
let cartBoxIcon = document.querySelector("nav li.cart i");
let cartBoxBody = document.querySelector("#cartbox");
showAndHideElement(cartBoxIcon, cartBoxBody);


// SearchBar Show / Hide
let searchIcon = document.querySelector("nav li.search i");
let searchBody = document.querySelector("nav form");
let searchBodyArrow = searchBody.querySelector(".arrow");

showAndHideElement(searchIcon, searchBody);
showAndHideElement(searchIcon, searchBodyArrow);



// // MobileBars Show / Hide
let mobileNavIcon = document.querySelector("nav .mobile-nav");
let mobileNavBody = document.querySelector("nav .nav");
showAndHideElement(mobileNavIcon, mobileNavBody);





// Features Section
hideElements(featuresElements);
whenElementReachedByScrolling(document.querySelector("#features"), featuresElements)


// // Values Section
let valuesHeading = document.querySelectorAll("#values h3");
let valuesElements = document.querySelectorAll("#values .items  > div");
hideElements(valuesHeading);
hideElements(valuesElements);
whenElementReachedByScrolling(document.querySelector("#values"), valuesElements)
whenElementReachedByScrolling(document.querySelector("#values"), valuesHeading);



function whenElementReachedByScrolling(element, elementsToShow) {
    window.addEventListener("scroll", function() {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 200;
        // let elementVisible = element.offsetHeight / 2;

        if (elementTop <= windowHeight - elementVisible) {
            showElements(elementsToShow)
        };



    })
};




// Gallery Section

let galleryHeading = document.querySelectorAll("#gallery h3");
let galleryFilters = document.querySelectorAll("#gallery .categories li");
let galleryElements = document.querySelectorAll("#gallery .items  > div");
hideElements(galleryHeading);
hideElements(galleryFilters);
hideElements(galleryElements);
whenElementReachedByScrolling(document.querySelector("#gallery"), galleryHeading);
whenElementReachedByScrolling(document.querySelector("#gallery"), galleryFilters);
whenElementReachedByScrolling(document.querySelector("#gallery"), galleryElements);








// // Making the Nav bar Sticky while scrolling

// window.addEventListener("scroll", function() {

//     if (window.scrollY > window.innerHeight / 2) {
//         fixedNavBar.classList.add("sticky");

//     }
//     // // making the nav bar sticky
//     if (!fixedNavBar.classList.contains("sticky")) {
//         // fixedNavBar.style.transition = ".1s";
//         // fixedNavBar.style.opacity = 0;
//         // setTimeout(() => {
//         //     fixedNavBar.classList.add("sticky");
//         //     fixedNavBar.style.transform = "translateY(60px)"
//         //     fixedNavBar.style.transition = ".4s";
//         // }, 100)

//         // setTimeout(function() {
//         //     fixedNavBar.style.opacity = 1;
//         //     fixedNavBar.style.transform = "translateY(0px)"
//         // }, 250)
//     }
//     // }
// })