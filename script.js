'use strict';

window.onload = func;

function func() {
    // document.getElementById("jump_to_this_location").scrollIntoView(alignToTop);
    document
        // .getElementById('jump_to_this_location')
        // .scrollIntoView({ behavior: 'smooth' });
        document.getElementById('vh').scrollIntoView({block: "center", behavior: "smooth"});
}
