const btn = document.querySelector('.menu')
const nav = document.querySelector('.nav')

let linkItem = document.querySelectorAll('.link-item')

btn.addEventListener('click', function () {
    nav.classList.toggle('active')
    btn.classList.toggle('rotate')
})

linkItem.forEach(function (link) {
    link.addEventListener('click' , function () {
        nav.classList.remove('active')
    })
})