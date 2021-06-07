const movieContainer = document.getElementById('movies')
const searchBtn = document.querySelector('.btn-search')


const searchMovies = (movie) => {
  movieContainer.innerHTML = ""

  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=adf1f2d7&`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search);

      data.Search.forEach((movie) => {
        let movieCard = `<section>
          <div id="card" class="card" data-img=${movie.Poster} style="background-image: url(${movie.Poster})">
            <div class="inner">
              <div class="header">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <h1 class="main-title">${movie.Title.substring(0, 15)}</h1>
                <div class="stars">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half" aria-hidden="true"></i>
                </div>
              </div>
              <div class="content">
                <p class="type">${movie.Type}</p>
                <a class="year" href="#">${movie.Year}</a>
              </div>
              <div class="btn_row">
                <a href="#" id=${movie.imdb} class="card-action">Add to my DB<i class="fa fa-caret-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <!-- the trailer -->
          </div>
        </section>`

        console.log(movie.Title)
        movieContainer.insertAdjacentHTML('beforeend', movieCard)

        const addMovieBtn = document.getElementById(`${movie.imdbID}`);

        addMovieBtn.addEventListener('click', (e) => {
          e.preventDefault();
          addMovie(movie);
          alert('Movie added to your list');
        });
      });
    }

    //alert ("Film added to your List")

// Solutions ---- Infos or movie

const addMovie = (infos) => {
    fetch('api/addmovie', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringly(infos),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  // ENTRY POINTS
  searchBtn.addEventListener('click', (event) => {
    let input = document.getElementById('searchInput')
    console.log(input.value)
    searchMovies(input.value)
  })
