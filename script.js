mapboxgl.accessToken = 'pk.eyJ1IjoienNnZ3I0NzJoMSIsImEiOiJjbGU2MHQ4ZTYwaTZoM25xbDRnNXNhYWRvIn0.DOkNRgk75AzyG_TGFXMLqA'

const map = new mapboxgl.Map({
    container: 'torontomap',
    style: 'mapbox://styles/zsggr472h1/cldm11hr0000g01t10scgbyli',
    center:[ -79.37, 43.65 ],
    zoom: 12,
});



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