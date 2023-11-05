const nextSession = document.querySelector('#next-session svg');
const firstSection = document.querySelector(".first-section")

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY.toFixed(0);
    let sectionHeight = firstSection.clientHeight
    console.log(scrollPosition)
    if (scrollPosition >= (sectionHeight - 200)) {
        nextSession.style.display = "none"
        console.log("sumiu")
    } else {
        nextSession.style.display = "inline-block"
    }

})
