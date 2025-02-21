var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

// Fecha o menu quando um item é clicado
var menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        ul.classList.remove('open');
    });
});