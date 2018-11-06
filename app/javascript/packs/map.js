// import GMaps from 'gmaps/gmaps.js';
// import L from 'leaflet';

// var map =  // LIGNE 14
// map.addLayer(osmLayer);

var mapElements = document.getElementsByClassName('zone_maps');
Array.from(mapElements).forEach(mapElement => {
  var marker = JSON.parse(mapElement.dataset.marker);
  var div_id = JSON.parse(mapElement.dataset.marker).div_id;
  var zoneTitle = JSON.parse(mapElement.dataset.marker).title;
  // don't try to build a map if there's no div#map to inject in
  var map = L.map(div_id, { zoomControl:false, scrollWheelZoom: false }).setView([marker.lat, marker.lng], 16)
  var ggRoadmap = new L.Google('ROADMAP');
  map.on('click', function() {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
    }
    else {
    map.scrollWheelZoom.enable();
    }
  });

  map.addLayer(ggRoadmap);
  L.marker([marker.lat, marker.lng]).addTo(map)
    .bindPopup('This is your zone: ' + zoneTitle)
    .openPopup();
  L.circle([marker.lat, marker.lng], {radius: marker.radius}).addTo(map);
});

