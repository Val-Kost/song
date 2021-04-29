const dropmenu = document.querySelector('.dropmenu'),
    menu = document.querySelector('.headmenu'),
    closeElem = document.querySelector('.dropmenu');

dropmenu.addEventListener('click', () => {
    headmenu.classList.add('active');
    dropmenu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    headmenu.classList.remove('active');
    dropmenu.classList.remove('active');
});
// menu