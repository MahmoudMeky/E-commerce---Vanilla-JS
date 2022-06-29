document.querySelector("#landing").style.display = "none"
document.querySelector("#features").style.display = "none"
document.querySelector("#values").style.display = "none"
    // Hiding all website



// Generating Array of Objects[Products]
function Product(id, name, price, imageSrc, category, inCart = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
    this.inCart = inCart
    this.category = category;
};


let Products = [];


// let p1 = new Product(1, "Winter Jacket", 10, "../images/gallery/image1.png")
// let p2 = new Product(2, "Winter Jacket", 20, "../images/gallery/image2.png")









let addBtns = document.querySelectorAll(".addbtn");

addBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        cartNumbers()

    })
})

function cartNumbers() {
    if (!localStorage.cartNumbers) {

        localStorage.setItem("cartNumbers", 1)
    } else {
        localStorage.cartNumbers++
    }
}