window.onload = function() {
    document.querySelector("#loading").style.opacity = 0;
    document.querySelector("#loading").style.transition = ".5s";
    setTimeout(function() {
        document.querySelector("#loading").style.display = "none";
    }, 200);

    document.querySelector("#main").style.display = "block";
    setTimeout(function() {
        document.querySelector("#main").style.transition = ".5s";
        document.querySelector("#main").style.opacity = 1;
    }, 400);
};