var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button')
var cityNameEl = document.getElementById("city-name")
var breweryAddressEl = document.getElementById("brewery-address")

function getCityName(event) {
  event.preventDefault();
  var cityName = cityNameEl.value
  cityName = cityName.replace(" ", "_").toLowerCase()
  console.log(cityName)
  getApi(cityName)
}

function getApi(city) {

  var requestUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var text = document.createElement("h4");
        text.textContent = data[i].name;
        tableData.appendChild(text);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var text = document.createElement("p");
        text.textContent = data[i].street;
        tableData.appendChild(text);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var text = document.createElement("p");
        text.textContent = data[i].city;
        tableData.appendChild(text);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var text = document.createElement("p");
        text.textContent = data[i].website_url;
        tableData.appendChild(text);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        
        // add button
        var addButton = document.createElement("button");
        addButton.innerHTML = '<i class="fa fa-plus-square" aria-hidden="true"></i>';
        addButton.setAttribute("class", "addbutton");
        createTableRow.appendChild(addButton);

        let save = data[i];
        // console.log(save);
        function saveBrewery() {
          var saved = JSON.parse(localStorage.getItem("savedBrews")) || [];
          saved.push(save);
          localStorage.setItem("savedBrews", JSON.stringify(saved));
        };
        addButton.addEventListener("click", function () { saveBrewery(save) });
      }
    })
};

fetchButton.addEventListener("click", getCityName);



