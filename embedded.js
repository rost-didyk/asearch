// install
    // 1) git clone https://github.com/rost-didyk/asearch asearch
    // 2) cd asearch
    // 3) npm i

// embedded to site
    // 1) npm run static -> run static server
    // 2) run function in console in anyclip site
    function addScript( src ) {
        const s = document.createElement( 'script' );
        s.setAttribute( 'src', src );
        document.body.appendChild( s );
        s.onload = () => {
            console.log('AnyclipSearch is ready to use')
        }
    }

    // 3) load  AnyclipSearch widget js
    addScript('http://localhost:3003/build/static/js/main.370cb848.js');

    // 4) initialize AnyclipSearch widget
    window.AnyclipSearchWidget({
        node: document.querySelector('.row_col_wrap_12'),
        searchApi: 'http://localhost:3000/mock.json'
    })

