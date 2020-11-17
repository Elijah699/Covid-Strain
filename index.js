const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let currentDate = new Date();
let today =
  monthNames[currentDate.getMonth()] +
  " " +
  currentDate.getDate() +
  ", " +
  currentDate.getFullYear();

document.getElementById("updated__date").innerHTML = today;


const url = "https://api.covid19api.com/summary";
let dataFetch = fetch(url)
.then((res) =>  res.json())
.then((data) => (data))

document.getElementById("totalCases").innerHTML = (dataFetch["Global"]["NewDeaths"]); 
