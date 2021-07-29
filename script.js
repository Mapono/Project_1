var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button')
var cityNameEl = document.getElementById("city-name")

function getCityName(event) {
  event.preventDefault();
  var cityName = cityNameEl.value
  cityName = cityName.replace(" ", "_").toLowerCase()
  console.log(cityName)
  getApi(cityName)
}

function getApi(city) {
 
    var requestUrl = "https://api.openbrewerydb.org/breweries?by_city="+ city;
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            var createTableRow = document.createElement("tr");
            var tableData = document.createElement("td");
            var link = document.createElement("p");
            link.textContent = data[i].name;
            tableData.appendChild(link);
            createTableRow.appendChild(tableData);
            tableBody.appendChild(createTableRow);
        }
    }).catch(function(err){
      console.log(err)
    })
}
fetchButton.addEventListener("click", getCityName);
fetchButton.addEventListener("keydown", function(event){
event.preventDefault();
if (event.key === "Enter") {
     getCityName()
   } else {
     return event
   }
 })