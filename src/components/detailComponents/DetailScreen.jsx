import React, {useEffect, useState} from 'react'
import "./detailScreen.css"
import axios from "axios"
import {useParams} from "react-router-dom"

const DetailScreen = () => { 
  const {id} = useParams()
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data)
      console.log(res.data)
    })
  }, [])
  
  
  // const handleIngredients = () => {
  //   recipe.ingredients.Map((ing, index)=> {
  //     // return <li className='ingredientList'>{ingredient.quantity}: {ingredient.ingredient}</li>
  //     console.log(ingredient)
  //   })

  // }

  return (
    <section className='main'>
        <div className="foodTitle"
      style={{
        background: 
          `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(
            ${recipe.image_url}
            ) no-repeat center center / cover`,
      }}
    >
      <h2 className='foodNameDetail'>{recipe.recipe_name}</h2>
    </div>
      <div className='info'>
        <section className='recipeBox'>
          <h2 className='smalTitle'>Recipe</h2>
          <ul className='recipeIn'>
            <li className='recipeList'>Prep Time: {recipe.prep_time}</li>
            <li className='recipeList'>Cook Time: {recipe.cook_time}</li>
            <li className='recipeList'>Serves: {recipe.serves}</li>
          </ul>
          <h2 className='smalTitle'>ingredients</h2>
          <div className='ingredients'>
              {recipe.ingredients && recipe.ingredients.map((ing, index) => {
                return <h4>{ing.quantity} {ing.ingredient}</h4>
              })}
          </div>
        </section>
        <section className='instructions'>
          <h2 className='inTi'>Instructions</h2>
          <p className='paragraph' style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </section>
      </div>
    </section>
  );
};

export default DetailScreen;
