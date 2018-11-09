import { autocomplete } from '../components/autocomplete';
autocomplete();

var map = new google.maps.Map(document.getElementById('db_map'), {
  center: new google.maps.LatLng(48.856614, 2.3522219),
  zoom: 13,
  mapTypeId: 'roadmap'
});
var geocoder;
geocoder = new google.maps.Geocoder();


var zoneData = JSON.parse(document.getElementById('db_map').dataset.zone);
var heatmapData = []
Array.from(zoneData).forEach(data => {
  heatmapData.push(new google.maps.LatLng(JSON.parse(data).lat, JSON.parse(data).lng));
});
var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.set('radius', heatmap.get('radius') ? null : 50);
var gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]
heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
heatmap.setMap(map);


var update = function() {
  var input_address = String($("input[name='address']").val());
  if (input_address != "") {
    geocoder.geocode( { 'address': input_address}, function(results, status) {
      if (status == 'OK') {
        var gLat = results[0].geometry.location.lat();
        var gLng = results[0].geometry.location.lng();
        map.setCenter(new google.maps.LatLng(gLat, gLng));
      }
    });
  }
};
update();
$('form').change(update);
