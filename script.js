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

/*
map.on('load', () => {
    map.addSource('uoft', {
        type: 'geojson',
        data:{
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    })

    map.addLayer({
        'id': 'uoft-buildings',
        'type': 'circle',
        'source': 'uoft',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }


    })

});


map.addSource('...', { //Your source ID
    'type': 'vector',
    'url': 'mapbox://...' //Your tileset link from mapbox
});
map.addLayer({
    'id': '...',
    'type': 'fill',
    'source': '...', //must match source ID from addSource method
    'paint': {
        'fill-color': '#888888',
        'fill-opacity': 0.4,
        'fill-outline-color': 'black'
    },
    'source-layer': '...' //name of layer. Get this from mapbox tileset page
},
     'uoft-buildings' //Drawing order - place below points
);

*/