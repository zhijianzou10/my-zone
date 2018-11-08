var ctx = document.getElementById("sortingInterest").getContext('2d');
var data = JSON.parse(document.getElementById("sortingInterest").dataset.interest);
var sortingInterest = new Chart(ctx,{
    type: 'polarArea',
    data: {
      datasets: [{
        data: Object.values(data)
      }],
      labels: Object.keys(data)
    }

});

export { sortingInterest }
