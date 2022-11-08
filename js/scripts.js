const titleElement = document.getElementById('title');

const colorBoxElement = document.getElementById('color-box');

const rootStyles = document.documentElement.style;

titleElement.addEventListener('click', (event) => {
    titleElement.textContent = event.target.dataset.title
})

colorBoxElement.addEventListener('click', (event) => {
    rootStyles.setProperty('--box-color', event.target.dataset.color)
})