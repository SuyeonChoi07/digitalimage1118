const rightbutton = document.querySelector('#circle');

rightbutton.addEventListener('mouseover', () => {
    if (!rightbutton.classList.contains('active')) {
        rightbutton.classList.add('active');
    } else {
        rightbutton.classList.remove('active');
    }
});

const leftbutton = document.querySelector('#circle');

leftbutton.addEventListener('mouseover', () => {
    if (!leftbutton.classList.contains('active')) {
        leftbutton.classList.add('active');
    } else {
        leftbutton.classList.remove('active');
    }
});