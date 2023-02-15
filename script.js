mapboxgl.accessToken = 'pk.eyJ1IjoienNnZ3I0NzJoMSIsImEiOiJjbGU2MHQ4ZTYwaTZoM25xbDRnNXNhYWRvIn0.DOkNRgk75AzyG_TGFXMLqA'

const map = new mapboxgl.Map({
    container: 'torontomap',
    style: 'mapbox://styles/zsggr472h1/cldm11hr0000g01t10scgbyli',
    center:[ -79.37, 43.65 ],
    zoom: 12,
});


map.on('load', () => {
    //GeoJSON must direct to URL 
    map.addSource('covid19immclinics', {
        type: 'geojson',
        data: 'https://zs106.github.io/ggr472lab2/covid-19-immunization-clinics.geojson'
   
    });

    //Draw GeoJSON point geometry as circles
    map.addLayer({
        'id': 'covid19immclinicslayer',
        'type': 'circle',
        'source': 'covid19immclinics',
        'paint': {
            'circle-radius': 5,
            'circle-color': 'blue'
        }

    });

    map.addSource('firestation', {
        type: 'geojson',
        data: 'https://zs106.github.io/ggr472lab2/fire-station-locations.geojson'
   
    });

    //Draw GeoJSON point geometry as circles
    map.addLayer({
        'id': 'firestationlayer',
        'type': 'circle',
        'source': 'firestation',
        'paint': {
            'circle-radius': 5,
            'circle-color': 'red'
        }

    });

})
