// const loeadCountries = () => {
//   fetch("https://restcountries.eu/rest/v2/all")
//     .then((res) => res.json())
//     .then((data) => displayCountries(data));
// };

// const displayCountries = (countries) => {
//   console.log(countries[0]);
//   const container = document.getElementById("countries");
//   const countryHTML = countries.map((country) => getCountryHTML(country));
//   container.innerHTML = countryHTML.join(" ");
//   console.log(countryHTML[0]);
// };
// const getCountryHTML = (country) => {
//   const { name, cappital, flag } = country;
//   return `
//       <div class="country">
//         <h2>${country.name}</h2>
//         <h4>Capital: ${country.capital}</h4>
//         <img src="${country.flag}">
//       </div>
//     `;
// };

// loeadCountries();

let ul = `<li>Bou<li>`;
ul += `<li>Jamai<li>`;
console.log(ul);
