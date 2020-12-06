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

let getDate = document.getElementsByClassName("updated__date");

for (let i = 0; i < getDate.length; i++) {
  getDate[i].innerHTML = today;
}

fetch("https://api.covid19api.com/summary")
  .then((res) => res.json())
  .then((res) => updateDOM(res));

const updateDOM = (data) => {
  //0
  document.getElementById("name_0").innerHTML = data.Countries[0]["Country"];
  document.getElementById("totalCases_0").innerHTML = data.Countries[0][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_0").innerHTML = (
    data.Countries[0]["TotalConfirmed"] - data.Countries[0]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_0").innerHTML = data.Countries[0][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_0").innerHTML = data.Countries[0][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_0").innerHTML = data.Countries[0][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_0").innerHTML = data.Countries[0][
    "NewDeaths"
  ].toLocaleString();

  // 1
  document.getElementById("name_1").innerHTML = data.Countries[1]["Country"];
  document.getElementById("totalCases_1").innerHTML = data.Countries[1][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_1").innerHTML = (
    data.Countries[1]["TotalConfirmed"] - data.Countries[1]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_1").innerHTML = data.Countries[1][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_1").innerHTML = data.Countries[1][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_1").innerHTML = data.Countries[1][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_1").innerHTML = data.Countries[1][
    "NewDeaths"
  ].toLocaleString();

  //2
  document.getElementById("name_2").innerHTML = data.Countries[2]["Country"];
  document.getElementById("totalCases_2").innerHTML = data.Countries[2][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_2").innerHTML = (
    data.Countries[2]["TotalConfirmed"] - data.Countries[2]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_2").innerHTML = data.Countries[2][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_2").innerHTML = data.Countries[2][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_2").innerHTML = data.Countries[2][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_2").innerHTML = data.Countries[2][
    "NewDeaths"
  ].toLocaleString();

  //3
  document.getElementById("name_3").innerHTML = data.Countries[3]["Country"];
  document.getElementById("totalCases_3").innerHTML = data.Countries[3][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_3").innerHTML = (
    data.Countries[3]["TotalConfirmed"] - data.Countries[3]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_3").innerHTML = data.Countries[3][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_3").innerHTML = data.Countries[3][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_3").innerHTML = data.Countries[3][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_3").innerHTML = data.Countries[3][
    "NewDeaths"
  ].toLocaleString();

  //4
  document.getElementById("name_4").innerHTML = data.Countries[4]["Country"];
  document.getElementById("totalCases_4").innerHTML = data.Countries[4][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_4").innerHTML = (
    data.Countries[4]["TotalConfirmed"] - data.Countries[4]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_4").innerHTML = data.Countries[4][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_4").innerHTML = data.Countries[4][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_4").innerHTML = data.Countries[4][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_4").innerHTML = data.Countries[4][
    "NewDeaths"
  ].toLocaleString();

  //5
  document.getElementById("name_5").innerHTML = data.Countries[5]["Country"];
  document.getElementById("totalCases_5").innerHTML = data.Countries[5][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_5").innerHTML = (
    data.Countries[5]["TotalConfirmed"] - data.Countries[5]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_5").innerHTML = data.Countries[5][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_5").innerHTML = data.Countries[5][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_5").innerHTML = data.Countries[5][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_5").innerHTML = data.Countries[5][
    "NewDeaths"
  ].toLocaleString();

  //6
  document.getElementById("name_6").innerHTML = data.Countries[6]["Country"];
  document.getElementById("totalCases_6").innerHTML = data.Countries[6][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_6").innerHTML = (
    data.Countries[6]["TotalConfirmed"] - data.Countries[6]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_6").innerHTML = data.Countries[6][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_6").innerHTML = data.Countries[6][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_6").innerHTML = data.Countries[6][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_6").innerHTML = data.Countries[6][
    "NewDeaths"
  ].toLocaleString();

  //7
  document.getElementById("name_7").innerHTML = data.Countries[7]["Country"];
  document.getElementById("totalCases_7").innerHTML = data.Countries[7][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_7").innerHTML = (
    data.Countries[7]["TotalConfirmed"] - data.Countries[7]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_7").innerHTML = data.Countries[7][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_7").innerHTML = data.Countries[7][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_7").innerHTML = data.Countries[7][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_7").innerHTML = data.Countries[7][
    "NewDeaths"
  ].toLocaleString();

  //8
  document.getElementById("name_8").innerHTML = data.Countries[8]["Country"];
  document.getElementById("totalCases_8").innerHTML = data.Countries[8][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_8").innerHTML = (
    data.Countries[8]["TotalConfirmed"] - data.Countries[8]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_8").innerHTML = data.Countries[8][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_8").innerHTML = data.Countries[8][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_8").innerHTML = data.Countries[8][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_8").innerHTML = data.Countries[8][
    "NewDeaths"
  ].toLocaleString();

  //9
  document.getElementById("name_9").innerHTML = data.Countries[9]["Country"];
  document.getElementById("totalCases_9").innerHTML = data.Countries[9][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_9").innerHTML = (
    data.Countries[9]["TotalConfirmed"] - data.Countries[9]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_9").innerHTML = data.Countries[9][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_9").innerHTML = data.Countries[9][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_9").innerHTML = data.Countries[9][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_9").innerHTML = data.Countries[9][
    "NewDeaths"
  ].toLocaleString();

  //10
  document.getElementById("name_10").innerHTML = data.Countries[10]["Country"];
  document.getElementById("totalCases_10").innerHTML = data.Countries[10][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_10").innerHTML = (
    data.Countries[10]["TotalConfirmed"] - data.Countries[10]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_10").innerHTML = data.Countries[10][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_10").innerHTML = data.Countries[10][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_10").innerHTML = data.Countries[10][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_10").innerHTML = data.Countries[10][
    "NewDeaths"
  ].toLocaleString();

  //11
  document.getElementById("name_11").innerHTML = data.Countries[11]["Country"];
  document.getElementById("totalCases_11").innerHTML = data.Countries[11][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_11").innerHTML = (
    data.Countries[11]["TotalConfirmed"] - data.Countries[11]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_11").innerHTML = data.Countries[11][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_11").innerHTML = data.Countries[11][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_11").innerHTML = data.Countries[11][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_11").innerHTML = data.Countries[11][
    "NewDeaths"
  ].toLocaleString();

  //12
  document.getElementById("name_12").innerHTML = data.Countries[12]["Country"];
  document.getElementById("totalCases_12").innerHTML = data.Countries[12][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_12").innerHTML = (
    data.Countries[12]["TotalConfirmed"] - data.Countries[12]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_12").innerHTML = data.Countries[12][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_12").innerHTML = data.Countries[12][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_12").innerHTML = data.Countries[12][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_12").innerHTML = data.Countries[12][
    "NewDeaths"
  ].toLocaleString();

  //13
  document.getElementById("name_13").innerHTML = data.Countries[13]["Country"];
  document.getElementById("totalCases_13").innerHTML = data.Countries[13][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_13").innerHTML = (
    data.Countries[13]["TotalConfirmed"] - data.Countries[13]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_13").innerHTML = data.Countries[13][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_13").innerHTML = data.Countries[13][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_13").innerHTML = data.Countries[13][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_13").innerHTML = data.Countries[13][
    "NewDeaths"
  ].toLocaleString();

  //14
  document.getElementById("name_14").innerHTML = data.Countries[14]["Country"];
  document.getElementById("totalCases_14").innerHTML = data.Countries[14][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_14").innerHTML = (
    data.Countries[14]["TotalConfirmed"] - data.Countries[14]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_14").innerHTML = data.Countries[14][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_14").innerHTML = data.Countries[14][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_14").innerHTML = data.Countries[14][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_14").innerHTML = data.Countries[14][
    "NewDeaths"
  ].toLocaleString();

  //15
  document.getElementById("name_15").innerHTML = data.Countries[15]["Country"];
  document.getElementById("totalCases_15").innerHTML = data.Countries[15][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_15").innerHTML = (
    data.Countries[15]["TotalConfirmed"] - data.Countries[15]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_15").innerHTML = data.Countries[15][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_15").innerHTML = data.Countries[15][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_15").innerHTML = data.Countries[15][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_15").innerHTML = data.Countries[15][
    "NewDeaths"
  ].toLocaleString();

  //16
  document.getElementById("name_16").innerHTML = data.Countries[16]["Country"];
  document.getElementById("totalCases_16").innerHTML = data.Countries[16][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_16").innerHTML = (
    data.Countries[16]["TotalConfirmed"] - data.Countries[16]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_16").innerHTML = data.Countries[16][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_16").innerHTML = data.Countries[16][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_16").innerHTML = data.Countries[16][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_16").innerHTML = data.Countries[16][
    "NewDeaths"
  ].toLocaleString();

  //17
  document.getElementById("name_17").innerHTML = data.Countries[17]["Country"];
  document.getElementById("totalCases_17").innerHTML = data.Countries[17][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_17").innerHTML = (
    data.Countries[17]["TotalConfirmed"] - data.Countries[17]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_17").innerHTML = data.Countries[17][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_17").innerHTML = data.Countries[17][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_17").innerHTML = data.Countries[17][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_17").innerHTML = data.Countries[17][
    "NewDeaths"
  ].toLocaleString();

  //18
  document.getElementById("name_18").innerHTML = data.Countries[18]["Country"];
  document.getElementById("totalCases_18").innerHTML = data.Countries[18][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_18").innerHTML = (
    data.Countries[18]["TotalConfirmed"] - data.Countries[18]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_18").innerHTML = data.Countries[18][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_18").innerHTML = data.Countries[18][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_18").innerHTML = data.Countries[18][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_18").innerHTML = data.Countries[18][
    "NewDeaths"
  ].toLocaleString();

  //19
  document.getElementById("name_19").innerHTML = data.Countries[19]["Country"];
  document.getElementById("totalCases_19").innerHTML = data.Countries[19][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_19").innerHTML = (
    data.Countries[19]["TotalConfirmed"] - data.Countries[19]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_19").innerHTML = data.Countries[19][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_19").innerHTML = data.Countries[19][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_19").innerHTML = data.Countries[19][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_19").innerHTML = data.Countries[19][
    "NewDeaths"
  ].toLocaleString();

  //20
  document.getElementById("name_20").innerHTML = data.Countries[20]["Country"];
  document.getElementById("totalCases_20").innerHTML = data.Countries[20][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_20").innerHTML = (
    data.Countries[20]["TotalConfirmed"] - data.Countries[20]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_20").innerHTML = data.Countries[20][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_20").innerHTML = data.Countries[20][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_20").innerHTML = data.Countries[20][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_20").innerHTML = data.Countries[20][
    "NewDeaths"
  ].toLocaleString();

  //21
  document.getElementById("name_21").innerHTML = data.Countries[21]["Country"];
  document.getElementById("totalCases_21").innerHTML = data.Countries[21][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_21").innerHTML = (
    data.Countries[21]["TotalConfirmed"] - data.Countries[21]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_21").innerHTML = data.Countries[21][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_21").innerHTML = data.Countries[21][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_21").innerHTML = data.Countries[21][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_21").innerHTML = data.Countries[21][
    "NewDeaths"
  ].toLocaleString();

  //22
  document.getElementById("name_22").innerHTML = data.Countries[22]["Country"];
  document.getElementById("totalCases_22").innerHTML = data.Countries[22][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_22").innerHTML = (
    data.Countries[22]["TotalConfirmed"] - data.Countries[22]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_22").innerHTML = data.Countries[22][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_22").innerHTML = data.Countries[22][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_22").innerHTML = data.Countries[22][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_22").innerHTML = data.Countries[22][
    "NewDeaths"
  ].toLocaleString();

  //23
  document.getElementById("name_23").innerHTML = data.Countries[23]["Country"];
  document.getElementById("totalCases_23").innerHTML = data.Countries[23][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_23").innerHTML = (
    data.Countries[23]["TotalConfirmed"] - data.Countries[23]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_23").innerHTML = data.Countries[23][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_23").innerHTML = data.Countries[23][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_23").innerHTML = data.Countries[23][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_23").innerHTML = data.Countries[23][
    "NewDeaths"
  ].toLocaleString();

  //24
  document.getElementById("name_24").innerHTML = data.Countries[24]["Country"];
  document.getElementById("totalCases_24").innerHTML = data.Countries[24][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_24").innerHTML = (
    data.Countries[24]["TotalConfirmed"] - data.Countries[24]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_24").innerHTML = data.Countries[24][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_24").innerHTML = data.Countries[24][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_24").innerHTML = data.Countries[24][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_24").innerHTML = data.Countries[24][
    "NewDeaths"
  ].toLocaleString();

  //25
  document.getElementById("name_25").innerHTML = data.Countries[25]["Country"];
  document.getElementById("totalCases_25").innerHTML = data.Countries[25][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_25").innerHTML = (
    data.Countries[25]["TotalConfirmed"] - data.Countries[25]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_25").innerHTML = data.Countries[25][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_25").innerHTML = data.Countries[25][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_25").innerHTML = data.Countries[25][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_25").innerHTML = data.Countries[25][
    "NewDeaths"
  ].toLocaleString();

  //26
  document.getElementById("name_26").innerHTML = data.Countries[26]["Country"];
  document.getElementById("totalCases_26").innerHTML = data.Countries[26][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_26").innerHTML = (
    data.Countries[26]["TotalConfirmed"] - data.Countries[26]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_26").innerHTML = data.Countries[26][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_26").innerHTML = data.Countries[26][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_26").innerHTML = data.Countries[26][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_26").innerHTML = data.Countries[26][
    "NewDeaths"
  ].toLocaleString();

  //27
  document.getElementById("name_27").innerHTML = data.Countries[27]["Country"];
  document.getElementById("totalCases_27").innerHTML = data.Countries[27][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_27").innerHTML = (
    data.Countries[27]["TotalConfirmed"] - data.Countries[27]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_27").innerHTML = data.Countries[27][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_27").innerHTML = data.Countries[27][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_27").innerHTML = data.Countries[27][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_27").innerHTML = data.Countries[27][
    "NewDeaths"
  ].toLocaleString();

  //28
  document.getElementById("name_28").innerHTML = data.Countries[28]["Country"];
  document.getElementById("totalCases_28").innerHTML = data.Countries[28][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_28").innerHTML = (
    data.Countries[28]["TotalConfirmed"] - data.Countries[28]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_28").innerHTML = data.Countries[28][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_28").innerHTML = data.Countries[28][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_28").innerHTML = data.Countries[28][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_28").innerHTML = data.Countries[28][
    "NewDeaths"
  ].toLocaleString();

  //29
  document.getElementById("name_29").innerHTML = data.Countries[29]["Country"];
  document.getElementById("totalCases_29").innerHTML = data.Countries[29][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_29").innerHTML = (
    data.Countries[29]["TotalConfirmed"] - data.Countries[29]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_29").innerHTML = data.Countries[29][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_29").innerHTML = data.Countries[29][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_29").innerHTML = data.Countries[29][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_29").innerHTML = data.Countries[29][
    "NewDeaths"
  ].toLocaleString();

  //30
  document.getElementById("name_30").innerHTML = data.Countries[30]["Country"];
  document.getElementById("totalCases_30").innerHTML = data.Countries[30][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_30").innerHTML = (
    data.Countries[30]["TotalConfirmed"] - data.Countries[30]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_30").innerHTML = data.Countries[30][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_30").innerHTML = data.Countries[30][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_30").innerHTML = data.Countries[30][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_30").innerHTML = data.Countries[30][
    "NewDeaths"
  ].toLocaleString();

  //31
  document.getElementById("name_31").innerHTML = data.Countries[31]["Country"];
  document.getElementById("totalCases_31").innerHTML = data.Countries[31][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_31").innerHTML = (
    data.Countries[31]["TotalConfirmed"] - data.Countries[31]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_31").innerHTML = data.Countries[31][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_31").innerHTML = data.Countries[31][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_31").innerHTML = data.Countries[31][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_31").innerHTML = data.Countries[31][
    "NewDeaths"
  ].toLocaleString();

  //32
  document.getElementById("name_32").innerHTML = data.Countries[32]["Country"];
  document.getElementById("totalCases_32").innerHTML = data.Countries[32][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_32").innerHTML = (
    data.Countries[32]["TotalConfirmed"] - data.Countries[32]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_32").innerHTML = data.Countries[32][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_32").innerHTML = data.Countries[32][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_32").innerHTML = data.Countries[32][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_32").innerHTML = data.Countries[32][
    "NewDeaths"
  ].toLocaleString();

  //33
  document.getElementById("name_33").innerHTML = data.Countries[33]["Country"];
  document.getElementById("totalCases_33").innerHTML = data.Countries[33][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_33").innerHTML = (
    data.Countries[33]["TotalConfirmed"] - data.Countries[33]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_33").innerHTML = data.Countries[33][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_33").innerHTML = data.Countries[33][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_33").innerHTML = data.Countries[33][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_33").innerHTML = data.Countries[33][
    "NewDeaths"
  ].toLocaleString();

  //34
  document.getElementById("name_34").innerHTML = data.Countries[34]["Country"];
  document.getElementById("totalCases_34").innerHTML = data.Countries[34][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_34").innerHTML = (
    data.Countries[34]["TotalConfirmed"] - data.Countries[34]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_34").innerHTML = data.Countries[34][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_34").innerHTML = data.Countries[34][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_34").innerHTML = data.Countries[34][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_34").innerHTML = data.Countries[34][
    "NewDeaths"
  ].toLocaleString();

  //35
  document.getElementById("name_35").innerHTML = data.Countries[35]["Country"];
  document.getElementById("totalCases_35").innerHTML = data.Countries[35][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_35").innerHTML = (
    data.Countries[35]["TotalConfirmed"] - data.Countries[35]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_35").innerHTML = data.Countries[35][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_35").innerHTML = data.Countries[35][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_35").innerHTML = data.Countries[35][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_35").innerHTML = data.Countries[35][
    "NewDeaths"
  ].toLocaleString();

  //36
  document.getElementById("name_36").innerHTML = data.Countries[36]["Country"];
  document.getElementById("totalCases_36").innerHTML = data.Countries[36][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_36").innerHTML = (
    data.Countries[36]["TotalConfirmed"] - data.Countries[36]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_36").innerHTML = data.Countries[36][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_36").innerHTML = data.Countries[36][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_36").innerHTML = data.Countries[36][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_36").innerHTML = data.Countries[36][
    "NewDeaths"
  ].toLocaleString();

  //37
  document.getElementById("name_37").innerHTML = data.Countries[37]["Country"];
  document.getElementById("totalCases_37").innerHTML = data.Countries[37][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_37").innerHTML = (
    data.Countries[37]["TotalConfirmed"] - data.Countries[37]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_37").innerHTML = data.Countries[37][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_37").innerHTML = data.Countries[37][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_37").innerHTML = data.Countries[37][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_37").innerHTML = data.Countries[37][
    "NewDeaths"
  ].toLocaleString();

  //38
  document.getElementById("name_38").innerHTML = data.Countries[38]["Country"];
  document.getElementById("totalCases_38").innerHTML = data.Countries[38][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_38").innerHTML = (
    data.Countries[38]["TotalConfirmed"] - data.Countries[38]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_38").innerHTML = data.Countries[38][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_38").innerHTML = data.Countries[38][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_38").innerHTML = data.Countries[38][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_38").innerHTML = data.Countries[38][
    "NewDeaths"
  ].toLocaleString();

  //39
  document.getElementById("name_39").innerHTML = data.Countries[39]["Country"];
  document.getElementById("totalCases_39").innerHTML = data.Countries[39][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_39").innerHTML = (
    data.Countries[39]["TotalConfirmed"] - data.Countries[39]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_39").innerHTML = data.Countries[39][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_39").innerHTML = data.Countries[39][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_39").innerHTML = data.Countries[39][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_39").innerHTML = data.Countries[39][
    "NewDeaths"
  ].toLocaleString();

  //40
  document.getElementById("name_40").innerHTML = data.Countries[40]["Country"];
  document.getElementById("totalCases_40").innerHTML = data.Countries[40][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_40").innerHTML = (
    data.Countries[40]["TotalConfirmed"] - data.Countries[40]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_40").innerHTML = data.Countries[40][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_40").innerHTML = data.Countries[40][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_40").innerHTML = data.Countries[40][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_40").innerHTML = data.Countries[40][
    "NewDeaths"
  ].toLocaleString();

  //41
  document.getElementById("name_41").innerHTML = data.Countries[41]["Country"];
  document.getElementById("totalCases_41").innerHTML = data.Countries[41][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_41").innerHTML = (
    data.Countries[41]["TotalConfirmed"] - data.Countries[41]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_41").innerHTML = data.Countries[41][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_41").innerHTML = data.Countries[41][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_41").innerHTML = data.Countries[41][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_41").innerHTML = data.Countries[41][
    "NewDeaths"
  ].toLocaleString();

  //42
  document.getElementById("name_42").innerHTML = data.Countries[42]["Country"];
  document.getElementById("totalCases_42").innerHTML = data.Countries[42][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_42").innerHTML = (
    data.Countries[42]["TotalConfirmed"] - data.Countries[42]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_42").innerHTML = data.Countries[42][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_42").innerHTML = data.Countries[42][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_42").innerHTML = data.Countries[42][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_42").innerHTML = data.Countries[42][
    "NewDeaths"
  ].toLocaleString();

  //43
  document.getElementById("name_43").innerHTML = data.Countries[43]["Country"];
  document.getElementById("totalCases_43").innerHTML = data.Countries[43][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_43").innerHTML = (
    data.Countries[43]["TotalConfirmed"] - data.Countries[43]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_43").innerHTML = data.Countries[43][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_43").innerHTML = data.Countries[43][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_43").innerHTML = data.Countries[43][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_43").innerHTML = data.Countries[43][
    "NewDeaths"
  ].toLocaleString();

  //44
  document.getElementById("name_44").innerHTML = data.Countries[44]["Country"];
  document.getElementById("totalCases_44").innerHTML = data.Countries[44][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_44").innerHTML = (
    data.Countries[44]["TotalConfirmed"] - data.Countries[44]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_44").innerHTML = data.Countries[44][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_44").innerHTML = data.Countries[44][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_44").innerHTML = data.Countries[44][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_44").innerHTML = data.Countries[44][
    "NewDeaths"
  ].toLocaleString();

  //45
  document.getElementById("name_45").innerHTML = data.Countries[45]["Country"];
  document.getElementById("totalCases_45").innerHTML = data.Countries[45][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_45").innerHTML = (
    data.Countries[45]["TotalConfirmed"] - data.Countries[45]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_45").innerHTML = data.Countries[45][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_45").innerHTML = data.Countries[45][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_45").innerHTML = data.Countries[45][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_45").innerHTML = data.Countries[45][
    "NewDeaths"
  ].toLocaleString();

  //46
  document.getElementById("name_46").innerHTML = data.Countries[46]["Country"];
  document.getElementById("totalCases_46").innerHTML = data.Countries[46][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_46").innerHTML = (
    data.Countries[46]["TotalConfirmed"] - data.Countries[46]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_46").innerHTML = data.Countries[46][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_46").innerHTML = data.Countries[46][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_46").innerHTML = data.Countries[46][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_46").innerHTML = data.Countries[46][
    "NewDeaths"
  ].toLocaleString();

  //47
  document.getElementById("name_47").innerHTML = data.Countries[47]["Country"];
  document.getElementById("totalCases_47").innerHTML = data.Countries[47][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_47").innerHTML = (
    data.Countries[47]["TotalConfirmed"] - data.Countries[47]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_47").innerHTML = data.Countries[47][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_47").innerHTML = data.Countries[47][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_47").innerHTML = data.Countries[47][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_47").innerHTML = data.Countries[47][
    "NewDeaths"
  ].toLocaleString();

  //48
  document.getElementById("name_48").innerHTML = data.Countries[48]["Country"];
  document.getElementById("totalCases_48").innerHTML = data.Countries[48][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_48").innerHTML = (
    data.Countries[48]["TotalConfirmed"] - data.Countries[48]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_48").innerHTML = data.Countries[48][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_48").innerHTML = data.Countries[48][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_48").innerHTML = data.Countries[48][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_48").innerHTML = data.Countries[48][
    "NewDeaths"
  ].toLocaleString();

  //49
  document.getElementById("name_49").innerHTML = data.Countries[49]["Country"];
  document.getElementById("totalCases_49").innerHTML = data.Countries[49][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_49").innerHTML = (
    data.Countries[49]["TotalConfirmed"] - data.Countries[49]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_49").innerHTML = data.Countries[49][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_49").innerHTML = data.Countries[49][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_49").innerHTML = data.Countries[49][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_49").innerHTML = data.Countries[49][
    "NewDeaths"
  ].toLocaleString();

  //50
  document.getElementById("name_50").innerHTML = data.Countries[50]["Country"];
  document.getElementById("totalCases_50").innerHTML = data.Countries[50][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_50").innerHTML = (
    data.Countries[50]["TotalConfirmed"] - data.Countries[50]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_50").innerHTML = data.Countries[50][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_50").innerHTML = data.Countries[50][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_50").innerHTML = data.Countries[50][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_50").innerHTML = data.Countries[50][
    "NewDeaths"
  ].toLocaleString();

  //51
  document.getElementById("name_51").innerHTML = data.Countries[51]["Country"];
  document.getElementById("totalCases_51").innerHTML = data.Countries[51][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_51").innerHTML = (
    data.Countries[51]["TotalConfirmed"] - data.Countries[51]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_51").innerHTML = data.Countries[51][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_51").innerHTML = data.Countries[51][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_51").innerHTML = data.Countries[51][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_51").innerHTML = data.Countries[51][
    "NewDeaths"
  ].toLocaleString();

  //52
  document.getElementById("name_52").innerHTML = data.Countries[52]["Country"];
  document.getElementById("totalCases_52").innerHTML = data.Countries[52][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_52").innerHTML = (
    data.Countries[52]["TotalConfirmed"] - data.Countries[52]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_52").innerHTML = data.Countries[52][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_52").innerHTML = data.Countries[52][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_52").innerHTML = data.Countries[52][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_52").innerHTML = data.Countries[52][
    "NewDeaths"
  ].toLocaleString();

  //53
  document.getElementById("name_53").innerHTML = data.Countries[53]["Country"];
  document.getElementById("totalCases_53").innerHTML = data.Countries[53][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_53").innerHTML = (
    data.Countries[53]["TotalConfirmed"] - data.Countries[53]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_53").innerHTML = data.Countries[53][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_53").innerHTML = data.Countries[53][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_53").innerHTML = data.Countries[53][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_53").innerHTML = data.Countries[53][
    "NewDeaths"
  ].toLocaleString();

  //54
  document.getElementById("name_54").innerHTML = data.Countries[54]["Country"];
  document.getElementById("totalCases_54").innerHTML = data.Countries[54][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_54").innerHTML = (
    data.Countries[54]["TotalConfirmed"] - data.Countries[54]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_54").innerHTML = data.Countries[54][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_54").innerHTML = data.Countries[54][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_54").innerHTML = data.Countries[54][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_54").innerHTML = data.Countries[54][
    "NewDeaths"
  ].toLocaleString();

  //55
  document.getElementById("name_55").innerHTML = data.Countries[55]["Country"];
  document.getElementById("totalCases_55").innerHTML = data.Countries[55][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_55").innerHTML = (
    data.Countries[55]["TotalConfirmed"] - data.Countries[55]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_55").innerHTML = data.Countries[55][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_55").innerHTML = data.Countries[55][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_55").innerHTML = data.Countries[55][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_55").innerHTML = data.Countries[55][
    "NewDeaths"
  ].toLocaleString();

  //56
  document.getElementById("name_56").innerHTML = data.Countries[56]["Country"];
  document.getElementById("totalCases_56").innerHTML = data.Countries[56][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_56").innerHTML = (
    data.Countries[56]["TotalConfirmed"] - data.Countries[56]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_56").innerHTML = data.Countries[56][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_56").innerHTML = data.Countries[56][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_56").innerHTML = data.Countries[56][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_56").innerHTML = data.Countries[56][
    "NewDeaths"
  ].toLocaleString();

  //57
  document.getElementById("name_57").innerHTML = data.Countries[57]["Country"];
  document.getElementById("totalCases_57").innerHTML = data.Countries[57][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_57").innerHTML = (
    data.Countries[57]["TotalConfirmed"] - data.Countries[57]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_57").innerHTML = data.Countries[57][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_57").innerHTML = data.Countries[57][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_57").innerHTML = data.Countries[57][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_57").innerHTML = data.Countries[57][
    "NewDeaths"
  ].toLocaleString();

  //58
  document.getElementById("name_58").innerHTML = data.Countries[58]["Country"];
  document.getElementById("totalCases_58").innerHTML = data.Countries[58][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_58").innerHTML = (
    data.Countries[58]["TotalConfirmed"] - data.Countries[58]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_58").innerHTML = data.Countries[58][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_58").innerHTML = data.Countries[58][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_58").innerHTML = data.Countries[58][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_58").innerHTML = data.Countries[58][
    "NewDeaths"
  ].toLocaleString();

  //59
  document.getElementById("name_59").innerHTML = data.Countries[59]["Country"];
  document.getElementById("totalCases_59").innerHTML = data.Countries[59][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_59").innerHTML = (
    data.Countries[59]["TotalConfirmed"] - data.Countries[59]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_59").innerHTML = data.Countries[59][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_59").innerHTML = data.Countries[59][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_59").innerHTML = data.Countries[59][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_59").innerHTML = data.Countries[59][
    "NewDeaths"
  ].toLocaleString();

  //60
  document.getElementById("name_60").innerHTML = data.Countries[60]["Country"];
  document.getElementById("totalCases_60").innerHTML = data.Countries[60][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_60").innerHTML = (
    data.Countries[60]["TotalConfirmed"] - data.Countries[60]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_60").innerHTML = data.Countries[60][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_60").innerHTML = data.Countries[60][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_60").innerHTML = data.Countries[60][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_60").innerHTML = data.Countries[60][
    "NewDeaths"
  ].toLocaleString();

  //61
  document.getElementById("name_61").innerHTML = data.Countries[61]["Country"];
  document.getElementById("totalCases_61").innerHTML = data.Countries[61][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_61").innerHTML = (
    data.Countries[61]["TotalConfirmed"] - data.Countries[61]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_61").innerHTML = data.Countries[61][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_61").innerHTML = data.Countries[61][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_61").innerHTML = data.Countries[61][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_61").innerHTML = data.Countries[61][
    "NewDeaths"
  ].toLocaleString();

  //62
  document.getElementById("name_62").innerHTML = data.Countries[62]["Country"];
  document.getElementById("totalCases_62").innerHTML = data.Countries[62][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_62").innerHTML = (
    data.Countries[62]["TotalConfirmed"] - data.Countries[62]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_62").innerHTML = data.Countries[62][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_62").innerHTML = data.Countries[62][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_62").innerHTML = data.Countries[62][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_62").innerHTML = data.Countries[62][
    "NewDeaths"
  ].toLocaleString();

  //63
  document.getElementById("name_63").innerHTML = data.Countries[63]["Country"];
  document.getElementById("totalCases_63").innerHTML = data.Countries[63][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_63").innerHTML = (
    data.Countries[63]["TotalConfirmed"] - data.Countries[63]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_63").innerHTML = data.Countries[63][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_63").innerHTML = data.Countries[63][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_63").innerHTML = data.Countries[63][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_63").innerHTML = data.Countries[63][
    "NewDeaths"
  ].toLocaleString();

  //64
  document.getElementById("name_64").innerHTML = data.Countries[64]["Country"];
  document.getElementById("totalCases_64").innerHTML = data.Countries[64][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_64").innerHTML = (
    data.Countries[64]["TotalConfirmed"] - data.Countries[64]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_64").innerHTML = data.Countries[64][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_64").innerHTML = data.Countries[64][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_64").innerHTML = data.Countries[64][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_64").innerHTML = data.Countries[64][
    "NewDeaths"
  ].toLocaleString();

  //65
  document.getElementById("name_65").innerHTML = data.Countries[65]["Country"];
  document.getElementById("totalCases_65").innerHTML = data.Countries[65][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_65").innerHTML = (
    data.Countries[65]["TotalConfirmed"] - data.Countries[65]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_65").innerHTML = data.Countries[65][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_65").innerHTML = data.Countries[65][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_65").innerHTML = data.Countries[65][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_65").innerHTML = data.Countries[65][
    "NewDeaths"
  ].toLocaleString();

  //66
  document.getElementById("name_66").innerHTML = data.Countries[66]["Country"];
  document.getElementById("totalCases_66").innerHTML = data.Countries[66][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_66").innerHTML = (
    data.Countries[66]["TotalConfirmed"] - data.Countries[66]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_66").innerHTML = data.Countries[66][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_66").innerHTML = data.Countries[66][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_66").innerHTML = data.Countries[66][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_66").innerHTML = data.Countries[66][
    "NewDeaths"
  ].toLocaleString();

  //67
  document.getElementById("name_67").innerHTML = data.Countries[67]["Country"];
  document.getElementById("totalCases_67").innerHTML = data.Countries[67][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_67").innerHTML = (
    data.Countries[67]["TotalConfirmed"] - data.Countries[67]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_67").innerHTML = data.Countries[67][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_67").innerHTML = data.Countries[67][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_67").innerHTML = data.Countries[67][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_67").innerHTML = data.Countries[67][
    "NewDeaths"
  ].toLocaleString();

  //68
  document.getElementById("name_68").innerHTML = data.Countries[68]["Country"];
  document.getElementById("totalCases_68").innerHTML = data.Countries[68][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_68").innerHTML = (
    data.Countries[68]["TotalConfirmed"] - data.Countries[68]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_68").innerHTML = data.Countries[68][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_68").innerHTML = data.Countries[68][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_68").innerHTML = data.Countries[68][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_68").innerHTML = data.Countries[68][
    "NewDeaths"
  ].toLocaleString();

  //69
  document.getElementById("name_69").innerHTML = data.Countries[69]["Country"];
  document.getElementById("totalCases_69").innerHTML = data.Countries[69][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_69").innerHTML = (
    data.Countries[69]["TotalConfirmed"] - data.Countries[69]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_69").innerHTML = data.Countries[69][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_69").innerHTML = data.Countries[69][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_69").innerHTML = data.Countries[69][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_69").innerHTML = data.Countries[69][
    "NewDeaths"
  ].toLocaleString();

  //70
  document.getElementById("name_70").innerHTML = data.Countries[70]["Country"];
  document.getElementById("totalCases_70").innerHTML = data.Countries[70][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_70").innerHTML = (
    data.Countries[70]["TotalConfirmed"] - data.Countries[70]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_70").innerHTML = data.Countries[70][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_70").innerHTML = data.Countries[70][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_70").innerHTML = data.Countries[70][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_70").innerHTML = data.Countries[70][
    "NewDeaths"
  ].toLocaleString();

  //71
  document.getElementById("name_71").innerHTML = data.Countries[71]["Country"];
  document.getElementById("totalCases_71").innerHTML = data.Countries[71][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_71").innerHTML = (
    data.Countries[71]["TotalConfirmed"] - data.Countries[71]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_71").innerHTML = data.Countries[71][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_71").innerHTML = data.Countries[71][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_71").innerHTML = data.Countries[71][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_71").innerHTML = data.Countries[71][
    "NewDeaths"
  ].toLocaleString();

  //72
  document.getElementById("name_72").innerHTML = data.Countries[72]["Country"];
  document.getElementById("totalCases_72").innerHTML = data.Countries[72][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_72").innerHTML = (
    data.Countries[72]["TotalConfirmed"] - data.Countries[72]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_72").innerHTML = data.Countries[72][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_72").innerHTML = data.Countries[72][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_72").innerHTML = data.Countries[72][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_72").innerHTML = data.Countries[72][
    "NewDeaths"
  ].toLocaleString();

  //73
  document.getElementById("name_73").innerHTML = data.Countries[73]["Country"];
  document.getElementById("totalCases_73").innerHTML = data.Countries[73][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_73").innerHTML = (
    data.Countries[73]["TotalConfirmed"] - data.Countries[73]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_73").innerHTML = data.Countries[73][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_73").innerHTML = data.Countries[73][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_73").innerHTML = data.Countries[73][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_73").innerHTML = data.Countries[73][
    "NewDeaths"
  ].toLocaleString();

  //74
  document.getElementById("name_74").innerHTML = data.Countries[74]["Country"];
  document.getElementById("totalCases_74").innerHTML = data.Countries[74][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_74").innerHTML = (
    data.Countries[74]["TotalConfirmed"] - data.Countries[74]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_74").innerHTML = data.Countries[74][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_74").innerHTML = data.Countries[74][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_74").innerHTML = data.Countries[74][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_74").innerHTML = data.Countries[74][
    "NewDeaths"
  ].toLocaleString();

  //75
  document.getElementById("name_75").innerHTML = data.Countries[75]["Country"];
  document.getElementById("totalCases_75").innerHTML = data.Countries[75][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_75").innerHTML = (
    data.Countries[75]["TotalConfirmed"] - data.Countries[75]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_75").innerHTML = data.Countries[75][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_75").innerHTML = data.Countries[75][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_75").innerHTML = data.Countries[75][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_75").innerHTML = data.Countries[75][
    "NewDeaths"
  ].toLocaleString();

  //76
  document.getElementById("name_76").innerHTML = data.Countries[76]["Country"];
  document.getElementById("totalCases_76").innerHTML = data.Countries[76][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_76").innerHTML = (
    data.Countries[76]["TotalConfirmed"] - data.Countries[76]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_76").innerHTML = data.Countries[76][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_76").innerHTML = data.Countries[76][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_76").innerHTML = data.Countries[76][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_76").innerHTML = data.Countries[76][
    "NewDeaths"
  ].toLocaleString();

  //77
  document.getElementById("name_77").innerHTML = data.Countries[77]["Country"];
  document.getElementById("totalCases_77").innerHTML = data.Countries[77][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_77").innerHTML = (
    data.Countries[77]["TotalConfirmed"] - data.Countries[77]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_77").innerHTML = data.Countries[77][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_77").innerHTML = data.Countries[77][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_77").innerHTML = data.Countries[77][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_77").innerHTML = data.Countries[77][
    "NewDeaths"
  ].toLocaleString();

  //78
  document.getElementById("name_78").innerHTML = data.Countries[78]["Country"];
  document.getElementById("totalCases_78").innerHTML = data.Countries[78][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_78").innerHTML = (
    data.Countries[78]["TotalConfirmed"] - data.Countries[78]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_78").innerHTML = data.Countries[78][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_78").innerHTML = data.Countries[78][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_78").innerHTML = data.Countries[78][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_78").innerHTML = data.Countries[78][
    "NewDeaths"
  ].toLocaleString();

  //79
  document.getElementById("name_79").innerHTML = data.Countries[79]["Country"];
  document.getElementById("totalCases_79").innerHTML = data.Countries[79][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_79").innerHTML = (
    data.Countries[79]["TotalConfirmed"] - data.Countries[79]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_79").innerHTML = data.Countries[79][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_79").innerHTML = data.Countries[79][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_79").innerHTML = data.Countries[79][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_79").innerHTML = data.Countries[79][
    "NewDeaths"
  ].toLocaleString();

  //80
  document.getElementById("name_80").innerHTML = data.Countries[80]["Country"];
  document.getElementById("totalCases_80").innerHTML = data.Countries[80][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_80").innerHTML = (
    data.Countries[80]["TotalConfirmed"] - data.Countries[80]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_80").innerHTML = data.Countries[80][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_80").innerHTML = data.Countries[80][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_80").innerHTML = data.Countries[80][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_80").innerHTML = data.Countries[80][
    "NewDeaths"
  ].toLocaleString();

  //81
  document.getElementById("name_81").innerHTML = data.Countries[81]["Country"];
  document.getElementById("totalCases_81").innerHTML = data.Countries[81][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_81").innerHTML = (
    data.Countries[81]["TotalConfirmed"] - data.Countries[81]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_81").innerHTML = data.Countries[81][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_81").innerHTML = data.Countries[81][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_81").innerHTML = data.Countries[81][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_81").innerHTML = data.Countries[81][
    "NewDeaths"
  ].toLocaleString();

  //82
  document.getElementById("name_82").innerHTML = data.Countries[82]["Country"];
  document.getElementById("totalCases_82").innerHTML = data.Countries[82][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_82").innerHTML = (
    data.Countries[82]["TotalConfirmed"] - data.Countries[82]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_82").innerHTML = data.Countries[82][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_82").innerHTML = data.Countries[82][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_82").innerHTML = data.Countries[82][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_82").innerHTML = data.Countries[82][
    "NewDeaths"
  ].toLocaleString();

  //83
  document.getElementById("name_83").innerHTML = data.Countries[83]["Country"];
  document.getElementById("totalCases_83").innerHTML = data.Countries[83][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_83").innerHTML = (
    data.Countries[83]["TotalConfirmed"] - data.Countries[83]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_83").innerHTML = data.Countries[83][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_83").innerHTML = data.Countries[83][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_83").innerHTML = data.Countries[83][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_83").innerHTML = data.Countries[83][
    "NewDeaths"
  ].toLocaleString();

  //84
  document.getElementById("name_84").innerHTML = data.Countries[84]["Country"];
  document.getElementById("totalCases_84").innerHTML = data.Countries[84][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_84").innerHTML = (
    data.Countries[84]["TotalConfirmed"] - data.Countries[84]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_84").innerHTML = data.Countries[84][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_84").innerHTML = data.Countries[84][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_84").innerHTML = data.Countries[84][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_84").innerHTML = data.Countries[84][
    "NewDeaths"
  ].toLocaleString();

  //85
  document.getElementById("name_85").innerHTML = data.Countries[85]["Country"];
  document.getElementById("totalCases_85").innerHTML = data.Countries[85][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_85").innerHTML = (
    data.Countries[85]["TotalConfirmed"] - data.Countries[85]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_85").innerHTML = data.Countries[85][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_85").innerHTML = data.Countries[85][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_85").innerHTML = data.Countries[85][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_85").innerHTML = data.Countries[85][
    "NewDeaths"
  ].toLocaleString();

  //86
  document.getElementById("name_86").innerHTML = data.Countries[86]["Country"];
  document.getElementById("totalCases_86").innerHTML = data.Countries[86][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_86").innerHTML = (
    data.Countries[86]["TotalConfirmed"] - data.Countries[86]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_86").innerHTML = data.Countries[86][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_86").innerHTML = data.Countries[86][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_86").innerHTML = data.Countries[86][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_86").innerHTML = data.Countries[86][
    "NewDeaths"
  ].toLocaleString();

  //87
  document.getElementById("name_87").innerHTML = data.Countries[87]["Country"];
  document.getElementById("totalCases_87").innerHTML = data.Countries[87][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_87").innerHTML = (
    data.Countries[87]["TotalConfirmed"] - data.Countries[87]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_87").innerHTML = data.Countries[87][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_87").innerHTML = data.Countries[87][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_87").innerHTML = data.Countries[87][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_87").innerHTML = data.Countries[87][
    "NewDeaths"
  ].toLocaleString();

  //88
  document.getElementById("name_88").innerHTML = data.Countries[88]["Country"];
  document.getElementById("totalCases_88").innerHTML = data.Countries[88][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_88").innerHTML = (
    data.Countries[88]["TotalConfirmed"] - data.Countries[88]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_88").innerHTML = data.Countries[88][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_88").innerHTML = data.Countries[88][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_88").innerHTML = data.Countries[88][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_88").innerHTML = data.Countries[88][
    "NewDeaths"
  ].toLocaleString();

  //89
  document.getElementById("name_89").innerHTML = data.Countries[89]["Country"];
  document.getElementById("totalCases_89").innerHTML = data.Countries[89][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_89").innerHTML = (
    data.Countries[89]["TotalConfirmed"] - data.Countries[89]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_89").innerHTML = data.Countries[89][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_89").innerHTML = data.Countries[89][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_89").innerHTML = data.Countries[89][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_89").innerHTML = data.Countries[89][
    "NewDeaths"
  ].toLocaleString();

  //90
  document.getElementById("name_90").innerHTML = data.Countries[90]["Country"];
  document.getElementById("totalCases_90").innerHTML = data.Countries[90][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_90").innerHTML = (
    data.Countries[90]["TotalConfirmed"] - data.Countries[90]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_90").innerHTML = data.Countries[90][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_90").innerHTML = data.Countries[90][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_90").innerHTML = data.Countries[90][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_90").innerHTML = data.Countries[90][
    "NewDeaths"
  ].toLocaleString();

  //91
  document.getElementById("name_91").innerHTML = data.Countries[91]["Country"];
  document.getElementById("totalCases_91").innerHTML = data.Countries[91][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_91").innerHTML = (
    data.Countries[91]["TotalConfirmed"] - data.Countries[91]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_91").innerHTML = data.Countries[91][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_91").innerHTML = data.Countries[91][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_91").innerHTML = data.Countries[91][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_91").innerHTML = data.Countries[91][
    "NewDeaths"
  ].toLocaleString();

  //92
  document.getElementById("name_92").innerHTML = data.Countries[92]["Country"];
  document.getElementById("totalCases_92").innerHTML = data.Countries[92][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_92").innerHTML = (
    data.Countries[92]["TotalConfirmed"] - data.Countries[92]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_92").innerHTML = data.Countries[92][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_92").innerHTML = data.Countries[92][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_92").innerHTML = data.Countries[92][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_92").innerHTML = data.Countries[92][
    "NewDeaths"
  ].toLocaleString();

  //93
  document.getElementById("name_93").innerHTML = data.Countries[93]["Country"];
  document.getElementById("totalCases_93").innerHTML = data.Countries[93][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_93").innerHTML = (
    data.Countries[93]["TotalConfirmed"] - data.Countries[93]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_93").innerHTML = data.Countries[93][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_93").innerHTML = data.Countries[93][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_93").innerHTML = data.Countries[93][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_93").innerHTML = data.Countries[93][
    "NewDeaths"
  ].toLocaleString();

  //94
  document.getElementById("name_94").innerHTML = data.Countries[94]["Country"];
  document.getElementById("totalCases_94").innerHTML = data.Countries[94][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_94").innerHTML = (
    data.Countries[94]["TotalConfirmed"] - data.Countries[94]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_94").innerHTML = data.Countries[94][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_94").innerHTML = data.Countries[94][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_94").innerHTML = data.Countries[94][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_94").innerHTML = data.Countries[94][
    "NewDeaths"
  ].toLocaleString();

  //95
  document.getElementById("name_95").innerHTML = data.Countries[95]["Country"];
  document.getElementById("totalCases_95").innerHTML = data.Countries[95][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_95").innerHTML = (
    data.Countries[95]["TotalConfirmed"] - data.Countries[95]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_95").innerHTML = data.Countries[95][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_95").innerHTML = data.Countries[95][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_95").innerHTML = data.Countries[95][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_95").innerHTML = data.Countries[95][
    "NewDeaths"
  ].toLocaleString();

  //96
  document.getElementById("name_96").innerHTML = data.Countries[96]["Country"];
  document.getElementById("totalCases_96").innerHTML = data.Countries[96][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_96").innerHTML = (
    data.Countries[96]["TotalConfirmed"] - data.Countries[96]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_96").innerHTML = data.Countries[96][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_96").innerHTML = data.Countries[96][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_96").innerHTML = data.Countries[96][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_96").innerHTML = data.Countries[96][
    "NewDeaths"
  ].toLocaleString();

  //97
  document.getElementById("name_97").innerHTML = data.Countries[97]["Country"];
  document.getElementById("totalCases_97").innerHTML = data.Countries[97][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_97").innerHTML = (
    data.Countries[97]["TotalConfirmed"] - data.Countries[97]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_97").innerHTML = data.Countries[97][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_97").innerHTML = data.Countries[97][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_97").innerHTML = data.Countries[97][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_97").innerHTML = data.Countries[97][
    "NewDeaths"
  ].toLocaleString();

  //98
  document.getElementById("name_98").innerHTML = data.Countries[98]["Country"];
  document.getElementById("totalCases_98").innerHTML = data.Countries[98][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_98").innerHTML = (
    data.Countries[98]["TotalConfirmed"] - data.Countries[98]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_98").innerHTML = data.Countries[98][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_98").innerHTML = data.Countries[98][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_98").innerHTML = data.Countries[98][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_98").innerHTML = data.Countries[98][
    "NewDeaths"
  ].toLocaleString();

  //99
  document.getElementById("name_99").innerHTML = data.Countries[99]["Country"];
  document.getElementById("totalCases_99").innerHTML = data.Countries[99][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("activeCases_99").innerHTML = (
    data.Countries[99]["TotalConfirmed"] - data.Countries[99]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("recovered_99").innerHTML = data.Countries[99][
    "TotalRecovered"
  ].toLocaleString();

  document.getElementById("totalDeaths_99").innerHTML = data.Countries[99][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newCases_99").innerHTML = data.Countries[99][
    "NewConfirmed"
  ].toLocaleString();
  document.getElementById("newDeaths_99").innerHTML = data.Countries[99][
    "NewDeaths"
  ].toLocaleString();

//100
document.getElementById("name_100").innerHTML = data.Countries[100]["Country"];
document.getElementById("totalCases_100").innerHTML = data.Countries[100][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_100").innerHTML = (
  data.Countries[100]["TotalConfirmed"] - data.Countries[100]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_100").innerHTML = data.Countries[100][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_100").innerHTML = data.Countries[100][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_100").innerHTML = data.Countries[100][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_100").innerHTML = data.Countries[100][
  "NewDeaths"
].toLocaleString();

//101
document.getElementById("name_101").innerHTML = data.Countries[101]["Country"];
document.getElementById("totalCases_101").innerHTML = data.Countries[101][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_101").innerHTML = (
  data.Countries[101]["TotalConfirmed"] - data.Countries[101]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_101").innerHTML = data.Countries[101][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_101").innerHTML = data.Countries[101][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_101").innerHTML = data.Countries[101][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_101").innerHTML = data.Countries[101][
  "NewDeaths"
].toLocaleString();

//102
document.getElementById("name_102").innerHTML = data.Countries[102]["Country"];
document.getElementById("totalCases_102").innerHTML = data.Countries[102][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_102").innerHTML = (
  data.Countries[102]["TotalConfirmed"] - data.Countries[102]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_102").innerHTML = data.Countries[102][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_102").innerHTML = data.Countries[102][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_102").innerHTML = data.Countries[102][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_102").innerHTML = data.Countries[102][
  "NewDeaths"
].toLocaleString();

//103
document.getElementById("name_103").innerHTML = data.Countries[103]["Country"];
document.getElementById("totalCases_103").innerHTML = data.Countries[103][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_103").innerHTML = (
  data.Countries[103]["TotalConfirmed"] - data.Countries[103]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_103").innerHTML = data.Countries[103][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_103").innerHTML = data.Countries[103][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_103").innerHTML = data.Countries[103][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_103").innerHTML = data.Countries[103][
  "NewDeaths"
].toLocaleString();

//104
document.getElementById("name_104").innerHTML = data.Countries[104]["Country"];
document.getElementById("totalCases_104").innerHTML = data.Countries[104][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_104").innerHTML = (
  data.Countries[104]["TotalConfirmed"] - data.Countries[104]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_104").innerHTML = data.Countries[104][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_104").innerHTML = data.Countries[104][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_104").innerHTML = data.Countries[104][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_104").innerHTML = data.Countries[104][
  "NewDeaths"
].toLocaleString();

//105
document.getElementById("name_105").innerHTML = data.Countries[105]["Country"];
document.getElementById("totalCases_105").innerHTML = data.Countries[105][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_105").innerHTML = (
  data.Countries[105]["TotalConfirmed"] - data.Countries[105]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_105").innerHTML = data.Countries[105][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_105").innerHTML = data.Countries[105][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_105").innerHTML = data.Countries[105][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_105").innerHTML = data.Countries[105][
  "NewDeaths"
].toLocaleString();

//106
document.getElementById("name_106").innerHTML = data.Countries[106]["Country"];
document.getElementById("totalCases_106").innerHTML = data.Countries[106][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_106").innerHTML = (
  data.Countries[106]["TotalConfirmed"] - data.Countries[106]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_106").innerHTML = data.Countries[106][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_106").innerHTML = data.Countries[106][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_106").innerHTML = data.Countries[106][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_106").innerHTML = data.Countries[106][
  "NewDeaths"
].toLocaleString();

//107
document.getElementById("name_107").innerHTML = data.Countries[107]["Country"];
document.getElementById("totalCases_107").innerHTML = data.Countries[107][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_107").innerHTML = (
  data.Countries[107]["TotalConfirmed"] - data.Countries[107]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_107").innerHTML = data.Countries[107][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_107").innerHTML = data.Countries[107][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_107").innerHTML = data.Countries[107][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_107").innerHTML = data.Countries[107][
  "NewDeaths"
].toLocaleString();

//108
document.getElementById("name_108").innerHTML = data.Countries[108]["Country"];
document.getElementById("totalCases_108").innerHTML = data.Countries[108][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_108").innerHTML = (
  data.Countries[108]["TotalConfirmed"] - data.Countries[108]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_108").innerHTML = data.Countries[108][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_108").innerHTML = data.Countries[108][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_108").innerHTML = data.Countries[108][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_108").innerHTML = data.Countries[108][
  "NewDeaths"
].toLocaleString();

//109
document.getElementById("name_109").innerHTML = data.Countries[109]["Country"];
document.getElementById("totalCases_109").innerHTML = data.Countries[109][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_109").innerHTML = (
  data.Countries[109]["TotalConfirmed"] - data.Countries[109]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_109").innerHTML = data.Countries[109][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_109").innerHTML = data.Countries[109][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_109").innerHTML = data.Countries[109][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_109").innerHTML = data.Countries[109][
  "NewDeaths"
].toLocaleString();

//110
document.getElementById("name_110").innerHTML = data.Countries[110]["Country"];
document.getElementById("totalCases_110").innerHTML = data.Countries[110][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_110").innerHTML = (
  data.Countries[110]["TotalConfirmed"] - data.Countries[110]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_110").innerHTML = data.Countries[110][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_110").innerHTML = data.Countries[110][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_110").innerHTML = data.Countries[110][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_110").innerHTML = data.Countries[110][
  "NewDeaths"
].toLocaleString();

//111
document.getElementById("name_111").innerHTML = data.Countries[111]["Country"];
document.getElementById("totalCases_111").innerHTML = data.Countries[111][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_111").innerHTML = (
  data.Countries[111]["TotalConfirmed"] - data.Countries[111]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_111").innerHTML = data.Countries[111][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_111").innerHTML = data.Countries[111][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_111").innerHTML = data.Countries[111][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_111").innerHTML = data.Countries[111][
  "NewDeaths"
].toLocaleString();

//112
document.getElementById("name_112").innerHTML = data.Countries[112]["Country"];
document.getElementById("totalCases_112").innerHTML = data.Countries[112][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_112").innerHTML = (
  data.Countries[112]["TotalConfirmed"] - data.Countries[112]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_112").innerHTML = data.Countries[112][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_112").innerHTML = data.Countries[112][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_112").innerHTML = data.Countries[112][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_112").innerHTML = data.Countries[112][
  "NewDeaths"
].toLocaleString();

//113
document.getElementById("name_113").innerHTML = data.Countries[113]["Country"];
document.getElementById("totalCases_113").innerHTML = data.Countries[113][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_113").innerHTML = (
  data.Countries[113]["TotalConfirmed"] - data.Countries[113]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_113").innerHTML = data.Countries[113][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_113").innerHTML = data.Countries[113][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_113").innerHTML = data.Countries[113][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_113").innerHTML = data.Countries[113][
  "NewDeaths"
].toLocaleString();

//114
document.getElementById("name_114").innerHTML = data.Countries[114]["Country"];
document.getElementById("totalCases_114").innerHTML = data.Countries[114][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_114").innerHTML = (
  data.Countries[114]["TotalConfirmed"] - data.Countries[114]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_114").innerHTML = data.Countries[114][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_114").innerHTML = data.Countries[114][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_114").innerHTML = data.Countries[114][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_114").innerHTML = data.Countries[114][
  "NewDeaths"
].toLocaleString();

//115
document.getElementById("name_115").innerHTML = data.Countries[115]["Country"];
document.getElementById("totalCases_115").innerHTML = data.Countries[115][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_115").innerHTML = (
  data.Countries[115]["TotalConfirmed"] - data.Countries[115]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_115").innerHTML = data.Countries[115][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_115").innerHTML = data.Countries[115][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_115").innerHTML = data.Countries[115][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_115").innerHTML = data.Countries[115][
  "NewDeaths"
].toLocaleString();

//116
document.getElementById("name_116").innerHTML = data.Countries[116]["Country"];
document.getElementById("totalCases_116").innerHTML = data.Countries[116][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_116").innerHTML = (
  data.Countries[116]["TotalConfirmed"] - data.Countries[116]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_116").innerHTML = data.Countries[116][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_116").innerHTML = data.Countries[116][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_116").innerHTML = data.Countries[116][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_116").innerHTML = data.Countries[116][
  "NewDeaths"
].toLocaleString();

//117
document.getElementById("name_117").innerHTML = data.Countries[117]["Country"];
document.getElementById("totalCases_117").innerHTML = data.Countries[117][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_117").innerHTML = (
  data.Countries[117]["TotalConfirmed"] - data.Countries[117]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_117").innerHTML = data.Countries[117][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_117").innerHTML = data.Countries[117][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_117").innerHTML = data.Countries[117][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_117").innerHTML = data.Countries[117][
  "NewDeaths"
].toLocaleString();

//118
document.getElementById("name_118").innerHTML = data.Countries[118]["Country"];
document.getElementById("totalCases_118").innerHTML = data.Countries[118][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_118").innerHTML = (
  data.Countries[118]["TotalConfirmed"] - data.Countries[118]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_118").innerHTML = data.Countries[118][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_118").innerHTML = data.Countries[118][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_118").innerHTML = data.Countries[118][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_118").innerHTML = data.Countries[118][
  "NewDeaths"
].toLocaleString();

//119
document.getElementById("name_119").innerHTML = data.Countries[119]["Country"];
document.getElementById("totalCases_119").innerHTML = data.Countries[119][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_119").innerHTML = (
  data.Countries[119]["TotalConfirmed"] - data.Countries[119]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_119").innerHTML = data.Countries[119][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_119").innerHTML = data.Countries[119][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_119").innerHTML = data.Countries[119][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_119").innerHTML = data.Countries[119][
  "NewDeaths"
].toLocaleString();

//120
document.getElementById("name_120").innerHTML = data.Countries[120]["Country"];
document.getElementById("totalCases_120").innerHTML = data.Countries[120][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_120").innerHTML = (
  data.Countries[120]["TotalConfirmed"] - data.Countries[120]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_120").innerHTML = data.Countries[120][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_120").innerHTML = data.Countries[120][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_120").innerHTML = data.Countries[120][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_120").innerHTML = data.Countries[120][
  "NewDeaths"
].toLocaleString();

//121
document.getElementById("name_121").innerHTML = data.Countries[121]["Country"];
document.getElementById("totalCases_121").innerHTML = data.Countries[121][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_121").innerHTML = (
  data.Countries[121]["TotalConfirmed"] - data.Countries[121]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_121").innerHTML = data.Countries[121][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_121").innerHTML = data.Countries[121][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_121").innerHTML = data.Countries[121][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_121").innerHTML = data.Countries[121][
  "NewDeaths"
].toLocaleString();

//122
document.getElementById("name_122").innerHTML = data.Countries[122]["Country"];
document.getElementById("totalCases_122").innerHTML = data.Countries[122][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_122").innerHTML = (
  data.Countries[122]["TotalConfirmed"] - data.Countries[122]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_122").innerHTML = data.Countries[122][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_122").innerHTML = data.Countries[122][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_122").innerHTML = data.Countries[122][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_122").innerHTML = data.Countries[122][
  "NewDeaths"
].toLocaleString();

//123
document.getElementById("name_123").innerHTML = data.Countries[123]["Country"];
document.getElementById("totalCases_123").innerHTML = data.Countries[123][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_123").innerHTML = (
  data.Countries[123]["TotalConfirmed"] - data.Countries[123]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_123").innerHTML = data.Countries[123][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_123").innerHTML = data.Countries[123][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_123").innerHTML = data.Countries[123][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_123").innerHTML = data.Countries[123][
  "NewDeaths"
].toLocaleString();

//124
document.getElementById("name_124").innerHTML = data.Countries[124]["Country"];
document.getElementById("totalCases_124").innerHTML = data.Countries[124][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_124").innerHTML = (
  data.Countries[124]["TotalConfirmed"] - data.Countries[124]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_124").innerHTML = data.Countries[124][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_124").innerHTML = data.Countries[124][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_124").innerHTML = data.Countries[124][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_124").innerHTML = data.Countries[124][
  "NewDeaths"
].toLocaleString();

//125
document.getElementById("name_125").innerHTML = data.Countries[125]["Country"];
document.getElementById("totalCases_125").innerHTML = data.Countries[125][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_125").innerHTML = (
  data.Countries[125]["TotalConfirmed"] - data.Countries[125]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_125").innerHTML = data.Countries[125][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_125").innerHTML = data.Countries[125][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_125").innerHTML = data.Countries[125][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_125").innerHTML = data.Countries[125][
  "NewDeaths"
].toLocaleString();

//126
document.getElementById("name_126").innerHTML = data.Countries[126]["Country"];
document.getElementById("totalCases_126").innerHTML = data.Countries[126][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_126").innerHTML = (
  data.Countries[126]["TotalConfirmed"] - data.Countries[126]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_126").innerHTML = data.Countries[126][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_126").innerHTML = data.Countries[126][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_126").innerHTML = data.Countries[126][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_126").innerHTML = data.Countries[126][
  "NewDeaths"
].toLocaleString();

//127
document.getElementById("name_127").innerHTML = data.Countries[127]["Country"];
document.getElementById("totalCases_127").innerHTML = data.Countries[127][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_127").innerHTML = (
  data.Countries[127]["TotalConfirmed"] - data.Countries[127]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_127").innerHTML = data.Countries[127][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_127").innerHTML = data.Countries[127][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_127").innerHTML = data.Countries[127][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_127").innerHTML = data.Countries[127][
  "NewDeaths"
].toLocaleString();

//128
document.getElementById("name_128").innerHTML = data.Countries[128]["Country"];
document.getElementById("totalCases_128").innerHTML = data.Countries[128][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_128").innerHTML = (
  data.Countries[128]["TotalConfirmed"] - data.Countries[128]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_128").innerHTML = data.Countries[128][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_128").innerHTML = data.Countries[128][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_128").innerHTML = data.Countries[128][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_128").innerHTML = data.Countries[128][
  "NewDeaths"
].toLocaleString();

//129
document.getElementById("name_129").innerHTML = data.Countries[129]["Country"];
document.getElementById("totalCases_129").innerHTML = data.Countries[129][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_129").innerHTML = (
  data.Countries[129]["TotalConfirmed"] - data.Countries[129]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_129").innerHTML = data.Countries[129][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_129").innerHTML = data.Countries[129][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_129").innerHTML = data.Countries[129][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_129").innerHTML = data.Countries[129][
  "NewDeaths"
].toLocaleString();

//130
document.getElementById("name_130").innerHTML = data.Countries[130]["Country"];
document.getElementById("totalCases_130").innerHTML = data.Countries[130][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_130").innerHTML = (
  data.Countries[130]["TotalConfirmed"] - data.Countries[130]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_130").innerHTML = data.Countries[130][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_130").innerHTML = data.Countries[130][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_130").innerHTML = data.Countries[130][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_130").innerHTML = data.Countries[130][
  "NewDeaths"
].toLocaleString();

//131
document.getElementById("name_131").innerHTML = data.Countries[131]["Country"];
document.getElementById("totalCases_131").innerHTML = data.Countries[131][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_131").innerHTML = (
  data.Countries[131]["TotalConfirmed"] - data.Countries[131]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_131").innerHTML = data.Countries[131][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_131").innerHTML = data.Countries[131][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_131").innerHTML = data.Countries[131][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_131").innerHTML = data.Countries[131][
  "NewDeaths"
].toLocaleString();

//132
document.getElementById("name_132").innerHTML = data.Countries[132]["Country"];
document.getElementById("totalCases_132").innerHTML = data.Countries[132][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_132").innerHTML = (
  data.Countries[132]["TotalConfirmed"] - data.Countries[132]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_132").innerHTML = data.Countries[132][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_132").innerHTML = data.Countries[132][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_132").innerHTML = data.Countries[132][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_132").innerHTML = data.Countries[132][
  "NewDeaths"
].toLocaleString();

//133
document.getElementById("name_133").innerHTML = data.Countries[133]["Country"];
document.getElementById("totalCases_133").innerHTML = data.Countries[133][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_133").innerHTML = (
  data.Countries[133]["TotalConfirmed"] - data.Countries[133]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_133").innerHTML = data.Countries[133][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_133").innerHTML = data.Countries[133][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_133").innerHTML = data.Countries[133][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_133").innerHTML = data.Countries[133][
  "NewDeaths"
].toLocaleString();

//134
document.getElementById("name_134").innerHTML = data.Countries[134]["Country"];
document.getElementById("totalCases_134").innerHTML = data.Countries[134][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_134").innerHTML = (
  data.Countries[134]["TotalConfirmed"] - data.Countries[134]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_134").innerHTML = data.Countries[134][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_134").innerHTML = data.Countries[134][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_134").innerHTML = data.Countries[134][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_134").innerHTML = data.Countries[134][
  "NewDeaths"
].toLocaleString();

//135
document.getElementById("name_135").innerHTML = data.Countries[135]["Country"];
document.getElementById("totalCases_135").innerHTML = data.Countries[135][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_135").innerHTML = (
  data.Countries[135]["TotalConfirmed"] - data.Countries[135]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_135").innerHTML = data.Countries[135][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_135").innerHTML = data.Countries[135][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_135").innerHTML = data.Countries[135][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_135").innerHTML = data.Countries[135][
  "NewDeaths"
].toLocaleString();

//136
document.getElementById("name_136").innerHTML = data.Countries[136]["Country"];
document.getElementById("totalCases_136").innerHTML = data.Countries[136][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_136").innerHTML = (
  data.Countries[136]["TotalConfirmed"] - data.Countries[136]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_136").innerHTML = data.Countries[136][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_136").innerHTML = data.Countries[136][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_136").innerHTML = data.Countries[136][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_136").innerHTML = data.Countries[136][
  "NewDeaths"
].toLocaleString();

//137
document.getElementById("name_137").innerHTML = data.Countries[137]["Country"];
document.getElementById("totalCases_137").innerHTML = data.Countries[137][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_137").innerHTML = (
  data.Countries[137]["TotalConfirmed"] - data.Countries[137]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_137").innerHTML = data.Countries[137][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_137").innerHTML = data.Countries[137][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_137").innerHTML = data.Countries[137][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_137").innerHTML = data.Countries[137][
  "NewDeaths"
].toLocaleString();

//138
document.getElementById("name_138").innerHTML = data.Countries[138]["Country"];
document.getElementById("totalCases_138").innerHTML = data.Countries[138][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_138").innerHTML = (
  data.Countries[138]["TotalConfirmed"] - data.Countries[138]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_138").innerHTML = data.Countries[138][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_138").innerHTML = data.Countries[138][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_138").innerHTML = data.Countries[138][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_138").innerHTML = data.Countries[138][
  "NewDeaths"
].toLocaleString();

//139
document.getElementById("name_139").innerHTML = data.Countries[139]["Country"];
document.getElementById("totalCases_139").innerHTML = data.Countries[139][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_139").innerHTML = (
  data.Countries[139]["TotalConfirmed"] - data.Countries[139]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_139").innerHTML = data.Countries[139][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_139").innerHTML = data.Countries[139][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_139").innerHTML = data.Countries[139][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_139").innerHTML = data.Countries[139][
  "NewDeaths"
].toLocaleString();

//140
document.getElementById("name_140").innerHTML = data.Countries[140]["Country"];
document.getElementById("totalCases_140").innerHTML = data.Countries[140][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_140").innerHTML = (
  data.Countries[140]["TotalConfirmed"] - data.Countries[140]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_140").innerHTML = data.Countries[140][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_140").innerHTML = data.Countries[140][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_140").innerHTML = data.Countries[140][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_140").innerHTML = data.Countries[140][
  "NewDeaths"
].toLocaleString();

//141
document.getElementById("name_141").innerHTML = data.Countries[141]["Country"];
document.getElementById("totalCases_141").innerHTML = data.Countries[141][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_141").innerHTML = (
  data.Countries[141]["TotalConfirmed"] - data.Countries[141]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_141").innerHTML = data.Countries[141][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_141").innerHTML = data.Countries[141][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_141").innerHTML = data.Countries[141][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_141").innerHTML = data.Countries[141][
  "NewDeaths"
].toLocaleString();

//142
document.getElementById("name_142").innerHTML = data.Countries[142]["Country"];
document.getElementById("totalCases_142").innerHTML = data.Countries[142][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_142").innerHTML = (
  data.Countries[142]["TotalConfirmed"] - data.Countries[142]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_142").innerHTML = data.Countries[142][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_142").innerHTML = data.Countries[142][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_142").innerHTML = data.Countries[142][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_142").innerHTML = data.Countries[142][
  "NewDeaths"
].toLocaleString();

//143
document.getElementById("name_143").innerHTML = data.Countries[143]["Country"];
document.getElementById("totalCases_143").innerHTML = data.Countries[143][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_143").innerHTML = (
  data.Countries[143]["TotalConfirmed"] - data.Countries[143]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_143").innerHTML = data.Countries[143][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_143").innerHTML = data.Countries[143][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_143").innerHTML = data.Countries[143][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_143").innerHTML = data.Countries[143][
  "NewDeaths"
].toLocaleString();

//144
document.getElementById("name_144").innerHTML = data.Countries[144]["Country"];
document.getElementById("totalCases_144").innerHTML = data.Countries[144][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_144").innerHTML = (
  data.Countries[144]["TotalConfirmed"] - data.Countries[144]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_144").innerHTML = data.Countries[144][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_144").innerHTML = data.Countries[144][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_144").innerHTML = data.Countries[144][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_144").innerHTML = data.Countries[144][
  "NewDeaths"
].toLocaleString();

//145
document.getElementById("name_145").innerHTML = data.Countries[145]["Country"];
document.getElementById("totalCases_145").innerHTML = data.Countries[145][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_145").innerHTML = (
  data.Countries[145]["TotalConfirmed"] - data.Countries[145]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_145").innerHTML = data.Countries[145][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_145").innerHTML = data.Countries[145][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_145").innerHTML = data.Countries[145][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_145").innerHTML = data.Countries[145][
  "NewDeaths"
].toLocaleString();

//146
document.getElementById("name_146").innerHTML = data.Countries[146]["Country"];
document.getElementById("totalCases_146").innerHTML = data.Countries[146][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_146").innerHTML = (
  data.Countries[146]["TotalConfirmed"] - data.Countries[146]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_146").innerHTML = data.Countries[146][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_146").innerHTML = data.Countries[146][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_146").innerHTML = data.Countries[146][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_146").innerHTML = data.Countries[146][
  "NewDeaths"
].toLocaleString();

//147
document.getElementById("name_147").innerHTML = data.Countries[147]["Country"];
document.getElementById("totalCases_147").innerHTML = data.Countries[147][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_147").innerHTML = (
  data.Countries[147]["TotalConfirmed"] - data.Countries[147]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_147").innerHTML = data.Countries[147][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_147").innerHTML = data.Countries[147][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_147").innerHTML = data.Countries[147][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_147").innerHTML = data.Countries[147][
  "NewDeaths"
].toLocaleString();

//148
document.getElementById("name_148").innerHTML = data.Countries[148]["Country"];
document.getElementById("totalCases_148").innerHTML = data.Countries[148][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_148").innerHTML = (
  data.Countries[148]["TotalConfirmed"] - data.Countries[148]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_148").innerHTML = data.Countries[148][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_148").innerHTML = data.Countries[148][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_148").innerHTML = data.Countries[148][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_148").innerHTML = data.Countries[148][
  "NewDeaths"
].toLocaleString();

//149
document.getElementById("name_149").innerHTML = data.Countries[149]["Country"];
document.getElementById("totalCases_149").innerHTML = data.Countries[149][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_149").innerHTML = (
  data.Countries[149]["TotalConfirmed"] - data.Countries[149]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_149").innerHTML = data.Countries[149][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_149").innerHTML = data.Countries[149][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_149").innerHTML = data.Countries[149][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_149").innerHTML = data.Countries[149][
  "NewDeaths"
].toLocaleString();

//150
document.getElementById("name_150").innerHTML = data.Countries[150]["Country"];
document.getElementById("totalCases_150").innerHTML = data.Countries[150][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_150").innerHTML = (
  data.Countries[150]["TotalConfirmed"] - data.Countries[150]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_150").innerHTML = data.Countries[150][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_150").innerHTML = data.Countries[150][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_150").innerHTML = data.Countries[150][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_150").innerHTML = data.Countries[150][
  "NewDeaths"
].toLocaleString();

//151
document.getElementById("name_151").innerHTML = data.Countries[151]["Country"];
document.getElementById("totalCases_151").innerHTML = data.Countries[151][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_151").innerHTML = (
  data.Countries[151]["TotalConfirmed"] - data.Countries[151]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_151").innerHTML = data.Countries[151][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_151").innerHTML = data.Countries[151][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_151").innerHTML = data.Countries[151][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_151").innerHTML = data.Countries[151][
  "NewDeaths"
].toLocaleString();

//152
document.getElementById("name_152").innerHTML = data.Countries[152]["Country"];
document.getElementById("totalCases_152").innerHTML = data.Countries[152][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_152").innerHTML = (
  data.Countries[152]["TotalConfirmed"] - data.Countries[152]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_152").innerHTML = data.Countries[152][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_152").innerHTML = data.Countries[152][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_152").innerHTML = data.Countries[152][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_152").innerHTML = data.Countries[152][
  "NewDeaths"
].toLocaleString();

//153
document.getElementById("name_153").innerHTML = data.Countries[153]["Country"];
document.getElementById("totalCases_153").innerHTML = data.Countries[153][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_153").innerHTML = (
  data.Countries[153]["TotalConfirmed"] - data.Countries[153]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_153").innerHTML = data.Countries[153][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_153").innerHTML = data.Countries[153][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_153").innerHTML = data.Countries[153][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_153").innerHTML = data.Countries[153][
  "NewDeaths"
].toLocaleString();

//154
document.getElementById("name_154").innerHTML = data.Countries[154]["Country"];
document.getElementById("totalCases_154").innerHTML = data.Countries[154][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_154").innerHTML = (
  data.Countries[154]["TotalConfirmed"] - data.Countries[154]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_154").innerHTML = data.Countries[154][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_154").innerHTML = data.Countries[154][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_154").innerHTML = data.Countries[154][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_154").innerHTML = data.Countries[154][
  "NewDeaths"
].toLocaleString();

//155
document.getElementById("name_155").innerHTML = data.Countries[155]["Country"];
document.getElementById("totalCases_155").innerHTML = data.Countries[155][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_155").innerHTML = (
  data.Countries[155]["TotalConfirmed"] - data.Countries[155]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_155").innerHTML = data.Countries[155][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_155").innerHTML = data.Countries[155][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_155").innerHTML = data.Countries[155][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_155").innerHTML = data.Countries[155][
  "NewDeaths"
].toLocaleString();

//156
document.getElementById("name_156").innerHTML = data.Countries[156]["Country"];
document.getElementById("totalCases_156").innerHTML = data.Countries[156][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_156").innerHTML = (
  data.Countries[156]["TotalConfirmed"] - data.Countries[156]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_156").innerHTML = data.Countries[156][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_156").innerHTML = data.Countries[156][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_156").innerHTML = data.Countries[156][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_156").innerHTML = data.Countries[156][
  "NewDeaths"
].toLocaleString();

//157
document.getElementById("name_157").innerHTML = data.Countries[157]["Country"];
document.getElementById("totalCases_157").innerHTML = data.Countries[157][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_157").innerHTML = (
  data.Countries[157]["TotalConfirmed"] - data.Countries[157]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_157").innerHTML = data.Countries[157][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_157").innerHTML = data.Countries[157][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_157").innerHTML = data.Countries[157][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_157").innerHTML = data.Countries[157][
  "NewDeaths"
].toLocaleString();

//158
document.getElementById("name_158").innerHTML = data.Countries[158]["Country"];
document.getElementById("totalCases_158").innerHTML = data.Countries[158][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_158").innerHTML = (
  data.Countries[158]["TotalConfirmed"] - data.Countries[158]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_158").innerHTML = data.Countries[158][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_158").innerHTML = data.Countries[158][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_158").innerHTML = data.Countries[158][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_158").innerHTML = data.Countries[158][
  "NewDeaths"
].toLocaleString();

//159
document.getElementById("name_159").innerHTML = data.Countries[159]["Country"];
document.getElementById("totalCases_159").innerHTML = data.Countries[159][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_159").innerHTML = (
  data.Countries[159]["TotalConfirmed"] - data.Countries[159]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_159").innerHTML = data.Countries[159][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_159").innerHTML = data.Countries[159][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_159").innerHTML = data.Countries[159][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_159").innerHTML = data.Countries[159][
  "NewDeaths"
].toLocaleString();

//160
document.getElementById("name_160").innerHTML = data.Countries[160]["Country"];
document.getElementById("totalCases_160").innerHTML = data.Countries[160][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_160").innerHTML = (
  data.Countries[160]["TotalConfirmed"] - data.Countries[160]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_160").innerHTML = data.Countries[160][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_160").innerHTML = data.Countries[160][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_160").innerHTML = data.Countries[160][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_160").innerHTML = data.Countries[160][
  "NewDeaths"
].toLocaleString();

//161
document.getElementById("name_161").innerHTML = data.Countries[161]["Country"];
document.getElementById("totalCases_161").innerHTML = data.Countries[161][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_161").innerHTML = (
  data.Countries[161]["TotalConfirmed"] - data.Countries[161]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_161").innerHTML = data.Countries[161][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_161").innerHTML = data.Countries[161][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_161").innerHTML = data.Countries[161][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_161").innerHTML = data.Countries[161][
  "NewDeaths"
].toLocaleString();

//162
document.getElementById("name_162").innerHTML = data.Countries[162]["Country"];
document.getElementById("totalCases_162").innerHTML = data.Countries[162][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_162").innerHTML = (
  data.Countries[162]["TotalConfirmed"] - data.Countries[162]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_162").innerHTML = data.Countries[162][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_162").innerHTML = data.Countries[162][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_162").innerHTML = data.Countries[162][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_162").innerHTML = data.Countries[162][
  "NewDeaths"
].toLocaleString();

//163
document.getElementById("name_163").innerHTML = data.Countries[163]["Country"];
document.getElementById("totalCases_163").innerHTML = data.Countries[163][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_163").innerHTML = (
  data.Countries[163]["TotalConfirmed"] - data.Countries[163]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_163").innerHTML = data.Countries[163][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_163").innerHTML = data.Countries[163][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_163").innerHTML = data.Countries[163][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_163").innerHTML = data.Countries[163][
  "NewDeaths"
].toLocaleString();

//164
document.getElementById("name_164").innerHTML = data.Countries[164]["Country"];
document.getElementById("totalCases_164").innerHTML = data.Countries[164][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_164").innerHTML = (
  data.Countries[164]["TotalConfirmed"] - data.Countries[164]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_164").innerHTML = data.Countries[164][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_164").innerHTML = data.Countries[164][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_164").innerHTML = data.Countries[164][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_164").innerHTML = data.Countries[164][
  "NewDeaths"
].toLocaleString();

//165
document.getElementById("name_165").innerHTML = data.Countries[165]["Country"];
document.getElementById("totalCases_165").innerHTML = data.Countries[165][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_165").innerHTML = (
  data.Countries[165]["TotalConfirmed"] - data.Countries[165]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_165").innerHTML = data.Countries[165][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_165").innerHTML = data.Countries[165][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_165").innerHTML = data.Countries[165][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_165").innerHTML = data.Countries[165][
  "NewDeaths"
].toLocaleString();

//166
document.getElementById("name_166").innerHTML = data.Countries[166]["Country"];
document.getElementById("totalCases_166").innerHTML = data.Countries[166][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_166").innerHTML = (
  data.Countries[166]["TotalConfirmed"] - data.Countries[166]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_166").innerHTML = data.Countries[166][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_166").innerHTML = data.Countries[166][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_166").innerHTML = data.Countries[166][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_166").innerHTML = data.Countries[166][
  "NewDeaths"
].toLocaleString();

//167
document.getElementById("name_167").innerHTML = data.Countries[167]["Country"];
document.getElementById("totalCases_167").innerHTML = data.Countries[167][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_167").innerHTML = (
  data.Countries[167]["TotalConfirmed"] - data.Countries[167]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_167").innerHTML = data.Countries[167][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_167").innerHTML = data.Countries[167][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_167").innerHTML = data.Countries[167][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_167").innerHTML = data.Countries[167][
  "NewDeaths"
].toLocaleString();

//168
document.getElementById("name_168").innerHTML = data.Countries[168]["Country"];
document.getElementById("totalCases_168").innerHTML = data.Countries[168][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_168").innerHTML = (
  data.Countries[168]["TotalConfirmed"] - data.Countries[168]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_168").innerHTML = data.Countries[168][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_168").innerHTML = data.Countries[168][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_168").innerHTML = data.Countries[168][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_168").innerHTML = data.Countries[168][
  "NewDeaths"
].toLocaleString();

//169
document.getElementById("name_169").innerHTML = data.Countries[169]["Country"];
document.getElementById("totalCases_169").innerHTML = data.Countries[169][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_169").innerHTML = (
  data.Countries[169]["TotalConfirmed"] - data.Countries[169]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_169").innerHTML = data.Countries[169][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_169").innerHTML = data.Countries[169][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_169").innerHTML = data.Countries[169][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_169").innerHTML = data.Countries[169][
  "NewDeaths"
].toLocaleString();

//170
document.getElementById("name_170").innerHTML = data.Countries[170]["Country"];
document.getElementById("totalCases_170").innerHTML = data.Countries[170][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_170").innerHTML = (
  data.Countries[170]["TotalConfirmed"] - data.Countries[170]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_170").innerHTML = data.Countries[170][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_170").innerHTML = data.Countries[170][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_170").innerHTML = data.Countries[170][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_170").innerHTML = data.Countries[170][
  "NewDeaths"
].toLocaleString();

//171
document.getElementById("name_171").innerHTML = data.Countries[171]["Country"];
document.getElementById("totalCases_171").innerHTML = data.Countries[171][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_171").innerHTML = (
  data.Countries[171]["TotalConfirmed"] - data.Countries[171]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_171").innerHTML = data.Countries[171][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_171").innerHTML = data.Countries[171][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_171").innerHTML = data.Countries[171][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_171").innerHTML = data.Countries[171][
  "NewDeaths"
].toLocaleString();

//172
document.getElementById("name_172").innerHTML = data.Countries[172]["Country"];
document.getElementById("totalCases_172").innerHTML = data.Countries[172][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_172").innerHTML = (
  data.Countries[172]["TotalConfirmed"] - data.Countries[172]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_172").innerHTML = data.Countries[172][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_172").innerHTML = data.Countries[172][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_172").innerHTML = data.Countries[172][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_172").innerHTML = data.Countries[172][
  "NewDeaths"
].toLocaleString();

//173
document.getElementById("name_173").innerHTML = data.Countries[173]["Country"];
document.getElementById("totalCases_173").innerHTML = data.Countries[173][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_173").innerHTML = (
  data.Countries[173]["TotalConfirmed"] - data.Countries[173]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_173").innerHTML = data.Countries[173][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_173").innerHTML = data.Countries[173][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_173").innerHTML = data.Countries[173][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_173").innerHTML = data.Countries[173][
  "NewDeaths"
].toLocaleString();

//174
document.getElementById("name_174").innerHTML = data.Countries[174]["Country"];
document.getElementById("totalCases_174").innerHTML = data.Countries[174][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_174").innerHTML = (
  data.Countries[174]["TotalConfirmed"] - data.Countries[174]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_174").innerHTML = data.Countries[174][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_174").innerHTML = data.Countries[174][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_174").innerHTML = data.Countries[174][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_174").innerHTML = data.Countries[174][
  "NewDeaths"
].toLocaleString();

//175
document.getElementById("name_175").innerHTML = data.Countries[175]["Country"];
document.getElementById("totalCases_175").innerHTML = data.Countries[175][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_175").innerHTML = (
  data.Countries[175]["TotalConfirmed"] - data.Countries[175]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_175").innerHTML = data.Countries[175][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_175").innerHTML = data.Countries[175][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_175").innerHTML = data.Countries[175][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_175").innerHTML = data.Countries[175][
  "NewDeaths"
].toLocaleString();

//176
document.getElementById("name_176").innerHTML = data.Countries[176]["Country"];
document.getElementById("totalCases_176").innerHTML = data.Countries[176][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_176").innerHTML = (
  data.Countries[176]["TotalConfirmed"] - data.Countries[176]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_176").innerHTML = data.Countries[176][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_176").innerHTML = data.Countries[176][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_176").innerHTML = data.Countries[176][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_176").innerHTML = data.Countries[176][
  "NewDeaths"
].toLocaleString();

//177
document.getElementById("name_177").innerHTML = data.Countries[177]["Country"];
document.getElementById("totalCases_177").innerHTML = data.Countries[177][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_177").innerHTML = (
  data.Countries[177]["TotalConfirmed"] - data.Countries[177]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_177").innerHTML = data.Countries[177][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_177").innerHTML = data.Countries[177][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_177").innerHTML = data.Countries[177][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_177").innerHTML = data.Countries[177][
  "NewDeaths"
].toLocaleString();

//178
document.getElementById("name_178").innerHTML = data.Countries[178]["Country"];
document.getElementById("totalCases_178").innerHTML = data.Countries[178][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_178").innerHTML = (
  data.Countries[178]["TotalConfirmed"] - data.Countries[178]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_178").innerHTML = data.Countries[178][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_178").innerHTML = data.Countries[178][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_178").innerHTML = data.Countries[178][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_178").innerHTML = data.Countries[178][
  "NewDeaths"
].toLocaleString();

//179
document.getElementById("name_179").innerHTML = data.Countries[179]["Country"];
document.getElementById("totalCases_179").innerHTML = data.Countries[179][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_179").innerHTML = (
  data.Countries[179]["TotalConfirmed"] - data.Countries[179]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_179").innerHTML = data.Countries[179][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_179").innerHTML = data.Countries[179][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_179").innerHTML = data.Countries[179][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_179").innerHTML = data.Countries[179][
  "NewDeaths"
].toLocaleString();

//180
document.getElementById("name_180").innerHTML = data.Countries[180]["Country"];
document.getElementById("totalCases_180").innerHTML = data.Countries[180][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_180").innerHTML = (
  data.Countries[180]["TotalConfirmed"] - data.Countries[180]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_180").innerHTML = data.Countries[180][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_180").innerHTML = data.Countries[180][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_180").innerHTML = data.Countries[180][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_180").innerHTML = data.Countries[180][
  "NewDeaths"
].toLocaleString();

//181
document.getElementById("name_181").innerHTML = data.Countries[181]["Country"];
document.getElementById("totalCases_181").innerHTML = data.Countries[181][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_181").innerHTML = (
  data.Countries[181]["TotalConfirmed"] - data.Countries[181]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_181").innerHTML = data.Countries[181][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_181").innerHTML = data.Countries[181][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_181").innerHTML = data.Countries[181][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_181").innerHTML = data.Countries[181][
  "NewDeaths"
].toLocaleString();

//182
document.getElementById("name_182").innerHTML = data.Countries[182]["Country"];
document.getElementById("totalCases_182").innerHTML = data.Countries[182][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_182").innerHTML = (
  data.Countries[182]["TotalConfirmed"] - data.Countries[182]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_182").innerHTML = data.Countries[182][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_182").innerHTML = data.Countries[182][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_182").innerHTML = data.Countries[182][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_182").innerHTML = data.Countries[182][
  "NewDeaths"
].toLocaleString();

//183
document.getElementById("name_183").innerHTML = data.Countries[183]["Country"];
document.getElementById("totalCases_183").innerHTML = data.Countries[183][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_183").innerHTML = (
  data.Countries[183]["TotalConfirmed"] - data.Countries[183]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_183").innerHTML = data.Countries[183][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_183").innerHTML = data.Countries[183][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_183").innerHTML = data.Countries[183][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_183").innerHTML = data.Countries[183][
  "NewDeaths"
].toLocaleString();

//184
document.getElementById("name_184").innerHTML = data.Countries[184]["Country"];
document.getElementById("totalCases_184").innerHTML = data.Countries[184][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_184").innerHTML = (
  data.Countries[184]["TotalConfirmed"] - data.Countries[184]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_184").innerHTML = data.Countries[184][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_184").innerHTML = data.Countries[184][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_184").innerHTML = data.Countries[184][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_184").innerHTML = data.Countries[184][
  "NewDeaths"
].toLocaleString();

//185
document.getElementById("name_185").innerHTML = data.Countries[185]["Country"];
document.getElementById("totalCases_185").innerHTML = data.Countries[185][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_185").innerHTML = (
  data.Countries[185]["TotalConfirmed"] - data.Countries[185]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_185").innerHTML = data.Countries[185][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_185").innerHTML = data.Countries[185][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_185").innerHTML = data.Countries[185][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_185").innerHTML = data.Countries[185][
  "NewDeaths"
].toLocaleString();

//186
document.getElementById("name_186").innerHTML = data.Countries[186]["Country"];
document.getElementById("totalCases_186").innerHTML = data.Countries[186][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_186").innerHTML = (
  data.Countries[186]["TotalConfirmed"] - data.Countries[186]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_186").innerHTML = data.Countries[186][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_186").innerHTML = data.Countries[186][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_186").innerHTML = data.Countries[186][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_186").innerHTML = data.Countries[186][
  "NewDeaths"
].toLocaleString();

//187
document.getElementById("name_187").innerHTML = data.Countries[187]["Country"];
document.getElementById("totalCases_187").innerHTML = data.Countries[187][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_187").innerHTML = (
  data.Countries[187]["TotalConfirmed"] - data.Countries[187]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_187").innerHTML = data.Countries[187][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_187").innerHTML = data.Countries[187][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_187").innerHTML = data.Countries[187][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_187").innerHTML = data.Countries[187][
  "NewDeaths"
].toLocaleString();

//188
document.getElementById("name_188").innerHTML = data.Countries[188]["Country"];
document.getElementById("totalCases_188").innerHTML = data.Countries[188][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_188").innerHTML = (
  data.Countries[188]["TotalConfirmed"] - data.Countries[188]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_188").innerHTML = data.Countries[188][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_188").innerHTML = data.Countries[188][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_188").innerHTML = data.Countries[188][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_188").innerHTML = data.Countries[188][
  "NewDeaths"
].toLocaleString();

//189
document.getElementById("name_189").innerHTML = data.Countries[189]["Country"];
document.getElementById("totalCases_189").innerHTML = data.Countries[189][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_189").innerHTML = (
  data.Countries[189]["TotalConfirmed"] - data.Countries[189]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_189").innerHTML = data.Countries[189][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_189").innerHTML = data.Countries[189][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_189").innerHTML = data.Countries[189][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_189").innerHTML = data.Countries[189][
  "NewDeaths"
].toLocaleString();

//190
document.getElementById("name_190").innerHTML = data.Countries[190]["Country"];
document.getElementById("totalCases_190").innerHTML = data.Countries[190][
  "TotalConfirmed"
].toLocaleString();
document.getElementById("activeCases_190").innerHTML = (
  data.Countries[190]["TotalConfirmed"] - data.Countries[190]["TotalRecovered"]
).toLocaleString();
document.getElementById("recovered_190").innerHTML = data.Countries[190][
  "TotalRecovered"
].toLocaleString();

document.getElementById("totalDeaths_190").innerHTML = data.Countries[190][
  "TotalDeaths"
].toLocaleString();
document.getElementById("newCases_190").innerHTML = data.Countries[190][
  "NewConfirmed"
].toLocaleString();
document.getElementById("newDeaths_190").innerHTML = data.Countries[190][
  "NewDeaths"
].toLocaleString();



  //Total Cases
  document.getElementById("totalCases").innerHTML = data["Global"][
    "TotalConfirmed"
  ].toLocaleString();
  document.getElementById("newTotalCases").innerHTML = data["Global"][
    "NewConfirmed"
  ].toLocaleString();

  //Active Cases
  document.getElementById("activeCases").innerHTML = (
    data["Global"]["TotalConfirmed"] - data["Global"]["TotalRecovered"]
  ).toLocaleString();
  document.getElementById("newActiveCases").innerHTML = (
    data["Global"]["NewConfirmed"] - data["Global"]["NewRecovered"]
  ).toLocaleString();

  //Recovered Cases
  document.getElementById("recoveredCases").innerHTML = data["Global"][
    "TotalRecovered"
  ].toLocaleString();
  document.getElementById("newRecoveredCases").innerHTML = data["Global"][
    "NewRecovered"
  ].toLocaleString();

  //Deaths Cases
  document.getElementById("deathCases").innerHTML = data["Global"][
    "TotalDeaths"
  ].toLocaleString();
  document.getElementById("newDeathCases").innerHTML = data["Global"][
    "NewDeaths"
  ].toLocaleString();

  let values = data.Countries.sort(
    (a, b) => b.TotalConfirmed - a.TotalConfirmed
  );

  //Country Code for TOP 5 countries
  let countryCode_0 = values[0]["CountryCode"];
  let countryCode_1 = values[1]["CountryCode"];
  let countryCode_2 = values[2]["CountryCode"];
  let countryCode_3 = values[3]["CountryCode"];
  let countryCode_4 = values[4]["CountryCode"];

  document.getElementById("First").innerHTML =
    `<img class="mr-2 img-fluid" src='https://www.countryflags.io/${countryCode_0}/shiny/32.png'/>` +
    `${values[0]["Country"]}`;
  var node = document.createElement("div");
  var createText = document.createTextNode(
    `${values[0]["TotalConfirmed"].toLocaleString()}`
  );
  node.appendChild(createText);
  document
    .getElementById("First")
    .appendChild(node)
    .classList.add("text-primary", "ml-auto", "font-weight-bold");

  document.getElementById("Second").innerHTML =
    `<img class="mr-2 img-fluid" src='https://www.countryflags.io/${countryCode_1}/shiny/32.png'/>` +
    `${values[1]["Country"]}`;
  var node = document.createElement("div");
  var createText = document.createTextNode(
    `${values[1]["TotalConfirmed"].toLocaleString()}`
  );
  node.appendChild(createText);
  document
    .getElementById("Second")
    .appendChild(node)
    .classList.add("text-primary", "ml-auto", "font-weight-bold");

  document.getElementById("Third").innerHTML =
    `<img class="mr-2 img-fluid" src='https://www.countryflags.io/${countryCode_2}/shiny/32.png'/>` +
    `${values[2]["Country"]}`;
  var node = document.createElement("div");
  var createText = document.createTextNode(
    `${values[2]["TotalConfirmed"].toLocaleString()}`
  );
  node.appendChild(createText);
  document
    .getElementById("Third")
    .appendChild(node)
    .classList.add("text-primary", "ml-auto", "font-weight-bold");

  document.getElementById("Fourth").innerHTML =
    `<img class="mr-2 img-fluid" src='https://www.countryflags.io/${countryCode_3}/shiny/32.png'/>` +
    `${values[3]["Country"]}`;
  var node = document.createElement("div");
  var createText = document.createTextNode(
    `${values[3]["TotalConfirmed"].toLocaleString()}`
  );
  node.appendChild(createText);
  document
    .getElementById("Fourth")
    .appendChild(node)
    .classList.add("text-primary", "ml-auto", "font-weight-bold");

  document.getElementById("Fifth").innerHTML =
    `<img class="mr-2 img-fluid" src='https://www.countryflags.io/${countryCode_4}/shiny/32.png'/>` +
    `${values[4]["Country"]}`;
  var node = document.createElement("div");
  var createText = document.createTextNode(
    `${values[4]["TotalConfirmed"].toLocaleString()}`
  );
  node.appendChild(createText);
  document
    .getElementById("Fifth")
    .appendChild(node)
    .classList.add("text-primary", "ml-auto", "font-weight-bold");

  let values_2 = data.Countries.sort(
    (a, b) => b.TotalConfirmed - a.TotalConfirmed
  );

  document.getElementById(
    "countryName"
  ).innerHTML = `${values_2[0]["Country"]}`;

  document.getElementById("countryTotalCase").innerHTML = `${values_2[0][
    "TotalConfirmed"
  ].toLocaleString()}`;

  document.getElementById("countryActiveCase").innerHTML = `${(
    values_2[0]["TotalConfirmed"] - values_2[0]["TotalRecovered"]
  ).toLocaleString()}`;

  document.getElementById("countryRecoveredCase").innerHTML = `${values_2[0][
    "TotalRecovered"
  ].toLocaleString()}`;

  document.getElementById("countryDeathsCase").innerHTML = `${values_2[0][
    "TotalDeaths"
  ].toLocaleString()}`;

  document.getElementById("countryNewCase").innerHTML = `${values_2[0][
    "NewConfirmed"
  ].toLocaleString()}`;

  document.getElementById("countryNewDeaths").innerHTML = `${values_2[0][
    "NewDeaths"
  ].toLocaleString()}`;

  var first = document.getElementById("First");
  var second = document.getElementById("Second");
  var third = document.getElementById("Third");
  var fourth = document.getElementById("Fourth");
  var fifth = document.getElementById("Fifth");

  first.onclick = function () {
    document.getElementById(
      "countryName"
    ).innerHTML = `${values_2[0]["Country"]}`;

    document.getElementById("countryTotalCase").innerHTML = `${values_2[0][
      "TotalConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryActiveCase").innerHTML = `${(
      values_2[0]["TotalConfirmed"] - values_2[0]["TotalRecovered"]
    ).toLocaleString()}`;

    document.getElementById("countryRecoveredCase").innerHTML = `${values_2[0][
      "TotalRecovered"
    ].toLocaleString()}`;

    document.getElementById("countryDeathsCase").innerHTML = `${values_2[0][
      "TotalDeaths"
    ].toLocaleString()}`;

    document.getElementById("countryNewCase").innerHTML = `${values_2[0][
      "NewConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryNewDeaths").innerHTML = `${values_2[0][
      "NewDeaths"
    ].toLocaleString()}`;
  };

  second.onclick = function () {
    document.getElementById(
      "countryName"
    ).innerHTML = `${values_2[1]["Country"]}`;

    document.getElementById("countryTotalCase").innerHTML = `${values_2[1][
      "TotalConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryActiveCase").innerHTML = `${(
      values_2[1]["TotalConfirmed"] - values_2[1]["TotalRecovered"]
    ).toLocaleString()}`;

    document.getElementById("countryRecoveredCase").innerHTML = `${values_2[1][
      "TotalRecovered"
    ].toLocaleString()}`;

    document.getElementById("countryDeathsCase").innerHTML = `${values_2[1][
      "TotalDeaths"
    ].toLocaleString()}`;

    document.getElementById("countryNewCase").innerHTML = `${values_2[1][
      "NewConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryNewDeaths").innerHTML = `${values_2[1][
      "NewDeaths"
    ].toLocaleString()}`;
  };

  third.onclick = function () {
    document.getElementById(
      "countryName"
    ).innerHTML = `${values_2[2]["Country"]}`;

    document.getElementById("countryTotalCase").innerHTML = `${values_2[2][
      "TotalConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryActiveCase").innerHTML = `${(
      values_2[2]["TotalConfirmed"] - values_2[2]["TotalRecovered"]
    ).toLocaleString()}`;

    document.getElementById("countryRecoveredCase").innerHTML = `${values_2[2][
      "TotalRecovered"
    ].toLocaleString()}`;

    document.getElementById("countryDeathsCase").innerHTML = `${values_2[2][
      "TotalDeaths"
    ].toLocaleString()}`;

    document.getElementById("countryNewCase").innerHTML = `${values_2[2][
      "NewConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryNewDeaths").innerHTML = `${values_2[2][
      "NewDeaths"
    ].toLocaleString()}`;
  };

  fourth.onclick = function () {
    document.getElementById(
      "countryName"
    ).innerHTML = `${values_2[3]["Country"]}`;

    document.getElementById("countryTotalCase").innerHTML = `${values_2[1][
      "TotalConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryActiveCase").innerHTML = `${(
      values_2[3]["TotalConfirmed"] - values_2[3]["TotalRecovered"]
    ).toLocaleString()}`;

    document.getElementById("countryRecoveredCase").innerHTML = `${values_2[3][
      "TotalRecovered"
    ].toLocaleString()}`;

    document.getElementById("countryDeathsCase").innerHTML = `${values_2[3][
      "TotalDeaths"
    ].toLocaleString()}`;

    document.getElementById("countryNewCase").innerHTML = `${values_2[3][
      "NewConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryNewDeaths").innerHTML = `${values_2[3][
      "NewDeaths"
    ].toLocaleString()}`;
  };

  fifth.onclick = function () {
    document.getElementById(
      "countryName"
    ).innerHTML = `${values_2[4]["Country"]}`;

    document.getElementById("countryTotalCase").innerHTML = `${values_2[4][
      "TotalConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryActiveCase").innerHTML = `${(
      values_2[4]["TotalConfirmed"] - values_2[4]["TotalRecovered"]
    ).toLocaleString()}`;

    document.getElementById("countryRecoveredCase").innerHTML = `${values_2[4][
      "TotalRecovered"
    ].toLocaleString()}`;

    document.getElementById("countryDeathsCase").innerHTML = `${values_2[4][
      "TotalDeaths"
    ].toLocaleString()}`;

    document.getElementById("countryNewCase").innerHTML = `${values_2[4][
      "NewConfirmed"
    ].toLocaleString()}`;

    document.getElementById("countryNewDeaths").innerHTML = `${values_2[4][
      "NewDeaths"
    ].toLocaleString()}`;
  };

  let lists = document.querySelectorAll(".list-group-item");

  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("gray");
      current[0].className = current[0].className.replace(" gray", "");
      this.className += " gray";
    });
  }

  let button = document.getElementById("allCountriesButton");

  document.getElementById("loading").classList.add("d-none");
};
