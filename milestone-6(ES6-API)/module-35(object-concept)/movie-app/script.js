fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a94912e1d73f05ad74535bfd6d2f65bd')
.then(res => res.json())
.then(data => setMovies(data.results));

const setMovies = (movies) => {
    //spinner
    const movieSpinner = document.getElementById('movie-spinner');
    movieSpinner.style.display = 'none'
    // 
    const movieContainer = document.getElementById('movie-container')
    for (const movie of movies) {
        // console.log(movie)
       const movieDiv = document.createElement('div');
        movieDiv.classList.add('col-md-4');
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieDiv.innerHTML = `
        <img class="img-fluid" src=${imageUrl} >
        <div class="shadow rounded p-3 m-22">
          <h3>${movie.title}</h3>
          <p>${movie.overview.slice(0, 180)}</p>
          <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">More Details</button
        </div>
        `;
        movieContainer.appendChild(movieDiv)
    };
};

const loadMovieDetails = (id) =>{
    window.scrollTo(0, 40);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a94912e1d73f05ad74535bfd6d2f65bd`)
    .then(res => res.json())
    .then(data => setMovieDetails(data))
};

const setMovieDetails = (details) => {
    console.log(details)
    const movieDetails = document.getElementById('movieDetails')
    movieDetails.textContent = ''
    const detaislDiv = document.createElement('div')
    const posterUrl = "https://image.tmdb.org/t/p/original" + details.poster_path;
    detaislDiv.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
         <img class="img-fluid" src=${posterUrl}>
        </div>
        <div class="col-md-8">
            <div class="card-body">
              <h5 class="fw-bold card-title">${details.title}</h5>
              <p class="fw-bold text-primary">IMDB Ratings:- ${details.vote_average}/10</p>
              <p class="card-text">${details.overview.slice(0, 230)}</p>
              <p class="card-text">
                <small class="text-muted">Released Date:- ${details.release_date}</small>
              </p>
            </div>
        </div>
    </div>
    `;

    movieDetails.appendChild(detaislDiv)

}


