var ctx = document.getElementById("sortingAge").getContext('2d');
var data = JSON.parse(document.getElementById("sortingAge").dataset.age);
var sortingAge = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["No Value", "<15", "15-25", "25-35", "35-45", "45-55", ">55"],
        datasets: [{
            label: 'Number of Zones',
            data: [data.no_value, data.less_than_15, data.young, data.mid, data.mid_old, data.old, data.more_than_55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

export { sortingAge };
