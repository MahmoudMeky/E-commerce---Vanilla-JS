let myPhotosCount = 4;


let left = document.querySelector(".slider.left");
let right = document.querySelector(".slider.right");
let myImage = document.querySelector("#landing .pic");
let myInterval;

let i = 1;


left.addEventListener("click", function() {
    Before()
})

right.addEventListener("click", function() {
    Next()
})


function Play() {
    myInterval = setInterval(function() {
        i++
        if (i > myPhotosCount) {
            i = 1
        }
        // console.log(i)
        // myImage.style.backgroundImage = `url(./images/slider/${i}.png)`
        changePic(myImage, i)
    }, 5000)
}



function Next() {
    i++
    if (i > myPhotosCount) {
        i = 1
    }
    // console.log(i)
    // myImage.style.backgroundImage = `url(./images/slider/${i}.png)`
    changePic(myImage, i)
}


function Before() {
    i--
    if (i < 1) {
        i = myPhotosCount
    }
    // console.log(i)
    // myImage.style.backgroundImage = `url(./images/slider/${i}.png)`
    changePic(myImage, i)

}


Play()


function changePic(element, i) {
    element.style.opacity = 0;
    element.style.transition = ".3s";
    element.style.transform = `translateY(30px)`
    setTimeout(() => {
        element.style.backgroundImage = `url(./images/slider/${i}.png)`
    }, 200);
    setTimeout(() => {
        element.style.opacity = 1
        element.style.transform = `translateY(0px)`
    }, 500)
}