document.addEventListener("DOMContentLoaded", function () {
    emailTag = document.querySelector(".email")
    whatsappTag = document.querySelector(".whatsapp")

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


    whatsappTag.addEventListener("mouseover", function () {
        whatsappName = document.querySelector(".whtsapp");
        whatsappName.classList.remove("invisible", "d-none");
    });

    whatsappTag.addEventListener("mouseout", function () {
        whatsappName = document.querySelector(".whtsapp");
        whatsappName.classList.add("invisible", "d-none");
    });
})
