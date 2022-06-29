let cartBoxItems = cartBoxBody.querySelector(".items");
let cartBoxTotal = cartBoxBody.querySelector(".total h3");
let totalPrice = 0;
let cartBoxItemCounter = 0;
let cartBoxCounterHTML = document.querySelector("#number-of-items")



let addButtons = document.querySelectorAll(".addbtn");



function addedSuccesffuly(product) {

    let text = document.createElement("h4");
    text.setAttribute("id", "added-successfuly");
    text.innerHTML = "Item added!";

    product.append(text);

    setTimeout(function() {
        product.querySelector("#added-successfuly").style.opacity = 1;
        product.querySelector("#added-successfuly").style.top = "50%";
    }, 0)

    setTimeout(function() {
        product.querySelector("#added-successfuly").style.opacity = 0;
        product.querySelector("#added-successfuly").style.top = "90%";
    }, 1000)

};


let fixedNavBar = document.querySelector("#header");

// Start Code by Add Button Functions
function addButtonFunctions() {
    addButtons.forEach(function(btn) {

        btn.parentElement.dataset.counter = 0;


        btn.addEventListener("click", function() {

            // making the nav bar sticky
            if (!fixedNavBar.classList.contains("sticky")) {
                fixedNavBar.style.transition = ".1s";
                fixedNavBar.style.opacity = 0;
                setTimeout(() => {
                    fixedNavBar.classList.add("sticky");
                    fixedNavBar.style.transform = "translateY(60px)"
                    fixedNavBar.style.transition = ".4s";
                }, 100)

                setTimeout(function() {
                    fixedNavBar.style.opacity = 1;
                    fixedNavBar.style.transform = "translateY(0px)"
                }, 250)
            }

            // Rendering Elements to HTML CART BOX
            if (btn.parentElement.dataset.counter == 0) {
                renderElementToHTML(btn.parentElement.dataset.id, btn.parentElement.querySelector("img").src, btn.parentElement.querySelector(".name").innerHTML, btn.parentElement.querySelector(".price").dataset.price, btn.parentElement.dataset.counter);
                // Adding Events to Delete Button
                deleteButtonFunctions();
            }
            // Increasing the counter of Element 
            btn.parentElement.dataset.counter++;
            // Increasing the counter of element in CartBox
            increaseElementCounterInCartBox(btn.parentElement.dataset.id)
                // Updating the number of Counter
            updatingHTMLCartBoxItemsCounter(btn.parentElement.dataset.id, btn.parentElement.dataset.counter);
            // Increasing Total Counter
            increasingCartTotalCounter()
                // Increasing the Price in CArt
            increasePriceInCart(btn);

            // Showing UP Added Succesfully
            addedSuccesffuly(btn.parentElement)
        });


    });
};
addButtonFunctions();


function renderElementToHTML(prodId, imageSrc, prodName, prodPrice, counter) {
    // Adding New Element 
    let newElement = `
    <div class="item" data-id=${prodId}>
    <div class="img">
        <img src="${imageSrc}" alt="">
    </div>
    <div class="text">
        <h4 class="title">${prodName}</h4>
        <span class="price" data-price=${prodPrice}>
            <span class="counter" data-count=${counter}></span> $${prodPrice}.00
        </span>
    </div>
    <div class="btn">
    <i class="fa-regular fa-circle-xmark"></i>
    </div> 
    </div>`
        // Adding the Item to The Cart Box
    cartBoxItems.innerHTML += (newElement)

};


function increasingCartTotalCounter() {
    cartBoxItemCounter++
    cartBoxCounterHTML.style.display = "inline";
    cartBoxCounterHTML.innerHTML = cartBoxItemCounter
}

function increasePriceInCart(btn) {
    totalPrice += +btn.parentElement.querySelector(".price").dataset.price;
    updateTotalPriceInHTML()
};
// Increase Counter IN CARTBOX ITEMS
function updatingHTMLCartBoxItemsCounter(id, newNumber) {
    let counters = cartBoxItems.querySelectorAll(".counter");
    counters.forEach((counter) => {
        if (counter.parentElement.parentElement.parentElement.dataset.id == id) {
            counter.innerHTML = newNumber
        }
    })
};



function increaseElementCounterInCartBox(id) {
    let items = cartBoxItems.querySelectorAll(".item");
    items.forEach((item) => {
        if (item.dataset.id == id) {
            item.querySelector(".counter").dataset.count++;
        }
    })
}



function updateTotalPriceInHTML() {
    cartBoxTotal.innerHTML = `$ ${totalPrice.toFixed(2)}`;
}




// Delete Buttons  Functions
function deleteButtonFunctions(btn) {
    let removeButtons = cartBoxBody.querySelectorAll(".btn");

    // remvoing Items
    removeButtons.forEach(function(btn) {


        btn.addEventListener("click", function() {
            // Remove the item
            btn.parentElement.remove();
            // Lowering the price
            loweringPriceInCart(btn.parentElement.querySelector(".counter").dataset.count, btn.parentElement.querySelector(".price").dataset.price);
            resetingElementCounter(btn.parentElement.dataset.id);
            drecreasingCartTotalCounter(btn.parentElement.querySelector(".counter").dataset.count);

        });


    })

};

function drecreasingCartTotalCounter(counter) {
    cartBoxItemCounter -= counter;
    if (cartBoxItemCounter == 0) {
        cartBoxCounterHTML.style.display = "none";
    } else {
        cartBoxCounterHTML.style.display = "inline";
        cartBoxCounterHTML.innerHTML = cartBoxItemCounter
    }

}


function loweringPriceInCart(counter, price) {
    totalPrice -= (+counter * +price);
    updateTotalPriceInHTML()
};




function resetingElementCounter(id) {
    myProducts.forEach(function(product) {
        if (product.dataset.id == id) {
            product.dataset.counter = 0
        }
    })
};