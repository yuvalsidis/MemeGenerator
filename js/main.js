//  menu open

function toggleMenu() {
    const elmHeaderButtons = document.querySelector('.main-header .header-btns');
    const elmToggleButtons = document.querySelector('.main-layout .toggle-menu-btn');
    const isMenuOpen = document.body.classList.toggle('menu-open');
    if (isMenuOpen) {
        elmHeaderButtons.style.transform = "translateX(0)";
        elmToggleButtons.style.display = 'none';
    } else {
        elmHeaderButtons.style.transform = "translateX(100%)";
        elmToggleButtons.style.display = 'block';
    }
}
