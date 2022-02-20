const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
loadCountries();

const displayCountries=countries=>{
    //console.log(countries);
    const countiesDiv=document.getElementById('countries')
       countries.forEach(country=>{
        //console.log(country);
        const div=document.createElement('div')
        div.classList.add('country')
        //const h3=document.createElement('h3');
        //  h3.innerText=`Country Name: ${country.name.common}`
        //  div.appendChild(h3)
        //  const p=document.createElement('p');
        //  p.innerText=`country capital name: ${country.captial}`;
        // div.appendChild(p)
        div.innerHTML=`<h3>Country Name: ${country.name.common}</h3>
        <p>country capital name: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        countiesDiv.appendChild(div);
    })
}

const loadCountryByName=name=>{
    const url=`https://restcountries.com/v3.1/name/${name}`
    //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]))

}
const displayCountryDetails=(country)=>{
    console.log(country)
    const countryDiv=document.getElementById('counntry-details')
    countryDiv.innerHTML=`
    <h2> Country Name: ${country.name.common} </h2>
    <p>population:${country.population}</p>
    <p>capital:${country.capital}</p>
    <img width='200px' src="${country.flags.svg}">
    
    `

    }