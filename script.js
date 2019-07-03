const navBar = document.getElementById("navbar");
const navLink = document.getElementsByClassName("navigation__link");
document.addEventListener('scroll', fixBar);

function fixBar() {
    if (window.pageYOffset > 50) {
        for (value of navLink) {
            value.style.color = "#ffffff";
        }
        navBar.classList.replace("top", "low");
        //navLink.style.fontWeight = "700";
        //console.log(navLink);
    } else {
        navBar.classList.replace("low", "top");
        for (value of navLink) {
            value.style.color = "#000";
        }
    }


        if (window.pageYOffset > 50 && window.pageYOffset < 650) {
            navLink[0].style.color = "green";
        } else if(window.pageYOffset > 650 && window.pageYOffset < 1175){
            navLink[0].style.color = "white";
            navLink[1].style.color = "green";
        } else if(window.pageYOffset > 1175 && window.pageYOffset < 1800){
            navLink[0].style.color = "white";
            navLink[1].style.color = "white";
            navLink[2].style.color = "green";
        }
//console.log(window.pageYOffset);

};


document.addEventListener('click', setActive);

function setActive(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log("magic is happening")
}