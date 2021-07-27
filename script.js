var brewerydbUrl = "https://api.openbrewerydb.org/breweries?by_city=san_diego&by_dist=38.9877,77.0365"

function getBrewery(){
    var weatherUrl ="https://api.openweathermap.org/data/2.5/weather?q=lakewood&units=imperial&appid=11dc52a95fa797bda83ead455ac98597";
    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })

    };