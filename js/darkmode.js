let darkToggle = document.querySelector('#header nav li.dark');
darkToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkToggle.querySelector("i").classList.remove("fa-moon")
        darkToggle.querySelector("i").classList.add("fa-sun")
    } else {
        darkToggle.querySelector("i").classList.remove("fa-sun")
        darkToggle.querySelector("i").classList.add("fa-moon")

    }
})