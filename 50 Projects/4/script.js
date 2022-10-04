const open = document.getElementById('open');
const close = document.getElementById('close');

const container = document.querySelector('.container');
console.log("sdf")
open.addEventListener('click', () => {
    container.classList.add('show-nav')
    console.log("open clicked");
}

)
close.addEventListener('click', () =>
    container.classList.remove('show-nav')
)