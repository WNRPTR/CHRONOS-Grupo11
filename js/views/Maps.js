function initMap() {
    structuresPositions = [
        {
            text: '<h3>Consultório do Dr.Hortório</h3><br><h5>Morada: R.Cidade da Póvoa de Varzim, 223-1.º E</h5><br><h5>Contacto: 938239842</h5><br><h5>Horário: 09:00-20:00</h5><br><h4>Lat: 41.371250 || Lng: -8.728500</h4>',
            location: { lat: 41.371250, lng: -8.728500 },
        },
        {
            text: '<h3>Consultório do Dra.Manuela Castro</h3><br><h5>Morada: R.5 de outubro, 345 2ºF</h5><br><h5>Contacto: 938232314</h5><br><h5>Horário: 09:00-21:00</h5><br><h4>Lat: 41.361500 || Lng: -8.744500</h4>',
            location: { lat: 41.361500, lng: -8.744500 },
        },
        {
            text: '<h3>Consultório do Dr.Barreiros King</h3><br><h5>Morada: Praça das Urzes, 420-4.º H</h5><br><h5>Contacto: 934562314</h5><br><h5>Horário: 09:00-21:00</h5><br><h4>Lat: 41.368250 || Lng: -8.747000</h4>',
            location: { lat: 41.368250, lng: -8.747000 },
        },
        {
            text: '<h3>Consultório do Dr.Argivadi</h3><br><h5>Morada: R. Vila de Argivadi, 700-3.º G</h5><br><h5>Contacto: 229849372</h5><br><h5>Horário: 09:00-21:00</h5><br><h4>Lat: 41.374099 || Lng: -8.735550</h4>',
            location: { lat: 41.374099, lng: -8.735550 },
        },
        {
            text: '<h3>Consultório do Dr.José Ramalho</h3><br><h5>Morada: R. Cap. Carlos da Fonseca, 145-2.º D</h5><br><h5>Contacto: 229835285</h5><br><h5>Horário: 09:00-19:00</h5><br><h4>Lat: 41.363800 || Lng: -8.726950</h4>',
            location: { lat: 41.363800, lng: -8.726950 },
        },
    ]

    const sltTransport = document.getElementById('sltTransports')
    let esmad = { lat: 41.366949, lng: -8.738722 }
    infoWindow = new google.maps.InfoWindow();
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();


    const map = new google.maps.Map(document.getElementById("map"), {
        center: esmad,
        zoom: 16,
        mapTypeControl: false
    });

    directionsRenderer.setMap(map)

    const esmadMarker = new google.maps.Marker({
        position: { lat: 41.366949, lng: -8.738722 },
        map: map,
        animation: google.maps.Animation.DROP

    })

    for (const structures of structuresPositions) {
        createMark(structures)
    }

    function createMark(result) {
        const marker = new google.maps.Marker({
            map: map,
            position: result.location,
            animation: '',
        })



        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent(result.text);
            infoWindow.open(map, this)
            toggleBounce(marker);
            if (sltTransport !== null) {
                calcRoute(directionsService, directionsRenderer, marker.position)
            }
        })
    }

    function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }


    function calcRoute(directionsService, directionsRenderer, marker) {

        const selectedMode = document.querySelector('#sltTransports').value;

        // Creation of a DirectionsRequest object 
        const request = {
            origin: esmad,
            destination: marker,
            travelMode: google.maps.TravelMode[selectedMode]
        };



        directionsService.route(request, (result, status) => {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                const directionsData = result.routes[0].legs[0]; // Get data about the mapped route
                if (directionsData) {
                    document.querySelector("#divResults").innerHTML = `<hr>
                    <div>Distância de viagem: ${directionsData.distance.text} (${directionsData.duration.text})</div><hr>
                `
                }
                else {
                    document.querySelector("#divResults").innerHTML = 'Directions request failed'
                }
            } else {
                alert('Não é possível encontrar uma rota para esse transporte.\nPor favor escolha outro transporte.')
            }
        });
    }
}