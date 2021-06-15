import UserController from '../controllers/UserController.js'


export default class MapsView {
    constructor() {
        this.userController = new UserController();


        //IDs from the page
        this.map = document.querySelector('#map')
        this.slpTransports = document.querySelector('#sltTransports')
        this.map = document.querySelector('#divResults')
        /* this.structuresPositions = [
            {
                text: 'primeiro',
                location: { lat: 41.371250, lng: -8.728500 },
            },
            {
                text: 'segundo',
                location: { lat: 41.361500, lng: -8.744500 },
            },
            {
                text: 'terceiro<br>sdajdspaoj',
                location: { lat: 41.368250, lng: -8.747000 },
            },
            {
                text: 'quarto',
                location: { lat: 41.374099, lng: -8.735550 },
            },
        ]
        this.initMap(this.map) */

    }

    initMap() {

        const sltTransport = document.getElementById('sltTransports')
        let esmad = { lat: 41.366949, lng: -8.738722 }
        const infoWindow = new google.maps.InfoWindow();
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
        this.structuresPositions.forEach((structure) => {
            this.createMark(structure)
        });
        /* for (const structures of this.structuresPositions) {
            createMark(structures);
        } */
    }

    createMark(result) {
        const marker = new google.maps.Marker({
            map: map,
            position: result.location,
            animation: ''
        });



        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent(result.text);
            infoWindow.open(map, this);
            toggleBounce(marker);
            if (sltTransport !== null) {
                calcRoute(directionsService, directionsRenderer, marker.position);
            }
        });
    }

    toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        };
    };


    calcRoute(directionsService, directionsRenderer, marker) {

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