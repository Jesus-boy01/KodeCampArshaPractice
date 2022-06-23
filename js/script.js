window.onscroll = () => {
    scrollFunction();
    skillProgress();
};

scrollFunction = () => {

    let topNavs = document.querySelector("#navigations");
    
    if (document.documentElement.scrollTop > 50) {
        topNavs.classList.add("nav-scroll");
    } else {
        topNavs.classList.remove("nav-scroll");
    }
}

skillProgress = () => {

    let statisticsProgress = document.querySelector(".statistics-progress");
    
    if (document.documentElement.scrollTop > 50) {
        statisticsProgress.classList.add("skill-progress");
    } else {
        statisticsProgress.classList.remove("skill-progress");
    }
}