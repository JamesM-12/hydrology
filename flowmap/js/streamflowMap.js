var map = L.map('map', {
    center: [33.6, -80],
    zoom: 7,
    minZoom: 6,
    maxZoom: 16,
    wheelPxPerZoomLevel: 150
});

/*
L.Control.Fullscreen;

var legend = L.control({
    position: 'bottomright'
});

legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML = '<img class="legendpng" src="./flowmap/markers/legend.png">';

    return div;
};

legend.addTo(map);
*/

var bm = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);

function doStyleMajorRiverBasins0(feature) {
    return {
        weight: 1.5,
        color: '#478566',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        opacity: 1.0,
    };
}
var json_MajorRiverBasins0JSON = new L.geoJson(json_MajorRiverBasins0, {
    style: doStyleMajorRiverBasins0
}).addTo(map);

/* data URLs */

var newGage = "https://services.arcgis.com/acgZYxoN5Oj8pDLa/arcgis/rest/services/StreamflowMonitoringSept2019/FeatureServer/0"
var reactGage = "https://services.arcgis.com/acgZYxoN5Oj8pDLa/arcgis/rest/services/StreamflowMonitoringSept2019/FeatureServer/1"
var newReach = "https://services.arcgis.com/acgZYxoN5Oj8pDLa/arcgis/rest/services/StreamflowMonitoringSept2019/FeatureServer/2"
var activeGage = "https://services.arcgis.com/acgZYxoN5Oj8pDLa/arcgis/rest/services/StreamflowMonitoringSept2019/FeatureServer/3"


var newGageLayer = L.esri.featureLayer({
    url: newGage
}).addTo(map);

newGageLayer.bindPopup(function (layer) {
    return L.Util.template('<p>NEW GAGE SITE</p> <table> <tr> <th scope="row"> Map ID </th> <td>{Map_ID}</td></tr><tr> <th scope="row"> Site Name </th> <td>{new_Stream}</td></tr><tr> <th scope="row"> Basin </th> <td>{new_Basin}</td></tr><tr> <th scope="row"> Description </th> <td>{new_Descri}</td></tr><tr> <th scope="row"> Designation </th> <td>{new_Design}</td></tr></table>', layer.feature.properties )
});

var reactGageLayer = L.esri.featureLayer({
    url: reactGage
}).addTo(map);

reactGageLayer.bindPopup(function (layer) {
    return L.Util.template('<p>REACTIVATION</p> <table> <tr> <th scope="row"> Map ID </th> <td>{Map_ID}</td></tr><tr> <th scope="row"> Site Number </th> <td>{Site_No}</td></tr><tr> <th scope="row"> Site Name </th> <td>{Site_Name}</td></tr><tr> <th scope="row"> Basin </th> <td>{Basin}</td></tr><tr> <th scope="row"> DA (sq mi) </th> <td>{DA}</td></tr><tr> <th scope="row"> Start Date </th> <td>{Start}</td></tr><tr> <th scope="row"> End Date </th> <td>{End_}</td></tr><tr> <th scope="row"> Years </th> <td>{Years}</td></tr><tr> <th scope="row"> Designation </th> <td>{Designatio}</td></tr></table>', layer.feature.properties )
});

var newReachLayer = L.esri.featureLayer({
    url: newReach
}).addTo(map);

newReachLayer.bindPopup(function (layer) {
    return L.Util.template('<p>NEW REACH</p> <table> <tr> <th scope="row"> Map ID </th> <td>{Map_ID}</td></tr><tr> <th scope="row"> Site Name </th> <td>{Stream_Rea}</td></tr><tr> <th scope="row"> Basin </th> <td>{Basin}</td></tr><tr> <th scope="row"> Description </th> <td>{Descriptio}</td></tr><tr> <th scope="row"> Designation </th> <td>{Designatio}</td></tr></table>', layer.feature.properties )
});

var activeGageLayer = L.esri.featureLayer({
    url: activeGage
});

activeGageLayer.bindPopup(function (layer) {
    return L.Util.template('<table> <tr> <th scope="row"> MapID </th> <td>{MapID}</td></tr><tr> <th scope="row"> Site Name </th> <td>{SiteName}</td></tr><tr> <th scope="row"> Site Number </th> <td>{SiteNO}</td></tr><tr> <th scope="row"> Basin </th> <td>{Basin}</td></tr><tr> <th scope="row"> DA (sq mi) </th> <td>{DA}</td></tr><tr> <th scope="row"> Start Date </th> <td>{Start}</td></tr></table>', layer.feature.properties )
});


var sites = {
    "Proposed New Gage Sites": newGageLayer,
    "Proposed Reactivation Sites": reactGageLayer,
    "Proposed New Reaches": newReachLayer,
    "Active USGS Sites": activeGageLayer
};

L.control.layers(null, sites, {
    collapsed: false
}).addTo(map);
