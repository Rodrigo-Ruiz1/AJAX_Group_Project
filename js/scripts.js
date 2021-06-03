'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const starshipInfo = document.querySelector('#starshipInfo');
    const defaultStarship = 'CR90 corvette';
    let currentStarship = defaultStarship;
    fetchStarship(currentStarship);

    function fetchStarship() {
        fetch('https://swapi.dev/api/starships/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                starshipCallback(data);
            })
            .catch(function (error) {
                console.error('ERROR:', error);
                return error;
            });
    }

    function starshipCallback(data) {
        console.log("the data is: ", data.results);

        const starshipMenu = document.querySelector('#starshipMenu');
        const selectElement = document.createElement('select');
        selectElement.setAttribute('id', 'selectElement')

        data.results.forEach(function(starship) {
            const starshipOption = document.createElement('option');
            starshipOption.innerText = starship.name;
            selectElement.appendChild(starshipOption);
        });

        starshipMenu.appendChild(selectElement)

        const newStarshipButton = document.querySelector('#newStarship');
        newStarshipButton.addEventListener('click', function () {
            data.results.forEach(function(singleStarship) {
                console.log(singleStarship)
                starshipInfo.innerText = singleStarship

            })
    
            })
    }
});










// function fetchMovie(movie) {
//     fetch('https://swapi.dev/api/films/')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             movieCallback(data);
//         })
//         .catch(function (error) {
//             console.error('ERROR:', error);
//             return error;
//         });
// }

// function movieCallback(data) {
//     console.log("The data is: ", data.results);
// }
// fetchMovie();
