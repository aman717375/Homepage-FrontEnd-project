const menu_btn = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');
const mobile_menu = document.querySelector('.sidebar');

menu_btn.addEventListener('click', function () {
  mobile_menu.classList.add('active');
});

menu_close.addEventListener('click', function () {
  mobile_menu.classList.remove('active');
});


// const navbar = document.querySelector("sidebar");
// const openMenu = document.getElementsByClassName("menu-open");
// const closeMenu = document.getElementsByClassName("menu-close");

// openMenu.addEventListener("click", () => {
//   navbar.classList.add("active");
// });

// closeMenu.addEventListener("click", () => {
//   navbar.classList.remove("active");
// });

// alert("hello")


// const open_menu = document.querySelector('.menu-open')
// const close_menu = document.querySelector('.menu-close');
// const nav_active = document.querySelectorAll('.sidebar');

// open_menu.addEventListener('click', () => {
//     nav_active.forEach((elem) => elem.classList.add('active') )
// })

// close_menu.addEventListener('click', () => {
//     nav_active.forEach(elem => elem.classList.remove('active'))
// })

// const navbar = document.querySelector("sidebar");
// const openMenu = document.getElementById("menu-open");
// const closeMenu = document.getElementById("menu-close");

// openMenu.addEventListener("click", () => {
//   navbar.classList.add("active");
// });

// closeMenu.addEventListener("click", () => {
//   navbar.classList.remove(".active");
// });