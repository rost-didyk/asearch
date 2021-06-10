// 1) run function in console
function addScript( src ) {
    const s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
    s.onload = () => {
        console.log('AnyclipSearch is ready to use')
    }
}

// 2) load  AnyclipSearch widget js
addScript('script here');

// 3) initialize AnyclipSearch widget
window.AnyclipSearchWidget(document.querySelector('.row_col_wrap_12'))

