let closeButton = document.querySelector('.button-close');
let menuButton = document.querySelector('.button-menu');
let sidebar = document.querySelector('.sidebar');

closeButton.addEventListener('click',toggleSideBar);

menuButton.addEventListener('click',toggleSideBar);


function toggleSideBar(){
    sidebar.classList.toggle('sidebar--active');
}