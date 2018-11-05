// $("#interest_tags_with_zone").hide();


var data = document.getElementsByClassName("zone_data");
Array.from(data).forEach(d => {
  var i = JSON.parse(d.dataset.interests);
  var int = JSON.parse(d.dataset.interests).interest_tags;
  var zone_id = JSON.parse(d.dataset.interests).zone_id;

  $("#zone_choice_" + zone_id).on('change', function() {
    $('.collection_radio_buttons').hide();
    console.log(zone_id);
    int.forEach(i => {

      $("label[for='post_interest_tag_id_" + i.id + "']").show();
    })
  });
});

// const selectInterest = (interest) => {
//   return `

//     <input type="checkbox" value=${interest.id}>${interest.title}</input>
//   `
// }


// const zones = document.querySelectorAll('.zones')
// const interests = document.getElementById('interests')
// zones.forEach((zone) => {
//   zone.addEventListener('click', (e) => {
//     const interest_tags = JSON.parse(e.target.dataset.interests)
//     interests.innerHTML = ''
//     interest_tags.forEach((i) => {
//       interests.innerHTML += selectInterest(i)

//       get each new option
//       add an event listener on each one => change the hidden input

//     })
//   })
// })
