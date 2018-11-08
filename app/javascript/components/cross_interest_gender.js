var ctx = document.getElementById("crossInterestGender").getContext('2d');
var data = JSON.parse(document.getElementById("crossInterestGender").dataset.interestGender);
var dataset = [];
var colorset = {
  'male': 'rgba(0, 0, 128, 0.3)',
  'female': 'rgba(220, 20, 60, 0.3)',
  'other': 'rgba(214, 233, 198, 0.3)'
};
var keys = Object.keys(data).forEach (k => {
  dataset.push({ label: String(k), data: Object.values(data[k]), backgroundColor: colorset[k] })
})
var crossInterestGender = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: Object.keys(data.male),
        datasets: dataset
    }
  });



export { crossInterestGender };
