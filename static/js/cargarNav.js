// static/js/cargarNav.js

function cargarNav(){
    fetch('../templates/nav.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(err => console.error('Error cargando nav:', err));
}

// Llamas esta función desde tu HTML.