function changeStats(items) {
  document.getElementById("textDisplay").innerHTML = items;
}
function generateRandomData(count) {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}

// Wait for the DOM to be fully loaded
window.onload = function () {
  // Get context of the canvas
  var ctx = document.getElementById("myChart").getContext("2d");

  // Create the chart
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Random Data",
          data: generateRandomData(7), // Random data for 7 points
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
