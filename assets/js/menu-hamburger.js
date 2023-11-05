const iconBurger = document.querySelector("#menu-burger");
const sidebar = document.querySelector('#sidebar')
const closeMenu = document.querySelector('#close_menu-hamburger')

iconBurger.addEventListener("click", () => {
    openSide()
})

closeMenu.addEventListener('click', () => {
    closeSide()
})

function openSide() {
    sidebar.classList.add('active-sidebar')

    // ADD ANIMATION
    sidebar.style.animation = 'showSide .5s ease-in-out';
}

function closeSide() {
    sidebar.classList.remove('active-sidebar')
    sidebar.style.animation = 'closeSide .5s ease-in-out';
}