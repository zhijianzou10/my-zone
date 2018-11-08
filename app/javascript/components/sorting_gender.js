var ctx = document.getElementById("sortingGender").getContext('2d');
var data = JSON.parse(document.getElementById("sortingGender").dataset.gender);
console.log(data);
var sortingGender = new Chart(ctx,{
    type: 'pie',
    data: {
      labels: ['male', 'female', 'other'],
      datasets: [{
        data: [data.male, data.female, data.other]
      }]
    }

});

export { sortingGender }
