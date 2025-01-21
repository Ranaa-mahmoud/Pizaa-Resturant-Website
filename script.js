const menuToggle=document.querySelector('#menu-toggle');
const menulist=document.querySelector('.menu-list');
menuToggle.addEventListener('click',  ()=>{
    menulist.classList.toggle('active');
});
document.body.style.userSelect = "none";

document.addEventListener('keydown', function(e) {
    
    if (e.key === "F12") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || 
        (e.ctrlKey && e.key === 'x') || 
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});










