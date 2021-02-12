var container = document.querySelector('.container');
var search = document.querySelector('.search');
var icon = document.querySelector('.icon');
icon.addEventListener('click', () => {
    container.classList.toggle('active');
    search.focus();
})