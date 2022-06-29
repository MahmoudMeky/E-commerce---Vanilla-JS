let catBtns = document.querySelectorAll(" #gallery  .categories li");

// Filtering Products

let myProducts = document.querySelectorAll("#gallery .items .item");

catBtns.forEach((el) => {
    el.addEventListener("click", function() {

        if (!el.classList.contains("active")) {

            // Hide All Products
            for (let i = 0; i < myProducts.length; i++) {
                myProducts[i].style.display = "none";
            }

            // Show Selected Category
            for (let i = 0; i < myProducts.length; i++) {
                if (myProducts[i].classList.contains(el.classList[0])) {

                    // myProducts[i].style.display = "block";
                    showProduct(myProducts[i])
                }
            }

            if (el.classList.contains("all")) {
                for (let i = 0; i < myProducts.length; i++) {
                    // myProducts[i].style.display = "block";
                    showProduct(myProducts[i])
                }
            }

        }





        // Making the clicked ACtive !

        for (let i = 0; i < catBtns.length; i++) {
            catBtns.forEach((el) => el.classList.remove("active"))
        }
        el.classList.add("active")

    })
})


function showProduct(product) {
    if (product.style.display == "none") { // Product is hidden
        product.style.display = "block";
        product.style.opacity = 0;
        product.style.transform = " translateY(30px)";
        product.style.transition = " .3s";

        setTimeout(() => {
            product.style.transform = " translateY(0px)";
            product.style.opacity = 1;
        }, 300)
    }
}