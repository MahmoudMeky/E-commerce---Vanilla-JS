let scrollTopBtn = document.querySelector("#scroll-to-top");

scrollTopBtn.addEventListener("click", function() {
    // window.scrollTo(0, 0)
    document.body.scrollIntoView()
});


function hideScrollTopBtn() {
    window.addEventListener("scroll", function() {


        if (window.scrollY >= window.innerHeight / 2) {
            scrollTopBtn.style.display = "flex";
            scrollTopBtn.style.zIndex = "1"

            setTimeout(function() {
                scrollTopBtn.style.opacity = .4
                scrollTopBtn.style.bottom = "20px"
            }, 100)

        } else {
            scrollTopBtn.style.bottom = "0px";

            scrollTopBtn.style.opacity = 0
            scrollTopBtn.style.zIndex = "-1"


        }
    })
};



hideScrollTopBtn()