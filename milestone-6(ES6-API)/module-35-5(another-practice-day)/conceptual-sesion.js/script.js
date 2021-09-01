const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById('country-container');
const errorDiv = document.getElementById('error')
const singleCountryDetails = document.getElementById('country-details')


searchBtn.addEventListener('click', function(){
    const search = searchInput.value;
    if (search === '') {
        errorDiv.innerHTML = `
        <p>Search field can not be empty</p>
        `;
        return;
    }
    // clear data 
    countryContainer.textContent = ''
    //-------//
    // api url 
    const url = `https://restcountries.eu/rest/v2/name/${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.status === 404) {
            errorDiv.innerHTML = `
            <p>No Result Found!!!</p>
            `;
        } else {
            errorDiv.textContent='';
            showData(data)
        }
        
    } )

});

const showData = (countryArray) => {
    countryArray.forEach(item => {
        console.log(item)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col-md-3');
        countryDiv.classList.add('col-12');
        countryDiv.innerHTML = `
        <div class="rounded overflow-hidden border p-2">
         <img class="w-100" src="${item.flag}" alt=""/>
        </div>

        <div
        class="py-2 d-flex justify-content-between
          align-items-center d-md-block text-md-center">
            <h4>${item.name}</h4>
            <button onclick="countryDetails('${item.alpha3Code}')" class="btn btn-dark">Learn More</button>
        </div>
        `;
        countryContainer.appendChild(countryDiv)
    });
};
const countryDetails = (code) => {
fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
.then(res => res.json())
.then(data => showDetails(data))
}

const showDetails = (details) => {
    console.log(details)
    singleCountryDetails.innerHTML = `
    <div class="col-md-12">
        <h1>${details.name}</h1>
        <p>Details</p>
        <p>Details</p>
    </div>
    `
}