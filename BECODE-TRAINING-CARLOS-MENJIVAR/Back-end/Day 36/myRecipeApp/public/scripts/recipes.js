// FRONT END FILE TO INTERACT WITH THE DOM

let inputRecipe = document.getElementById('Input')
let button = document.getElementById('btn-agregar')
let loadBtn = document.getElementById('load-botton')

const sendRecipeToDB = (recipe) => {
  fetch('api/recipe/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


const fetchRecipesFromDB = () => {
  fetch('api/tasks/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    data.recipe.forEach((recipe) => {
      listContainer.insertAdjacentHTML('beforeend', `<li data-id=${recipe.recipe_id} data-done=${recipe.done}><a class=${"done-" + recipe.done} href="#">${recipe.content}</a> <div class="deletebuton">X</div></li>` )
    })
    selectAllRecipes()
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


button.addEventListener('click', (event) => {
    alert('Yummy Yummy')
    console.log(inputRecipe.value)
    addRecipe(inputRecipe.value)
});