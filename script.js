var brewerydbUrl = "https://api.openbrewerydb.org/breweries?by_city=san_diego&by_dist=38.9877,77.0365"

function getBrewery(){
    var brewerydbUrl ="https://api.openbrewerydb.org/breweries?by_city=san_diego&by_dist=38.9877,77.0365";
    fetch(brewerydbUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })

    };