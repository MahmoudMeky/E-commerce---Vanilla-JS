let mySpan = document.querySelector("#landing .cloud span");

let myWords = [`Welcome!
to my First Site,
Hope you like it ♥!`, `Hiiii!
How are you?,
Thanks ♥!`];

let isFinished = 0;

function typeWriter(text, element, millesconds) {
    element.innerHTML = "";

    let myStr = text;
    let i = 0;
    let myInterval = setInterval(function() {
        element.innerHTML += myStr[i];
        i++
        if (i == myStr.length) {
            clearInterval(myInterval)
            isFinished = 1;
        }
    }, millesconds);

};

setTimeout(() => {
    typeWriter(myWords[0], mySpan, 90);
}, 500);



// for (let i = 0; i < myWords.length; i++) {
//     setTimeout(() => , 50 * )
// }


// mySpan.innerHTML = myWords[1]