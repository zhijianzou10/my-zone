var map = L.map('creation_zone', { drawControl: true }).setView([48.856614, 2.3522219], 13)
var ggRoadmap = new L.Google('ROADMAP');
map.addLayer(ggRoadmap);

var drawnItems = new L.FeatureGroup();

 var drawControl = new L.Control.Draw({
     edit: {
         featureGroup: drawnItems
     }
 });
 map.addLayer(drawnItems);
 map.on(L.Draw.Event.CREATED, function (event) {
      var layer = event.layer;
      var coordinates = layer.getLatLng();
      console.log(coordinates.lat)
      console.log(layer.getRadius())
      drawnItems.addLayer(layer);
  });



