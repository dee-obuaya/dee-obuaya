document.addEventListener("DOMContentLoaded", function () {
    linkedinTag = document.querySelector(".linkedin")
    emailTag = document.querySelector(".email")
    whatsappTag = document.querySelector(".whatsapp")

    linkedinTag.addEventListener("mouseover", function () {
        linkedinName = document.querySelector(".lnkd-name");
        linkedinName.classList.remove("invisible", "d-none");
    });

    linkedinTag.addEventListener("mouseout", function () {
        linkedinName = document.querySelector(".lnkd-name");
        linkedinName.classList.add("invisible", "d-none");
    });

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
