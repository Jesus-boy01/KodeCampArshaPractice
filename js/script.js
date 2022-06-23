window.onscroll = () => {scrollFunction()};


scrollFunction = () => {

    let topNavs = document.querySelector("#navigations");
    
    if (document.documentElement.scrollTop > 50) {
        topNavs.classList.add("nav-scroll");
    } else {
        topNavs.classList.remove("nav-scroll");
    }
}