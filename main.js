const main = document.getElementById("main")

countries = [];
async function runProcess() {
    try{
      const response= await fetch("https://restcountries.com/v2/all")
      const data = await response.json();
      countries = data;
      countries.forEach(country => {
        
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('country');

        const flagContainer = document.createElement('div');
        flagContainer.classList.add('flag-container');
        const flagImg = document.createElement('img');
        flagImg.classList.add('flag');        
        flagImg.src = country.flag;   
        flagContainer.appendChild(flagImg);

        const countryDetails = document.createElement('div');
        countryDetails.classList.add('country-details');
        const countryName = document.createElement('h2');
        countryName.classList.add('country-name');
        countryName.textContent = country.name;

        const population = document.createElement('span');
        population.innerHTML = `<stron>Population: </strong>${country.population}<br`;

        const region = document.createElement('span');
        population.innerHTML = `<stron>Region: </strong>${country.region}<br`;

        const capital = document.createElement('span');
        population.innerHTML = `<strong>Capital: </strong>${country.capital}<br`;


        countryDetails.appendChild(countryName)
        countryDetails.appendChild(population)
        countryDetails.appendChild(region)
        countryDetails.appendChild(capital)
        
        countryContainer.appendChild(flagContainer);
        countryContainer.appendChild(countryDetails);   

        main.appendChild(countryContainer)

      });
    }

    catch(error){
        console.log(error)
    }
}

runProcess(); 