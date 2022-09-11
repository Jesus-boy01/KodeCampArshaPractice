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

// function currentNav() {
//     document.querySelector(".page-navs-about").style.color = "#47b2e4";
//     document.querySelector(".page-navs-services").style.color = "#47b2e4";
//     document.querySelector(".page-navs-portfolio").style.color = "#47b2e4";
//     document.querySelector(".page-navs-team").style.color = "#47b2e4";
//     document.querySelector(".page-navs-contact").style.color = "#47b2e4";
// }

skillProgress = () => {

    let statisticsProgress = document.querySelector(".statistics-progress");
    
    if (document.documentElement.scrollTop > 50) {
        statisticsProgress.classList.add("skill-progress");
    } else {
        statisticsProgress.classList.remove("skill-progress");
    }
}

let overlayWrapper = document.querySelector("#overlay-wrapper");

function textOverlay() {
    if (!(onmouseenter)) {
        let handler = '';

        handler = `<div class="overlay text-white d-flex align-items-center" style="width: 94%;">
                        <div class="left-overlay ms-3">
                            <p class="mb-1">Web 2</p>
                            <p class="mb-3">Web</p>
                        </div>
                        <div class="right-overlay me-3 ms-auto">
                            <i class="bi bi-plus fs-4"></i>
                            <i class="bi bi-link-45deg fs-4"></i>
                        </div>
                    </div>`;

        overlayWrapper.innerHTML = handler;

        let overlay = document.querySelector(".overlay");
        overlay.classList.add("image-overlay");
    }
}

function textOverlayRemove() {
    if (!(onmouseleave)) {
        let overlay = document.querySelector(".overlay");
        overlay.classList.remove("image-overlay")
    }
}