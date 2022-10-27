 const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => displayCountries(data));
}
const displayCountries = countries  => {
    console.log(countries[0])
    const countriesHtml =countries.map((country) => getCountries(country));
    console.log(countriesHtml);
    const container = document.getElementById("country");
    container.innerHTML = countriesHtml.join(' ')
    
   
}
 //option - 3
const getCountries = ({name,flags,capital}) => {
 // const { name, flags, capital } = country;
  return `
     <div class='country'>
       <h3>${name.common}</h3>
       <p>${capital}</p>
       <img src="${flags.png}" alt="">
     </div>
    `;
};
loadCountries()

/*
 //option - 2
 const getCountries = country => {
    const {name, flags, capital}=country
    return `
     <div class='country'>
       <h3>${name.common}</h3>
       <p>${capital}</p>
       <img src="${flags.png}" alt="">
     </div>
    `;
}
loadCountries()
*/


 /* //option - 1

 const getCountries = (country) => {

  return `
     <div class='country'>
       <h3>${country.name.common}</h3>
       <p>${country.capital}</p>
       <img src="${country.flags.png}" alt="">
     </div>
    `;
}; 
loadCountries()  */




// final result ES6
/* 
const loadCountries =() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const allCountriesHtml = countries.map((country) => getCountries(country));
    const container = document.getElementById("country");
    container.innerHTML = allCountriesHtml.join(' ')
}
const getCountries = country => {
    console.log(country, "this is country")
    return `
      <div>
        <h1>${country.name.common}</h1>
      </div>
    `
}

loadCountries() */