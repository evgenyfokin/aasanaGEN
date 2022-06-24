'use strict';

// window.onload = generateAsans;

function generateAsans() {
    let load = document.getElementById('loader');
    // load.className = 'loader';
    load.setAttribute('style', 'opacity: 1');
    // setTimeout((load.innerHTML = 'Hello world'), 5);
    // return setTimeout(document.getElementById('loader').remove('loader'), 3)
    // document.getElementById('loader').remove('loader');
    setTimeout(clear, 2000);
    setTimeout(getDown, 1900);
}

function clear() {
    // let clear = document.getElementById('loader').removeClass('loader');
    // // .classList.remove('loader');
    let load = document.getElementById('loader');
    // load.classList.remove('loader');
    load.setAttribute('style', 'display: none');
}

function getDown() {
    document
        .getElementById('scroll-down')
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function getUp() {
    document
        .getElementById('scroll-up')
        .scrollIntoView({ blocl: 'start', behavior: 'smooth' });
}
