var mapElements = document.getElementsByClassName('user_maps');
Array.from(mapElements).forEach(mapElement => {
  var marker = JSON.parse(mapElement.dataset.marker);
  var div_id = JSON.parse(mapElement.dataset.marker).div_id;
  var zoneTitle = JSON.parse(mapElement.dataset.marker).title;
  // don't try to build a map if there's no div#map to inject in
  var map = L.map(div_id, { zoomControl:false, scrollWheelZoom: false }).setView([marker.lat, marker.lng], 13)
  var ggRoadmap = new L.Google('ROADMAP');

  map.addLayer(ggRoadmap);
  L.circle([marker.lat, marker.lng], {radius: marker.radius}).addTo(map);
});
