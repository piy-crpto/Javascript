const paneles = document.querySelectorAll('.panele');
paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass()
        panel.classList.add('active');
    })
})

function removeClass() {
    paneles.forEach(panel => {
        console.log('removed')
        panel.classList.remove('active');
    })
}