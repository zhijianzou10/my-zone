var ctx = document.getElementById("crossInterestAge").getContext('2d');
var data = JSON.parse(document.getElementById("crossInterestAge").dataset.interestAge);
console.log(Object.keys(data.no_value));

var dataarray = [];
var arraykeys = Object.values(data).forEach (v => {
  dataarray.push(v)
});

var colorset = {
  'sport': '#D6E9C6',
  'photography': '#FAEBCC',
  'tech': '#D6E9C6',
  'cooking': '#FAEBCC',
  'gardening': '#D6E9C6',
  'decoration': '#FAEBCC',
  'reading': '#D6E9C6',
  'travel': '#FAEBCC',
  'video_games': '#D6E9C6'
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

