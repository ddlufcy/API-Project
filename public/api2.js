const baseUrl = 'https://api.openaq.org/v1/'

const infoList = document.getElementById('info');

const cityName = document.getElementById('searchInput');

const searchForm = document.querySelector('form');

const submitButton = document.querySelector('.submit');

const errorMessage = document.getElementById('error');

searchForm.addEventListener('submit', getData);

// document.getElementById('getData').addEventListener('click', getData);

function getData(e) {
    console.log(e);
    e.preventDefault();
    url = baseUrl + 'measurements?' + 'city=' + cityName.value
    fetch(url)
        .then((res) => res.json())
        .then(function (json) {
            displayResults(json)
        })
        .catch(function (error) {
            alert("Information For This City Is Not Available")
        });


    while (infoList.firstChild) {
        infoList.removeChild(infoList.firstChild)
    }

    function displayResults(json) {
        console.log(json.results)
        let listItems = document.createElement('li');
        listItems.innerHTML = json.results[0].city + " " + 
        json.results[0].country + " " + 
        json.results[0].parameter + " " + 
        json.results[0].value +
            " " + json.results[0].unit + " " + json.results[1].parameter + " " + json.results[1].value +
            " " + json.results[1].unit
        infoList.appendChild(listItems);
    }



}