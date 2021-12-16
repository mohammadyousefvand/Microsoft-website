const btn = document.querySelector('.menu')
const nav = document.querySelector('.nav')

btn.addEventListener('click', function () {
    nav.classList.toggle('active')
    btn.classList.toggle('rotate')
})