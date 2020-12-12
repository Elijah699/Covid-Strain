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
  // list all country data
  document.getElementById("t-body").innerHTML = data.Countries.map(
    (country, index) => `
    <tr>
      <th scope="row">${(index += 1)}</th>
      <td>${country.Country}</td>
      <td class="hide text-center">${country.TotalConfirmed.toLocaleString()}</td>
      <td class="text-center">${(
        country.TotalConfirmed - country.TotalRecovered
      ).toLocaleString()}</td>
      <td class="hide text-center">${country.TotalRecovered.toLocaleString()}</td>
      <td class="hide text-center">${country.TotalDeaths.toLocaleString()}</td>
      <td class="hide text-center">${country.NewConfirmed.toLocaleString()}</td>
      <td class="hide text-center">${country.NewDeaths.toLocaleString()}</td>
    </tr>`
  ).join("");

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
