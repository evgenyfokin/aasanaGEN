'use strict';

// window.onload = generateAsans;

function generateAsans() {
    document
        .getElementById('tr')
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    let load = document.getElementById('loader');
    // load.className = 'loader';
    load.setAttribute('style', 'opacity: 1');
    // setTimeout((load.innerHTML = 'Hello world'), 5);
    // return setTimeout(document.getElementById('loader').remove('loader'), 3)
    // document.getElementById('loader').remove('loader');
    setTimeout(clear, 1000);
}

function clear() {
    // let clear = document.getElementById('loader').removeClass('loader');
    // // .classList.remove('loader');
    let load = document.getElementById('loader');
    // load.classList.remove('loader');
    load.setAttribute('style', 'display: none');
}
