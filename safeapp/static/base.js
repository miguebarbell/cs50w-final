document.addEventListener('DOMContentLoaded', function() {
    loadnav()
})

function loadnav() {
    var page = document.URL
    if (page.includes('profile')) {
        document.querySelector('#profilebtn').classList.add('active')
    } else if (page.includes('gen')) {
        document.querySelector('#generatorbtn').classList.add('active')
    } else {
        document.querySelector('#passwordbtn').classList.add('active')
    }
}