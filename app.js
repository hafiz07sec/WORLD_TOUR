
fetch('https://restcountries.com/v3.1/all')
.then( res => res.json())
.then( data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const name = document.createElement('h3');
        name.innerText = "Country Name: " +country.name.official; 
        const p = document.createElement('p');
        p.innerText = "Capital: " + country.capital; 
        countryDiv.appendChild(name);
        countryDiv.appendChild(p); 
        countriesDiv.appendChild(countryDiv);
        
    }
}