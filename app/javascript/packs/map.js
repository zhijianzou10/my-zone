import GMaps from 'gmaps/gmaps.js';

var mapElements = document.getElementsByClassName('zone_maps');
Array.from(mapElements).forEach(mapElement => {
  var marker = JSON.parse(mapElement.dataset.marker);
  var div_id = JSON.parse(mapElement.dataset.marker).div_id;
  if (mapElement) { // don't try to build a map if there's no div#map to inject in
  var map = new GMaps({ div: div_id, lat: 0, lng: 0 });
  map.addMarker(marker);
  map.setCenter(marker.lat, marker.lng);
  map.setZoom(14);
  }
});

