document.addEventListener("DOMContentLoaded", function () {
    emailTag = document.querySelector(".email")
    mobileTag = document.querySelector(".mobile")

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


    mobileTag.addEventListener("mouseover", function () {
        mobileNo = document.querySelector(".mobile-no");
        mobileNo.classList.remove("invisible", "d-none");
        emailTag.setAttribute("href", "tel:2347063529084");
    });

    mobile.addEventListener("mouseout", function () {
        mobileNo = document.querySelector(".mobile-no");
        mobileNo.classList.add("invisible", "d-none");
        emailTag.setAttribute("href", "tel:15555555555");
    });

    mobileTag.addEventListener("touchstart", function () {
        mobileNo = document.querySelector(".mobile-no");
        mobileNo.classList.remove("invisible", "d-none");
        emailTag.setAttribute("href", "tel:2347063529084");
    });

    mobile.addEventListener("touchcancel", function () {
        mobileNo = document.querySelector(".mobile-no");
        mobileNo.classList.add("invisible", "d-none");
        emailTag.setAttribute("href", "tel:15555555555");
    });

})
