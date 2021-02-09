const getMealBtn = document.getElementById('get-meal');
const mealContainer = document.getElementById('meal');
getMealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0])

        });


});


function createMeal(meal) {

    mealContainer.innerHTML = `
    <div class=row>
    <div class="col-md-5">
    <img src = "${meal.strMealThumb}" / >
     <p><strong>Area:</strong>${meal.strArea}</p>   
     
     <h4>${meal.strMeal}</h4>
      <h4>${meal.strInstructions}</h4>
     
      </div>
      <div class="col-md-7">
      
      </div>
      </div>

`;
}