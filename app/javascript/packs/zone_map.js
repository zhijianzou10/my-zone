import { autocomplete } from '../components/autocomplete';
autocomplete();

var map = L.map('creation_zone', { drawControl: false, scrollWheelZoom: false }).setView([48.856614, 2.3522219], 16)
var ggRoadmap = new L.Google('ROADMAP');
map.addLayer(ggRoadmap);
var geocoder;
geocoder = new google.maps.Geocoder();
map.on('click', function() {
if (map.scrollWheelZoom.enabled()) {
  map.scrollWheelZoom.disable();
  }
  else {
  map.scrollWheelZoom.enable();
  }
});

var update = function() {
  map.eachLayer(function(layer){
    if (layer != ggRoadmap){
      layer.remove();
    }
  });

  var input_radius = parseInt($("input[name='zone[radius]']").val());
  var input_address = String($("input[name='zone[address]']").val());

  if (input_address != "" && isNaN(input_radius) === false && input_radius <= 1000) {
    geocoder.geocode( { 'address': input_address}, function(results, status) {
      console.log(status);
      if (status == 'OK') {
        var coordinates = [results[0].geometry.location.lat(),results[0].geometry.location.lng()];
        L.circle(coordinates, {radius: input_radius}).addTo(map);
        if (input_radius <= 100) {
          map.setView(coordinates, 16);
        } else if (input_radius <= 350) {
          map.setView(coordinates, 15);
        } else if (input_radius <= 700) {
          map.setView(coordinates, 14);
        } else {
          map.setView(coordinates, 13);
        }
      } else {
        alert('Please enter a valid address');
      }
    });
  } else if (isNaN(input_radius) === false && input_radius > 1000) {
    alert('Please enter a radius less than 1km');
  };
};
update();
$('form').change(update);




document.querySelectorAll("abbr").forEach( element => element.innerText = "");
