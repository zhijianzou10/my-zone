var ctx = document.getElementById("crossInterestGender").getContext('2d');
var data = JSON.parse(document.getElementById("crossInterestGender").dataset.interestGender);
var dataset = [];
var colorset = {
  'male': '#000080',
  'female': ' #DC143C',
  'other': '#D6E9C6'
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
