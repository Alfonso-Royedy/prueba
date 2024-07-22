// Inicialización del mapa de Google Maps
function initMap() {
    var location = { lat: 19.432608, lng: -99.133209 }; // Reemplaza con la latitud y longitud de tu ubicación

    // Crea un nuevo mapa centrado en la ubicación especificada
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Nivel de zoom del mapa
        center: location // Centro del mapa en la ubicación especificada
    });

    // Añade un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: location, // Posición del marcador
        map: map // Mapa en el que se coloca el marcador
    });
}



// Inicialización de elementos cuando el documento esté listo
$(document).ready(function(){
    // Inicialización del carrusel de fotos
    $('#photoCarousel').carousel({
        interval: 4000, // Intervalo de cambio de imagen en milisegundos (4000 ms = 4 segundos)
        pause: "hover" // Pausa el carrusel cuando el ratón está sobre él
    });

    // Inicialización del carrusel de avisos
    $('#noticeCarousel').carousel({
        interval: 7000, // Intervalo de cambio de imagen en milisegundos (7000 ms = 7 segundos)
        pause: "hover" // Pausa el carrusel cuando el ratón está sobre él
    });
});



// Escucha el evento 'DOMContentLoaded' que se dispara cuando el contenido del DOM ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento preloader por su id
    var preloader = document.getElementById('preloader');
    
    // Oculta el elemento preloader una vez que la página ha terminado de cargar
    preloader.style.display = 'none';
});
