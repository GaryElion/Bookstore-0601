//選單
const ulitem = document.querySelectorAll("#chartmenu ul li");

ulitem.forEach((item) => {
  item.addEventListener("click", function changetoact(event) {
    const object = document.querySelectorAll("#chartmenu ul .active");
    object.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

loadchart();
function loadchart() {
  //圖表
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}
