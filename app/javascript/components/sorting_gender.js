var ctx = document.getElementById("sortingGender").getContext('2d');
var data = JSON.parse(document.getElementById("sortingGender").dataset.gender);
var sortingGender = new Chart(ctx,{
    type: 'pie',
    data: {

      datasets: [{
        labels: ['male', 'female', 'other'],
        data: [data.male, data.female, data.other]
      }]
    }

});

export { sortingGender }
