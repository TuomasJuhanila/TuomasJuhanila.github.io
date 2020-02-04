const randomBtn = document.querySelector(".randomBtn");
const cocktailInfo = document.querySelector(".cocktailInfo");

getRandomCocktail = () => {
  cocktailInfo.innerHTML = "";
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then (res => res.json())
  .then (data => {
    const cocktail = data.drinks[0];
    console.log(cocktail);
    cocktailToDom(cocktail);  
  });
}

cocktailToDom = (cocktail) => {
  const ingredients = [];
  for(let i = 1; i <= 20; i++) {
    if(cocktail[`strIngredient${i}`]) {
      ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  cocktailInfo.innerHTML = `
    <div class="randomCocktail">
      <h2>${cocktail.strDrink}</h2>
      <div class="randomCocktailInner">
        <div class="cocktailImg">
          <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}"/>
        </div>
        <div class="cocktailDetails">
          <h3>Glass type: </h3>
          <p>${cocktail.strGlass}</p>
          <h3>Ingredients: </h3>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
          </ul>
          <h3>Instructions: </h3>
          <p>${cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  `;
}

randomBtn.addEventListener("click", getRandomCocktail);
