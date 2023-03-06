const button = document.getElementById('btn')
const color = document.querySelector('.color')
const COLORS = ['red', 'orange', 'yellow', 'blue', 'green']
button.addEventListener('click', () => {
    const rgbColor = COLORS[getRandomNumber()]
    const container = document.getElementById('container')
    container.style.background = rgbColor
    color.textContent = rgbColor
})
function getRandomNumber() {
    return Math.floor(Math.random() * COLORS.length)
}
