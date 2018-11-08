var ctx = document.getElementById("sortingInterest").getContext('2d');
var data = JSON.parse(document.getElementById("sortingInterest").dataset.interest);
var colorset = {
  'sport': '#006400',
  'photography': '#66CDAA',
  'tech': '#00008B',
  'cooking': '#F4A460',
  'gardening': '#32CD32',
  'decoration': '#FFDEAD',
  'reading': '#ADD8E6',
  'travel': '#008080',
  'video_games': '#2F4F4F'
};
var color = Object.values(colorset)
var sortingInterest = new Chart(ctx,{
    type: 'polarArea',
    data: {
      datasets: [{
        data: Object.values(data),
        backgroundColor: color
      }],
      labels: Object.keys(data)
    }

});

export { sortingInterest }
