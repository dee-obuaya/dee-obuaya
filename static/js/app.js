document.addEventListener("DOMContentLoaded", function () {
    emailTag = document.querySelector(".email")

    emailTag.addEventListener("mouseover", function () {
        emailName = document.querySelector(".email-name");
        emailName.classList.remove("invisible", "d-none");
        emailTag.setAttribute("href", "mailto: chukwudumebiobuaya@gmail.com");
    });

    emailTag.addEventListener("mouseout", function () {
        emailName = document.querySelector(".email-name");
        emailName.classList.add("invisible", "d-none");
        emailTag.setAttribute("href", "cyz@gmail.com");
    });

})
