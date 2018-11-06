import { autocomplete } from '../components/autocomplete';
autocomplete();

var map = L.map('creation_zone', { drawControl: false }).setView([48.856614, 2.3522219], 16)
var ggRoadmap = new L.Google('ROADMAP');
map.addLayer(ggRoadmap);
var geocoder;
geocoder = new google.maps.Geocoder();

var update = function() {
  map.eachLayer(function(layer){
    if (layer != ggRoadmap){
      layer.remove();
    }
  });

  var input_radius = parseInt($("input[name='zone[radius]']").val());
  var input_address = String($("input[name='zone[address]']").val());

  if (input_address != "" && isNaN(input_radius) === false && input_radius < 500) {
    geocoder.geocode( { 'address': input_address}, function(results, status) {
      if (status == 'OK') {
        var coordinates = [results[0].geometry.location.lat(),results[0].geometry.location.lng()];
        L.circle(coordinates, {radius: input_radius}).addTo(map);
        map.setView(coordinates, 16);
      } else {
        alert('Please enter a valid address');
      }
    });
  } else if (isNaN(input_radius) === false && input_radius >= 500) {
    alert('Please enter a radius less than 500 meters');
  };
};
update();
$('form').change(update);




document.querySelectorAll("abbr").forEach( element => element.innerText = "");
