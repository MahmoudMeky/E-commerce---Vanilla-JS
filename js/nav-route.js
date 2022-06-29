let myLanding = document.querySelector("#landing")
let myFeatures = document.querySelector("#features")
let myValues = document.querySelector("#values")
let myGallery = document.querySelector("#gallery")
let myAbout = document.querySelector("#about")
let myContact = document.querySelector("#contact")



let logoFooter = document.querySelector("footer .logo")


function hideAndDisp(element) {
    hideElement(element)
    setTimeout(function() {
        element.style.display = "none"
    }, 400)
}

function showAndDisp(element, display) {
    hideElement(element)
    element.style.display = display
    setTimeout(function() {
        showElement(element)
    }, 400)
}


let navBtns = document.querySelectorAll("nav .nav a");


// Home Btn

let homeBtn = navBtns[0];

homeBtn.addEventListener("click", function() {


    if (!homeBtn.classList.contains("active")) {


        hideAndDisp(myAbout)

        showHideScrlTop(true)


        showAndDisp(myContact, "flex")
        showAndDisp(myLanding, "flex")
        showAndDisp(myFeatures, "block")
        showAndDisp(myValues, "block")
        showAndDisp(myGallery, "block")
    }
    clearActive(navBtns);
    homeBtn.classList.add("active");




    // Adding the Logo to Footer
    showAndDisp(logoFooter, "block")
});


// About Btn



let aboutBtn = navBtns[1];

aboutBtn.addEventListener("click", function() {



    if (!aboutBtn.classList.contains("active")) {
        hideAndDisp(myLanding)
        hideAndDisp(myFeatures)
        hideAndDisp(myValues)
        hideAndDisp(myGallery)
        hideAndDisp(myContact)

        showHideScrlTop(false)

        showAndDisp(myAbout, "block")
    }

    clearActive(navBtns);
    aboutBtn.classList.add("active");


    // Removing the Logo from Footer
    hideAndDisp(logoFooter)

});



// Contact Btn


let contactBtn = navBtns[2];

contactBtn.addEventListener("click", function() {



    if (!contactBtn.classList.contains("active")) {
        hideAndDisp(myLanding)
        hideAndDisp(myFeatures)
        hideAndDisp(myValues)
        hideAndDisp(myGallery)
        hideAndDisp(myAbout)

        showHideScrlTop(false)

        showAndDisp(myContact, "block")
    }

    clearActive(navBtns);
    contactBtn.classList.add("active");


    // Removing the Logo from Footer
    hideAndDisp(logoFooter)

});



function clearActive(elements) {
    elements.forEach(element => {
        element.classList.remove("active");
    });
};



function showHideScrlTop(trueOrFalse) {
    if (trueOrFalse) {

        scrollTopBtn.style.display = "block"
    } else {
        scrollTopBtn.style.display = "none"

    }
};