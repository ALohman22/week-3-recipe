import React from "react"
import "./recipeCard.css"
import { useNavigate } from "react-router-dom"


const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    
    return (
        <div className="cardContainer">
        <div className="recipeCard">
            <img src={recipe.image_url} alt="food"/>
            <h2 className="foodName">{recipe.recipe_name}</h2>
            <button onClick={handleClick}>See More</button>
        </div>
        </div>
    )
}
export default RecipeCard