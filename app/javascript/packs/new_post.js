var data = document.getElementsByClassName("zone_data");
Array.from(data).forEach(d => {
  var i = JSON.parse(d.dataset.interests);
  var int = JSON.parse(d.dataset.interests).interest_tags;
  var zone_id = JSON.parse(d.dataset.interests).zone_id;

  $("#zone_choice_" + zone_id).on('change', function() {
    $('.collection_radio_buttons').hide();
    int.forEach(i => {
      $("label[for='post_interest_tag_id_" + i.id + "']").show();
    })
  });
});
