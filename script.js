const navBar = document.getElementById("navbar");
const navLink = document.getElementsByClassName("navigation__link");
const gallery = document.querySelector("#gallery");

let img = document.querySelectorAll(".album__img");
// let photo = document.querySelector()
let album = document.querySelector(".album");
let body = document.querySelector("body");




console.log(img)

let ofLoop;
for(value of img){
    value.addEventListener("click", showGallery);
    console.log(value)
    // ofLoop = img;

}


function showGallery(value){
    console.log(ofLoop);

    const photo = document.createElement("img");
    const showGalleryBlock = document.createElement("div");
    //for(key)

    photo.setAttribute("src",`img/gallery/gallery${value}.jpg`);
    photo.className = "show-image";
    showGalleryBlock.className = "show-gallery";


    showGalleryBlock.appendChild(photo);
    gallery.appendChild(showGalleryBlock);

    showGalleryBlock.addEventListener('click', function (){
        showGalleryBlock.remove();
    })
}


document.addEventListener('scroll', fixBar);

function fixBar() {
    if (window.pageYOffset > 50) {
        for (value of navLink) {
            value.style.color = "#ffffff";
        }
        navBar.classList.replace("top", "low");
    } else {
        navBar.classList.replace("low", "top");
        for (value of navLink) {
            value.style.color = "#000";
        }
    }
}


window.addEventListener("load", function () {
    const header = document.querySelector("#header");
    const about = document.querySelector("#about");
    const services = document.querySelector("#services");

    const blog = document.querySelector("#blog");
    const subscribe = document.querySelector("#subscribe");

    const headerHeight = parseInt(getComputedStyle(header).height);
    const aboutHeight = parseInt(getComputedStyle(about).height);
    const servicesHeight = parseInt(getComputedStyle(services).height);
    const galleryHeight = parseInt(getComputedStyle(gallery).height);
    const blogHeight = parseInt(getComputedStyle(blog).height) + parseInt(getComputedStyle(subscribe).height);
    const navBarHeight = parseInt(getComputedStyle(navBar).height);
    
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 0 && window.pageYOffset < navBarHeight) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
        } else if (window.pageYOffset > navBarHeight && window.pageYOffset < (headerHeight - navBarHeight)) {
            navLink[0].classList.add("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
        } else if (window.pageYOffset > (headerHeight - navBarHeight) && window.pageYOffset <= (aboutHeight + headerHeight - navBarHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.add("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
        } else if (window.pageYOffset > (aboutHeight + headerHeight - navBarHeight) && window.pageYOffset < (servicesHeight + aboutHeight + headerHeight - navBarHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.add("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
        } else if (window.pageYOffset > (servicesHeight + aboutHeight + headerHeight - navBarHeight) && window.pageYOffset < (galleryHeight + servicesHeight + aboutHeight + headerHeight - navBarHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.add("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
        } else if (window.pageYOffset > (galleryHeight + servicesHeight + aboutHeight + headerHeight - navBarHeight) && window.pageYOffset < (galleryHeight + servicesHeight + aboutHeight + headerHeight + blogHeight - navBarHeight)) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.add("active-link");
            navLink[5].classList.remove("active-link");
        } else if ((window.pageYOffset > (galleryHeight + servicesHeight + aboutHeight + headerHeight + blogHeight - navBarHeight)) && (window.pageYOffset > (galleryHeight + servicesHeight + aboutHeight + headerHeight + blogHeight - navBarHeight))) {
            navLink[0].classList.remove("active-link")
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.add("active-link");
        }
    });
});
