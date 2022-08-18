var weatherUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=76e7983d49a93fd6cc7a260d1ff06d39"
var resultsFor = $('#resultsFor');
var timeDisplay = $('#timeDisplay');
var submitBtn = $('#submitBtn');
var cityInput = $('#searchInput');
var infoDisplay = $('#infoDisplay');

//time display

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplay.text(rightNow);
}

displayTime();

//todo: call and display api info

