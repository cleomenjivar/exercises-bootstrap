const recipeContainer = document.getElementById('recipes')
const searchButton = document.querySelector('searchButton')

const searchRecipes = (Recipe) => {
    recipeContainer.innerHTML = ""
}

fetch('https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=4c110f3d05744462b7cc71ca2f2d4735')
    .then(response => response.json())
        .then((data)) => {
            console.log(data);
        }
        
        //Fail Response
    .catch(response => (response.json()) {
            console.log('Error! Please try again');
        });


/*fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=4c110f3d05744462b7cc71ca2f2d4735&includeNutrition=true.')
    .then(response => response.json())
        .then((data)) => {
            console.log(data);
        }
*/






/* Diogo's EXAMPLE
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
          <div id="card" style="background-image: url(${movie.Poster})">
            <div class="inner">
              <div class="header">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <h1>${movie.Title}</h1>
                <div class="stars">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half" aria-hidden="true"></i>
                </div>
              </div>
              <div class="content">
                <p>${movie.Type}</p>
                <a href="#">${movie.Year}</a>
              </div>
              <div class="btn_row">
                <a href="#">Watch now<i class="fa fa-caret-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <!-- the trailer -->
          </div>
          <div class="btn_row_next_prev">
          </div>
        </section>`
        console.log(movie.Title)
        movieContainer.insertAdjacentHTML('beforeend', movieCard)

      })
    })

}



searchBtn.addEventListener('click', (event) => {
  let input = document.getElementById('searchInput')
  console.log(input.value)
  searchMovies(input.value)
})



*/