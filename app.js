let tableContainer = document.getElementById('table');
let searchInputField = document.getElementById('search-input');
let tableBody = document.getElementById('table-body');
// searchInputField.addEventListener('onchange', (e) => {
//     searchInputValue = e.target.value;
// })
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8743e22fmshbad502c291447bfp1bd28bjsn45aca8829e07',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

//Getting data from api
function gettingApiData (cityName, cityLimit){
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}&${cityLimit}`, options)
	.then(response => response.json())
	.then(response => displayData(response.data))
	.catch(err => console.error(err));

function displayData (city){
    console.log(city);
    city.map( (city,i) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="table_row_data">${i+1}</td>
        <td class="table_row_data">${city.city}</td>
        <td class="table_row_data">${city.country}</td>
        <img class="country-img" src="${`https://countryflagsapi.com/png/${city.countryCode.toLowerCase()}`}" alt="${city.country}"></td>
        `
        tableBody.appendChild(tr);
    })
    
}

}

// Function to get input details
window.addEventListener('keydown', (e) => {
   let inputCity = searchInputField.value;
   let cityLimit = 5;

   if(e.key == 'Enter'){
    if (inputCity.length == 0){
        this.alert('Plese provide valid place')

    }else if (!isNaN(cityLimit) ){

        if(cityLimit > -1 && cityLimit< 11) {
            gettingApiData(inputCity,cityLimit)
        }
        else {
            this.alert('Limit can only between 0-10')
        }
        searchInputField.value = ''

    }

   }
})


