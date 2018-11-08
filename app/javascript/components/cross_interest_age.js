var ctx = document.getElementById("crossInterestAge").getContext('2d');
var data = JSON.parse(document.getElementById("crossInterestAge").dataset.interestAge);
console.log(Object.keys(data.no_value));

var dataarray = [];
var arraykeys = Object.values(data).forEach (v => {
  dataarray.push(v)
});

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

var dataset = [];
var keys = Object.keys(data.no_value).forEach (k => {
  dataset.push({ label: String(k), data: dataarray.map( d => d[k]), backgroundColor: colorset[k] })
});


var crossInterestAge = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(data),
        datasets: dataset
    },
    options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
    }
});

export { crossInterestAge};

