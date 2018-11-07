function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var zoneAddress = document.getElementById('zone_address');

    if (zoneAddress) {
      var autocomplete = new google.maps.places.Autocomplete(zoneAddress, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(zoneAddress, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });

}


export { autocomplete };
