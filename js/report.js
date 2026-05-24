const ctx =
  document.getElementById('attendanceChart');

new Chart(ctx, {

  type: 'pie',

  data: {

    labels: ['Present', 'Absent'],

    datasets: [{

      data: [87, 13],

      backgroundColor: [
        '#38bdf8',
        '#ef4444'
      ]

    }]
  }
});
