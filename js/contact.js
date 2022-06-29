// Contact Form Validation

let errorSpans = document.querySelectorAll("#contact form span");

let nameField = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let subBtn = document.querySelector(`#contact form input[type="submit"]`);

// Name Validation

function nameValid(Element) {
    if (Element.value.trim().length === 0) {
        if (!errorSpans[0].classList.contains("active")) {
            showError(errorSpans[0], true);
        }
        return false;
    } else {
        showError(errorSpans[0], false);
        return true;
    }
}

// Mail Validation

function mailValid(element) {
    let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        element.value
    );
    if (!emailTest) {
        if (!errorSpans[1].classList.contains("active")) {
            showError(errorSpans[1], true);
        }
        return false;
    } else {
        showError(errorSpans[1], false);
        return true;
    }
}

// Phone Validtation
function phoneValid(element) {
    let regex = /^(010|011|012)\d{8}$/;

    if (!regex.test(element.value)) {
        if (!errorSpans[2].classList.contains("active")) {
            showError(errorSpans[2], true);
        }
        return false;
    } else {
        showError(errorSpans[2], false);
        return true;
    }
}

subBtn.addEventListener("click", function(e) {
    let myValidArray = [
        nameValid(nameField),
        mailValid(email),
        phoneValid(phone),
    ];

    let condition = myValidArray.some((el) => el == false);

    if (condition) {
        e.preventDefault();
    }
});

function showError(error, trueORfalse) {
    if (trueORfalse) {
        error.style.transform = "translateY(30px)";
        error.style.opacity = 0;
        error.classList.add("active");
        setTimeout(function() {
            error.style.opacity = 1;
            error.style.transform = "translateY(0px)";
        }, 200);
    } else {
        setTimeout(function() {
            error.classList.remove("active");
            error.style.transform = "translateY(30px)";
            error.style.opacity = 0;
        }, 200);
    }
}

// Clear The console of Google Maps

// window.onload = function() {
//     setTimeout(function() {
//         console.clear()
//     }, 200)

// }