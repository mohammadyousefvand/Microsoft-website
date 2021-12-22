const btn = document.querySelector('.menu')
const nav = document.querySelector('.nav')

let linkItem = document.querySelectorAll('.link-item')
let goUpItem = document.querySelector('.go-up')

function goUpHandler () {
    window.scrollTo(0,0)
}

btn.addEventListener('click', function () {
    nav.classList.toggle('active')
    btn.classList.toggle('rotate')
})

linkItem.forEach(function (link) {
    link.addEventListener('click' , function () {
        nav.classList.remove('active')
    })
})

goUpItem.addEventListener('click' , goUpHandler)