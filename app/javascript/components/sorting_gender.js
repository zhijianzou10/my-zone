var ctx = document.getElementById("sortingGender").getContext('2d');
var data = JSON.parse(document.getElementById("sortingGender").dataset.gender);
var sortingGender = new Chart(ctx,{
    type: 'pie',
    data: {
      labels: ['male', 'female', 'other'],
      datasets: [{
        data: [data.male, data.female, data.other],
        backgroundColor: ['#2F4F4F','#ADD8E6', '#008080']
      }]
    }

});

export { sortingGender }
