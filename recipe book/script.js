const APIKey="b8800762217743ca87067597d49080cc"
const recipeListE1=document.getElementById("recipe-list")

function dispalayRecipes(recipes){
    recipeListE1.innerHTML=""
    recipes.forEach((recipe)=>{

    const recipeItemE1=document.createElement("li")
    recipeItemE1.classList.add("recipe-item")

    const recipeImageE1=document.createElement("img")
    recipeImageE1.src=recipe.image 
    recipeImageE1.alt=recipe.title 

    const recipeTitleE1=document.createElement("h3")
    recipeTitleE1.innerText=recipe.title

    const recipeIngredientsE1=document.createElement("p")
    recipeIngredientsE1.innerHTML=`<strong> Ingredients:</strong> ${recipe.
    extendedIngredients.map((ingredient)=>ingredient.original).join(",")} `

    const recipeLinkE1=document.createElement("a")
    recipeLinkE1.href=recipe.sourceUrl
    recipeLinkE1.target="_blank"
    recipeLinkE1.innerText="View Recipe"

    recipeItemE1.appendChild(recipeImageE1)
    recipeItemE1.appendChild(recipeTitleE1)
    recipeItemE1.appendChild(recipeIngredientsE1)
    recipeItemE1.appendChild(recipeLinkE1)

    recipeListE1.appendChild(recipeItemE1)
  })

}
async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${APIKey}`)

const data=await response.json()
return data.recipes
}
async function init(){
    const recipes=await getRecipes()
    dispalayRecipes(recipes)
}
init()