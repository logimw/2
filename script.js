const navBar = document.getElementById("navbar");
const navLink = document.getElementsByClassName("navigation__link");
const navLinks = document.querySelectorAll(".navigation li");
const gallery = document.querySelector("#gallery");

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");

let img = document.querySelectorAll(".album__img");
// let photo = document.querySelector()
let album = document.querySelector(".album");
let body = document.querySelector("body");
const keyEsc = 27;


const counter = document.createElement("span");
counter.classList.add("counter");

class ImgSize {
    constructor(imgHeight, imgWidth) {
        this.imgHeight = imgHeight;
        this.imgWidth = imgWidth;
    }
    get styleTop(){
            return this.getTop();
    }

    getTop(){
        return `${counter}.style.top = ${this.imgHeight}px`;
    }
}


let ofLoop;
let i = 0;
let arr = [];
for (value of img) {
    value.addEventListener("click", showGallery);
    ofLoop = value;
    arr.push(img[i++]);    
}

burger.addEventListener("click", function () {
    nav.classList.toggle("navigation-active");
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s  ${index / 7 + 0.3}s`
        }
    });
    burger.classList.toggle("toggle");
});



counter.style.top = ImgSize.imgHeight;

function showGallery(e) {
    let imgAttribute = e.target.getAttribute("src");
    const frame = document.createElement("div");
    
    const photo = document.createElement("img");
    
    const showGalleryBlock = body.appendChild(document.createElement("div"));
    body.style.position = "relative";


    photo.classList.add("tiny-image");
    setTimeout(() => {
        photo.classList.remove("tiny-image");
        photo.classList.add("show-image");
    }, 100);


    photo.setAttribute("src", `${imgAttribute}`);
    showGalleryBlock.className = "show-gallery";
    const counterSelector = document.querySelector(".counter");


    frame.classList.add("frame");
    frame.appendChild(photo);
    frame.appendChild(counter);

    showGalleryBlock.appendChild(frame);
    let imgHeight = parseInt(getComputedStyle(photo).height);
    let imgWidth = parseInt(getComputedStyle(photo).width);
    let abcd = counterSelector;
    
    let size = new ImgSize(imgHeight, imgWidth);

    showGalleryBlock.addEventListener('click', function () {
        setTimeout(() => {
            showGalleryBlock.remove();
        }, 100);
    })
    document.body.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.keyCode === keyEsc) {
            showGalleryBlock.remove();
        }
    });


}




document.addEventListener('scroll', fixBar);

function fixBar() {
    if (window.pageYOffset > 50) {
        for (value of navLink) {
            value.style.color = "#ffffff";
        }
        navBar.classList.replace("top", "low");
    } else if (window.innerWidth <= 480) {
        navBar.classList.replace("low", "top");
        for (value of navLink) {
            value.style.color = "#fff";
        }
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

    const backToTop = document.querySelector(".back-to-top");


    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 0 && window.pageYOffset < navBarHeight) {
            navLink[0].classList.remove("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
            backToTop.classList.remove('button-on');
        } else if (window.pageYOffset > navBarHeight && window.pageYOffset < (headerHeight - navBarHeight)) {
            navLink[0].classList.add("active-link");
            navLink[1].classList.remove("active-link");
            navLink[2].classList.remove("active-link");
            navLink[3].classList.remove("active-link");
            navLink[4].classList.remove("active-link");
            navLink[5].classList.remove("active-link");
            backToTop.classList.add("button-on")
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


const scroll = new SmoothScroll('nav a[href*="#"], .back-to-top', {
    speed: 200,
    easing: 'easeInCubic'
});