
fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");

    countries.forEach(country => {
       
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
                <h3 class = "country-name"> ${country.name.official} </h3>
                <p> ${country.capital} </p>
                 <button onclick="displayCountryDetail('${country.name.official}')" > Details </button>
         `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });



}

const displayCountryDetail = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
   
    const countryDiv= document.getElementById('countryDetails');
    countryDiv.innerHTML =`
            <h1> ${country.name.official} </h1>
            <p> Population: ${country.population} </p>
            <p> Area: ${country.area} </p>
            <img src= "${country.flags.svg} ">
    `
}