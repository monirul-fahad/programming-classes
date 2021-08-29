
const searchClub = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    if(searchField.value == 0){
        const errorText = document.getElementById('error-text');
        errorText.textContent = ''
        const h2 = document.createElement('h2');
        h2.innerText = 'Please Write A Club Name!!!!!'
        errorText.appendChild(h2);
        const clubsSection = document.getElementById('clubs-section');
        clubsSection.textContent = ''

    }  else {
    searchField.value = '';
    //api add
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.teams));
    const errorText = document.getElementById('error-text');
    errorText.textContent = ''
}
};

const displaySearchResult = clubs => {
    const clubsSection = document.getElementById('clubs-section');
    const clubDetails = document.getElementById('clubDetails');
clubsSection.textContent = '';
clubDetails.textContent = '';

   clubs.forEach(club => {
    const div = document.createElement('div');
    console.log(club)
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 shadow ">
    <img src="${club.strTeamBadge}" class="card-img-top w-75 mx-auto d-block" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${club.strTeam}</h5>
        <p class="card-text">
           ${club.strDescriptionEN.slice(0, 210)}
        </p>
      </div>
    <button onclick="clubDetails('${club.idTeam}')" class="btn btn-primary">More Details</button
    >
    </div>
    `;
    clubsSection.appendChild(div)
   });
};

const clubDetails = clubId => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayClubDetails(data.teams[0]))
}

const displayClubDetails = details => {
    window.scrollTo(0, 40);
 const clubDetails = document.getElementById('clubDetails');
 clubDetails.textContent = ''
 const div = document.createElement('div');
 div.innerHTML = `
 <div class="card mb-5 mx-auto" style="max-width: 540px;">
  <div class="row g-0 bg-danger text-white rounded">
    <div class="col-md-5 my-auto">
      <img src="${details.strTeamBadge}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h3 class="card-title fw-bold">${details.strTeam}</h3>
        <p class="card-text"> ${details.strDescriptionEN.slice(0, 300)}</p>
        <button class="card-text btn btn-warning ">Follow The Club</button>
      </div>
    </div>
  </div>
</div>
 `;
 clubDetails.appendChild(div)

}

