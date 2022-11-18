var cityName = $('#resultsFor')[0];
var cityInput = $('#searchInput')[0];


var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Tucson&appid=76e7983d49a93fd6cc7a260d1ff06d39";
var apiKey = '76e7983d49a93fd6cc7a260d1ff06d39';
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;



var timeDisplay = $('#timeDisplay');
var submitBtn = $('#submitBtn');

var temp = $('#tempDisplay')[0];
var feel = $('#feelDisplay')[0];
var wind = $('#windDisplay')[0];
var hum = $('#humDisaplay')[0];



var searchDisplay = $('#search-list');

//time display and past searches

function init() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplay.text(rightNow);
}
init();

//todo: call and display api info

function callApi() {
    console.log(cityInput.value);
    console.log(queryURL);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            cityName.textContent = `${data.name}`;
            temp.textContent = `Current Temp: ${data.main.temp / 4} degrees`;
            console.log(`${data.main.feels_like / 4}`)
            feel.textContent = `Feels Like: ${data.main.feels_like / 4} degrees`;
            wind.textContent = `Wind Speed: ${data.wind.speed} MPH`;
            hum.textContent = `Humidity: ${data.main.humidity}%`;

        })
}

function searchSave() {
    var searchedCities = [];
    searchedCities[0] = cityInput.value;
    console.log(cityInput.value);
    localStorage.setItem('searchedCities', JSON.stringify(cityInput.value));
    var lastSearch = JSON.parse(localStorage.getItem('searchedCities'));
    document.getElementById('ps').textContent = lastSearch.toUpperCase();
}




$('#submitBtn').on('click', function () {
    callApi();
    searchSave();
});
