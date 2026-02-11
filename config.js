var config = {
    style: 'mapbox://styles/elviraperez/cmlf0dipt004m01r07r9ygknv',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZWx2aXJhcGVyZXoiLCJhIjoiY21sN3lrZ245MDJkdjNrcXN5MHpiems5eiJ9.aqFeWlQ9SprTq2Jlv-Xb_w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Faros La Palma',
    subtitle: 'Storytelling de Faros de La Palma',
    byline: 'Por Elvira Pérez',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Punta Lava',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Faro_de_Punta_Lava_2014-11.JPG',
            description: 'El faro de Punta Lava o faro de Punta del Moro es un faro situado en Tazacorte, al oeste de la isla de La Palma, en el archipiélago de las Islas Canarias, España. Es uno de los cuatro principales faros de La Palma, ya que cada uno marca un punto cardinal de la isla.',
            location: {
                center: [-17.925654770545254,28.596682943009345],
                zoom: 13,
                pitch: 64.51,
                bearing: 63.66
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro de Fuencaliente',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/At_La_Palma_2020_247.jpg',
            description: 'El faro de Fuencaliente se encuentra en la punta sur de la isla de La Palma (Canarias, España), en el municipio de Fuencaliente. Se encuentra en el parque natural de Cumbre Vieja y a su alrededor se encuentran las Salinas de Fuencaliente, las playas del Faro de Fuencaliente, la de Echentive y la antigua Fuente Santa.',
            location: {
                center: [ -17.84310129774418,28.455287740302268],
                zoom: 13,
                pitch: 78.50,
                bearing: 24
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Arenas Blancas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Faro_de_Arenas_Blancas_2014-11.JPG',
            description: 'El faro de Arenas Blancas es un faro situado en la playa de Arenas Blancas, a 4 kilómetros al sureste de Lomo Oscuro, en la isla de La Palma, en el archipiélago de las Islas Canarias, España.[1]​ Es uno de los cuatro faros principales de La Palma, ya que cada uno de estos marca un punto cardinal de la isla.',
            location: {
                center: [-17.760471082757682,28.569926622413455],
                zoom: 13,
                pitch: 69,
                bearing: -60.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro de Punta Cumplida',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Faro_de_Punta_Cumplida.jpg',
            description: 'El faro de Punta Cumplida es un faro situado en la localidad de Barlovento, en la isla de La Palma (provincia de Santa Cruz de Tenerife, Canarias, España).',
            location: {
                center: [ -17.778115240169008,28.83907216952715],
                zoom: 13,
                pitch: 71.50,
                bearing: -125.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
